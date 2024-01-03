import Image from 'next/image'
import styles from './page.module.css'

import { Header } from '../components/header'
import { Links } from '../components/links'
import { Footer } from '../components/footer'

export default function Home() {
  return (
    <main className={styles.main}>

      <Header />

      <div className={styles.center}>
        {/* <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        /> */}
        <h1>
          Index Page
        </h1>
      </div>

      <Links />

      <Footer />
      
    </main>
  )
}
