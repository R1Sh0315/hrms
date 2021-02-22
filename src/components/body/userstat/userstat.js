import React from "react";
import UserProfile from "./userprofile/userprofile";
import UserDetails from "./userdetails/userdetails";

function userstat(){
    return(
        <div className="user-container">
            <div>
                <UserProfile />
            </div>
            <div className="user-details-container">
                < UserDetails />
            </div>
        </div>
    )
}

export default userstat;