import "styles/globals.css"
import type { AppProps } from "next/app"
import { GlobalContext } from "src/contexts"
import { useIsAuthenticated } from "src/use"

function MyApp({ Component, pageProps }: AppProps) {
  const isAuthenticated = useIsAuthenticated()

  const context = { isAuthenticated }

  return (
    <GlobalContext.Provider value={context}>
      <Component {...pageProps} />
    </GlobalContext.Provider>
  )
}

export default MyApp
