import logo from './logo.svg';
import './App.css';

// import Counter from './components/Counter';
// import Todo from "./components/Todo"
// import UserForm from './components/UserForm/Form';
import Characters from './components/Characters/Characters';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        {/* <Todo labor = {'Learn React'}/>
        <Todo labor = {'Learn AWS'}/>
        <Todo labor = {'Learn Typescript'}/> */}

        {/* <Counter/> */}
        {/* <UserForm/> */}
        <Characters/>

      </header>
    </div>
  );
}

export default App;
