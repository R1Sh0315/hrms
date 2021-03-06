import React, {useEffect} from "react";
import Header from "../../components/header/Header";
import authenticate from "../../hoc/authentication";

function Home(props){
  useEffect(() => {
    if(!props.isloggedIn){
      props.history.push('/login')
    }
  }, [props.isloggedIn])
    return(
    <div className="home">
      <Header pageHeader="DashBoard"/>
      {/* <Body /> */}
    </div>);
}

export default authenticate(Home);