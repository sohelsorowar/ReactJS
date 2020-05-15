
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'

function App(){
  return (
    <div className="App">

      <Greet name = "Bruce" heroName="Batman">
      <p> This is children props</p>
      </Greet>
      <Greet name = "Carck" heroName="Superman">
      <button>Action</button>
      </Greet>
      <Greet name = "Dayana" heroName="wonder Woman"/>
      <Welcome name = "Bruce" heroName="Batman"></Welcome>
      <Welcome name = "Cark" heroName="Superman"></Welcome>
      <Hello></Hello>

    </div>
  );
}

export default App;
