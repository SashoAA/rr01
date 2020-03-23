import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import store from './store';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter store={store} />
       < div>
       <p>Hello!</p>

       </div>
      </div>
    )

  }
}

export default App;
