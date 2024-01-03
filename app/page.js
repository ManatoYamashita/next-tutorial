import styles from './page.module.css'
import Headline from '../components/Headline'
import { Links } from '../components/links'
import { Footer } from '../components/footer'
import { Nav } from '../components/Nav'

export default function Home() {
  return (
    <main className={styles.main}>

      <Nav />

      <Headline title="Index Page" page="page" />

      <Links />

      <Footer />
      
    </main>
  );
}
