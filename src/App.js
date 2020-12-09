import React from 'react';
import Card from './components/Card';
import './App.css';
import Intervalo from './components/Intervalo';

function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux</h1>
      <div className="linha">
        <Intervalo></Intervalo>
      </div>
      <div className="linha">
        <Card title="Card 2" green></Card>
        <Card title="Card 3" blue></Card>
        <Card title="Card 4" purple></Card>
      </div>
    </div>
  );
}

export default App;
