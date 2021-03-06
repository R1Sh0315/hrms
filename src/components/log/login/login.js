import React from "react";

const Login=(props)=>{
    const loginClickHandler=()=>{
        // on click API call is made and return jwt token
        //takingin hard coded data for now 
        const jwtToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
        localStorage.setItem("jwtTokenKey", jwtToken)
        // console.log(jwtToken);
        // props.setIsLoggedIn(true);
        props.history.push('/')
    }
    return(
        <div className="container">
            <div className="login-box">
                <div >Username :<input className="posi" /> </div>
                <div >Password :<input className="posi" /> </div>
                <button className="submit-btn" onClick={loginClickHandler} >Submit</button>
            </div>
        </div>
    )
}

export default Login;