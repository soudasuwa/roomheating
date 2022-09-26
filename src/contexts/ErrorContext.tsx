import { createContext } from "react"

type Type = {
    throwError(error: any): void
}

const mockup: Type = {
    throwError: () => {}
}

const ErrorContext = createContext<Type>(mockup)

export default ErrorContext
