import { useContext } from "react"
import { Card } from "src/components"
import { GlobalContext } from "src/contexts"

const LogoutCard = () => {
  const global = useContext(GlobalContext)

  return (
    <Card
      header="Log out"
      paragraph="Log out and clear all sessions"
      link="/auth/logout"
      disabled={!global.isAuthenticated}
    />
  )
}

export default LogoutCard
