import React from 'react'
import '../App.css';
interface TechnologyProps{
  title:string;
  strength:number;
}
const Technologies = ({title, strength}:TechnologyProps) => {
  return (
    <div>
      <div>{title}</div>
      <div>{strength}</div>
      <div className="loading-container">
        <div className="loading-bar" style={{width:`${strength}%`,background:'pink'}}></div>
        </div>
    </div>
  );
}
const Skills = () => {
  return (
    <div>
      <div className="techSet">
        <Technologies title="Frontend Development" strength="10"/>
        <Technologies title="React & TypeScript" strength="50"/>
        <Technologies title="UI/UX Design" strength="90"/>
      </div>
      <div className="skillSet">
        <span>React</span>
        <span>TypeScript</span>
        <span>Tailwind</span>
        <span>Figma</span>
        <span>Node.js</span>
        <span>Git</span>
      </div>
    </div>
  )
}

export default Skills