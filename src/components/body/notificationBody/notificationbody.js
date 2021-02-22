import React from "react";
import Workingsvg from "./undraw_dev_focus_b9xo.svg"

function notificationbody(){
    return(
        <div className="notification-container">
        <div className="main-body">
        Good Morning <strong>Kathy!</strong>
        </div>
        
        <div><img className="notification-svg" src={Workingsvg} alt={"SVG"} /></div>
        </div>
        
    )
}

export default notificationbody;