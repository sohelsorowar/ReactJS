import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './mycomponents/Hello'
import Welcome from './mycomponents/Welcome'


function App() {
  return(
    <div className="App" >

      <Hello name="Zahin" age="12"></Hello>
      <Welcome name="class1"></Welcome>

    </div>
  )
}

export default App;
