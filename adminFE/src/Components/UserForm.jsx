import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/esm/Container";

const UserForm = ({ editUser, setEditUser, fetchUsers ,setShowForm}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    //Fill Form when editing
    useEffect(() => {
        if (editUser) {
            setName(editUser.name);
            setEmail(editUser.email);
            setAddress(editUser.address);
            setPhone(editUser.phone);
        } else {
            setName("");
            setEmail("");
            setAddress("");
            setPhone("");
        }
    }, [editUser]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = { name, email, address, phone };

        try {
            if (editUser) {
                // Update user
                await axios.put(`http://localhost:5000/api/update/${editUser._id}`, userData);
                console.log("User Updated:", userData);
            } else {
                // Add new user
                await axios.post("http://localhost:5000/api/insert", userData);
                console.log("User Added:", userData);
            }

            fetchUsers();           
            setEditUser(null);   
            setShowForm(false) //Unshown Form 
        } catch (error) {
            console.error("Error submitting user data:", error);
        }

        setName("");
        setEmail("");
        setAddress("");
        setPhone("");
    };

    return (
        <Container fluid className="flex justify-center items-center min-h-screen bg-[#F4F7FC]">
            <div className="p-6 rounded-lg bg-white w-96 shadow-xl">
                <h1 className="mb-4 text-2xl font-bold">{editUser ? "Edit User" : "Add User"}</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mb-5 w-full p-2.5 border rounded"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mb-5 w-full p-2.5 border rounded"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="mb-5 w-full p-2.5 border rounded"
                        required
                    />
                    <input
                        type="number"
                        placeholder="Phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="mb-5 w-full p-2.5 border rounded"
                        required
                    />
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                        {editUser ? "Update" : "Submit"}
                    </button>
                </form>
            </div>
        </Container>
    );
};

export default UserForm;
