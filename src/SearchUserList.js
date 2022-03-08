import React from "react";

function SearchUserList({ searchData }){
    return (
        <div className="container">
            {searchData.map((user)=>
                    <div key={user.userName} className="card">
                        <h2>{user.userName}</h2>
                        <h4>{`Number of vehicles: ${user.userCarList.length}`}</h4>
                </div>
            )}
        </div>
    )
}

export default SearchUserList