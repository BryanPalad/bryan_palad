//  icons
import {
  FiFacebook,
  FiLinkedin,
  FiInstagram,
  FiGithub,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

// companies icons
import FreelancerBrandIcon from "./assets/img/brands/freelancer.png";
import UpworkBrandIcon from "./assets/img/brands/upwork.png";
import FiverBrandIcon from "./assets/img/brands/fiverr.png";
import BehanceBrandIcon from "./assets/img/brands/behance.png";
import DribbbleBrandIcon from "./assets/img/brands/dribbble.png";

// projects images
import calculator from "./assets/img/projects/Calculator.PNG";
import teslaClone from "./assets/img/projects/Tesla-clone.PNG";
import expenseTracker from "./assets/img/projects/expense.PNG";
import weatherApp from "./assets/img/projects/Weather App.PNG";
import cryptoverse from "./assets/img/projects/Cryptoverse.PNG";
import collegeProject from "./assets/img/projects/FernandezDentalClinic.PNG";

// college project modal
import slider1 from "../src/assets/img/projects/FernandezDentalClinic.PNG";
import slider2 from "../src/assets/img/projects/fdc_signup.PNG";
import slider3 from "../src/assets/img/projects/fdc_patient.PNG";
import slider4 from "../src/assets/img/projects/fdc_appointment.PNG";
import slider5 from "../src/assets/img/projects/FDC_dashboard.PNG";

//projects clips
import calculatorClip from "./assets/clips/calculatorClip.webm";
import teslaCloneClip from "./assets/clips/tesla.webm";
import expenseTrackerClip from "./assets/clips/expense.webm";
import weatherAppClip from "./assets/clips/weather.webm";
import cryptoverseClip from "./assets/clips/cryptoverse.webm";

// skills images
import html from "./assets/img/skills/html5.png";
import css from "./assets/img/skills/css3.png";
import js from "./assets/img/skills/js.png";
import java from "./assets/img/skills/java.png";
import php from "./assets/img/skills/php.png";
import csharp from "./assets/img/skills/c-sharp.png";
import react from "./assets/img/skills/reactjs.png";
import git from "./assets/img/skills/git.png";
import mysql from "./assets/img/skills/mysql.png";
import mui from "./assets/img/skills/mui.png";
import antdesign from "./assets/img/skills/antdesign.png";
import tailwind from "./assets/img/skills/tailwind.png";

//services image
import responsive from "./assets/img/services/responsivedesign.jpg";
import webdevelopment from "./assets/img/services/webdevelopment.jpg";
import inprogress from "./assets/img/services/unknown.jpg";
// testimonial images
import TestiImage1 from "./assets/img/testimonials/mark.avif";
import TestiImage2 from "./assets/img/testimonials/billgates.webp";
import TestiImage3 from "./assets/img/testimonials/steve.jpg";

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "portfolio",
    href: "portfolio",
  },
  {
    name: "services",
    href: "services",
  },
  {
    name: "testimonials",
    href: "testimonials",
  },
  {
    name: "contact",
    href: "contact",
  },
];

// social
export const social = [
  {
    icon: <FiFacebook size={20} />,
    href: "https://www.facebook.com/BryanPalad.15",
  },
  {
    icon: <FiLinkedin size={20} />,
    href: "https://www.linkedin.com/in/bryan-justin-palad-4632b3234/",
  },
  {
    icon: <FiGithub size={20} />,
    href: "https://github.com/BryanPalad",
  },
  {
    icon: <FiInstagram size={20} />,
    href: "https://www.instagram.com/bryan_palad/",
  },
];

export const typing = [
  " Self-Taught Web Developer",
  " Aspiring Software Engineer",
  " BSIT Graduate",
  " Enthusiastic Dev",
];
// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: "",
  },
  {
    img: UpworkBrandIcon,
    href: "",
  },
  {
    img: FiverBrandIcon,
    href: "",
  },
  {
    img: BehanceBrandIcon,
    href: "",
  },
  {
    img: DribbbleBrandIcon,
    href: "",
  },
];

// projects
export const projectsData = [
  {
    id: "1",
    image: calculator,
    name: "Calculator",
    category: "web development",
    description: "React Js",
    clip: calculatorClip,
    pointer: false,
    demo: "https://reactjscalculator1.netlify.app/",
    github: "https://github.com/BryanPalad/calculator_reactjs",
  },
  {
    id: "2",
    image: teslaClone,
    name: "Tesla Clone",
    category: "web development",
    description: "React Js / Styled Components",
    clip: teslaCloneClip,
    pointer: false,
    demo: "https://teslacloneui.netlify.app/",
    github: "https://github.com/BryanPalad/Tesla-clone",
  },
  {
    id: "3",
    image: expenseTracker,
    name: "Expense Tracker",
    category: "web development",
    description: "React Js / React Redux",
    clip: expenseTrackerClip,
    pointer: false,
    demo: "https://expensetrackermini.netlify.app/",
    github: "https://github.com/BryanPalad/expenses_tracker_redux",
  },
  {
    id: "4",
    image: weatherApp,
    name: "Weather/News App",
    category: "web development",
    description: "React Js / Redux / 3 Api Integration / MUI",
    clip: weatherAppClip,
    pointer: false,
    demo: "https://miniweather-news-app.netlify.app/",
    github: "https://github.com/BryanPalad/Weather-News-App",
  },
  {
    id: "5",
    image: cryptoverse,
    name: "Cryptoverse",
    category: "web development",
    description: "React Js / 2 Api Integration / Ant Design / Chart Js",
    clip: cryptoverseClip,
    pointer: false,
    demo: "https://cryptoversemini.netlify.app/",
    github: "https://github.com/BryanPalad/Cryptoverse",
  },
  {
    id: "6",
    image: collegeProject,
    name: "Online Appointment System for Fernandez Dental Clinic",
    category: "college project",
    description: "PHP / CSS / Bootstrap / MySQL",
    pointer: true,
    github: "https://github.com/BryanPalad/FernandezDentalClinic",
  },
];

// projects
export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "web development",
  },
  {
    name: "college project",
  },
];

export const collegeProjectModal = [
  {
    sliderImg: [
      {
        slide: slider1,
      },
      { 
        slide: slider2
      },
      { 
        slide: slider3 
      },
      { 
        slide: slider4 
      },
      { 
        slide: slider5 
      },
    ],
  },
  {
    functionsList: [
      {
        function: "* Email Verification at Registration for patients.",
      },
      {
        function: "* Book an Appointment based on dynamic available time and date created by the dentists.",
      },
      {
        function: "* Automated SMS Notification for Approved(by doctor/s) and Upcoming Appointments(of patients).",
      },
      {
        function: "* Data or images can be modified through systems backend (settings tab).",
      }
      
    ],
  },
];
// skill
export const skills = [
  {
    image: html,
  },
  {
    image: css,
  },
  {
    image: js,
  },
  {
    image: java,
  },
  {
    image: csharp,
  },
  {
    image: php,
  },
  {
    image: react,
  },
  {
    image: mysql,
  },
  {
    image: git,
  },
  {
    image: mui,
  },
  {
    image: antdesign,
  },
  {
    image: tailwind,
  },
];

// services
export const services = [
  {
    img: webdevelopment,
    name: "Web Development",
    description:
      "Mostly preferred front-end web development projects. I am proficient in HTML, CSS, JavaScript(ES6) and have a basic to mid knowledge on React JS, Redux for state management",
  },
  {
    img: responsive,
    name: "Responsive Web Design",
    description:
      "Check my mini projects and this portfolio for responsive checking. Frameworks that i used: Bootstrap, Tailwind CSS, Material UI and Ant Design mostly on React Projects",
  },
  {
    img: inprogress,
    name: "On Progress",
    description:
      "Planning to learn new prog. languages such as python, advance java w/spring or android/ios and back-end development...",
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      "The biggest risk is not taking any risk... In a world that changing really quickly, the only strategy that is guaranteed to fail is not taking risks.",
    authorName: "Mark Zuckerberg",
    authorPosition: "CEO of Facebook",
  },
  {
    authorImg: TestiImage2,
    authorText:
      "Do not compare yourself with anyone in this world ... if you do so, you are insulting yourself.",
    authorName: "Bill Gates",
    authorPosition: "Founder of Microsoft",
  },
  {
    authorImg: TestiImage3,
    authorText:
      "Your time is limited, so don't waste it living someone else's life",
    authorName: "Steve Jobs",
    authorPosition: "CEO of Apple",
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: "Want to hire me?",
    subtitle: "I am open for a job opportunity.",
    description: "Email me at paladbryanj@gmail.com",
  },
  {
    icon: <FiMapPin />,
    title: "Current Location",
    subtitle: "Brgy. Banlic, Cabuyao Laguna 4025",
    description: "",
  },
];
