import React, { useEffect, useState } from 'react';
import './Project.css'
import { Link } from 'react-router-dom';
import { ProjectMenu } from '../../ProjectMenu/ProjectMenu';
const Project = () => {
  const [project,setProject] = useState([])
  useEffect(()=>{
          setProject(ProjectMenu)
  },[])
    return (
      <div style={{ marginTop: "60px"}} id="projects">
        <h2 style={{marginBottom:"50px",color:"white" }}>
          Some Of My Project -----||<Link to='/all-project'> <button class="btn btn-outline-danger text-white my-2 my-sm-0" type="submit">See More project</button>  </Link>
        </h2>

        <div id="card-header">
       {
           project.map((project) => {
             const {img,title,description,githubLink,projectLink} = project;
             return(
                      <div class="card mb-3 project-image">
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
    );
};

export default Project;
