import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utlils/LocalStorage'

export const  AuthContext = createContext()

const AuthProvider = ({children}) => {
  
  const [userdata,setUserdata]=useState([])

  useEffect(()=>{
     setLocalStorage()
    const {employees,admin} = getLocalStorage()
    setUserdata({employees,admin})
  },[])

  // console.log(userdata);
  

  return (
   <AuthContext.Provider value={userdata} >
    {children}
   </AuthContext.Provider>
  )
}

export default AuthProvider