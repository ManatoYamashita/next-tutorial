import React, { useCallback, useState } from 'react'

// カスタムフックス
export const useCounter = () => {
    const [count, setCount] = useState(0);
    const [isShow, setIsShow] = useState(false);
  
    const handleClick = useCallback((e) => {
      if(count < 10) {
        console.log(e.target.href);
        e.preventDefault();
        setCount((prevCount) => prevCount + 1);
      }
    }, [count]);
    // useCallback()もuseEffect()と同じように第二引数に依存配列（第二引数が変わると関数が実行される）を渡すことができる
  
    const handleDisplay = useCallback(() => {
      setIsShow((prevIsShow) => !prevIsShow);
    }, []);
  
    return { count, isShow, handleClick, handleDisplay };
  }