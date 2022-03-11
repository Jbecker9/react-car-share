import React, { useState } from "react";
import SearchUserList from "./SearchUserList";

function SearchForm({ users, renderSearchUsers, showSearch }){
    const [search, setSearch] = useState("")
    const [searchData, setSearchData] = useState([])

    const renderUsers = (e) => {
        e.preventDefault()
        const searchFilter = users.filter((user)=>user.userName.toLowerCase().includes(search.toLowerCase()))
        setSearchData(searchFilter)
        renderSearchUsers()
    }

    return(
    <div>
        <form onSubmit={renderUsers}>
            <input onChange={(e)=>setSearch(e.target.value)}placeholder="Username..."></input>
            <button>Search</button>
        </form>
        {showSearch ? <SearchUserList searchData={searchData} /> : null}
    </div>
    )
}

export default SearchForm