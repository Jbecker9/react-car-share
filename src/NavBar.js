import React from "react";
import { NavLink } from "react-router-dom";
import './App.css';
import Login from "./Login";


const linkStyles = {
    display: "inline-block",
    width: "80px",
    padding: "10px",
    margin: "5px 6px 6px",
    background: "#04AA6D",
    textDecoration: "underline",
    color: "white",
  };

function NavBar({ isSignedIn, logOut }){

    function logOutClick(){
        logOut()
    }

    return (
        <div>
            <NavLink
                to="/"
                exact
                style={linkStyles}
                >
                Home
            </NavLink>
            <NavLink
            to="/userpage"
            exact
            style={linkStyles}
            >
                User Home
            </NavLink>
            <NavLink
            to="/login"
            exact
            style={linkStyles}
            onClick={logOutClick}
            >
                {isSignedIn ? "Sign Out" : "Welcome!"}
            </NavLink>
        </div>
    )
}

export default NavBar