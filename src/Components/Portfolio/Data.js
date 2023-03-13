import Work1 from "../../assets/work-1.svg";
import Work2 from "../../assets/work-2.svg";
import Work3 from "../../assets/work-3.svg";
import Work4 from "../../assets/work-4.svg";
import Work5 from "../../assets/work-5.svg";
import Work6 from "../../assets/work-6.svg";

export const projectsData = [
  {
    id: 1,
    image: Work1,
    title: "Bike Rental Services",
    category: "web",
    link: "https://bike-rental-services.onrender.com",
    github: "https://github.com/MikatSyed/bike-rental-services",
    name: "Bike Rental Services",
    header: "A Multi-Page MERN Stack Bike Rental Services System.",
    desc: [
      {
        d: "Authorization & Authorization Implementation. Developed a website where users can order services with stripe & track order and add review Admin and User Inter Connection System",
      },
      {
        d: "Admins can add/remove services, check orders, change order status and add/remove new admin",
      },
      { d:"Admin also can add and manage bike owner and bike owner can have a separate dashboard with limited access." }
    
    ],
    tech: [
      "React.js",
      "Axios",
      "React Hook",
      "React Router",
      "Tailwind CSS",
      "Redux Thunk",
      "Express",
      "JWTToken",
      "Mongoose",
      "Stripe Payment",
      "Nodemon",
      "Dotenv",
      "Rendered",
    ],
  },
  {
    id: 2,
    image: Work2,
    title: "Hotel Booking Application",
    category: "web",
    link: "https://booking-app-yuj9.onrender.com",
    github: "https://github.com/MikatSyed/booking-app",
    name: "Booking Application",
    header: "A Multi-Page MERN Stack Hotel Booking System.",
    desc: [
      { d: "Developed a website where users can book hotel room on spacific date useing calender." },
      { d: "User can search hotels in different properties && booked room show disable." },
      { d: "Admin can add hotels and rooms." },
    ],
    tech: [
      "React.js",
      "Axios",
      "React Hook",
      "React Router",
      "CSS3",
      "Context API",
      "Express",
      "JWTToken",
      "Mongoose",
      "Nodemon",
      "Dotenv",
      "Rendered",
    ],
  },
 

  {
    id: 3,
    image: Work4,
    title: "Chating App",
    category: "web",
    link: "https://chat-glfc.onrender.com/",
    github: "https://github.com/MikatSyed/chat-app",
    name: " Chatting App",
    header: "A Chatting Web Application.",
    desc: [
      { d: "Authorization & Authorization Implementation. Chatting app allows you to communicate with other user in web chat rooms." },
      { d: "Admin can add user in room & enables to send and receive messages." },
      { d: "Admin can manage user" },
    ],
    tech: [
      "Express.js",
      "EJS",
      "Scoket.io",
      "JWTToken",
      "Multer",
      "Mongoose",
      "Rendered"
    ],
  },
  {
    id: 4,
    image: Work3,
    title: "Quiz App",
    category: "web",
    link: "https://quiz-new.netlify.app",
    github: "https://github.com/MikatSyed/react-quiz",
    name: "React Quiz Application",
    header: "A Multi-Page React Quiz Application.",
    desc: [
  {  d: " Authorization & Authorization Implementation."},
   { d: " User can answer quiz question and see their score"},
   { d: "Admin and User Inter Connection System."},
    ],
    tech: [
      "React.js",
      "React Router",
      "Firebase",
      "Module.CSS",
      "Netlify"
    ],
  },

];

export const projectNav = [
  {
    name: "all",
  },
  {
    name: "web",
  },
  {
    name: "app",
  },
  {
    name: "design",
  },
];

export const projectDesc = [
  {
    id: 1,
    name: "Bike Rental Services",
    title: "A Multi-Page MERN Stack Bike Rental Services System.",
    desc1: " Authorization & Authorization Implementation.",
    desc2: " Stripe Payment Method System Implementation",
    desc3: "Admin and User Inter Connection System.",
  },
  {
    name: "web",
  },
  {
    name: "app",
  },
  {
    name: "design",
  },
];
