import React from 'react';
import './App.css';
import LoginContainer from './container/loginContainer';
import appFirebase from "./firebase/config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import HomeComponent from './components/homeComponent';

const auth = getAuth(appFirebase);

function App() {
  const [user, setUser] = React.useState(null);

  onAuthStateChanged(auth, (userFirebase) => {
    if (userFirebase) {
      setUser(userFirebase);
    } else {
      setUser(null);
    }
  })

  return (
    <div className="App">

      { user ? <HomeComponent mailUser={user.email} /> : <LoginContainer /> }
      
    </div>
  );
}

export default App;
