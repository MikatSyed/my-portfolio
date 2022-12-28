import React from "react";
import "./Portfolio.css";
import {projectsData} from "./Data.js";
import {projectNav} from "./Data.js";
import { useState } from "react";
import { useEffect } from "react";

const Portfolio = () => {
  const [item, setItem] = useState({name: 'all'});
  const [projects,setProjects] = useState([]);
  const [active,setActive] = useState(0);
console.log({projectNav});

  useEffect(() => {
    if(item.name === "all"){
        setProjects(projectsData);
    } else {
        const newProjects = projectsData.filter((project)=> project.category === item.name);
        setProjects(newProjects);       
    }  
  },[item])

  const handleClick = (e, index) => {
    setItem({name: e.target.textContent})
    setActive(index)
  }

  return (
    <section className="work container  section" id="work">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">My recent works</span>


      <div className="work__filters">
         {
            projectNav.map((item,index)=> {
                return (
                    <span onClick={(e)=> {handleClick(e,index)}} className={`${active === index ? 'active-work':''} work__item`} key={index}>{item.name}</span>
                )
            })
         }
      </div>


      <div className="work__container  grid">
        {projects.map(({ id, image, title, category }) => {
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>
              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <a
                href="https://github.com"
                className="work__button-live"
                rel="noreferrer"
                target="_blank"
              >
                <i className="uil uil-link work__button-icon"></i>
              </a>

              <a
                href="https://github.com"
                className="work__button-github"
                rel="noreferrer"
                target="_blank" 
               
              >
                <i className="uil uil-github work__button-icon"></i>
              </a>
             
            
            
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
