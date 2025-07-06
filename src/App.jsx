import { useContext, useEffect, useState } from 'react'
import './App.css'
import Login from './Components/Auth/Login'
import Employee from './Components/Dashboard/EmployeeDashboard'
import AdminDasboard from './Components/Dashboard/AdminDasboard'
import { AuthContext } from './Context/AuthProvider'


function App() {
  
  const [user,setUser] = useState(null)
  const [logeedUsserdata,setLoggedUserdata]=useState(null)

  const Authdata = useContext(AuthContext)
  
  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setUser('admin');
      localStorage.setItem('loggedUserdata', JSON.stringify({ role: 'admin' }));
    } else if (Authdata) {
      const empEmail = Authdata.employees.find(
        (e) => email === e.email && password === e.password
      );
      if (empEmail) {
        setUser('employee');
        setLoggedUserdata(empEmail);
        localStorage.setItem('loggedUserdata', JSON.stringify({ role: 'employee' }));
      } else {
        alert("Invalid Email or Password");
      }
    } else {
      alert("Invalid Email");
    }
  }
 
  return (
    <>
      {!user ?  <Login handleLogin={handleLogin}/>: null}
      {user == 'admin'? <AdminDasboard/>:null}
      {user == 'employee'? <Employee data = {logeedUsserdata}/> : null}
    </>
  )
}

export default App
