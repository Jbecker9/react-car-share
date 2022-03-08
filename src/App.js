import './App.css';
import React, { useEffect, useState } from "react"
import Login from "./Login";
import Search from "./Search"
import NavBar from "./NavBar";
import UserPage from "./UserPage";
import { Route, Switch } from "react-router-dom"

function App() {
  const [users, setUserData] = useState([])
  const [signedInUser, setSignedInUser] = useState([])
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [isGuest, setGuest] = useState(false)


  useEffect(()=>{
    fetch("http://localhost:3000/users")
      .then((r)=>r.json())
      .then((userData) => setUserData(userData))
  }, [])

  function guestRender(prop){
    setSignedInUser(prop)
    setIsSignedIn(true)
    setGuest(true)
  }

  function logOut(){
    setSignedInUser([])
    setIsSignedIn(false)
    setGuest(false)
    if (signedInUser.id !== 1) {
      fetch("http://localhost:3000/users")
      .then((r)=>r.json())
      .then((userData) => setUserData(userData))
    } else {}
    }

  function newUserState(prop){
    const newUserArray = [...users, prop]
    setUserData(newUserArray)
    setSignedInUser(prop)
    setIsSignedIn(true)
  }

  function renderLogIn(prop){
    setSignedInUser(prop)
    setIsSignedIn(true)
  }

  function newCar(prop){
    setSignedInUser(prop)
  }

  return (
    <div>
      <NavBar isSignedIn={isSignedIn} logOut={()=>logOut()}/>
      <h1 className='title'>E-Garage</h1>
      <Switch>
        <Route exact path="/userpage">
          <UserPage newCar={(prop)=>newCar(prop)} isSignedIn={isSignedIn} signedInUser={signedInUser} />
        </Route>
        <Route exact path="/login">
          <Login users={users} guestRender={(prop)=>guestRender(prop)} newUserState={(prop)=>newUserState(prop)} renderLogIn={(prop)=>renderLogIn(prop)}/>
        </Route>
        <Route exact path="/">
          <Search users={users} isSignedIn={isSignedIn}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
