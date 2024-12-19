


import { useSelector } from "react-redux"
import { RootState } from "../../../reduxKit/store"
function AdminHomePage() {

  const {role} =useSelector((state:RootState)=>state.auth)

  return (
    <div className="flex flex-col min-h-screen bg-gray-200">    
    <header className="w-full bg-gray-800 text-white">

        {/* < AdminSidebar/> */}

      </header>

      <h1>this is page and role is {role}</h1>
     
     

    </div>
  )
}

export default AdminHomePage
