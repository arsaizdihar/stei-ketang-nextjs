import React from "react";

const Navbar:React.FC = ()=>{
    return( 
    <header className="fixed z-30 w-full px-4 duration-300 shadow-md font-primary bg-primary">
        <nav className="container px-4 mx-auto lg:py-2">
            <div className="flex items-center justify-center h-16">
                <h1 className="font-light text-white font-primary">Ini Buat Navbar</h1>
            </div>
        </nav>
    </header>
    );
}

export default Navbar;