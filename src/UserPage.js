import React, { useState } from "react";
import { Redirect } from "react-router-dom"
import NewCarForm from "./NewCarForm";
import UserPageCarList from "./UserPageCarList";

function UserPage({ isSignedIn, signedInUser }){
    const [isClicked, setClicked] = useState(false)

    function showCarForm(){
        setClicked(!isClicked)
    }

    console.log(signedInUser.userCarList)

    if (!isSignedIn) return <Redirect to="/login" />;

    return (
        <div>
            <div className="header">
                {signedInUser.userName}
                <div className="userImage"> <img className="avatar" src={signedInUser.userImage} />
                </div>
            </div>
            <button className="newCarButton"
            onClick={showCarForm}> {isClicked ? "Hide form" : "Add a vehicle"} </button>
            {isClicked ? <NewCarForm showCarForm={()=>showCarForm()} signedInUser={signedInUser} /> : null}
            <div className="container">
            {signedInUser.userCarList.map((car)=> <UserPageCarList key={car.id} car={car}/>)}
            </div>
        </div>
    )
}

export default UserPage