import React from 'react';
import blooging from "../../../download.svg"
import travaling from "../../../blooging.svg"
import mounting from "../../../mounting.svg"
import swiming from "../../../swiming.svg"
import './MyHoby.css'
const MyHoby = () => {
    return (
        <div className="container">
            <h3 className="mt-5 mb-5 text-white text-center">Love To Do </h3>
            <div className="row">
                <div className="col-md-3">
                  <div className="card">
                         <img style={{width:"50%",marginBottom:"20px",margin:"0 auto",marginTop:"10px"}} src={blooging} alt="" />
                      <div className="card-body text-center">
                         <h5> Blogging</h5>
                      </div>
                   </div>
                </div>
                <div className="col-md-3">
                <div className="card">
                         <img style={{width:"50%",marginBottom:"20px",margin:"0 auto",marginTop:"10px"}} src={swiming} alt="" />
                      <div className="card-body text-center">
                         <h5>Swimming</h5>
                      </div>
                   </div>
                </div>
                <div className="col-md-3">
                <div className="card">
                         <img style={{width:"50%",marginBottom:"20px",margin:"0 auto",marginTop:"10px"}} src={travaling} alt="" />
                      <div className="card-body tex-center">
                         <h5>Mountain Hiking</h5>
                      </div>
                   </div>                
                </div>
                <div className="col-md-3">
                <div className="card">
                         <img style={{width:"50%",marginBottom:"20px",margin:"0 auto",marginTop:"10px"}} src={mounting} alt="" />
                      <div className="card-body text-center">
                         <h5>Travelling</h5>
                      </div>
                   </div>               
                 </div>
            </div>
            
        </div>
    );
};

export default MyHoby;
