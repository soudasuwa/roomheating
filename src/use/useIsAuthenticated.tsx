import { AUTH_STATUS } from "src/enum"
import useAuthStatus from "./useAuthStatus"

const { AUTH } = AUTH_STATUS

const useIsAuthenticated = () => {
    const status = useAuthStatus()

    return status === AUTH
}

export default useIsAuthenticated