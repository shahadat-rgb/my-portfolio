import React from 'react';
import "./App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AboutMyDetails from './Component/AboutMyDetails/AboutMyDetails';
import AllBlog from './Component/AllBlog/AllBlog';
import AllProject from './Component/AllProject/AllProject';
import ContackUs from './Component/ContackUs/ContackUs';
import Home from './Component/Home/Home';
function App() {
  return (
      <Router>
        <Switch>
          <Route exact path='/'>
           <Home></Home>
          </Route>
          
          <Route exact path='/home'>
           <Home></Home>
           
          </Route>

          <Route exact path='/all-project'>
            <AllProject></AllProject>
          </Route>

          <Route exact path='/all-blog'>
                <AllBlog></AllBlog>
          </Route>

          <Route exact path='/about-me'>
             <AboutMyDetails></AboutMyDetails>
          </Route>

          <Route exact path='/contack-us'>
            <ContackUs></ContackUs>
          </Route>

        </Switch>
      </Router>
  );
}

export default App;
