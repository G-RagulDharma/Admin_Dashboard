import React, { useEffect, useState } from "react"
import axios from "axios";
import { useAuth } from "./useAuth";

const useUsers = () => {

    const [users, setUsers] = useState([]);
    const { user } = useAuth(); //Get Logged In User


    const fetchUsers = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/users");
            setUsers(response.data);
        } catch (error) {
            console.error("Error Fetching Users:", error);
        }
    };

    useEffect(() => {
        if (user) {
            fetchUsers();
        }
    }, [user]);

    return { users, setUsers, fetchUsers };
};

export default useUsers;
