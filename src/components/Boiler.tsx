import styles from "./styles/Boiler.module.css"

type Props = BoilerData

const Boiler = ({ model, name, location, power }: Props): JSX.Element => {
  return (
    <div className={styles.main}>
      <div className={styles.model}>{model}</div>
      <div className={styles.name}>{name}</div>
      <hr className={styles.devider} />
      <div className={styles.property}>
        <div className={styles.icon}></div>
        <div className={styles.description}>
          <div className={styles.label}>Location</div>
          <div className={styles.value}>{location.name}</div>
        </div>
      </div>
      <div className={styles.property}>
        <div className={styles.icon}></div>
        <div className={styles.description}>
          <div className={styles.label}>Power</div>
          <div className={styles.value}>{power.watts}</div>
        </div>
      </div>
    </div>
  )
}

const defaultProps: Props = {
  name: "Skeleton here",
  model: "Skeleton here",
  location: {
    name: "Skeleton here",
  },
  power: {
    watts: 123,
  },
}

Boiler.defaultProps = defaultProps

export default Boiler
