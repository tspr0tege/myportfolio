export const experiences = [
  {
    title: 'Independent Developer',
    company: 'Leonhart Tech',
    status: '06/2021 - present',
    tech_used: [],
    description: 'I worked on a geolocation project with a startup, using serverless architecture via Netlify. My role was ultimately equivalent to tech lead, as the client deferred many decisions to me. Personally wrote their pathfinding algorithm to prioritize most proximal direction, and confirm no other shorter routes existed.\n\nThe other major project was a video aggregator website, using Wix. This involved learning the Wix editor, as well as their proprietary jQuery library and noSQL database to populate the information and website elements, as not everything the client requested was something the webpage naturally wanted to do.',
    highlight: 'My client feedback record. I work hard to make sure I\'m giving way more than I\'m getting, and people seem to appreciate that.'
  },
  {
    title: 'Independent Software Engineering Instructor',
    company: 'Leonhart Tech',
    status: '06/2021 - present',
    tech_used: [],
    description: 'I have worked with students from Universities all over the country, including MIT, Princeton, and UCLA, coding boot camp attendees, and the occasional active professional in a developer role. The work primarily focuses on Javascript and React applications, but has also included AWS, Node, and Python.',
    highlight: 'My feedback profile resides at a solid 5 stars, with over 140 hours billed.'
  },
  {
    title: 'Staff Engineer',
    company: 'Andromeda 360 AI',
    status: '08/2022 - 09/2022',
    tech_used: [
      'devicon-typescript-plain', // 'Typescript',
      'devicon-jasmine-plain', // 'Jasmine',
      'devicon-jest-plain', // 'Jest', 
      'devicon-graphql-plain', // 'GraphQL',
      'devicon-react-original', // 'React', 
      'devicon-docker-plain', // 'Docker', 
      'devicon-k3s-original', // 'k3s', 
      'devicon-kubernetes-plain' // 'Kubernetes', 
    ],
    description: 'I worked exclusively on the platform\'s front-end, addressing bugs, updating the UI, and implementing tests. Unfortunately a month after starting, the funding round did not succeed, and my position was eliminated. The experience remains invaluable, as the codebase and the people I worked with  were amazing.',
    highlight: 'While writing tests for my first component, I managed to spot an entire section of the Jest library that was completely ignored in the config file. I took it upon myself to roll all that code back in and either fix the bugs that caused the original problem, or provided comments to explain the issues.'
  },
  {
    title: 'Programming Instructor',
    company: 'Pixel Academy',
    status: '03/2017 - 09/2017',
    tech_used: [
      'devicon-c-plain', // 'C#', 
      'devicon-java-plain', // 'Java', 
      'devicon-unity-original' // 'Unity'
    ],
    description: 'In this role I taught 7-14 year old students how to write code as part of an afterschool program. Teaching consisted of logic blocks (Game Maker, Minecraft.edu), coding Minecraft mods in Java, and full game projects using C# in Unity.\n\nFor their summer program I wrote a full game creation curriculum that consisted of assets and scripts in Unity, and a full walk-through for instructors to teach the material. The game itself was a simple 3D space shooter. The curriculum included lessons in object instantiation, capturing user input, and 3D design. This allowed for a lot of understanding and creativity for the kids.',
    highlight: 'My curriculum was a substantial success. Everyone was able to follow along and complete the minimum requirements for their projects, and the lessons were thorough and open-ended enough that plenty of projects created whole other spins on their finished games. One project I saw featured a Mandalorian ship from Star Wars shooting down cherry pies, in space.'
  },
];

export const educations = [
  
  {
    title: 'Hack Reactor',
    status: 'Graduated: 04/2021',
    description: 'The program consisted of an intensive 8 week period of study in full-stack development using Node, react, SQL and noSQL  leading up to the technical assessment. Then the second 8 weeks in hands-on application development in a team environment.\n\nTechnologies utilized throughout the program include:\nHTML, CSS, Javascript, ESLint, Mocha/Chai, Jest, Axios, Font Awesome, jQuery, React, Webpack, Babel, Node, express, AWS, Heroku, MongoDB, Mongoose, MariaDB, MySQL, Postgres, Sequelize, git, GitHub, npm, yarn, Postman, figma, and Trello.'
  }
];

export const projects = [
  {
    title: 'Quest Log',
    type: 'Personal Project',
    status: 'Work in Progress',
    links: [
      {
        name: 'Original GitHub Repository', 
        url: 'https://github.com/tspr0tege/quest-log-old'
      },
    ],
    tech_used: [
      'devicon-html5-plain', // 'HTML',
      'devicon-css3-plain', // 'CSS',
      'devicon-javascript-plain', // 'Javascript',
      // 'Auth0',
      // 'Axios',
      // 'Font Awesome',
      'devicon-react-original', // 'React',
      'devicon-webpack-plain', // 'Webpack',
      'devicon-babel-plain', // 'Babel',
      'devicon-nodejs-plain', // 'Node',
      'devicon-express-original', // 'Express',
      // 'multer',
      'devicon-heroku-original', // 'Heroku',
      'devicon-postgresql-plain', // 'Postgres',
      'devicon-sequelize-plain', // 'Sequelize',
      // 'StormDB'
    ],
    description: 'This is a personal passion project that I have turned into a personal odyssey.\n\nThe original project was a 2 day MVP project assigned during Hack Reactor, that amounted to little more than a React driven todo list. When revisiting it months later, I concluded that the data structure, the code structure, and everything was irredeemably wrong. So I completely rewrote it from the ground up and used Stormdb as a JSON based test database. A couple months later I had the same experience.At one point I had it hosted on Heroku with a Postgres database.\n\nThe newest iteration is something I am taking more seriously, and would like to publish as a legitimate app. As such, I\'m keeping the work private (at least for now), and have implemented Font Awesome, game-icons (via direct SVG imports in React using @svgr/webpack), Axios, Auth0, and multer for file uploads. Along with a substantially more robust code structure and purposefully crafted Postgres database.',
    highlight: 'The current project is coming along strongly. Though, due to lack of a thorough plan (since I\'m figuring a lot out as I go) I do have to revisit code more often than I would like, but the project is often better for it. And I believe, as a programmer, so am I. It\'s a labor of love most of the time, and I\'m content to grow through the process.'
  },
  {
    title: 'Codewars',
    type: 'Personal Project',
    status: 'Ongoing',
    links: [
      {
        name: 'GitHub Repository', 
        url: 'https://github.com/tspr0tege/Codewars'
      },
      {
        name: 'Codewars profile', 
        url: 'https://www.codewars.com/users/tspr0tege'
      },
    ],
    tech_used: [
      'devicon-javascript-plain', // 'Javascript',
    ],
    description: 'This is just a repo where I store my solutions to the Codewars toy problems I\'ve completed.',
    highlight: 'I have one 3rd-kyu solution that was just me skipping ahead to the highest level of my cohort mates from Hack Reactor. My solution was efficient, and I\'m happy to say I had one of the shortest solutions of any of the examples I saw. This is usually not the case for me.'
  },
  {
    title: 'Library Catalog',
    type: 'Professional Coding Challenge',
    status: 'Completed: 12/2022',
    links: [
      {
        name: 'GitHub Repository', 
        url: 'https://github.com/tspr0tege/library'
      },
    ],
    tech_used: [
      'devicon-html5-plain', // 'HTML',
      'devicon-css3-plain', // 'CSS',
      'devicon-javascript-plain', // 'Javascript',
      'devicon-php-plain', // 'PHP',
      'devicon-apache-plain', // 'Apache',
      'devicon-amazonwebservices-original', // 'AWS',
      'devicon-postgresql-plain', // 'Postgres'
    ],
    description: 'This project was put together as part of a job interview for PHP developer. The challenge consisted of making 3-4 basic pages for a book catalog at a library. This was my first use of PHP, which I taught myself (YouTube videos and the PHP documentation) over the weekend following the interview. The purpose (I was told) was to assess my ability to use SQL queries to add, edit, and delete entries. While writing it, my laptop completely died, which is why I ended up deploying it to an AWS EC2 instance, running Ubuntu. Which was not a requirement.',
    highlight: 'I feel like I put together a reasonably solid first project in PHP. The code is all original, and it did exactly what it was supposed to.'
  },
  {
    title: 'Map Project',
    type: 'Freelance Project',
    status: 'Completed: 06/2022',
    links: [
      {
        name: 'Proximity tracking test (Codepen)', 
        url: 'https://codepen.io/tspr0tege/pen/QWQKxPW'
      },
    ],
    tech_used: [
      'devicon-javascript-plain', // 'Javascript',
      // 'Netlify',
      // 'Codepen',
    ],
    description: 'Due to the proprietary nature of the work, I agreed to not publicly expose any of the code I produced for the project. What I will say is it used a serverless architecture (via Netlify), and vanilla Javascript with the Geolocation API. This was my first experience with Geolocation, and so I do have an experimental codepen I used (linked above) to try out things. I hope this gives some insight into my thought process.',
    highlight: 'I was rehired by this client and effective became the tech lead while I worked with them. They left me the following feedback:\n"This is my second job working with Squall and it has been yet another pleasure. He\'s been just a fantastic part of my team and has solved some complex issues in the project. Highly recommended and I\'ll be coming back soon!"'
  },
  {
    title: 'Portfolio 5e',
    type: 'Personal Project',
    status: 'Completed: 11/2022',
    links: [
      {
        name: 'GitHub Repository', 
        url: 'https://github.com/tspr0tege/portfolio-5e'
      },
      {
        name: 'GitHub Page', 
        url: 'https://tspr0tege.github.io/portfolio-5e/'
      },
    ],
    tech_used: [
      'devicon-html5-plain', // 'HTML',
      'devicon-css3-plain', // 'CSS',
      'devicon-javascript-plain', // 'Javascript',
      'devicon-react-original', // 'React',
      'devicon-webpack-plain', // 'Webpack',
      'devicon-babel-plain', // 'Babel',
      'devicon-github-original', // 'Github'
    ],
    description: 'This was an attempt to build a portfolio, based on inspiration from a Dungeons & Dragons character sheet, deployed using gh-pages. While I personally really liked the layout (maybe not the colors), after seeing it altogether I realized how overwhelming and cluttered it looks. So I took most of it back to the drawing board to make a cleaner page.',
    highlight: 'The sub-navigation concept. This actually programmatically grabs each of the sub-sections of the page and will move the page to them when clicked, and flash a blue shadow. The idea was to have it work on other pages, and make mobile use a lot quicker to get to the part you\'d want to see. It does it\'s job, but (again) is somewhat cluttered and unwieldy.'    
  },
  {
    title: 'Bathroom Log',
    type: 'Freelance Project',
    status: 'Completed: 12/2021',
    links: [
      {
        name: 'GitHub Repository', 
        url: 'https://github.com/tspr0tege/bathroom-log'
      },
    ],
    tech_used: [
      'devicon-html5-plain', // 'HTML',
      'devicon-css3-plain', // 'CSS',
      'devicon-javascript-plain', // 'Javascript',
    ],
    description: 'This was my first freelancing project. Made for a teacher to use on his Chromebook, on an extremely shoestring budget. So to keep things simple, we used localStorage in the browser. The app works with a scanner that he has for bathroom passes, which will populate the names of the students in the form. ',
    highlight: 'Admittedly, this project was crude, but the client was happy and even tipped extra.'    
  },
  {
    title: 'Weather App',
    type: 'Edcuational Project',
    status: 'Completed: 12/2021',
    links: [
      {
        name: 'GitHub Repository', 
        url: 'https://github.com/tspr0tege/Weather-App'
      },
    ],
    tech_used: [
      'devicon-html5-plain', // 'HTML',
      'devicon-css3-plain', // 'CSS',
      'devicon-javascript-plain', // 'Javascript',
      // 'Axios', 
      'devicon-react-original', // 'React', 
      'devicon-webpack-plain', // 'Webpack', 
      'devicon-babel-plain', // 'Babel',
      'devicon-nodejs-plain', // 'Node',
      'devicon-express-original', // 'Express',
    ],
    description: 'Ah, yes… the ubiquitous weather app.\n\nI built this strictly as an example of consuming an API, using Axios for AJAX requests. It was also my first experiment with css-loader, and the dotenv npm package.  Originally deployed to Heroku on a free server.',
    highlight: 'This was my first foray into manually setting up webpack, and building out the config file.'    
  },
  {
    title: 'Chord Clock',
    type: 'Personal Project',
    status: 'Completed: 06/2021',
    links: [
      {
        name: 'GitHub Repository', 
        url: 'https://github.com/tspr0tege/chord-clock'
      },
    ],
    tech_used: [
      'devicon-html5-plain', // 'HTML',
      'devicon-css3-plain', // 'CSS',
      'devicon-javascript-plain', // 'Javascript',
    ],
    description: 'This is a mini project I did for a friend in pure Javascript. He is a music teacher and used this for remote lessons during COVID. It\'s dynamically rendered from form inputs, and then the student follows along with the marks to time strumming chords on the guitar. Deployment was done on his GoDaddy website, directly in the HTML editor.',
    highlight: 'Helping a friend\'s business in challenging times.'    
  },
  {
    title: 'Project Catwalk',
    type: 'Edcuational Project',
    status: 'Completed: 03/2021',
    links: [
      {
        name: 'GitHub Repository', 
        url: 'https://github.com/tspr0tege/Project-Catwalk'
      },
    ],
    tech_used: [
      'devicon-html5-plain', // 'HTML',
      'devicon-css3-plain', // 'CSS',
      'devicon-javascript-plain', // 'Javascript',
      // 'ESLint',
      // 'Axios', 
      // 'Font Awesome',
      'devicon-react-original', // 'React', 
      'devicon-webpack-plain', // 'Webpack', 
      'devicon-babel-plain', // 'Babel', 
      'devicon-nodejs-plain', // 'Node',
      'devicon-express-original', // 'Express',       
      'devicon-amazonwebservices-original', // 'AWS'
    ],
    description: 'This was the Frontend Capstone project my team did in Hack Reactor. The premise was to design a product page for a fashion website. I was responsible for the main product “Overview” section at the top. The API was maintained by the school, and is no longer available, so the site cannot be demoed. During the program, we built it using a Node/express server and consuming the provided API. For presentation I personally deployed it to an AWS EC2 instance.\n\nI have to say: I\'m genuinely laughing at my own ignorance as I\'m reviewing the repo, to write this, and realizing just how much I did not understand about what I was doing. There are multiple dependencies in package.json that we didn\'t even end up using.',
    highlight: 'I created an Axios request function that allowed everyone to plug in their endpoints and get the data they needed from the API. My team was relieved, as this was one thing we all seemed to struggle with a bit.'
  },
];
