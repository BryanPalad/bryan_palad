//  icons
import {
    FiFacebook,
    FiLinkedin,
    FiYoutube,
    FiInstagram,
    FiGithub,
    FiDribbble,
    FiLayout,
    FiSettings,
    FiPenTool,
    FiTag,
    FiMail,
    FiMapPin,
  } from 'react-icons/fi';
  
  // companies icons
  import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
  import UpworkBrandIcon from './assets/img/brands/upwork.png';
  import FiverBrandIcon from './assets/img/brands/fiverr.png';
  import BehanceBrandIcon from './assets/img/brands/behance.png';
  import DribbbleBrandIcon from './assets/img/brands/dribbble.png';
  
  // projects images
  import calculator from './assets/img/projects/Calculator.PNG';
  import teslaClone from './assets/img/projects/Tesla-clone.PNG';
  import expenseTracker from './assets/img/projects/expense.PNG';
  import weatherApp from './assets/img/projects/Weather App.PNG';
  import cryptoverse from './assets/img/projects/Cryptoverse.PNG';
  import collegeProject from './assets/img/projects/FernandezDentalClinic.PNG';
  
  //projects clips 
  import calculatorClip from './assets/clips/calculatorClip.webm';
  import teslaCloneClip from './assets/clips/tesla.webm';
  import expenseTrackerClip from './assets/clips/expense.webm';
  import weatherAppClip from './assets/clips/weather.webm';
  import cryptoverseClip from './assets/clips/cryptoverse.webm';

  // skills images
  import html from './assets/img/skills/html5.png';
  import css from './assets/img/skills/css3.png';
  import js from './assets/img/skills/js.png';
  import java from './assets/img/skills/java.png';
  import php from './assets/img/skills/php.png';
  import csharp from './assets/img/skills/c-sharp.png';
  import react from './assets/img/skills/reactjs.png';
  import git from './assets/img/skills/git.png';
  import mysql from './assets/img/skills/mysql.png';
  import mui from './assets/img/skills/mui.png';
  import antdesign from './assets/img/skills/antdesign.png';
  import tailwind from './assets/img/skills/tailwind.png';
  
  // testimonial images
  import TestiImage1 from './assets/img/testimonials/mark.avif';
  import TestiImage2 from './assets/img/testimonials/billgates.webp';
  import TestiImage3 from './assets/img/testimonials/steve.jpg';
  
  // navigation
  export const navigation = [
    {
      name: 'home',
      href: 'home',
    },
    {
      name: 'about',
      href: 'about',
    },
    {
      name: 'portfolio',
      href: 'portfolio',
    },
    {
      name: 'services',
      href: 'services',
    },
    {
      name: 'testimonials',
      href: 'testimonials',
    },
    {
      name: 'contact',
      href: 'contact',
    },
  ];
  
  // social
  export const social = [
    {
      icon: <FiFacebook size={25}/>,
      href: 'https://www.facebook.com/BryanPalad.15',
    },
    {
      icon: <FiLinkedin size={25}/>,
      href: 'https://www.linkedin.com/in/bryan-justin-palad-4632b3234/',
    },
    {
      icon: <FiGithub size={25}/>,
      href: 'https://github.com/BryanPalad',
    },
    {
      icon: <FiDribbble size={25}/>,
      href: '',
    },
  ];
  
  export const typing = [
    " Self-Taught Web Developer", " Aspiring Software Engineer"," BSIT Graduate"," Enthusiastic Dev"
  ]
  // companies
  export const brands = [
    {
      img: FreelancerBrandIcon,
      href: '',
    },
    {
      img: UpworkBrandIcon,
      href: '',
    },
    {
      img: FiverBrandIcon,
      href: '',
    },
    {
      img: BehanceBrandIcon,
      href: '',
    },
    {
      img: DribbbleBrandIcon,
      href: '',
    },
  ];
  
  // projects
  export const projectsData = [
    {
      id: '1',
      image: calculator,
      name: 'Calculator',
      category: 'web development',
      description: 'React Js',
      clip: calculatorClip,
      pointer: false
    },
    {
      id: '2',
      image: teslaClone,
      name: 'Tesla Clone',
      category: 'web development',
      description: 'React Js / Styled Components',
      clip: teslaCloneClip,
      pointer: false
    },
    {
      id: '3',
      image: expenseTracker,
      name: 'Expense Tracker',
      category: 'web development',
      description: 'React Js / React Redux',
      clip: expenseTrackerClip,
      pointer: false
    },
    {
      id: '4',
      image: weatherApp,
      name: 'Weather/News App',
      category: 'web development',
      description: 'React Js / Redux / 3 Api Integration / MUI',
      clip: weatherAppClip,
      pointer: false
    },
    {
      id: '5',
      image: cryptoverse,
      name: 'Cryptoverse',
      category: 'web development',
      description: 'React Js / 2 Api Integration / Ant Design / Chart Js',
      clip: cryptoverseClip,
      pointer: false
    },
    {
      id: '6',
      image: collegeProject,
      name: 'Online Appt. Sys for Fernandez Dental Clinic',
      category: 'college project',
      description: 'PHP / Bootstrap / MySQL',
      pointer: true
    },
  ];
  
  // projects
  export const projectsNav = [
    {
      name: 'all',
    },
    {
      name: 'web development',
    },
    {
      name: 'college project',
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
      icon: <FiLayout />,
      name: 'Web Development',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
    },
    {
      icon: <FiSettings />,
      name: 'Responsive Web Design',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
    },
    {
      icon: <FiPenTool />,
      name: 'On Progress',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
    },
    // {
    //   icon: <FiTag />,
    //   name: 'SEO',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
    // },
  ];
  
  // testimonials
  export const testimonials = [
    {
      authorImg: TestiImage1,
      authorText:
        'The biggest risk is not taking any risk... In a world that changing really quickly, the only strategy that is guaranteed to fail is not taking risks.',
      authorName: 'Mark Zuckerberg',
      authorPosition: 'CEO of Facebook',
    },
    {
      authorImg: TestiImage2,
      authorText:
        'Do not compare yourself with anyone in this world ... if you do so, you are insulting yourself.',
      authorName: 'Bill Gates',
      authorPosition: 'Founder of Microsoft',
    },
    {
      authorImg: TestiImage3,
      authorText:
        "Your time is limited, so don't waste it living someone else's life",
      authorName: 'Steve Jobs',
      authorPosition: 'CEO of Apple',
    },
  ];
  
  // contact
  export const contact = [
    {
      icon: <FiMail />,
      title: 'Have a question?',
      subtitle: 'I am here to help you.',
      description: 'Email me at paladbryanj@gmail.com',
    },
    {
      icon: <FiMapPin />,
      title: 'Current Location',
      subtitle: 'Brgy. Banlic, Cabuyao Laguna 4025',
      description: '',
    },
  ];
  