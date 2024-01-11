"use client";

import styles from '../../styles/page.module.css'
import Headline from '../../components/Headline'
import { Links } from '../../components/links'
import { Footer } from '../../components/footer'
import { Nav } from '../../components/Nav'

export function About() {
  return (
    <main className={styles.main}>
      <Nav />
      <Headline title="About Page" page="about" />
      <Links />
      <Footer />
    </main>
  );
}

export default About;