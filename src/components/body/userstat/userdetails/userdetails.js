import React from "react";

class userdetails extends React.Component{
    constructor(props){
        super(props);
        this.state={
            dateOfJoining: "15-April-2015",
            projectStat: "35 Active",
            accompishedProject:"125",
        }
    }
    
    render(){
        return(
            <div>
            <div className="detail-font">
                <div className="Qstate">
                    Joined Date :
                </div>
                <div className="Astate"> 
                    {this.state.dateOfJoining}</div>
                </div>

            <div className="detail-font">
                <div className="Qstate">
                    Projects :
                </div>
                <div className="Astate"> 
                    {this.state.projectStat}
                </div>
            </div>

            <div className="detail-font">
                <div className="Qstate">
                    Accompishments :
                </div>
                <div className="Astate"> 
                    {this.state.accompishedProject}
                </div>
            </div>
                

            <button className="btn-view-more">View More</button>
            </div>
        )
    }
}
export default userdetails;