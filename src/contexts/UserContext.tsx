import { createContext } from "react"

type Type = {
  name: string
  email: string
  imageUrl: string
}

const defaultValue = {
  name: "Debbie Lewis",
  email: "debbielewis@example.com",
  imageUrl:
  "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=256&amp;h=256&amp;q=80",
}

const UserContext = createContext<Type>(defaultValue)

export default UserContext
