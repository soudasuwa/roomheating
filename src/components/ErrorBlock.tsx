import styles from "styles/Home.module.css"

type Props = {
  error?: string
}

const ErrorBlock = ({ error }: Props) => {
  return (
    <span className={`${styles.code} ${error !== undefined && styles.error}`}>
      {error !== undefined ? error : <>status...</>}
    </span>
  )
}

ErrorBlock.defaultProps = {
  error: undefined,
}

export default ErrorBlock
