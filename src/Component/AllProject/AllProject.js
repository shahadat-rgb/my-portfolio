import React, { useEffect, useState } from 'react';
import HeaderNavbar from '../Home/HeaderNavbar/HeaderNavbar';
import './AllProject.css'
import { fakeData } from '../FakeData/FakeData';
const AllProject = () => {
  const [cart,setCart] = useState([]);
  useEffect(()=>{
    setCart(fakeData);
  },[])

  const filterItem = (cateItme) => {
    const updateItems = fakeData.filter((currElm) => {
      return currElm.catagori === cateItme;
    })
    setCart(updateItems);
  }


    return (
 <div  style={{backgroundColor:'#24273E'}}>
  <div className="container">
      <HeaderNavbar></HeaderNavbar>
      <div className="btn-menu ">
        <button className="btn btn-outline-danger text-white" onClick={()=>filterItem('React')}>React</button>
        <button className="btn btn-outline-danger text-white" onClick={()=>filterItem('Javascript')}>JavaScript </button>
        <button className="btn btn-outline-danger text-white" onClick={()=>filterItem('Bootstrap')}>Bootstrap</button>
        <button className="btn btn-outline-danger text-white" onClick={()=>filterItem('htmlCss')}>Html & Css</button>
        <button className="btn btn-outline-danger text-white" onClick={()=>setCart(fakeData)}>All</button>
      </div>
       <div id="card-header">
       {
           cart.map((cart) => {
             const {img,title,description,githubLink,projectLink} = cart;
             return(
                      <div class="card mb-3">
                           <img class="card-img-top" style={{height:'200px'}} src={img} alt="Card image cap"/>
                        <div class="card-body text-center" style={{background:'#1f2235'}}>
                              <h3 style={{color: "#fff"}}>{title}</h3>
                              <div className="text-justify">
                               <small  style={{color:"#ffffffb7"}}>{description}</small>
                            </div>
                        </div>
                        <div className="card-footer">
                            <a href={githubLink}><button className="btn btn-outline-danger text-white w-100">Github link</button></a> <br /> <br />
                            <a href={projectLink}><button className="btn btn-danger text-white w-100">project link</button></a>
                       </div>
                     </div>
                   ) 
                })
             }

        </div>
      </div> 
      <h5 className="text-center text-white pb-5 pt-5">Design & Created by <span style={{color:'rgb(81, 233, 157)'}}>shahadat hossain</span></h5>
    </div>
    
    );
};

export default AllProject;