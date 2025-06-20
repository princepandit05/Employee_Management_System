import React, { createContext, useState } from 'react'
import { getLocalStorage } from '../utlils/LocalStorage'

export const  AuthContext = createContext()
const [empdata,setEmpdata] = useState(null)
const AuthProvider = ({children}) => {

  const {employees,admin} = getLocalStorage()
  setEmpdata({employees,admin})

  console.log("======================>",empdata);
  

  return (
   <AuthContext.Provider  value={empdata}>
    {children}
   </AuthContext.Provider>
  )
}

export default AuthProvider