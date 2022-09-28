import type { MyNextPage } from "types"

import axios from "axios"
import React, { useContext, useEffect, useState } from "react"
import { GlobalContext } from "src/contexts"
import { useRouter } from "next/router"

const LogoutPage: MyNextPage = () => {
  const router = useRouter()
  const [status, setStatus] = useState<React.ReactNode>(<>Loading...</>)
  const global = useContext(GlobalContext)

  useEffect(() => {
    if (global.session === undefined) {
      setStatus(<>You are not logged in</>)
    } else {
      setStatus(<>Connecting to server</>)

      axios
        .post("/api/auth/logout", {
          session: global.session,
        })
        .then((response) => response.data)
        .then(({ data, error }) => {
          console.log({ data, error })
          setStatus('Logged out successfully')
          global.setSession(undefined)
          router.push("/")
        })
    }
  }, [])

  return (
    <div className="h-40">
      <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
      {status}
    </h1>
    </div>
  )
}

LogoutPage.title = "Sign out"

export default LogoutPage
