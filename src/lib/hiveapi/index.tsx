import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"
import { authenticator } from "otplib"

const SCHEME = "https://"
const HOST = "api2.hiveos.farm"
const BASE_PATH = "/api/v2"

type Authorization = {
  // Token to be used in further requests
  access_token: string

  // Token type. Only bearer type is supported
  token_type: string

  // TTL in seconds
  expires_in: number
}

type Authentication = {
  login: string
  password: string
  twofa_secret?: string
  remember?: boolean
}

class HiveApi {
  fetcher: AxiosInstance
  authentication: Authentication
  authorization?: Authorization
  authorization_expiry?: number

  constructor(authentication: Authentication) {
    this.fetcher = axios.create({
      baseURL: SCHEME + HOST + BASE_PATH,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })

    this.authentication = authentication
    this.authorization = undefined
  }

  validateAuthorization(): boolean {
    return (
      this.fetcher.defaults.headers.common["Authorization"] !== undefined &&
      typeof this.fetcher.defaults.headers.common["Authorization"] ===
        "string" &&
      this.fetcher.defaults.headers.common["Authorization"].length > 0 &&
      this.authorization_expiry !== undefined &&
      Date.now() < this.authorization_expiry
    )
  }

  async auth() {
    if (this.validateAuthorization() === true) {
      // Authorization header OK
      // Expiration date OK
      return
    }

    this.fetcher.defaults.headers.common["Authorization"] = ""

    const { login, password, twofa_secret, remember } = this.authentication

    const data = {
      login,
      password,
      twofa_code:
        twofa_secret !== undefined
          ? authenticator.generate(twofa_secret)
          : undefined,
      remember: remember === true,
    }

    // @ts-ignore
    return this.fetcher
      .post<Authorization>("/auth/login", data)
      .then((response) => {
        // Store the object
        this.authorization = response.data

        // Assign Authorization header
        this.fetcher.defaults.headers.common["Authorization"] =
          "Bearer " + this.authorization.access_token

        // Store expiry date
        this.authorization_expiry =
          Date.now() + this.authorization.expires_in * 1000
      })
  }

  async post<T = any, D = any>(
    url: string,
    config?: AxiosRequestConfig<D> | undefined
  ): Promise<AxiosResponse<T, D>> {
    await this.auth()

    return this.fetcher.post(url, config)
  }

  async get(
    url: string,
    config?: AxiosRequestConfig<any> | undefined
  ): Promise<AxiosResponse<any, any>> {
    await this.auth()

    return this.fetcher.get(url, config)
  }

  async put(
    url: string,
    config?: AxiosRequestConfig<any> | undefined
  ): Promise<AxiosResponse<any, any>> {
    await this.auth()

    return this.fetcher.put(url, config)
  }

  async patch(
    url: string,
    config?: AxiosRequestConfig<any> | undefined
  ): Promise<AxiosResponse<any, any>> {
    await this.auth()

    return this.fetcher.patch(url, config)
  }

  async delete(
    url: string,
    config?: AxiosRequestConfig<any> | undefined
  ): Promise<AxiosResponse<any, any>> {
    await this.auth()

    return this.fetcher.delete(url, config)
  }
}

export { SCHEME, HOST, BASE_PATH, HiveApi }
