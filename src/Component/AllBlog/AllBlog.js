import React, { useEffect, useState } from 'react';
import { BlogData } from '../BlogData/BlogData';
import HeaderNavbar from '../Home/HeaderNavbar/HeaderNavbar';

const AllBlog = () => {
  const [blog,setBlog] = useState([]);
  useEffect(()=>{
             setBlog(BlogData)
  },[])

  return (
        <div style={{backgroundColor:'#24273E'}}>
          <HeaderNavbar></HeaderNavbar><br/> <br/>
     <div className="container">
       <h1 className="text-center text-white mt-5 mb-4">--All Blog--</h1>
     <div id="card-header">
       {
             blog.map((blog) => {
             const {img,title1,title2,description,blogLink} = blog;
             return(
                    <div class="card mb-3">
                            <img class="card-img-top" src={img} alt="Card image cap"/>
                            <div class="card-body" style={{background:' #1f2235'}}>
                            <h4 style={{color: "white",textAlign:"center"}}>{title1} {title2}</h4>
                            <div className="text-justify mt-3">
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
     <h5 className="text-center text-white pb-5 pt-5">Design & Created by <span style={{color:'rgb(81, 233, 157)'}}>shahadat hossain</span></h5>
    </div>
       </div>
    );
};

 export default AllBlog;

