import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from "./Context/useAuth";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
     
        {/* <Login /> */}
        {/* <Login_Bootstrap /> */}
        {/* <Dashboard/> */}
        {/* <Dashboard1/> */}
        <App />
      
    </AuthProvider>
  </StrictMode>,
)
