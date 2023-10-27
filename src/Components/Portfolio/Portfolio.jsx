import React from "react";
import "./Portfolio.css";
import { projectsData } from "./Data.js";
import { projectNav } from "./Data.js";
import { useState } from "react";
import { useEffect } from "react";
// import {projectDesc} from './Data.js'

const Portfolio = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  // console.log({projects});
  const [active, setActive] = useState(0);
  // console.log({ projectNav });

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter(
        (project) => project.category === item.name
      );
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent });
    setActive(index);
  };

  return (
    <section className="work container  section" id="work">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">My recent works</span>

      <div className="work__filters">
        {projectNav.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={`${active === index ? "active-work" : ""} work__item`}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>

     
        <div className="work__container ">
        {projects?.map(({ id, image, title, category,name,header,desc,tech,link,github }) => {
          return (
            
            <div className="work__item-main" key={id}>

               <div className="work__item-1">
               <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>
              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <a
                href={link}
                className="work__button-live"
                rel="noreferrer"
                target="_blank"
              >
                <i className="uil uil-link work__button-icon"></i>
              </a>

              <a
                href={github}
                className="work__button-github"
                rel="noreferrer"
                target="_blank" 
               
              >
                <i className="uil uil-github work__button-icon"></i>
              </a>        
            </div> 
            </div>


               <div className="work__item-2">
                 <h1 className="work__name">{name}</h1>
        
         
              {desc?.map((d)=> 
              <li className="work__desc" key={id}>{d.d}</li>
              )}
                 {tech?.map((t)=> (
                  <button  key={id} className="work__tech-btn">{t}</button>
                  ))}     
           
               </div>

           </div>

          )
          })}
          <div >
         
              




              </div>
        </div>
        
    </section>
  );
};

export default Portfolio;
