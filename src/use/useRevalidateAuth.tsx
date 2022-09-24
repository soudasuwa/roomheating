import { useSWRConfig } from "swr"

const endpoint = "/api/auth/status"

const useRevalidateAuth = () => {
  const { mutate } = useSWRConfig()

  return () => mutate(endpoint)
}

export default useRevalidateAuth
