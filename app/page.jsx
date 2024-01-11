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
  const [text, setText] = useState('');
  const [isShow, setIsShow] = useState(false);
  const [array, setArray] = useState(['']);

  const handleClick = useCallback((e) => {
    if(count < 10) {
      console.log(e.target.href);
      e.preventDefault();
      setCount((prevCount) => prevCount + 1);
    }
  }, [count]);
  // useCallback()もuseEffect()と同じように第二引数に依存配列（第二引数が変わると関数が実行される）を渡すことができる

  // Home()コンポーネントがマウントされた時（レンダリングされた時）に実行される
  useEffect(() => {
    // console.log("マウント時");
    console.log(`mount: ${count}`);
    return () => {
      // console.log("アンマウント時（クリーンアップファンクション）");
      console.log(`unmount: ${count}`);
    }
  }, [count]);

  const handleChange = useCallback((e) => {
    if(e.target.value.length > 7) {
      alert('5文字以内にしてください。');
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if(prevArray.some((item) => item === text)) {
        alert('同じ要素が既に存在します。');
        return prevArray;
      }
      return [...prevArray, text];
      // スプレッド構文: 配列の中身を展開してくれる。破壊的メソッドを避けるために使う。（破壊的メソッド: 配列の中身を変更するメソッド）
      // ミュータブル: 変更可能な値 -> 最近のJavascriptでは悪とされている（破壊的メソッドをなるべく避けよう）, イミュータブル: 変更不可能な値（Reactではこれが求められる）
    });
  }, [text]);

  return (
    <main className={style.main}>
      <Nav />
      <Headline title="Index Page" page="page" />
      {isShow ? <h1>{ count }</h1> : null}
      <input 
        type="text" 
        value={text} 
        onChange={handleChange}
      />
      <ul>
        {array.map((item) => {
          return (
            <li key={item}>{ item }</li>
          );
        })}
      </ul>
      <button
        onClick={handleAdd}
        className={style.btn}
      >
        追加
      </button>
      <button 
        className={style.btn}
        onClick={
          handleDisplay
        }
      >
          {isShow ? "非表示" : "表示"}
      </button>
      <button className={style.btn} onClick={handleClick}>+1</button>
      <Links />
      <Footer />
    </main>
  );
}

