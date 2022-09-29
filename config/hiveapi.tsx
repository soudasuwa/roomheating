import { HiveApi } from "src/lib/hiveapi"

if (process.env.HIVEAPI_LOGIN === undefined)
  throw new Error(`process.env.HIVEAPI_LOGIN is undefined`)

if (process.env.HIVEAPI_PASSWORD === undefined)
  throw new Error(`process.env.HIVEAPI_PASSWORD is undefined`)

const hiveapi = new HiveApi({
  login: process.env.HIVEAPI_LOGIN,
  password: process.env.HIVEAPI_PASSWORD,
  twofa_secret: process.env.HIVEAPI_TWOFA_SECRET,
  remember: process.env.HIVEAPI_REMEMBER === "true" ? true : false,
})

export { hiveapi }
