import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard1 from "./Components/Dashboard1";
import Login_Tailwind_css from "./Components/Login_Tailwind_css"
import User_DataTable from "./Components/User_DataTable";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Dashboard1 />} />
        {/* <Route path="/User_DataTable" element={<User_DataTable />} /> */}
       {/* <Route path="/Login_Tailwind_css" element={<Login_Tailwind_css />} /> */}
      </Routes>
    </Router>
  );
}

export default App;