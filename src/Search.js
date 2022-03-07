import React from "react";
import { Redirect } from "react-router-dom"

function Search({ isSignedIn }){

    
    if (!isSignedIn) return <Redirect to="/login" /> ;

    return (
        <div>Home Page</div>
    )
}

export default Search
