import React, { useState } from "react";

function NewCarForm({ signedInUser, showCarForm }){
    const [make, setMake] = useState("")
    const [model, setModel] = useState("")
    const [year, setYear] = useState(0)
    const [miles, setMiles] = useState(0)
    const [type, setType] = useState("")
    const [image, setImage] = useState("")
    
    function addNewCar(e){
        e.preventDefault()
        const newCarObj = {
            make: make,
            model: model,
            year: parseInt(year),
            type: type,
            miles: parseInt(miles),
            image: image
        }
        const newCarListArray = [...signedInUser.userCarList, newCarObj]
        fetch(`http://localhost:3000/users/${signedInUser.id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({userCarList: newCarListArray})
        }).then((r)=>r.json())
            .then((newCarData)=>{
            console.log(newCarData)
            })
        showCarForm()
            
    }


    return(
        <form onSubmit={addNewCar}>
            <input placeholder="make..." onChange={(e)=>setMake(e.target.value)}></input>
            <input placeholder="model..." onChange={(e)=>setModel(e.target.value)}></input>
            <input placeholder="year..." onChange={(e)=>setYear(e.target.value)}></input>
            <input placeholder="miles..." onChange={(e)=>setMiles(e.target.value)}></input>
            <label>
                {"Body Type: "} 
            <select onChange={(e)=>setType(e.target.value)}>
                <option value="Hatchback">Hatchback</option>
                <option value="Sedan">Sedan</option>
                <option value="SUV">SUV</option>
                <option value="Coupe">Coupe</option>
                <option value="Convertible">Convertible</option>
                <option value="Pickup Truck">Pickup Truck</option>
            </select>
            </label>
            <input placeholder="image..." onChange={(e)=>setImage(e.target.value)}></input>
            <button className="newCarButton"> Send to myGarage </button>
        </form>
    )
}

export default NewCarForm;