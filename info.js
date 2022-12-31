let info = {
  name: "Rodrigo Castro",
  logo_name: "Rodrigo",
  flat_picture: require("./src/assets/potrait.jpeg"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "I am a software developer with a passion for building projects and solving problems that offer solutions to the world ",
  links: {
    linkedin: "https://www.linkedin.com/in/rodrigo-castro-60b68a207/",
    github: "https://github.com/snowtxc",
    resume:
      "__blank"
  },
  education: [
    {
      name: "Escuela Técnica Utu",
      place: "San José",
      date: "Mar, 2018 - Dic, 2021",
      degree: "Bachillerato en Informatica",


      skills: [
        "Java",
        "Visual Basic .NET",
        "SQL",
        "Linux",
        "Shell Script",
        "Mysql"


      ]
    },
    {
      name: "UTEC",
      course:"Full Stack Developer",
      place: "San José",
      date: "Mar, 2021 - Present",
      degree: "Tecnologo en Informatica",
      description:
        "",
      skills: [
        "C++",
        "Java",
        "SQL",
        "Javascript",
        "Scrum",
        "MySql",
       "Postgresql"
      ]
    }
  ],
  experience: [

    {
      name: "Avance Software",
      place: "San José",
      date: "Aug, 2022 - Present",
      position: "Dev Jr",
      description:
        "Developing Front-end website architecture.Designing user interactions on web pages.Ensuring responsiveness of applications.Working alongside graphic designers for web design features.Seeing through a project from conception to finished product.Staying abreast of developments in web applications and programming languages. Degree: Program Help Cod COR 351201.Strong organizational and project management skills.Proficiency with fundamental Front-end languages such as HTML, CSS, and JavaScript.Familiarity with JavaScript frameworks such as  React.js, and Vue.js.",
        skills: [
          "HTML5",
          "CSS3",
          "JavaScript",
          "Vue3",
          "Firebase",
          "Quasar",
          "Vue.js",


        ]
    },

  ],
  skills: [
    {
      title: "languages",
      info: [
        "Javascript",
        "CSS",
        "HTML5",
        "Python"

      ],
      icon: "fa fa-code"
    },
  
    {
      title: "web technologies",
      info: ["Vue.js",  "Angular", "Node.js", "NestJS", "Sequelize"],
      icon: "fas fa-laptop-code"
    },
    {
      title: "databases",
      info: ["MongoDB", "MySQL", "PostgreSql","Firestore"],
      icon: "fa fa-database"
    },
    {
      title: "operating systems & tools",
      info: [
        "Linux",
        "Windows",
        "Firebase",
    
      ],
      icon: "fas fa-tools"
    },
   
  ],
  portfolio: [

    {
      name: "Todo-application",
      pictures: [

        {
          img: require("./src/assets/portfolio/todo-application/one.png")
        },
        {
          img: require("./src/assets/portfolio/todo-application/two.png")
        },

      ],
      technologies: ["JavaScript", "HTML5", "Netlify"],
      category: "web todo list  app ",
      github: "https://github.com/Natain/todo-application",
      visit: "https://natainbogdan.netlify.app/",
      description:
        "Todo Application was made to help me with the learning schedule and it seams was doing a great job this app helping me to organize all the daily tasks."
    },



    {
      name: "Grocery-listing-react",
      pictures: [
        // {
        //   img: require("./src/assets/portfolio/clumpr/logo.png")
        // },
        {
          img: require("./src/assets/portfolio/grocery/one.png")
        },
        {
          img: require("./src/assets/portfolio/grocery/two.png")
        }
      ],
      technologies: ["CSS", "JavaScript","React.js", "HTML5",],
      category: "Web App",
      github: "https://github.com/Natain/grocery-listing-react",
      date: "",
      visit: "https://grocery-listing-react.netlify.app/",
      description:  "Grocery-listing-react it's a simple app that can help you doing shoppings.",
    },
    {
      name: "Gitscores",
      pictures: [
        {
          img: require("./src/assets/portfolio/Gitscores/one.png")
        },
        {
          img: require("./src/assets/portfolio/Gitscores/two.png")
        },
        {
          img: require("./src/assets/portfolio/Gitscores/three.png")
        },

      ],
      technologies: ["JavaScript", "CSS", "EJS", "Herokuapp"],
      category: "Scoring app for Github",
      github: "https://github.com/Natain/gitscores",
      date: "Aug, 2021 - Sep, 2021",
      visit: "https://gitscores.herokuapp.com/",
      description:
        "Gitscores v1.0.2 was updated from the orginal with more tools that let you personalize the app on your desingn."
    }
  ],
   recommendations: [
    {
      title:
        "In his internship, Bogdan Natain has demonstrated excellent learning ability, and with a dedicated, task oriented approach, he was able to complete his assignment ahead of time.",
      author: "Timothy Gray",
      position: "CTO",
      company: "Startup Norway As",
      location: " Oslo, Norway"
    },
    {
      title:
        "I feel his budding leadership abilities will become even more effective in a diverse and challenging environment.",
      author: "Hansley Jacob",
      position: "Project Manager",
      company: "Startup Norway As",
      location: "Oslo, Norway"
    }
  ]
};

export default info;



