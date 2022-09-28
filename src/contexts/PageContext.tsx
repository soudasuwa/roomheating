import { createContext } from "react";

type Type = {
    title?: string
}

const defaultValue = {
    title: undefined
}

const PageContext = createContext<Type>(defaultValue)

export default PageContext