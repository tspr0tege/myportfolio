export const experiences = [
  {
    title: 'Independent Developer',
    company: 'Leonhart Tech',
    time_period: '06/ 2021 - present',
    tech_used: [],
    description: 'Worked on a geolocation project with a startup, using serverless architecture via Netlify. My role was ultimately equivalent to tech lead, as the client deferred many decisions to me. Personally wrote their pathfinding algorithm to prioritize most proximal direction, and confirm no other shorter routes existed.\n\nThe other major project was a video aggregator website, using Wix. This involved learning the Wix editor, as well as their proprietary jQuery library and noSQL database to populate the information and website elements, as not everything the client requested was something the webpage naturally wanted to do.',
    highlight: 'My client feedback record. I work hard to make sure I\’m giving way more than I\’m getting, and people seem to appreciate that.'
  }
];

export const educations = [
  {
    title: 'Hack Reactor',
    status: 'Graduated: 04/2021',
    description: 'The program consisted of an intensive 8 week period of study in full-stack development using Node, react, SQL and noSQL  leading up to the technical assessment. Then the second 8 weeks in hands-on application development in a team environment.\n\nTechnologies utilized throughout the program include:\nAWS, Babel, Node, express, figma, heroku, jest, jQuery, MongoDB, MySQL, Postgres, MariaDB, Sequelize, Mongoose, Trello, HTML, CSS, Javascript, Axios, Mocha/Chai, Webpack, npm, yarn, GitHub, git, React'
  }
];

export const projects = [
  {
    title: 'Project Catwalk',
    type: 'Learning Project',
    completed: '03/2021',
    links: [
      {
        name: 'GitHub Repository', 
        url: 'https://github.com/tspr0tege/Project-Catwalk'
      },
    ],
    tech_used: ['React', 'webpack', 'axios', 'Node/express', 'font-awesome', 'aws'],
    description: 'This was the Frontend Capstone project my team did in Hack Reactor. The premise was to design a product page for a fashion website. I was responsible for the main product “Overview” section at the top. The API was maintained by the school, and is no longer available, so the site cannot be demoed. During the program, we built it using a Node/express server and consuming the provided API. For presentation I personally deployed it to an AWS EC2 instance.\n\nI have to say: I\’m genuinely laughing at my own ignorance as I\’m reviewing the repo and realizing just how much I did not understand about what I was doing. There are multiple dependencies in package.json that we didn\’t even end up using.',
    highlight: 'That we finished something and it worked at least once!'    
  }
];
