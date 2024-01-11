import { useEffect } from "react";
import { useCounter } from "./useCounter";

export const useMountFunc = () => {
    const {count} = useCounter();
    // Home()コンポーネントがマウントされた時（レンダリングされた時）に実行される
    useEffect(() => {
      // console.log("マウント時");
      console.log(`mount: ${count}`);
      return () => {
        // console.log("アンマウント時（クリーンアップファンクション）");
        console.log(`unmount: ${count}`);
      }
    }, [count]);
};