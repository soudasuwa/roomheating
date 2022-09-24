import { useContext } from "react"
import { Card } from "src/components"
import { GlobalContext } from "src/contexts"

const RoomsCard = () => {
  const global = useContext(GlobalContext)

  return (
    <Card
      header="Rooms"
      paragraph="Check status of all rooms."
      link="/dashboard/rooms"
      disabled={!global.isAuthenticated}
    />
  )
}

export default RoomsCard
