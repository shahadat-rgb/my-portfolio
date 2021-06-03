import React from 'react';
import AboutMe from './AboutMe/AboutMe';
import Contack from './Contack/Contack';
import Header from './Header/Header';
import HeaderNavbar from './HeaderNavbar/HeaderNavbar';
import Project from './Project/Project';
import Blog from './Blog/Blog';
import MyHoby from './MyHoby/MyHoby';
const Home = () => {
    return (
        <div style={{backgroundColor:'#24273E'}}>

          <div className="container">
             <HeaderNavbar></HeaderNavbar>
               <Header></Header>
               <Project></Project>
                 <Blog></Blog>
               <AboutMe></AboutMe>
               <MyHoby></MyHoby>
               <Contack></Contack>
          </div>
        </div>
    );
};

export default Home;