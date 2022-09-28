import { Transition } from "@headlessui/react"
import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/router"
import { useContext, createRef, useState, Fragment, useEffect } from "react"
import { LogoShort } from "src/components"
import { GlobalContext } from "src/contexts"
import type { MyNextPage } from "types"

const LoginPage: MyNextPage = () => {
  const router = useRouter()
  const global = useContext(GlobalContext)
  const [error, setError] = useState<string | undefined>()

  const [show, setShow] = useState(false)

  const email = createRef<HTMLInputElement>()
  const password = createRef<HTMLInputElement>()

  const fetcher = (url: string, params?: object) =>
    axios.post(url, params).then((response) => response.data)

  const login = async () => {
    if (email.current === null) return setError("Email input is missing")
    if (password.current === null) return setError("Password input is missing")

    if (email.current.value.length === 0 || password.current.value.length === 0)
      return setError("Please fill in all the inputs.")

    const params = {
      email: email.current.value,
      password: password.current.value,
    }

    const res = await fetcher("/api/auth/login", params)

    if (res.error !== undefined) setError(res.error)
    else {
      setError("Login: success")
      global.setSession(res.data)
      router.push("/dashboard")
    }
  }

  useEffect(() => {
    setShow(true)
  }, [])

  return (
    <div className="flex min-h-full items-center justify-center pt-10 pb-20 px-4 sm:px-6 lg:px-8">
      <Transition
        as={Fragment}
        show={show}
        enter="transition ease-out duration-500"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div className="w-full max-w-md space-y-8">
          <div className="flex justify-center">
            <LogoShort zoom={1.5} />
          </div>
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    ref={email}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required={true}
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    ref={password}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required={true}
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="/forgotpassword"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div className="font-normal text-lg text-red-500">{error}</div>

              <div>
                <button
                  onClick={login}
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or&nbsp;
            <Link href="/register">
              <a className="font-medium text-indigo-600 hover:text-indigo-500">
                register a brand new account
              </a>
            </Link>
          </p>
        </div>
      </Transition>
    </div>
  )
}

LoginPage.title = "Sign in to your account"

export default LoginPage
