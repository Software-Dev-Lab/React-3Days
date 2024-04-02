import React, { useState, createContext, useContext } from 'react';

// 不需要写在组件中
const MyContext = createContext(null)

function Bpp() {
  const data = useContext(MyContext)

  // console.log('bpp 取到的data', data)

  function click() {
    data.setName('bpp改了name')
  }

  return (
    <div>
      <button onClick={click}>修改name</button>
      <Cpp />
    </div>
  )
}

function Cpp(props) {

  const data = useContext(MyContext)

  console.log('data', data)

  return (
    <h1>{data.name}</h1>
  )
}



function App() {

  const [name, setName] = useState('我是APP传来的name')

  return (
    <MyContext.Provider value={
      {
        name,
        setName
      }
    }>
      <div>
        <Bpp />
      </div>
    </MyContext.Provider>
  )
}

export default App;