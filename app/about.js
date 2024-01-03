import styles from './page.module.css'
import Headline from '../components/Headline'
import { Links } from '../components/links'
import { Footer } from '../components/footer'
import { Nav } from '../components/Nav'

export default function About() {
  return (
    <main className={styles.main}>
      
      <Nav />

      <Headline title="About Page" page="about" />

      <Links />

      <Footer />

    </main>
  );
}
