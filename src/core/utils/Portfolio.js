// projects images
import teslaClone from "../../assets/img/projects/tesla.png";
import expenseTracker from "../../assets/img/projects/expense.png";
import weatherApp from "../../assets/img/projects/Weather App.png";
import cryptoverse from "../../assets/img/projects/Cryptoverse.png";
import collegeProject from "../../assets/img/projects/FernandezDentalClinic.PNG";
import myPortfolio from "../../assets/img/projects/My_Portfolio.png";
import modernresolve from "../../assets/img/projects/modernresolve.PNG";

// college project modal
import slider1 from "../../assets/img/projects/FernandezDentalClinic.PNG";
import slider2 from "../../assets/img/projects/fdc_signup.PNG";
import slider3 from "../../assets/img/projects/fdc_patient.PNG";
import slider4 from "../../assets/img/projects/fdc_appointment.PNG";
import slider5 from "../../assets/img/projects/FDC_dashboard.PNG";

// projects
export const projectsData = [
    {
      id: "1",
      image: teslaClone,
      name: "Tesla UI",
      category: "mini projects",
      description: ['React Js','Styled Components','CSS'],
      pointer: false,
      demo: "https://teslacloneui.netlify.app/",
      github: "https://github.com/BryanPalad/Tesla-clone",
    },
    {
      id: "2",
      image: expenseTracker,
      name: "Expense Tracker",
      category: "mini projects",
      description: ['React Js','Redux','MUI'],
      pointer: false,
      demo: "https://expensetrackermini.netlify.app/",
      github: "https://github.com/BryanPalad/expenses_tracker_redux",
    },
    {
      id: "3",
      image: cryptoverse,
      name: "Cryptoverse",
      category: "mini projects",
      description: ['React Js','Redux','2 Api','Ant Design'],
      pointer: false,
      demo: "https://cryptoversemini.netlify.app/",
      github: "https://github.com/BryanPalad/Cryptoverse",
    },
    {
      id: "4",
      image: weatherApp,
      name: "Weather/News App",
      category: "mini projects",
      description: ['React Js','Redux','3 Api','MUI'],
      pointer: false,
      demo: "https://miniweather-news-app.netlify.app/",
      github: "https://github.com/BryanPalad/Weather-News-App",
    },
    {
      id: "5",
      image: myPortfolio,
      name: "My First Portfolio",
      category: "mini projects",
      description: ['React Js','Redux','MUI','Email Js'],
      pointer: false,
      demo: "https://bryanpaladfirst.netlify.app/",
      github: "https://github.com/BryanPalad/my_portfolio",
    },
    {
      id: "6",
      image: collegeProject,
      name: "Online Appointment System for Fernandez Dental Clinic",
      category: "college project",
      description: ['PHP','CSS','Bootstrap','MySQL'],
      pointer: true,
      github: "https://github.com/BryanPalad/FernandezDentalClinic",
    },
    {
      id: "7",
      image: modernresolve,
      name: "Modern Resolve E-Commerce",
      category: "real world project",
      description: ['React Js','MUI','Python','MySQL'],
      pointer: false,
      github: "https://github.com/JMSevilla/mdr_ecom_fe",
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