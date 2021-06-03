import React from 'react';
import AboutMe from './AboutMe/AboutMe';
import Contack from './Contack/Contack';
import Header from './Header/Header';
import HeaderNavbar from './HeaderNavbar/HeaderNavbar';
import Project from './Project/Project';
import Blog from './Blog/Blog';
const Home = () => {
    return (
        <div style={{backgroundColor:'#24273E'}}>

          <div className="container">
             <HeaderNavbar></HeaderNavbar>
               <Header></Header>
               <Project></Project>
                 <Blog></Blog>
               <AboutMe></AboutMe>
               <Contack></Contack>
          </div>
        </div>
    );
};

export default Home;