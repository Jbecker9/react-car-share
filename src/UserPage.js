import React, { useState } from "react";
import { Redirect } from "react-router-dom"
import NewCarForm from "./NewCarForm";
import UserPageCarList from "./UserPageCarList";

function UserPage({ isSignedIn, signedInUser, newCar }){
    const [isClicked, setClicked] = useState(false)
    const [carList, setCarList] = useState(signedInUser.userCarList)

    function showCarForm(){
        setClicked(!isClicked)
    }

    function newCarParent(prop){
        newCar(prop)
        setClicked(!isClicked)
        setCarList(prop.userCarList)
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
            {isClicked ? <NewCarForm newCarParent={(prop)=>newCarParent(prop)} showCarForm={()=>showCarForm()} signedInUser={signedInUser} /> : null}
            <div className="container">
            {carList.map((car)=> <UserPageCarList key={car.miles} car={car}/>)}
            </div>
        </div>
    )
}

export default UserPage