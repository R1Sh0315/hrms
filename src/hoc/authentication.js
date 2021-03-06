function authenticate(component){
    const acessToken=localStorage.getItem('jwtTokenKey')
    //api call - validate the tocken
    const isloggedIn=acessToken?true:false;
    if(isloggedIn){
        return component
    }else{
        return()=>{
            window.location.replace('/login');
            return(<div>Unauthorised</div>)
        }
    }
}
 
export default authenticate;