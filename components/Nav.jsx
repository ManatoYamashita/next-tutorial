import Link from 'next/link'

export function Nav() {
    return (
        <nav>
            <Link href="/">
                Home
            </Link>

            <Link href="/about">
                About
            </Link>
        </nav>
    )
}