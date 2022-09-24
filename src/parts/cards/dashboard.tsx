import { useContext } from "react"
import { Card } from "src/components"
import { GlobalContext } from "src/contexts"

const DashboardCard = () => {
  const global = useContext(GlobalContext)

  return (
    <Card
      header="Dashboard"
      paragraph="All Cryptotech tools in one place"
      link="/dashboard"
      disabled={!global.isAuthenticated}
    />
  )
}

export default DashboardCard
