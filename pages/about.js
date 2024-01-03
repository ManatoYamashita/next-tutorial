import Image from 'next/image'
import styles from '../app/page.module.css'

export default function About() {
  return (
    <main className={styles.main}>
      <Header />

      <div className={styles.center}>
        <h1>
          About Page
        </h1>
      </div>

      <Links />

      <Footer />
    </main>
  )
}
