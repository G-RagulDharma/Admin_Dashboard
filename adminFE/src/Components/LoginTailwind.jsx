import React, { useState, useContext } from "react";
import Container from "react-bootstrap/esm/Container";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from "../Context/CreateContext";
import { useAuth } from "../Context/useAuth";
import { useNavigate } from "react-router-dom";
import Dashboard1 from "./Dashboard1";

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
            navigate("/Dashboard1")
        }
        else {
            alert("Login Failed")
        }
    }
    return (
        <Container fluid className="flex justify-center items-center min-h-screen bg-[#F4F7FC]">
            <div className="p-6 rounded-lg bg-white w-96 shadow-xl">
                <form onSubmit={handleSubmit}>
                    <h3 className="text-2xl font-semibold text-[#1E293B] text-center mb-6">Sign-In</h3>
                    <div className="relative mt-4">
                        <FontAwesomeIcon icon={faEnvelope} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input type='email' placeholder='Email' className="w-full p-3 border border-[#E5E7EB] rounded-lg mb-4 focus:ring-[#1E40AF] focus:border-[#1E40AF]" onChange={(e) => setUserName(e.target.value)}></input>
                    </div>
                    <div className="relative mt-3">
                        <FontAwesomeIcon icon={faKey} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input type="password" placeholder="Password" className="w-full p-3 border border-[#E5E7EB] rounded-lg mb-4 focus:ring-[#1E40AF] focus:border-[#1E40AF]" onChange={(e) => setPwd(e.target.value)} />
                    </div>
                    <div className='grid mt-4'>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full py-3 bg-[#1E40AF] text-white font-medium rounded-lg shadow-md hover:bg-[#1D4ED8] transition"
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