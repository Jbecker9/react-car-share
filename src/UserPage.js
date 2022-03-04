import React from "react";
import { Redirect } from "react-router-dom"
import NewCarForm from "./NewCarForm";
import UserPageCarList from "./UserPageCarList";

function UserPage({ isSignedIn, signedInUser }){

    if (!isSignedIn) return <Redirect to="/login" />;

    return (
        <div>
            <div className="header">
                {signedInUser.userName}
                <div className="userImage"> <img className="avatar" src={signedInUser.userImage} />
                </div>
            </div>
            <NewCarForm />
            <UserPageCarList carList={signedInUser.userCarList}/>
        </div>
    )
}

export default UserPage