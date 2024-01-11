import Image from 'next/image'
import style from '../styles/footer.module.css'

export function Footer() {
    return (
        <footer>
            <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            >
            By{' '}
            <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={style.vercelLogo}
                width={100}
                height={24}
                priority
            />
            </a>
        </footer>
    )
}

