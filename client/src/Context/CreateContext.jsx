import React from "react"
import { useState, createContext, useContext } from "react";
import Login_Tailwind_css from "../Components/LoginTailwind";
import Dashboard1 from "../Components/Dashboard1";

export const UserContext = createContext(null); // Create Context

const CreateContext = () => {
    const [userName, setuserName] = useState("ragul@gmail.com")
    const [userPwd, setPassword] = useState("ragul123")

    return (
        <UserContext.Provider value={{ userName, userPwd }}>
            <div>
                <Login_Tailwind_css />
                {/* <Dashboard1 /> */}
            </div>
        </UserContext.Provider>
    )
};

export default CreateContext;
