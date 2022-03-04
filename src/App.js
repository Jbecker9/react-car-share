import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react"
import Login from "./Login";
import Home from "./Home"
import NavBar from "./NavBar";
import UserPage from "./UserPage";
import { Route, Switch } from "react-router-dom"

function App() {
  const [users, setUserData] = useState([])
  const [signedInUser, setSignedInUser] = useState([])
  const [isSignedIn, setIsSignedIn] = useState(false)

  useEffect(()=>{
    fetch("http://localhost:3000/users")
      .then((r)=>r.json())
      .then((userData) => setUserData(userData))
  }, [])

  function guestRender(prop){
    setSignedInUser(prop)
    setIsSignedIn(true)
  }

  function logOut(){
    setSignedInUser([])
    setIsSignedIn(false)
  }

  return (
    <div>
      <NavBar isSignedIn={isSignedIn} logOut={()=>logOut()}/>
      <h1 className='title'>E-Garage</h1>
      <Switch>
        <Route exact path="/userpage">
          <UserPage isSignedIn={isSignedIn} signedInUser={signedInUser} />
        </Route>
        <Route exact path="/login">
          <Login users={users} guestRender={(prop)=>guestRender(prop)}/>
        </Route>
        <Route exact path="/">
          <Home isSignedIn={isSignedIn}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
