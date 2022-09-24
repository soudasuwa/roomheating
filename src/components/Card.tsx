import styles from "styles/Home.module.css"

type Props = {
  header?: React.ReactNode
  paragraph?: React.ReactNode
  link?: string
  disabled?: boolean
  onClick?: () => any
}

const Card = ({ header, paragraph, link, disabled, onClick }: Props) => (
  <a
    className={`${styles.card} ${disabled && styles.disabled}`}
    href={disabled ? "#" : link}
    onClick={!disabled ? onClick : undefined}
  >
    {header !== null && <h2>{header}</h2>}
    {paragraph !== null && <p>{paragraph}</p>}
  </a>
)

Card.defaultProps = {
  header: null,
  paragraph: null,
  link: "#",
  disabled: false,
  onClick: undefined,
}

export default Card
