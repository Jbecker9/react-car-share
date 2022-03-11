import React from "react";
import { NavLink } from "react-router-dom";
import './App.css';


const linkStyles = {
    display: "inline-block",
    width: "100px",
    padding: "10px",
    margin: "5px 10px 10px",
    background: "#04AA6D",
    textDecoration: "underline",
    color: "white",
  };

  
function NavBar({ isSignedIn, logOut }){

    return (
        <div>
            <NavLink
                to="/"
                exact
                style={linkStyles}
                >
                Search
            </NavLink>
            <NavLink
            to="/userpage"
            exact
            style={linkStyles}
            >
                User Page
            </NavLink>
            <NavLink
            to="/login"
            exact
            style={linkStyles}
            onClick={logOut}
            >
                {isSignedIn ? "Sign Out" : "Welcome!"}
            </NavLink>
        </div>
    )
}

export default NavBar