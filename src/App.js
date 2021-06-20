import logo from './logo.svg';
import './App.css';
import Button1 from './components/Button';

function App() {
  return (
    <div className="App">
      <h2>Open-closed principle</h2>
      <Button1>
        regular button
      </Button1>
      <Button1 mix="login-button">
        mix classname name
      </Button1>
    </div>
  );
}

export default App;
