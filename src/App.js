import { useEffect, useState } from 'react';

import './App.css';

function Bpp() {
  const [show, setShow] = useState(true) // [true, function(){}

  function btn_click() {
    setShow(false)
  }

  return (
    <div>
      {show && <App />}
      <button onClick={btn_click}>
        隐藏App
      </button>

    </div>
  )
}

function App() {

  const [count, setCount] = useState(0) // [0, function(){}
  const [name, setName] = useState(() => {
    return '张三'
  }) // ['张三', function(){}

  useEffect(() => {
    console.log('useEffect状态变化', count)
    return () => {
      console.log('effect返回的函数执行', count)
    }
  },[count])

  function btn_click() {
    setCount((count) => {
      return count + 1
    })
    // count是几？
    // console.log(count)
  }

  function btn_click2() {
    setName('李四')
  }

  return (
    <div>
      <h1>{count}</h1>
      <h1>{name}</h1>
      <button onClick={btn_click}>点我+1</button>
      <button onClick={btn_click2}>点我修改名字</button>
    </div>
  )
}

export default Bpp;
