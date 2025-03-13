import React, { useEffect, useState } from "react"
import axios from "axios";
import { useAuth } from "./useAuth";

const useUsers = () => {

    const [users, setUser] = useState([]);
    const { user } = useAuth(); //Get Logged In User


    useEffect(() => {
        console.log("User state changed in useUsers:", user);
        if (user) {
            const fetchData = async () => {
                try {
                    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
                    console.log("fetch Users", response.data)
                    setUser(response.data);
                }
                catch (error) {
                    console.log("Error Fetching User", error);
                }
            };
            fetchData();
        }


    }, [user]);

    return { users, setUser }
};

export default useUsers;
