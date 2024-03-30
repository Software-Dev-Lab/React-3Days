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
      // name: 'world'
    }
  }

  componentDidMount() {
    console.log('组件挂载完成');
  }

  render() {
    const { name } = this.state

    return (
      <h1>{name}</h1>
    )
  }
}

export default App;
