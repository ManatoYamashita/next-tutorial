import { useCallback, useState } from 'react'

export const useInputArray = () => {
    const [text, setText] = useState('');
    const [array, setArray] = useState(['']);
    const handleChange = useCallback((e) => {
      if(e.target.value.length > 7) {
        alert('5文字以内にしてください。');
        return;
      }
      setText(e.target.value.trim());
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
  
    return { text, array, handleChange, handleAdd };
  };
  