import React, { createContext, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utlils/LocalStorage'

export const  AuthContext = createContext()

const AuthProvider = ({children}) => {
  
  const [userdata,setUserdata]=useState(null)

  const {employees,admin} = getLocalStorage()
  setUserdata({employees,admin})
  

  return (
   <AuthContext.Provider value={userdata}>
    {children}
   </AuthContext.Provider>
  )
}

export default AuthProvider