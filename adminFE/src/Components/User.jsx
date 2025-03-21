import React, { useEffect, useState } from "react"
import axios from "axios";

const User = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        const fetchData=async()=>{
            try {
                const response =await axios.get("https://jsonplaceholder.typicode.com/users")
                setUser(response.data);
            }
            catch (error) {
                console.log("Error Fetching User", error);
            }
        };
        fetchData();    

    }, []);

    return (
        <div className="p-5">
            <div >
                <h2 className="text-xl font-bold text-gray-700">Users</h2>
                {user.length === 0 ? (
                    <p className="text-gray-500">Loading...</p>
                ) : (

                    <div className="relative overflow-x-auto">
                        <table class="w-full text-sm text-left text-gray-500 border border-1">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-[#e6ccff] dark:text-[#9933ff]">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Name
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Username
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Email
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Address
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Phone
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Website
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Company Name
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {user.map((users) => (

                                    <tr key={users.id} class="bg-white border-gray-200 border border-1">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900">
                                            {users.name}
                                        </th>
                                        <td class="px-6 py-4">
                                            {users.username}
                                        </td>
                                        <td class="px-6 py-4">
                                            {users.email}
                                        </td>
                                        <td class="px-6 py-4">
                                            {users.address.street}<br />
                                            {users.address.city}
                                        </td>
                                        <td class="px-6 py-4">
                                            {users.phone}
                                        </td>
                                        <td class="px-6 py-4">
                                            {users.website}
                                        </td>
                                        <td class="px-6 py-4">
                                            {users.company.name}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                )}
            </div >
        </div>
    )
};

export default User;
