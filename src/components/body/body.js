import React from "react";
import NotificationBody from "./notificationBody/notificationbody";
import Calendar from "./calender/calendedr";
import RecruiterStat from "./recruiterstat/recruiterstat";
import UserStat from "./userstat/userstat"

function body(){
    return(
        <React.Fragment>
            <div className="notification-cal-tab">
                <NotificationBody />
                <Calendar />
               
            </div>
            <div className="rec-use-tab">
            <RecruiterStat />
            <UserStat />
            </div>
        </React.Fragment>
    )
}

export default body;