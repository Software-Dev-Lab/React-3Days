import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      name: '初始化'
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps 函数执行')
    return {
    };
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate 函数执行')
    return {
      snapshot: '我传给你的信息'
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('prevProps', prevProps)
    console.log('prevState', prevState)
    console.log('snapshot', snapshot)
    console.log('componentDidUpdate 页面更新之后')
  }


  // 组件挂载完成之后执行
  componentDidMount() {
    console.log('componentDidMount 组件挂载完成');
  }

  // 定义事件
  click = () => {
    // 修改状态
    this.setState({
      name: '修改后的name'
    })
  }

  render() {
    console.log('render 函数执行')
    const { name } = this.state
    return (
      <div>
        <h1>{name}</h1>
        <button onClick={this.click}>
          修改name
        </button>
      </div>
    )
  }
}

export default App;
