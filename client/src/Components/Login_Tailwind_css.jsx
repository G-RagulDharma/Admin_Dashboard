import React, { useState, useContext } from "react";
import Container from "react-bootstrap/esm/Container";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from "../Context/Create_Context";
import { useAuth } from "../Context/useAuth";
import { useNavigate } from "react-router-dom";

const Login_Tailwind_css = () => {
    const [userNa, setUserName] = useState("")
    const [pwd, setPwd] = useState("")
    const navigate = useNavigate();

    const { login } = useAuth();

    const { userName } = useContext(UserContext)
    const { userPwd } = useContext(UserContext)

    const validUser = { email: userName, pwd: userPwd }

    function handleSubmit(e) {
        e.preventDefault();
        if (userNa == userName && userPwd == pwd) {
            login(validUser)
            alert("Login success")
            navigate("/user")
        }
        else {
            alert("Login Failed")
        }
    }
    return (
        <Container fluid className="flex justify-center vw-100 vh-100 items-center fluid">
            <div className="p-5 rounded bg-white w-sm h-80 shadow-2xl">
                <form onSubmit={handleSubmit}>
                    <h3 className="flex justify-center mb-8 my-2 text-4xl text-[#1aa3ff]">Sign-In</h3>
                    <div className="relative mt-4">
                        <FontAwesomeIcon icon={faEnvelope} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input type='email' placeholder='Email' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-8" onChange={(e) => setUserName(e.target.value)}></input>
                    </div>
                    <div className="relative mt-3">
                        <FontAwesomeIcon icon={faKey} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input type="password" placeholder="Password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-4" onChange={(e) => setPwd(e.target.value)} />
                    </div>
                    <div className='grid mt-4'>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-blue-600 w-full py-2 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition rounded"
                        >
                            Submit
                        </motion.button>
                    </div>
                </form>
                <p className="text-center text-sm text-gray-500 mt-2">
                    Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign up</a>
                </p>
            </div>

        </Container>
    )
}
export default Login_Tailwind_css