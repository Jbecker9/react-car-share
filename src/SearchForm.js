import React, { useState } from "react";

function SearchForm({ users, renderSearchUsers, showSearch }){
    const [search, setSearch] = useState("")
    const [searchData, setSearchData] = useState([])

    function renderUsers(e){
        e.preventDefault()

        const searchFilter = users.filter((user)=>user.userName.toLowerCase().includes(search.toLowerCase()))
        setSearchData(searchFilter)
        renderSearchUsers()
        console.log(showSearch)
    }

    return(
    <div>
        <form onSubmit={renderUsers}>
            <input onChange={(e)=>setSearch(e.target.value)}placeholder="Username..."></input>
            <button>Search</button>
        </form>
    </div>
    )
}

export default SearchForm