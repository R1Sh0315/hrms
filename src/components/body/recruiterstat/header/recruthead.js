import React from "react";
import {BsThreeDots} from "react-icons/bs";

const recruterDetails=[
    {
        name:"Mary G Loius",
        designation:"Project Manager",
        status:"Practical Round",
        moredetail:<BsThreeDots />,
    },
    {
        name:"Vince Jacob",
        designation:"UI/UX Designer",
        status:"Practical Round",
        moredetail:<BsThreeDots />,
    },
    {
        name:"Neil Brain",
        designation:"React Developer",
        status:"Final Round",
        moredetail:<BsThreeDots />,
    },
    {
        name:"Jaidev Biswas",
        designation:"UI/UX Designer",
        status:"HR Round",
        moredetail:<BsThreeDots />,
    }
]

const recrutheading=()=>{
    return(
        <div>
            <div className="recrut-head">
                <div className="heading" >
                    <h2>Recruitment Progress</h2>
                </div>

                <div className="viewall">
                    <button className="view-all-recruter-btn" >View All</button>
                </div>
            </div>
            <div>
                <div className="list-header">
                    <div className="sub-list-head">Full Name</div>
                    <div className="sub-list-head">Designation</div>
                    <div className="sub-list-head">Satatus</div>
                    <div className="sub-list-head"></div>
                </div>
                {/* <div className="recruter-list" > */}
                {recruterDetails.map((recruterDetail, index)=>(
                <div className="recruter-list" key={index} >
                    <div className="recrut-det">{recruterDetail.name}</div>
                    <div className="recrut-det">{recruterDetail.designation}</div>
                    <div className="recrut-det">{recruterDetail.status}</div>
                    <div className="for-more">{recruterDetail.moredetail}</div>
                </div>
                ))}
                </div>
            </div>
        // </div>
    )
}

// function recrutheading(){}
export default recrutheading;