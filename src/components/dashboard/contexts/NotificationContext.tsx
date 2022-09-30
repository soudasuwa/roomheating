import type { NotificationDocument } from "types"

import { createContext } from "react"

type Type = NotificationDocument

const NotificationContext = createContext<Type | undefined>(undefined)

export default NotificationContext
