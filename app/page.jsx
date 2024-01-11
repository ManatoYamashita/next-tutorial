/* @client */
"use client";

import React from 'react'
import style from '../styles/page.module.css'
import Headline from '../components/Headline'
import { Links } from '../components/links'
import { Footer } from '../components/footer'
import { Nav } from '../components/Nav'

import { useCounter } from '../components/hooks/useCounter'
import { useInputArray } from '../components/hooks/useInputArray';
import { useMountFunc } from '../components/hooks/useMountFunc';

export default function Home() {

  // hooksはReact関数コンポーネントの中でしか使えない。
  // hooksを呼び出すトップレベルのみで呼び出すことができる。
  // カスタムフックスはuseから始まる名前にする必要がある。変数と関数を持ってくるものなので、コンポーネントよりも自由度が高い。
  const { count, isShow, handleClick, handleDisplay } = useCounter();
  const { text, array, handleChange, handleAdd } = useInputArray();
  useMountFunc();

  return (
    <main className={style.main}>
      <Nav />
      <Headline title="Index Page" page="page" />
      <div className={style.inputs}>
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
        <div className={style.btns}>
          <button
            onClick={handleAdd}
            className={style.btn}
          >
            追加
          </button>
          <button 
            className={style.btn}
            onClick={handleDisplay}
          >
              {isShow ? "非表示" : "表示"}
          </button>
          <button className={style.btn} onClick={handleClick}>+1</button>
        </div>
      </div>
      <Links />
      <Footer />
    </main>
  );
}

