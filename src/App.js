import React from 'react';
import './App.css';
import Header from './components/header';
import MemeGenerator from './components/MemeGenerator';


class App extends React.Component {

  constructor(){
    super();
    this.state = {
    }
  }
  render() {
    return (
    <div className="App">
     <Header />
     <MemeGenerator />
    </div>
  );
  }
}

export default App;
