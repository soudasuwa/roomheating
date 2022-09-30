import { createContext } from "react"
import { BoilerDocument } from "types"

type Type = BoilerDocument

const BoilerContext = createContext<Type | undefined>(undefined)

export default BoilerContext
