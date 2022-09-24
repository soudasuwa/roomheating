import { createContext } from "react"

interface Type {
  isAuthenticated: boolean
}

const mockup = {
  isAuthenticated: false,
}

const GlobalContext = createContext<Type>(mockup)

export default GlobalContext
