import "styles/globals.css"
import type { AppProps } from "next/app"
import { GlobalContext } from "src/contexts"
import { useEffect, useState } from "react"
import { getCookie, setCookie } from "cookies-next"

function MyApp({ Component, pageProps }: AppProps) {
  const [session, setSession] = useState<string | undefined>(
    (getCookie("session") as any) || undefined
  )
  const clearSession = () => setSession(undefined)
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false)

  useEffect(() => {
    setCookie("session", session, { sameSite: "strict" })
    setAuthenticated(session !== undefined)
  }, [session])

  const context = { isAuthenticated, session, setSession, clearSession }

  return (
    <GlobalContext.Provider value={context}>
      <Component {...pageProps} />
    </GlobalContext.Provider>
  )
}

export default MyApp
