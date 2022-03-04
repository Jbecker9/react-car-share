import React from "react";

function NewCarForm(){
    return(
        <form>
            <input placeholder="make..."></input>
            <input placeholder="model..."></input>
            <input placeholder="year..."></input>
            <input placeholder="miles..."></input>
            <input placeholder="type..."></input>
            <input placeholder="image..."></input>
            <button className="newCarButton"> Add a Car </button>
        </form>
    )
}

export default NewCarForm;