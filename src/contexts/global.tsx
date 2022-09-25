import { createContext, Dispatch, SetStateAction } from "react"

interface Type {
  isAuthenticated: boolean
  session: string | undefined
  setSession: Dispatch<SetStateAction<string | undefined>>
  clearSession: () => void
}

const noop = () => {}

const mockup = {
  isAuthenticated: false,
  session: undefined,
  setSession: noop,
  clearSession: noop,
}

const GlobalContext = createContext<Type>(mockup)

export default GlobalContext
