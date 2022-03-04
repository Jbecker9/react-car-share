import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";


function Login({ users, guestRender }){
    const history = useHistory()

    function handleUserName(event){
        console.log(event.target.value)
    }
    function handlePassword(event){
        console.log(event.target.value)
    }

    function guestLogIn(){
       const guestArray = users.filter((user)=>user.userName==="Guest")
       guestRender(guestArray)
       history.push('/userpage')
    }

    return (
        <div>
            <form>
                <div>
                    <input type="text" name="username" placeholder="Username"
                    onChange={handleUserName} />
                    </div>
                    <div>
                        <input type="password" name="password" placeholder="Password" 
                        onChange={handlePassword} required/>
                    </div>
                        <button type="submit" value="Submit">Login</button>
                </form>
                        <button type="click"
                        value="click"
                        onClick={guestLogIn}>Login as Guest
                        </button>
                <form>
                    <div>
                        <input type="text" name="username" placeholder="Username"
                        />
                    </div>
                    <div>
                        <input type="password" name="password" placeholder="Password" 
                        />
                    <div>
                        <input type="text" name="userImage" placeholder="Profile Picture"
                        />
                    </div>
                    <button type="click"
                    value="click">Create Account</button>
                    </div>
                </form>
        </div>
    )
}

export default Login