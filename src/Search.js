import React, { useState } from "react";
import { Redirect } from "react-router-dom"
import SearchForm from "./SearchForm";

function Search({ isSignedIn, users }){
    const [searchClick, setSearchClick] = useState(false)
    const [showSearch, setShowSearch] = useState(false)

    function getClick(){
        setSearchClick(!searchClick);
        if (searchClick === false){
            setShowSearch(false)
        } else {
        }
    }

    function renderSearchUsers(){
        setShowSearch(true)
    }
    
    if (!isSignedIn) return <Redirect to="/login" /> ;

    return (
        <div>
            <button className="searchUserButton" onClick={getClick} >{searchClick ? "Hide search" : "Search for a user..."}</button>
            {searchClick ? <SearchForm users={users} renderSearchUsers={()=>renderSearchUsers()}
            showSearch={showSearch}/> : null}
        </div>
    )
}

export default Search
