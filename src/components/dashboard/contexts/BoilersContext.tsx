import { createContext, Dispatch, SetStateAction } from "react"
import { BoilerDocument } from "types"

type Type = {
  boilers?: BoilerDocument[]
  selected?: string
  setSelected?: Dispatch<SetStateAction<string | undefined>>
}

const BoilersContext = createContext<Type | undefined>(undefined)

export default BoilersContext
