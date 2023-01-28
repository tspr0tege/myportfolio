import React from 'react';
import { Paper, Box, Button, ButtonGroup } from '@mui/material';

// import { projects } from '../database';

const linksBoxStyle = {
  display: 'flex',
  flexDirection: 'column',
  '& > *': {
    m: 1,
  },
};

export default ({ detailObject }) => {

  return (
    <Paper elevation={3}>
    <Box sx={{p: 2}}>
      {!!detailObject?.title && <h3>{detailObject.title}</h3>}

      {!!detailObject?.type && <p>{detailObject.type}</p>}

      {!!detailObject?.company && <p>{detailObject.company}</p>}

      {!!detailObject?.status && <p>{detailObject.status}</p>}

      {(detailObject?.links?.length > 0) && <LinksBox links={detailObject.links} />}

      {(detailObject?.tech_used?.length > 0) && <TechList list={detailObject.tech_used} />}

      {!!detailObject?.description && <pre>{detailObject.description}</pre>}

      {!!detailObject?.highlight && <>
        <h4>What I'm most proud of:</h4>
        <p>{detailObject.highlight}</p>
      </>}
    </Box>
    </Paper>
  );
}

const LinksBox = ({ links }) => (
  <Box sx={linksBoxStyle}>
    <ButtonGroup variant="text" aria-label="text button group">
      {links.map((link, index) => {
        const { name, url } = link;
        return (
          <a key={index} href={url} target="_blank">
            <Button>{name}</Button>
          </a>
        );
      })}
    </ButtonGroup>
  </Box>
)

const TechList = ({ list }) => (
  <>
    <p className="mt1">Tech Used:</p>
    <ul>
      {list.map((tech, index) => {
        return (        
          <li key={index}>
            <i className={tech}></i>
          </li>
        );
      })}
    </ul>
  </>
)
