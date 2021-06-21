import logo from './logo.svg';
import './App.css';
import Button1 from './components/Button';
import Button2 from './components/ButtonHOC';
import Select from './components/Select';

function App() {
  return (
    <div className="App">
      <h2>Open-closed principle</h2>
      <Button1>
        regular button
      </Button1>
      <h3>Button receives class name as a prop to customize styles</h3>
      <Button1 mix="login-button">
        mix classname name
      </Button1>
      <h3>Theme passed in prop as class name</h3>
      <Button1 theme="dark">
        dark theme
      </Button1>
      <h2>Single responsibility principle</h2>
      <h3>Button wrapped in HOC that checks for theme prop</h3>
      <Button2 theme="theme1">
        button with red theme in HOC
      </Button2>
      <Button2 theme="theme2">
        button with green theme in HOC
      </Button2>
      <h3>Pass style overrides to component as overrides prop</h3>
      <Select />
    </div>
  );
}

export default App;
