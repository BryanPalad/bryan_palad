// projects images
import mainTesla from '../../assets/img/projects/teslaclone.PNG';
import mainExpense from "../../assets/img/projects/expensetracker.PNG";
import mainWeather from "../../assets/img/projects/weatherapp.PNG";
import mainCrypto from "../../assets/img/projects/Cryptoverse.PNG";
import collegeProject from "../../assets/img/projects/FernandezDentalClinic.PNG";
import oldPortfolio from "../../assets/img/projects/oldportfolio.PNG";
import modernresolve from "../../assets/img/projects/modernresolve.PNG";
import ezwork from "../../assets/img/projects/ezwork.PNG";
import sneaks from "../../assets/img/projects/Sneaks.PNG";
// college project modal
import slider1 from "../../assets/img/projects/FernandezDentalClinic.PNG";
import slider2 from "../../assets/img/projects/fdc_signup.PNG";
import slider3 from "../../assets/img/projects/fdc_patient.PNG";
import slider4 from "../../assets/img/projects/fdc_appointment.PNG";
import slider5 from "../../assets/img/projects/FDC_dashboard.PNG";

// projects
export const projectsData = [
    // {
    //   id: "1",
    //   image: oldPortfolio,
    //   name: "My First Portfolio",
    //   category: "mini projects",
    //   description: 'My first portfolio that helps me refresh my knowledge in HTML, CSS and Javascript, converted into React Stack with emailjs integration.',
    //   techStacks: ['React Js','Redux','MUI','Email Js'],
    //   pointer: false,
    //   demo: "https://bryanpaladfirst.netlify.app/",
    //   github: "https://github.com/BryanPalad/my_portfolio",
    // },
    {
      id: "2",
      image: mainTesla,
      name: "Tesla UI",
      category: "mini projects",
      description: 'Mini project that helps me to get familiar in responsive web development (Media queries, flex box and SCSS).',
      techStacks: ['React Js','Styled Components','SCSS'],
      pointer: false,
      demo: "https://teslaui-eight.vercel.app/",
      github: "https://github.com/BryanPalad/Tesla-clone",
    },
    {
      id: "3",
      image: mainExpense,
      name: "Expense Tracker",
      category: "mini projects",
      description: 'A simple CRUD expenses tracker using react js and redux toolkit with localstorage to store expenses history on browser.',
      techStacks: ['React Js','Redux','MUI'],
      pointer: false,
      demo: "https://expensestracker-five.vercel.app/",
      github: "https://github.com/BryanPalad/expenses_tracker_redux",
    },
    {
      id: "4",
      image: mainCrypto,
      name: "Cryptoverse",
      category: "mini projects",
      description: 'App that shows all existing crypto coins and their details (price, description, ranking), and news (CoinRanking, Bing News API).',
      techStacks: ['React Js','Redux','2 Api','Ant Design'],
      pointer: false,
      demo: "https://cryptoversemini.netlify.app/",
      github: "https://github.com/BryanPalad/Cryptoverse",
    },
    {
      id: "5",
      image: mainWeather,
      name: "Weather/News App",
      category: "mini projects",
      description: "An app that gets the actual weather status and news, built in react js, redux toolkit and used 3 API's (Open Weather API's and Bing News Api). ",
      techStacks: ['React Js','Redux','3 Api','MUI'],
      pointer: false,
      demo: "https://miniweather-news-app.netlify.app/",
      github: "https://github.com/BryanPalad/Weather-News-App",
    },
    {
      id: "6",
      image: sneaks,
      name: "Sneaks Ecommerce",
      category: "mini projects",
      description: "An Ecommerce project selling different brands  of shoes with cart functionality and responsive web design ",
      techStacks: ['React Js','Redux','Tailwind'],
      pointer: false,
      demo: "https://sneaks-commerce.vercel.app/",
      github: "https://github.com/BryanPalad/SneaksCommerce",
    },
    // {
    //   id: "7",
    //   image: modernresolve,
    //   name: (<span>Modern Resolve Ecommerce <br/>(In Progress)</span>),
    //   category: "real world project",
    //   description: 'Collaborating as Front End Developer in an internal project ecommerce of Modern Resolve Organization using ReactJS, Tailwind and MUI.',
    //   techStacks: ['React Js','MUI','PostgreSQL', 'Python'],
    //   pointer: false,
    //   demo: "",
    //   github: "https://github.com/JMSevilla/mdr_ecom_fe",
    // },
    // {
    //   id: "8",
    //   image: ezwork,
    //   name: (<span>ezWork Online Job Portal <br/>(In Progress)</span>),
    //   category: "mini projects",
    //   description: 'A simple CRUD online job portal built in laravel 9 framework, tailwind css and PostgreSQL as database.',
    //   techStacks: ['Laravel','TailwindCss','PostgreSQL'],
    //   pointer: false,
    //   demo: "http://shrouded-bayou-07829.herokuapp.com/",
    //   github: "https://github.com/BryanPalad/ezWork-app",
    // },
    {
      id: "9",
      image: collegeProject,
      name: "Patient Information and Online Appointment System for Fernandez Dental Clinic",
      category: "college project",
      description: 'College capstone that helps dental clinic on their appointment schedules with automatic sms notification etc.',
      techStacks: ['PHP','CSS','Bootstrap','MySQL'],
      pointer: true,
      github: "https://github.com/BryanPalad/FernandezDentalClinic",
    },
  ];
  
// projects nav
export const projectsNav = [
    {
      name: "all",
    },
    {
      name: "mini projects",
    },
    {
      name: "college project",
    },
    {
      name: "real world project",
    },
  ];
  
  export const collegeProjectModal = [
    {
      sliderImg: [
        {
          slide: slider1,
        },
        {
          slide: slider2,
        },
        {
          slide: slider3,
        },
        {
          slide: slider4,
        },
        {
          slide: slider5,
        },
      ],
    },
    {
      patientsFunction: [
        {
          function: "• Sign up with email code verification / Log-in account.",
        },
        {
          function:
            "• Book an appointment based on available time and date created by the dentists.",
        },
        {
          function:
            "• User will receive an automated sms notification after creating an appointment and follow up sms before the appointment day.",
        },
        {
          function:
            "• Can update information, add profile image.",
        },
        {
          function:
            "• Can check existing appointments / dental records.",
        },
        {
          function:
            "• Can print appointment receipt or early cancel of appointment.",
        },
        
      ],
    },
    {
      dentistsFunction: [
        {
          function: "• Dentists have their own account for logging in.",
        },
        {
          function:
            "• Track pending appointments in their dashboard. Patients Information and Service/s.",
        },
        {
          function:
            "• Can remind patient for their appointment by clicking a button for an automated sms notification.",
        },
        {
          function:
            "• Modify appointment record. Medication, Diagnosis and Prognosis.",
        },
        {
          function:
            "• Can set a follow up appointment or complete service if there are no concerns.",
        },
        {
          function:
            "• Walk-in (Input patients information and service to do).",
        },
        {
          function:
            "• Can set their own schedule by date and time for availability.",
        },
        {
          function:
            "• Can modify or add services.",
        },
        {
          function:
            "• Track patients dental records, successful or cancelled appointments.",
        },
        {
          function:
            "• Dentists Management (Can add new dentist/s, archive or unarchive).",
        },
        {
          function:
            "• Dentists Profile (Can modify information).",
        },
        {
          function:
            "• Settings Tab (can modify the landing page design, e.g. background images, sliders, navbar details and color, frequently asked questions, mission vision, contact details, terms and conditions, policy, testimonials, footer details and color. ",
        },
      ],
    },
  ];