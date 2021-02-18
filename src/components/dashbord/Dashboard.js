import React from "react";

const DasboardLayout=({children})=>{
    return(
        <div className="dashboard-layout">
            <nav className="side-nav-bar">
                this is side nav bar | 
            </nav>
            <div className="main-container">
               | here are children | 
                {children} 
            </div>
        </div>
    )
}

export default DasboardLayout;