import React from "react"
import Container from "react-bootstrap/esm/Container";
import '../index.css';
const Dashboard = () => {
  return (
    <Container fluid className="bg-gray-100 vw-100 vh-100 p-0 ">

      {/* Navbar */}
      <Container fluid className="h-15 flex items-center bg-[#1E3A8A] px-4 py-2">
        <h1 className="text-white">Admin</h1>
        <Container className="w-[5px] flex items-center justify-end p-0">
          <div className="w-80 relative">
            <input type='email' placeholder='Search' className="form-control"></input>
            <img 
              src="https://cdn-icons-png.flaticon.com/512/3128/3128287.png" 
              className="h-5 w-5 absolute top-2 right-2"
              alt="search-img"

            ></img>
          </div>
          <div className="item-center ms-4">
            <img src="https://cdn-icons-png.flaticon.com/512/9187/9187604.png" alt="user" className="h-7 w-7 ml-[5px]"></img>
            <h7 className="text-white">Ragul</h7>
          </div>
        </Container>
      </Container>

      {/* Sidebar */}
      <div className="flex flex-col items-start w-48 bg-[#1E293B] h-fit-content py-6">
        <ul className="space-y-4 w-full px-6">
          <li className="bg-[#60A5FA] text-white px-4 py-2 rounded-lg font-semibold">Home</li>
          <li className="li_style">Orders</li>  {/*Extract Component */}
          <li className="li_style">Products</li>
          <li className="li_style">Customer</li>
          <li className="li_style">Payments</li>
        </ul>
      </div>

    </Container>

  )
};

export default Dashboard;
