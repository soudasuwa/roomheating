import { createContext } from "react"
import { NotificationDocument } from "types"

type Type = {
    notifications?: NotificationDocument[]
}

const NotificationsContext = createContext<Type | undefined>(undefined)

export default NotificationsContext
