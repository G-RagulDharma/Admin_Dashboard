import { useContext, createContext, useState } from "react";

const AuthContext = createContext(null); //create context for Auth

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        return localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
    });

    const login = (userData) => {
        console.log("User logging in:", userData);
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

//custom hook
export const useAuth = () => {
    return useContext(AuthContext);
}