import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BsPeople } from "react-icons/bs"
import { HiOutlineDocumentReport } from "react-icons/hi";
import { RiCalendarCheckLine, 
         RiSettings3Line, 
         RiFolderChartLine 
        } from "react-icons/ri";
import vector from "../../style/img/team-spirit.svg"

const navItems=[
    {
        name:"Dashboard",
        icon:<AiOutlineHome />,
        link:"/",
    },
    {
        name:"Recruitment",
        icon:<BsPeople />,
        link:"/recruitment",
    },
    {
        name:"Onboarding",
        icon:<HiOutlineDocumentReport />,
        link:"/onboarding",
    },
    {
        name:"Report",
        icon:<RiFolderChartLine />,
        link:"/report",
    },
    {
        name:"Calender",
        icon:<RiCalendarCheckLine />,
        link:"/calender",
    },
    {
        name:"Setting",
        icon:<RiSettings3Line />,
        link:"/setting",
    },
]



const DasboardLayout=({children})=>{
    const location =useLocation()
    return(
        <div className="dashboard-layout">
            <nav className="side-nav-bar">
                <div className="logo-container">
                    <h3>CompanyName HR</h3>
                </div> 

                <div className="nav-container">
                    {navItems.map((navItem, index)=>(
                        <Link key={index} to={navItem.link}>
                
                            <div  className={`nav-item ${navItem.link === location.pathname?'selected':''}`}>
                                {navItem.icon}
                                <label className="item-name">{navItem.name}</label>
                            </div>
                    
                        </Link>
                    ))}
                </div>
                
                <div className="image-container">
                    <vector />                
                </div>
            </nav>
            
            <div className="main-container">
                {children} 
            </div>
        
        </div>
    )
}

export default DasboardLayout;