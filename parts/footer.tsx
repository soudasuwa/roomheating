import Image from "next/image"
import styles from "../styles/Home.module.css"

const footer = (
  <footer className={styles.footer}>
    <a
      href="https://cryptotech.ee?utm_source=cryptotech-crm&utm_medium=cryptotech-crm-register&utm_campaign=cryptotech-crm"
      target="_blank"
      rel="noopener noreferrer"
    >
      Made by{" "}
      <span className={styles.logo}>
        <Image
          src="/cryptotech.svg"
          alt="Cryptotech Logo"
          height={16}
          width={200}
          layout="intrinsic"
        />
      </span>
    </a>
    <span>&nbsp;</span>
    <a
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by{" "}
      <span className={styles.logo}>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </span>
    </a>
  </footer>
)

export default footer
