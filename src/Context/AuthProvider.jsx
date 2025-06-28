import React, { createContext, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utlils/LocalStorage'

export const  AuthContext = createContext()

const AuthProvider = ({children}) => {
  const setdata = setLocalStorage()
  console.log(setdata);
  
  const data = getLocalStorage()

  console.log("=================>",data)
  return (
   <AuthContext.Provider>
    {children}
   </AuthContext.Provider>
  )
}

export default AuthProvider