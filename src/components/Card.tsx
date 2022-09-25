import Link from "next/link"
import styles from "styles/Home.module.css"

type Props = {
  header?: React.ReactNode
  paragraph?: React.ReactNode
  link?: string
  disabled?: boolean
  onClick?: () => any
}

const Card = ({ header, paragraph, link, disabled, onClick }: Props) => (
  <Link href={!disabled && link ? link : "#"}>
    <a
      className={`${styles.card} ${disabled ? styles.disabled : ''}`}
      onClick={!disabled ? onClick : undefined}
    >
      {header !== null && <h2>{header}</h2>}
      {paragraph !== null && <p>{paragraph}</p>}
    </a>
  </Link>
)

Card.defaultProps = {
  header: null,
  paragraph: null,
  link: "#",
  disabled: false,
  onClick: undefined,
}

export default Card
