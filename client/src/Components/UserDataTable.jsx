import React, { useEffect, useState, useRef, useContext } from "react"
import axios from "axios";
import DataTable from 'react-data-table-component';
import useUsers from "../Context/useUsers";
import { DownloadTableExcel } from 'react-export-table-to-excel';
import { FaChevronDown } from "react-icons/fa";
import useExportPDF from "../hooks/useExportPDF";
import UserForm from "./UserForm";

const UserDataTable = () => {

    const { users, setUser,fetchUsers } = useUsers();
    const [showMenu, setShowMenu] = useState(false);
    const [editUser, setEditUser] = useState(null); //store user data
    const { exportToPDF } = useExportPDF();

    const tableRef = useRef(null);

    // Handle filtering
    function handleFilter(event) {
        const query = event.target.value.toLowerCase();
        const filteredData = users.filter(row => row.name.toLowerCase().includes(query));
        setUser(filteredData);
    }

    const handleEdit = (user) => {
        console.log(`Edit clicked for ID: ${user._id}`, user);
        setEditUser(user);
    };

    // Handle delete
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/delete/${id}`);
            console.log(`User Deleted with ID: ${id}`);
            fetchUsers();
        } catch (error) {
            console.error("Error Deleting User", error);
        }
    };

    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true
        },
        {
            name: 'Email',
            selector: row => row.email,
            sortable: true
        },
        {
            name: 'Address',
            selector: row => row.address,
            sortable: true
        },
        {
            name: 'Phone',
            selector: row => row.phone,
            sortable: true
        }, {
            name: 'Actions',
            cell: (row) => (
                <div className="flex gap-2">
                    <button
                        className="bg-blue-500 text-white px-2 py-1 rounded"
                        onClick={() => handleEdit(row)}>
                        Edit
                    </button>
                    <button
                        className="bg-red-500 text-white px-2 py-1 rounded"
                        onClick={() => handleDelete(row._id)}>
                        Delete
                    </button>
                </div>
            )
        }

    ]


    return (
        <div className="container mt-5">
            <div className="w-60 items-end">
                <input type="text" onChange={handleFilter} className="form-control border border-2 p-2 rounded" placeholder="Search" />
            </div>
            {users.length > 0 ? (
                <>
                    <DataTable
                        // ref={tableRef}
                        columns={columns}
                        data={users}
                        selectableRows
                        fixedHeader
                    />

                    {/* Hidden Table only for Export */}
                    <table ref={tableRef} className="hidden">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.address}</td>
                                    <td>{user.phone}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            ) : (
                <p className="text-center text-lg text-red-500 font-bold">Please log in to see user data.</p>
            )}
            <div className="absolute flex top-17 right-20 mt-4 z-5 transistion">
                <button
                    className="bg-gray-800 text-white px-4 py-2 rounded flex items-center hover:bg-gray-700 transition cursor-pointer"
                    onClick={() => setShowMenu(!showMenu)}
                >Export<FaChevronDown className="ml-2" />
                </button>
                {showMenu && (
                    <div className="absolute top-full mt-2 w-40 bg-white shadow-lg rounded-md overflow-hidden border border-gray-300">
                        <DownloadTableExcel
                            filename="users table"
                            sheet="users"
                            currentTableRef={tableRef.current}
                        >
                            <button className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">
                                Export To Excel
                            </button>
                        </DownloadTableExcel>
                        <button onClick={() => exportToPDF(users)} className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">
                            Export to PDF
                        </button>
                    </div>
                )}

            </div>

            {/* User Form for Adding/Editing */}
            <UserForm
                editUser={editUser}
                setEditUser={setEditUser}
                fetchUsers={fetchUsers}
            />

        </div >
    )
};

export default UserDataTable;
