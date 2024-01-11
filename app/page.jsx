/* @client */
"use client";

import React, { useCallback, useEffect, useState } from 'react'
import style from '../styles/page.module.css'
import Headline from '../components/Headline'
import { Links } from '../components/links'
import { Footer } from '../components/footer'
import { Nav } from '../components/Nav'

export default function Home() {

  const [count, setCount] = useState(0);

  const handleClick = useCallback((e) => {
    if(count < 10) {
      console.log(e.target.href);
      e.preventDefault();
      setCount((count) => count + 1);
    }
  }, [count]);
  // useCallback()もuseEffect()と同じように第二引数に依存配列（第二引数が変わると関数が実行される）を渡すことができる

  // Home()コンポーネントがマウントされた時（レンダリングされた時）に実行される
  useEffect(() => {
    // console.log("マウント時");
    console.log(`mount: ${count}`);
    document.body.style.backgroundColor = 'black';
    return () => {
      // console.log("アンマウント時（クリーンアップファンクション）");
      console.log(`unmount: ${count}`);
    }
  }, [count]);

  return (
    <main className={style.main}>
      <Nav />
      <Headline title="Index Page" page="page" />
      <h1>{ count }</h1>
      <button className={style.btn} onClick={handleClick}>Button</button>
      <Links />
      <Footer />
    </main>
  );
}

