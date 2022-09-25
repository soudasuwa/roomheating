import type { Dispatch, SetStateAction } from "react"
import { useState } from "react"
import { ErrorBlock } from "src/components"

type Out = [string | undefined, Dispatch<SetStateAction<string | undefined>>, JSX.Element]

const useErrorReporter = (): Out => {
  const [error, setError] = useState<string | undefined>(undefined)
  const errorBlock = <ErrorBlock error={error} />

  return [error, setError, errorBlock]
}

export default useErrorReporter
