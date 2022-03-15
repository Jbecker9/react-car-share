import React, {useState} from "react";

function UserPageCarList({ car, increment }){
    const [count, setCount] = useState(0)



    return (
        <div className="container">
            <div key={car.miles} className="card">
                <h2>{car.year} {car.make} {car.model}</h2>
                <h5 className="typeTxt">{car.type}</h5>
                <h5 className="milageTxt"> {car.miles} miles</h5>
                <img className="carImg" src={car.image} alt="User Vehicle"/>
                <button onClick={()=>setCount(count+increment)}>{count}</button>
            </div>
        </div>
    )
}

export default UserPageCarList;