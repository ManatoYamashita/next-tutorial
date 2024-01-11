import Link from 'next/link'
import styles from '../styles/nav.module.css'

export function Nav() {
    return (
        <nav className={styles.nav}>
            <Link href="/">
                Home
            </Link>
            
            <Link href="/about">
                About
            </Link>
        </nav>
    )
}
