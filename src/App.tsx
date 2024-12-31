
import React,{Fragment} from "react"
import { AdminLogin } from "./components/forms/admin/login"

import { SignUp } from "./components/pages/welcome";
import { Routes, Route, } from "react-router-dom";
import { UserLogin } from "./components/forms/user/uLogin";
import { UserRegister } from "./components/forms/user/uRegister";
// import { mainRegistration } from "./components/forms/user/mainRegistration";
import { MainRegistration } from "./components/forms/user/mainRegistration";
import { Toaster } from "react-hot-toast"
import { Error } from "./Error";
import { Loading } from "./Loading";
import { MainVerification } from "./components/forms/user/mainVerification";
import { MainDetails } from "./components/forms/user/mainDetails";
 


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
        <Route path="/error" element={<Error/>} /> 
        <Route path="/loading" element={<Loading/>} /> 
        <Route path="/mainVerification" element={<MainVerification/>} />
        <Route path="/mainRegistration" element={<MainRegistration />} />
        <Route path="/mainDetails" element={<MainDetails/>} />
      </Routes>
    </Fragment>
  )

})