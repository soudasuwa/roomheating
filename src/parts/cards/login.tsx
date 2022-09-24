import { useContext } from "react"
import { Card } from "src/components"
import { GlobalContext } from "src/contexts"

const LoginCard = () => {
  const global = useContext(GlobalContext)

  return (
    <Card
      header="Login"
      paragraph={
        <>
          If you <b>already have an account</b> or have a social account
          attached
        </>
      }
      link="/auth/login"
      disabled={global.isAuthenticated}
    />
  )
}

export default LoginCard
