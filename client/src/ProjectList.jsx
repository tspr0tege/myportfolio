import React from 'react';
import { Paper, Box, Button, ButtonGroup } from '@mui/material';

import { projects } from '../database';

const linksBoxStyle = {
  display: 'flex',
  flexDirection: 'column',
  '& > *': {
    m: 1,
  },
};

export default () => {  
  
  return (
    <div id="project-list">
      {projects.map((project, index) => {
        const { 
          title,
          type,
          status,
          links,
          tech_used, 
          description, 
          highlight } = project;

        return (
          <Paper key={index} elevation={3}>
            <Box sx={{p: 2}}>
              <h3>{title}</h3>
              <p>{type}</p>
              <p>{status}</p>
              {/* links */}
              {(links.length > 0) && 
              <Box sx={linksBoxStyle}>
                <ButtonGroup variant="text" aria-label="text button group">
                  {links.map((link, i) => {
                    const { name, url } = link;
                    return (
                      <a key={i} href={url} target="_blank">
                        <Button>{name}</Button>
                      </a>
                    );
                  })}
                </ButtonGroup>
              </Box>}
              {/* tech_used */}
              {(tech_used?.length > 0) && 
              <ul>Tech Used:
                {tech_used.map((tech, index) => {
                  return <li key={index}>{tech}</li>
                })}
              </ul>}
              <pre>{description}</pre>
              <h4>What I'm most proud of:</h4>
              <p>{highlight}</p>
            </Box>
          </Paper>
        )
      })}
    </div>
  );
}
