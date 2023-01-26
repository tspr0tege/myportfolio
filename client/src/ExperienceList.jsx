import React from 'react';

import { experiences } from '../database';

export default () => {
  
  
  return (
    <>
      {experiences.map((experience, index) => {
        const { 
          title, 
          company, 
          time_period, 
          tech_used, 
          description, 
          highlight } = experience;

        return (
          <>
            <h3>{title}</h3>
            <p>{company}</p>
            <p>{time_period}</p>
            {/* tech_used */}
            {(tech_used.length > 0) && <>
              {tech_used.map((tech, index) => {
                return <></>
              })}
            </>}
            <p>{description}</p>
            <h4>What I'm most proud of:</h4>
            <p>{highlight}</p>
          </>
        )
      })}
    </>
  );
}
