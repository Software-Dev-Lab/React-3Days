import React from 'react';
import './App.css';

class Bpp extends React.Component {

  componentWillUnmount() {
    console.log('Bpp组件卸载')
  }

  render() {
    return (
      <h1>我是Bpp</h1>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      bpp_show: true
    }
  }
  // 定义事件
  click = () => {
    // 修改状态
    this.setState({
      bpp_show: false
    })
  }

  render() {
    console.log('render 函数执行')
    const { bpp_show } = this.state
    return (
      <div>
        {
          bpp_show && <Bpp />
        }
        <button onClick={this.click}>
          隐藏bpp
        </button>
      </div>
    )
  }
}

export default App;
