
import React,{Fragment} from "react"
import { AdminLogin } from "./components/forms/admin/login"

import { SignUp } from "./components/pages/welcome";
import { Routes, Route, } from "react-router-dom";
import { UserLogin } from "./components/forms/user/uLogin";
import { UserRegister } from "./components/forms/user/uRegister";

import { Toaster } from "react-hot-toast"


export const App:React.FC = React.memo(()=>{


  return ( 
    <Fragment>
        <Toaster position="top-center" />
        <Routes>
        <Route path="/" element={<SignUp/>} /> 
        <Route path="/adminLogin" element={<AdminLogin/>} /> 
        <Route path="/userLogin" element={<UserLogin/>} /> 
        <Route path="/userRegister" element={<UserRegister/>} /> 
        <Route path="/adminHomePage" element={<AdminLogin/>} /> 
   
      </Routes>
    </Fragment>
  )

})