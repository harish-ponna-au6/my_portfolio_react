const portfolioState = {
  projects: [
    {
      imagePath: "/images/project_images/simplify.png",
      heading: "Simplify",
      content:
        "Simplify is a web application which helps to digitalize their daily routine billing from paper to computer with paymetn gateway on signup, OTP Confirmation through email for resetting password. The main goal of this application is to help users to analyse/track their monthly business, received orders, income etc.",
      technologies: [
	"ReactJS",
	"Redux",
	"React-Query",
	"Framer-Motion",
        "NodeJS",
        "ExpressJS",
        "BcryptJs",
	"JWT",
	"Nodemailer",
        "MongoDB"
        
      ],
      viewSite: "https://simplify-2021.herokuapp.com/",
      viewCode: "https://github.com/harish-ponna-au6/project_simplify"
    },
    {
      imagePath: "/images/project_images/job_portal.png",
      heading: "Job Portal",
      content:
        "A Kick Starter-like app, to help find Jobs of all kinds as part time for the job  and to provide jobs by the job providers. It may include jobs like baby-sitting to tutors for kids etc. All variety of part time jobs can be posted here.Back End was developed on NodeJs using ExpressJs framework. BcryptJs was used for hashing the passworda. Json Web Tokens were  for the authorization of the user for all the protected routes. Front End was built by using HTML5, CSS3, Bootstrap4 and Vanillla JavaScript.",
      technologies: [
        "HTML5",
        "CSS3",
        "Bootstrap4",
        "JavaScript",
        "NodeJs",
        "ExpressJs",
        "MongoDB",
        "BcryptJs",
        "Json Web Token",
        "Cloudinary"
      ],
      viewSite: "https://seasonal-jobs.netlify.app/",
      viewCode: "https://github.com/harish-ponna-au6/Seasonal-Jobs-FrontEnd/"
    },
    {
      imagePath: "/images/project_images/sticky_notebook.png",
      heading: "Sticky Notbook",
      content:
        "Sticky-Notebook is a server side rendering web application. It is similar to a todo app but it gives the real look of sticky papers, where users find pleasure to watch the colors for every refresh of the page. It is built on NodeJs with ExpessJs framework. HBS is used to build templates and send it to clients. BcryptJs was used for hashing the passwords and express-sessions for authorization of the user. MongoDb is used for the cloud storage of the user data. It is made responsive with all screen resolutions.",
      technologies: [
        "NodeJs",
        "ExpressJs",
        "Express-Sessions",
        "HBS",
        "Mongoose",
        "BcryptJs",
        "Json Web Token",
        "Cloudinary"
      ],
      viewSite: "https://sticky-notebook.herokuapp.com/",
      viewCode: "https://github.com/harish-ponna-au6/sticky-notebook"
    },
    {
      imagePath: "/images/project_images/gity_finder.png",
      heading: "gity-finder",
      content:
        "gity-finder is a deceptively simple web application which searches GitHub for user profiles and returns them in a responsive grid. What makes this app stand out from similar web developer portfolio projects is the sharp attention to detail and 100% from-scratch code incorporating the various modern react technologies. It is made responsive with all screen resolutions.",
      technologies: [
        "ReactJs",
        "Redux",
        "CSS3",
        "React-Router-Dom",
        " Redux-Thunk",
        "Axios"
      ],
      viewSite: "https://gity-finder.netlify.app/",
      viewCode: "https://github.com/harish-ponna-au6/gity-finder/"
    },
    {
      imagePath: "/images/project_images/shoezz.png",
      heading: "Shopping Cart",
      content:
        "Shopping Cart is also a server side rendering web application. It is similar to the other shopping websites where a user can search for products and filter by categories, can add an item to cart and proceed for checkout. It is built on NodeJs with ExpessJs framework. HBS is used to build templates and send it to clients. BcryptJs was used for hashing the passwords and express-sessions for authorization of the user. MongoDb is used for the cloud storage of the user data.It is made responsive with all screen resolutions.",
      technologies: [
        "NodeJs",
        "ExpressJs",
        "Express-Sessions",
        "HBS",
        "Mongoose",
        "BcryptJs"
      ],
      viewSite: "https://shoe-shopping-cart.herokuapp.com/",
      viewCode: "https://github.com/harish-ponna-au6/shoe-shopping"
    },

    {
      imagePath: "/images/project_images/countries_details.png",
      heading: "Countries Details",
      content:
        "This is a simple web page built by using HTML5, CSS3 and JavaScript. It is used  for searching countries and their details by continent category or by country names. This app was built during the initial stages of learning JavaScript.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      viewSite: "https://countries-view.netlify.app/",
      viewCode: "https://github.com/harish-ponna-au6/netlify-countries/"
    },

    {
      imagePath: "/images/project_images/currency_converter.png",
      heading: "Currency Converter",
      content:
        "This is a simple web page built by using HTML5, CSS3 and JavaScript. It is used to compare the currency value with other countries' currency. This app was built during the initial stages of learning JavaScript.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      viewSite: "https://currency-converter-01v.netlify.app/",
      viewCode:
        "https://github.com/harish-ponna-au6/netlify-currency-converter/"
    }
  ]
};

export { portfolioState };
