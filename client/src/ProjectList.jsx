import React from 'react';

import { projects } from '../database';

export default () => {  
  
  return (
    <>
      {projects.map((project, index) => {
        const { 
          title,
          type,
          completed,
          links,
          tech_used, 
          description, 
          highlight } = project;

        return (
          <>
            <h3>{title}</h3>
            <p>{type}</p>
            <p>Completed: {completed}</p>
            {/* links */}
            {(links.length > 0) && <>
              {links.map((link, index) => {
                const { name, url } = link;
                return (<>
                  <a href={url}>{name}</a><br/>
                </>);
              })}
            </>}
            {/* tech_used */}
            {(tech_used.length > 0) && 
            <ul>
              {tech_used.map((tech, index) => {
                return <li>{tech}</li>
              })}
            </ul>}
            <p>{description}</p>
            <h4>What I'm most proud of:</h4>
            <p>{highlight}</p>
          </>
        )
      })}
    </>
  );
}