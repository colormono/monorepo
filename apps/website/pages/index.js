import Head from 'next/head'
import styles from '../styles/Home.module.css'
// import {Button} from '@mate/components'

// dummy(); // function log something from components package

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>WEBSITE</h1>

        <p className={styles.description}>
          Marketing website powered by Tailwind
        </p>

        {/* <Button>Button Component</Button> */}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
