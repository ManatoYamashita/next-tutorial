import Image from 'next/image'
import styles from '../app/page.module.css'

import Headline from '../components/Headline'
import { Links } from '../components/links'
import { Footer } from '../components/footer'

export default function About() {
  return (
    <main className={styles.main}>

      <Headline title="About Page" page="about" />

      <Links />

      <Footer />

    </main>
  )
}
