import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'hello'
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('props', props);
    console.log('state', state);
    console.log('getDerivedStateFromProps');
    return {
      // name: '哈哈  我把你拦截了'
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
    console.log('getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
    console.log('snapshot', snapshot);
    console.log('组件更新完成');
  }

  componentDidMount() {
    console.log('组件挂载完成');
  }

  click = () => {
    this.setState({
      name: 'change'
    })
  }

  render() {
    const { name } = this.state
    console.log('render 执行')
    return (
      <div>
        <h1>{name}</h1>
        <button onClick={this.click}>点我修改状态</button>
      </div>
    )
  }
}

export default App;
