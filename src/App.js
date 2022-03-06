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
  const guestData = {
    userName: "Guest",
    password: "HelloGuest",
    userImage: "https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png",
    userCarList: [
      {
        make: "Ford",
        model: "F100",
        year: 1950,
        type: "Pick-up",
        miles: 100000,
        image: "https://performance.ford.com/content/fordracing/home/enthusiasts/newsroom/2021/07/1950-ford-f1-pickup/_jcr_content/fr-contentItem/image.img.jpg/1625687194471.jpg",
        id: 1
      }
    ],
    "id": 1
  }


  useEffect(()=>{
    fetch("http://localhost:3000/users")
      .then((r)=>r.json())
      .then((userData) => setUserData(userData))
  }, [])

  function guestRender(prop){
    setSignedInUser(prop[0])
    setIsSignedIn(true)
  }

  function logOut(){
    setSignedInUser([])
    setIsSignedIn(false)
    if (signedInUser.userName === "Guest"){
      fetch("http://localhost:3000/users/1",{
        method: "DELETE"
      })
      fetch("http://localhost:3000/users",{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(guestData)
      }).then((r)=>r.json())
        .then((data)=>console.log(data))
    } else {
    }
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
          <Home isSignedIn={isSignedIn}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
