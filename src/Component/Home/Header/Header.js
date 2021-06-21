import React from "react";
import './Header.css'
import shahadat from "../../../shahadat.png";
// import Typical from "react-typical";
import { FaFacebookSquare, FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import resume from "./Shahadat Hossain Resumi.pdf";
import { Link } from "react-router-dom";
const Header = () => {
  // const expertise = [
  //   "I am ",
  //   2000,
  //   "I am a Mern Stack Developer",
  //   5000,
  //   "I am a Front-end web developer",
  //   5000
  // ];
  return (
    <div className="headerBackGround">
    <div className="container">
      <div className="row">
        <div className="col-md-7" style={{ marginTop: "170px" }}>
          <h3 className='text-danger'>Hello, I am</h3>
            <h1 className="text-white">Shahadat Hossain</h1>
          {/* <Typical
           className="text-danger mb-3 h3"
            steps={expertise}
            loop={Infinity}
            wrapper="p"
          /> */}
          <h6 className="mb-3 text-justify" style={{color:"#ffffff96",paddingBottom:"20px"}}>
            I am a React and JavaScript lover. Recently I have finished more than
            a few projects or many projects on JavaScript and react.js. if you want to know more about my information, so please click on the about me button.
         
          </h6>
          <a
              className="icon"
            href="https://github.com/shahadat-rgb"
          >
            <FaGithub></FaGithub>
          </a>
          <a
             className="icon"
            href="https://www.linkedin.com/in/md-shahadat-hossain-0134b11ab/"
          >
            <FaLinkedin/>
          </a>
          <a
            className="icon"
            href="https://web.facebook.com/profile.php?id=100027084285816"
          >
            <FaFacebookSquare></FaFacebookSquare>

          </a>
          <a
            className="icon"
            href="https://mdshahadathossain10200.medium.com/"
          >
            <FaMedium></FaMedium>

          </a>
        
          <br />
          <br />
         <div className="mt-3">
          <Link to="/about-me">
             <button
              class="btn btn-danger my-2 my-sm-0 text-white mr-4"
              type="submit"
            >
              About Me
            </button>
          </Link>
          <a href={resume} download="Shahadat Hossain Resumi.pdf">
            <button className="btn btn-outline-danger text-white pd-4">
               Download CV
            </button>
          </a>
          </div>
        </div>
        <div className="col-md-5">
          <img
            style={{ width: "100%", marginTop: "100px"}}
            src={shahadat}
            alt=""
          />
        </div>
      
      </div>
    </div>
    </div>
  );
};

export default Header;
