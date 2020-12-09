import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux</h1>
      <div className="linha">
        <Card title="Card 1" red></Card>
        <Card title="Card 2" green></Card>
      </div>
      <div className="linha">
        <Card title="Card 3" blue></Card>
        <Card title="Card 4" purple></Card>
      </div>
    </div>
  );
}

export default App;
