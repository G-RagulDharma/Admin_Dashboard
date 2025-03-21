import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard1 from "./Components/Dashboard1";
import CreateContext from "./Context/CreateContext";
import UserForm from "./Components/UserForm";

function App() {
  return (
    
      <Router>
        <Routes>
          <Route path="/" element={<CreateContext />} />
          <Route path="/Dashboard1/*" element={<Dashboard1 />} />
          <Route path="/UserForm" element={<UserForm />} />

          {/* <Route path="/User_DataTable" element={<User_DataTable />} /> */}
          {/* <Route path="/Login_Tailwind_css" element={<Login_Tailwind_css />} /> */}
        </Routes>
      </Router>
    
  );
}

export default App;