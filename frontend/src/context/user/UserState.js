import { useState } from "react";
import UserContext from "./userContext";
import { useNavigate } from "react-router-dom";


const UserState = (props) => {

    const [user, setUser] = useState({});
    const navigate = useNavigate();


    const url = "http://localhost:5000";

    const addUser = async (user) => {
        const response = await fetch(`${url}/user`, {
            method : "POST",
            headers: {
                "Content-Type": "application/json"
              },
        
              body: JSON.stringify(user)
        })

        const json = await response.json()
        if(json.success){
            localStorage.setItem('token', json.token);
            navigate('/profiledetails');
        }
        else{
            alert("Something went worng!!");
        }

        setUser(json);
    }

    const next_step = (user) =>{
        setUser(user);
    }


    return (
        <UserContext.Provider value={{ user, addUser, next_step }}>
          {props.children}
        </UserContext.Provider>
    )
}

export default UserState;