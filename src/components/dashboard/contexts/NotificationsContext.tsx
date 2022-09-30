import { createContext } from "react"
import { Notification } from "types"

type Type = {
    notifications?: Notification[]
}

const NotificationsContext = createContext<Type | undefined>(undefined)

export default NotificationsContext
