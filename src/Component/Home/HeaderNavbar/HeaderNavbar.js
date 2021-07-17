import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../logo.png"
import './HeaderNavbar.css'
const HeaderNavbar = () => {  

    return (  
        <div>
            <Navbar fixed="top" b expand="lg" style={{background:"#1f2235"}}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-white'  />
                <Navbar.Collapse id="basic-navbar-nav">
                   <img style={{width:"200px"}} src={logo} alt="" />
                    <Nav className="ml-auto">
                    <Nav.Link  className="my-nav-link home-link">
                    <Link style={{textDecoration:'none',color:`${window.location.pathname==='/home' ? '#ff4a57':'white'}`}} to={`/home`}>
                           <h5> Home</h5>
                       </Link>
                    </Nav.Link>
                    <Nav.Link  className="my-nav-link">
                    <Link style={{textDecoration:'none',color:`${window.location.pathname==='/about-me' ? '#ff4a57':'white'}`}} to={`/about-me`}>
                           <h5>About Me</h5>
                       </Link>
                    </Nav.Link>
                    <Nav.Link  className="my-nav-link">
                    <Link style={{textDecoration:'none',color:`${window.location.pathname==='/all-project' ? '#ff4a57':'white'}`}} to={`/all-project`}>
                           <h5> Projects</h5>
                       </Link>
                    </Nav.Link>
                    <Nav.Link className="my-nav-link">
                        <Link style={{textDecoration:'none',color:`${window.location.pathname==='/all-blog' ? '#ff4a57':'white'}`}} to={`/all-blog`}>
                             <h5>Blog</h5>
                        </Link>
                    </Nav.Link>
                    
                    <Nav.Link  className="my-nav-link">
                    <Link style={{textDecoration:'none',color:`${window.location.pathname==='/contack-us' ? '#ff4a57':'white'}`}} to={`/contack-us`}>
                           <h5> Contact</h5>
                    </Link>
                    </Nav.Link>
                          <a href="https://drive.google.com/file/d/1MTauy6a0tw8HKa9byT2rtkWrU8n7iKNk/view?usp=sharing"><button class="btn btn-outline-danger text-white my-2 my-sm-0" type="submit">Resume</button> </a>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default HeaderNavbar;