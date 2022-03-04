import React from "react";

function UserPageCarList({ carList }){
    return (
        <div className="container">
            {carList.map((car)=>
            <div key={car.id} className="card">
                <h2>{car.year} {car.make} {car.model}</h2>
                <h5 className="typeTxt">{car.type}</h5>
                <h5 className="milageTxt"> {car.miles} miles</h5>
                <img className="carImg" src={car.image}/>
            </div>)}
        </div>
    )
}

export default UserPageCarList;