import React from 'react';
import { Link } from 'react-router-dom';
import shahadat from "../../../shahadat.png"
import "./AboutMe.css"
const AboutMe = () => {
    return (
        <div style={{ marginTop: "60px"}} id='AboutUs'>
             <h1 style={{ color:'white', textAlign: "center"}}>
             --About Me--
        </h1>
       <div className="row align-items-center">
            <div className="col-md-6">
             <div className="text-center">
             <img style={{width:"50%"}} src={shahadat} alt=""/>
             </div>
              <h2 className='text-white text-center'> <span style={{color:'#ff4a57'}}>I'am</span> Shahadat Hossain</h2>
              <p style={{color:"#ffffffb7"}} className='mb-3 text-justify'>I am not a CSE background student, I am a Madrasah background student.I am a front-end web developer.Recently I have finished more than a few  projects or many projects on javascript and react.js. And I can make perfect responsive website design with css, bootstrap4, material ui, flexbox, and grid layout.I also have solid knowledge working with node.js,express.js mongodb,firebase, and heroku.now i am ready and excited for learn redux , and Typescript</p>
             <div className="text-center">
             <Link to='contack-us'><button className='btn btn-primary text-center w-100 text-white'>Hire me</button></Link>
             </div>
           </div>
           <div className="col-md-6" style={{marginTop:"140px"}}> 
             <h3 className='text-white'>My Technology skill</h3>
              <div style={{width:'100px',height:'3px',background:"#ff4a57",marginBottom:"15px"}}></div>
              <div className='technolog'>
                <span>React.js</span>
                <span>Typescript</span>
                <span>javascript</span>
                <span>C</span>
                <span>ES6</span>
                <span>Tailwind CSS</span>
                <span>bootstrap4</span>
                <span>Material-Ui</span><br/><br/>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>mongodb</span>
                <span>firebase</span><br/><br/>
                <span>Heroku</span>
                <span>Vs code</span>
              </div>
                
              <h3 className='text-white mt-4'>I want to work with</h3>
              <div style={{width:'100px',height:'3px',background:"#ff4a57",marginBottom:"15px"}}></div>
              <div className='technolog'>
                <span>React.js</span>
                <span>javascript</span>
                <span>Typescript</span>
                <span>Tailwind css</span>
                <span>Node.js</span>
                <br/><br/>
              </div>

              <h3 className='text-white mt-4'>Looking forward to learn</h3>
              <div style={{width:'100px',height:'3px',background:"#ff4a57",marginBottom:"15px"}}></div>
              <div className='technolog'>
              <span>Redux.js</span>
              <span>TypeScript</span>
                <br/><br/>
              </div>
           </div>
       </div>
        </div>
    );
};

export default AboutMe;