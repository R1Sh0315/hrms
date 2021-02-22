import React from 'react';
import Input from './input/input';
import Avatar from "../avatar/Avatar";
import {FiSearch} from "react-icons/fi"
import {RiSendPlane2Line, RiNotification3Line} from "react-icons/ri"

const Header =({pageHeader})=>{
    return(
        <header className="header">
            <div className="page-header">
                <h1>{pageHeader}</h1>
            </div>
            <div style={{display:"flex", justifyContent:"space-between", width:"65%"}}>
            <div className="action-container">
                <Input placeholder="Search..." icon={<FiSearch />} classes={{inputIconContainer:"hover-action"}} />
                <RiSendPlane2Line className="action-icon" />
                <RiNotification3Line className="action-icon" />
            </div>
            <div className="profile-container">
                <label>Kathy Walker</label>
                <Avatar/>
            </div>
            </div>
        </header>)
}

export default Header;