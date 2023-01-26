import React from 'react';

import { educations } from '../database';

export default () => {  
  
  return (
    <>
      {educations.map((education, index) => {
        const { title, status, description } = education;

        return (
          <>
            <h3>{title}</h3>
            <p>{status}</p>
            <p>{description}</p>
          </>
        )
      })}
    </>
  );
}