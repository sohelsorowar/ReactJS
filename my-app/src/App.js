import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './mycomponents/Hello'
import Welcome from './mycomponents/Welcome'
import Welcome1 from './mycomponents/Welcome1'

function App() {
  return(
    <div className="App" >

      <Hello name="Zahin" age="12"></Hello>
      <Welcome name="class1"></Welcome>
      <Welcome1></Welcome1>

    </div>
  )
}

export default App;
