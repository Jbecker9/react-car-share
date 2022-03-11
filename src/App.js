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


  useEffect(()=>{
    fetch("http://localhost:3000/users")
      .then((r)=>r.json())
      .then((userData) => setUserData(userData))
  }, [])

  function guestRender(guest){
    setSignedInUser(guest)
    setIsSignedIn(true)
  }

  function logOut(){
    setSignedInUser([])
    setIsSignedIn(false)
    if (signedInUser.id !== 1) {
      fetch("http://localhost:3000/users")
      .then((r)=>r.json())
      .then((userData) => setUserData(userData))
    } else {}
    }

  function newUserState(userGrab){
    const newUserArray = [...users, userGrab]
    setUserData(newUserArray)
    setSignedInUser(userGrab)
    setIsSignedIn(true)
  }

  function renderLogIn(userGrab){
    setSignedInUser(userGrab)
    setIsSignedIn(true)
  }

  function newCar(newUserData){
    setSignedInUser(newUserData)
  }

  return (
    <div>
      <NavBar isSignedIn={isSignedIn} logOut={logOut}/>
      <h1 className='title'>E-Garage</h1>
      <Switch>
        <Route exact path="/userpage">
          <UserPage newCar={newCar} isSignedIn={isSignedIn} signedInUser={signedInUser} />
        </Route>
        <Route exact path="/login">
          <Login users={users} guestRender={guestRender} newUserState={newUserState} renderLogIn={renderLogIn}/>
        </Route>
        <Route exact path="/">
          <Search users={users} isSignedIn={isSignedIn}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
