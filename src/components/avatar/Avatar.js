import React from "react";
import UserLogo from "./user.svg";

// https://www.flaticon.com/svg/vstatic/svg/633/633780.svg?token=exp=1613853922~hmac=19186cfb161eb9453cb24fc54025c828
function Avatar(){
    return(
        <div className="avatar">
            <img className="image" src={UserLogo} alt={"User Image"} />
        </div>
    )
}

export default Avatar;