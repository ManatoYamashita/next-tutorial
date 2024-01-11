import style from '../styles/header.module.css'

export function Header(props) {
  return (
    <header className={style.description}>
      <p>
      Get started by editing&nbsp;
      <code className={style.code}>app/{ props.page }.jsx</code>
      </p>
      {/* <NextLink href="/about">
        About Page
      </NextLink> */}
    </header>
  )
}