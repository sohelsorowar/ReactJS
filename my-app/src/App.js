import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './mycomponents/Hello'
import Welcome from './mycomponents/Welcome'


function App() {
  return(
    <div className="App" >

      <Hello name="Zahin" age="12"></Hello>
      <Hello name="Jarif" age="7"></Hello>
      <Hello name="Afif" age="5"></Hello>
      <Hello name="Azowa" age=".6"></Hello>
      <Welcome name="class1"></Welcome>
      <Welcome name="cass2"></Welcome>
      <Welcome name="class"></Welcome>
    </div>
  )
}

export default App;
