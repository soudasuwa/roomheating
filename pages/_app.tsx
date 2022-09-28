import "styles/globals.css"
import { GlobalContext, PageContext } from "src/contexts"
import { useEffect, useState } from "react"
import { getCookie, setCookie } from "cookies-next"

import type { MyAppProps } from "types"
import { Footer, PageBody } from "src/components"
import Navigation from "src/components/Navigation"

const Main = ({ Component, pageProps }: MyAppProps) => {
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
    <>
      <GlobalContext.Provider value={context}>
        <PageContext.Provider value={{ title: Component.title }}>
          <div className="min-h-full">
            <Navigation />
            <PageBody>
              <Component {...pageProps} />
            </PageBody>
            <Footer />
          </div>
        </PageContext.Provider>
      </GlobalContext.Provider>
    </>
  )
}

export default Main
