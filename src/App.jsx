import { useContext, useEffect, useState } from 'react'
import './App.css'
import Login from './Components/Auth/Login'
import Employee from './Components/Dashboard/EmployeeDashboard'
import AdminDasboard from './Components/Dashboard/AdminDasboard'
import { AuthContext } from './Context/AuthProvider'


function App() {
  
  const [user,setUser] = useState(null)
  

  const handleLogin = (email,passwoard)=>{
    if(email == "admin@me.com" && passwoard == "123")
    {
      setUser('admin')
    }
     else if(email == "user@me.com" && passwoard == "123")
    {
      setUser('employee')
    }
    else{
      alert("invailed Email")
    }
  }
 
  return (
    <>
      {!user ?  <Login handleLogin={handleLogin}/>: null}
      {user == 'admin'? <AdminDasboard/>:null}
      {user == 'employee'? <Employee/> : null}
    </>
  )
}

export default App
