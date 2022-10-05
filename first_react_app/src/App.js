import logo from './logo.svg';
import './App.css';

import Todo from "./components/trash/Todo"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <Todo labor = {'Learn React'}/>
        <Todo labor = {'Learn AWS'}/>
        <Todo labor = {'Learn Typescript'}/>
      </header>
    </div>
  );
}

export default App;
