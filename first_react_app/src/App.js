import logo from './logo.svg';
import './App.css';
import Users from './components/Users';
import UserForm from './components/UserForm';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        
        <Users/>
        <UserForm/>

      </header>
    </div>
  );
}

export default App;
