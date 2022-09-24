import { useContext } from "react"
import { Card } from "src/components"
import { GlobalContext } from "src/contexts"

type Props = {
  onClick?: () => {}
}

const LogoutConfirmCard = ({ onClick }: Props) => {
  const global = useContext(GlobalContext)

  return (
    <Card
      header="Confirm logout &rarr;"
      paragraph="Log out and clear sessions"
      onClick={onClick}
      disabled={!global.isAuthenticated}
    />
  )
}

LogoutConfirmCard.defaultProps = {
  onClick: undefined,
}

export default LogoutConfirmCard
