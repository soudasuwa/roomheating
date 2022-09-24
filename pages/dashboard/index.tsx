import type { NextPage } from "next"
import Head from "next/head"
import { HomepageCard, LogoutCard, RoomsCard } from "src/parts/cards"
import footer from "src/parts/footer"
import styles from "styles/Home.module.css"

const DashboardPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cryptotech CRM</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://cryptotech.ee">Cryptotech</a> CRM
        </h1>

        <div className={styles.grid}>
          <RoomsCard />
          <LogoutCard />
          <HomepageCard />
        </div>
      </main>

      {footer}
    </div>
  )
}

export default DashboardPage
