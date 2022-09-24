import { useContext } from "react"
import { Card } from "src/components"
import { GlobalContext } from "src/contexts"

type Props = {
  onClick?: () => {}
}

const RegisterConfirmCard = ({ onClick }: Props) => {
  const global = useContext(GlobalContext)

  return (
    <Card
      header="Go &rarr;"
      paragraph={
        <>
          Enter <b>credentials above</b> and click here to continue to{" "}
          <b>Cryptotech CRM</b>.
        </>
      }
      onClick={onClick}
      disabled={global.isAuthenticated}
    />
  )
}

RegisterConfirmCard.defaultProps = {
  onClick: undefined,
}

export default RegisterConfirmCard
