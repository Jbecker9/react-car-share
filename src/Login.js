import React, { useState } from "react";
import { useHistory } from "react-router-dom";


function Login({ users, guestRender, newUserState, renderLogIn }){
    const history = useHistory()
    const [loginUserName, setLoginUserName] = useState("")
    const [loginPassword, setloginPassword] = useState("")
    const [newUserName, setNewUserName] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [newImage, setNewImage] = useState("")


    function guestLogIn(){
       guestRender(users[0])
       history.push('/userpage')
    }

    function addNewUser(event){
        event.preventDefault()
        const newUserObj= {
            userName: newUserName,
            password: newPassword,
            userImage: newImage,
            userCarList: []
        }
        fetch("http://localhost:3000/users",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUserObj)
        }).then((r)=>r.json())
            .then((newUserInfo)=>{newUserState(newUserInfo)
            history.push('/userpage')})
    }

    function userLogin(event){
        event.preventDefault()
        const loginArray = users.filter((user)=>user.userName === loginUserName)
        if (loginArray[0].password === loginPassword){
            renderLogIn(loginArray[0])
            history.push('./userpage')
        }
    }

    return (
        <div>
            <form onSubmit={userLogin}>
                <div>
                    <input type="text" name="username" placeholder="Username"
                    onChange={(e)=>setLoginUserName(e.target.value)} />
                    </div>
                    <div>
                        <input type="password" name="password" placeholder="Password" 
                        onChange={(e)=>setloginPassword(e.target.value)} required/>
                    </div>
                        <button className="button"type="submit" value="Submit">Login</button>
                </form>
                        <button
                        className="button"type="click"
                        value="click"
                        onClick={guestLogIn}>Login as Guest
                        </button>
                <form onSubmit={addNewUser}>
                    <div>
                        <input type="text" name="username" placeholder="Username"
                        onChange={(e)=>setNewUserName(e.target.value)}
                        required/>
                    </div>
                    <div>
                        <input type="password" name="password" placeholder="Password" 
                        onChange={(e)=>setNewPassword(e.target.value)}
                        required/>
                    <div>
                        <input type="text" name="userImage" placeholder="Profile Picture"
                        onChange={(e)=>setNewImage(e.target.value)}
                        />
                    </div>
                    <button className="button" type="click"
                    value="click">Create Account</button>
                    </div>
                </form>
        </div>
    )
}

export default Login