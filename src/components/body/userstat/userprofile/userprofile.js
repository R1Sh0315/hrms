import React from "react";
import Avatar from "../../../avatar/Avatar";
import {FiPhoneCall} from "react-icons/fi";
import {RiMessage2Line} from "react-icons/ri";
import {BsThreeDots} from "react-icons/bs";

function userProfile() {
    return(
    <div>
    <div className="profile-container">
        <div>
            <div className="avatar-position">
            <Avatar/>
            </div>
        </div>

        <div className="name-daitails">
            <div className="name" >
                Kathy Walker
            </div>
            {/* <br /> */}
            <div className="designation">
                H.R Manager
            </div>
        </div>
        </div>
        <div class="function">
            <div className="icon"><FiPhoneCall className="mainicon"/></div>
            <div className="icon"><RiMessage2Line className="mainicon" /></div>
            <div className="icon"><BsThreeDots className="mainicon" /></div>
        </div>
    </div>
    )
}

export default userProfile;