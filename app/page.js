import Image from 'next/image'
import styles from './page.module.css'

import Headline from '../components/Headline'
import { Links } from '../components/links'
import { Footer } from '../components/footer'

export default function Home() {
  return (
    <main className={styles.main}>

      <Headline title="Index Page" page="page" />

      <Links />

      <Footer />
      
    </main>
  )
}
