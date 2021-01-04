import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from "./template/NavBar"
import Intro from "./template/introduction"
import Jumbotron from "./template/jumbotron"
import Install from "./template/installation"
import SampleCode from "./template/sample_code"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Flow2ML</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
          <Navbar />
          <Jumbotron />
      </header><br /><br />

      <main>
        <Intro /><br /><br />
        <Install /><br /><br /><br />
        <SampleCode /><br /><br />
      </main>

      <footer className={styles.footer}>
          Copyright (c) 2021 flow2ml
      </footer>
    </div>
  )
}
