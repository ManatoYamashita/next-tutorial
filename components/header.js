import styles from '../app/page.module.css'

export function Header() {
  return (
    <header className={styles.description}>
      <p>
      Get started by editing&nbsp;
      <code className={styles.code}>app/page.js</code>
      </p>
      {/* <NextLink href="/about">
        About Page
      </NextLink> */}
    </header>
  )
}