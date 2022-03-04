import React from "react";
import { Redirect } from "react-router-dom"

function UserPage({ isSignedIn, signedInUser }){

    console.log(signedInUser)

    if (!isSignedIn) return <Redirect to="/login" />;

    return (
        <div className="header">
            <h2>{signedInUser[0].userName}</h2>
            <div clasName="userImage">
            </div>
        </div>
    )
}

export default UserPage