import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BlogFakeData } from '../../BlogFakeData/BlogFakeData';
import HeaderNavbar from '../HeaderNavbar/HeaderNavbar';
const Blog = () => {
  const [blogData,setBlogData] =useState([])
  useEffect(()=>{
    setBlogData(BlogFakeData)
  },[])
    return (
        <div>
                <HeaderNavbar></HeaderNavbar><br/> 
         <h2 style={{marginTop:'50px'}}  className='pb-3'> <span  className='text-white pl-2'>All Blog</span><span className='text-white'> ------------------|| <Link to='/all-blog'> <button class="btn btn-outline-danger text-whtie my-2 my-sm-0" type="submit">See More Blog</button>  </Link> </span></h2>
         <div id="card-header">
       {
             blogData.map((blog) => {
             const {img,title1,title2,description,blogLink} = blog;
             return(
                    <div class="card mb-3">
                            <img class="card-img-top" src={img} alt="Card image cap"/>
                       <div class="card-body" style={{background:' #1f2235'}}>
                            <h4 style={{color: "white",textAlign:"center"}}>{title1} {title2} </h4>
                            <div className="text-justify">
                               <small  style={{color:"#ffffffb7"}}>{description}</small>
                            </div>
                      </div>
                      <div className="card-footer">
                         <a href={blogLink}> <button  className='btn btn-danger' style={{width:'100%',borderRadius:'5px',color:'white'}}>Read</button></a>
                      </div>
                  </div>
                   ) 
                })
             }

        </div>      
  </div>

    );
};

export default Blog;