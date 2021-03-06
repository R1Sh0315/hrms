import React from "react";
import authenticate from "../../hoc/authentication";

function Recruitment(){
    return(
    <div>
        This is Recruitment page
    </div>);
}

export default authenticate(Recruitment);