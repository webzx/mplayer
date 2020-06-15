import React,{Component} from 'react';
import {withRouter} from 'react-router'

import logo from './logo.svg';
import './App.css';


class App extends Component{
  render() {
    const {children} = this.props;
    return children;
  }
}

export default withRouter(App);

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {name}
        </a>
      </header>
    </div>
  );
}

export default App;*/
