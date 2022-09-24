import { useContext } from "react"
import { Card } from "src/components"
import { GlobalContext } from "src/contexts"

const RegisterCard = () => {
  const global = useContext(GlobalContext)

  return (
    <Card
      header="Register"
      paragraph={
        <>
          In order to access <b>Cryptotech CRM</b> you need to create an account
          first.
        </>
      }
      link="/auth/register"
      disabled={global.isAuthenticated}
    />
  )
}

export default RegisterCard
