import React from "react";
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout:React.FC = ({children})=>{
    return <>
        <Navbar/>
        <div className='flex items-center justify-center min-h-screen p-4 cursor-default pt-28 bg-yellow-50 font-poppins'>
            {children}
        </div> 
        <Footer/>
    </>
}

export default Layout;