import React from "react";
import { Redirect } from "react-router-dom"

function UserPage({ isSignedIn, signedInUser }){

    console.log(signedInUser)

    if (!isSignedIn) return <Redirect to="/login" />;

    return (
        <div className="header">
            {signedInUser.userName}
            <div className="userImage"> <img className="avatar" src={signedInUser.userImage} />
            </div>
        </div>
    )
}

export default UserPage