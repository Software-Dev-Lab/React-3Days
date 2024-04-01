import { useEffect } from 'react';
import './App.css';

function App() {

  // 第一个参数回调函数：组件初始化执行，组件更新之后会执行（dom更新完成）
  useEffect(() => {
    console.log('useEffect执行')

    return () => {
      console.log('组件卸载')
    }
  },[])


  return (
    <h1>hello hooks</h1>
  )
}

export default App;
