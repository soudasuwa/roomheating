import axios from "axios"
import useSWR from "swr"

const endpoint = '/api/auth/status'

const useAuthStatus = () => {
    const fetcher = (path: string) => axios(path).then(response => response.data)
    const { data, error } = useSWR(endpoint, fetcher)

    return data
}

export default useAuthStatus