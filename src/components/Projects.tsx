import React from 'react'
interface OneProjectProps{
  title:string;
  info:string;
  tech:string[];
}
const OneProject=({title,info,tech}:OneProjectProps)=>{
  return(
    <div className='projectInfo'>
      <h3>{title}</h3>
      <p>{info}</p>
      <div>
        {tech.map((item)=>(
          <span key={item} className='projectTech'>{item}</span>
        ))}
      </div>
    </div>
  );
};
const Projects = () => {
  return (
    <div className='project-container'>
      <OneProject 
      title="E-Commerce Platform" 
      info="Built a full-stack e-commerce solution with real-time inventory management and payment integration"
      tech={['React','Node.js','PostgreSQL']}
      />
      <OneProject 
      title="E-Commerce Platform" 
      info="Built a full-stack e-commerce solution with real-time inventory management and payment integration"
      tech={['React','Node.js','PostgreSQL']}
      />
      <OneProject 
      title="E-Commerce Platform" 
      info="Built a full-stack e-commerce solution with real-time inventory management and payment integration"
      tech={['React','Node.js','PostgreSQL']}
      />
    </div>
  );
}

export default Projects