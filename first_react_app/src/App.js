import logo from './logo.svg';
import './App.css';
import Users from './components/Users';
import UserForm from './components/UserForm';


import {useState, useEffect} from 'react';
import {getData} from './api/data'
import Humans from './components/Humans';

function App() {

  const [users, setUsers] = useState([])
    const [errorState, setErrorState] = useState({ hasError: false })

    useEffect(() => {

        // 1. render elements
        // 2. fetch API
        getData('https://qait-users-default-rtdb.firebaseio.com/users.json')
            .then(data => setUsers(data))
            .catch(error => setErrorState({ hasError: true}))

        
    },[]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        
        <Users users = {users}/>
        <Users users = {users}/>
        <UserForm/>

        <Humans/>

      </header>
    </div>
  );
}

export default App;
