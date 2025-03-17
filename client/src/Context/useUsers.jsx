import React, { useEffect, useState } from "react"
import axios from "axios";
import { useAuth } from "./useAuth";

const useUsers = () => {

    const [users, setUsers] = useState([]);
    const { user } = useAuth(); //Get Logged In User


    useEffect(() => {
        //console.log("User:", user);
        if (user) {
            const fetchData = async () => {
                try {
                    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
                    //console.log("fetch Users", response.data)
                    setUsers(response.data);
                }
                catch (error) {
                    console.log("Error Fetching User", error);
                }
            };
            fetchData();
        }


    }, [user]);

    return { users, setUsers }
};

export default useUsers;
