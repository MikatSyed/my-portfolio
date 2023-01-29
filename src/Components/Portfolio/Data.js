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
    desc: [{ d:"Authorization & Authorization Implementation.",}, { d: "Stripe Payment Method System Implementation"},{d: "Admin and User Inter Connection System."},{d:"User can add to cart services"},{d:"Admin can manage sub admin and service owner"}],
    tech: ['React.js','Axios','React Hook','React Router','Tailwind CSS','Redux Saga','Express','JWTToken','Mongoose','Stripe Payment','Nodemon','Dotenv','Rendered']
  },
  {
    id: 2,
    image: Work2,
    title: "Hotel Booking Application",
    category: "web",
    link:"https://booking-app-yuj9.onrender.com",
    github:"https://github.com/MikatSyed/booking-app",
    name: "Booking Application",
    header: "A Multi-Page MERN Stack Hotel Booking System.",
    desc: [{d:"Authorization & Authorization Implementation."},{d:"User can book hotel on spacific date"},{d:"Disable Booked Room"}],
    tech: ['React.js','Axios','React Hook','React Router','CSS3','Context API','Express','JWTToken','Mongoose','Nodemon','Dotenv','Rendered']
  },
  {
    id: 3,
    image: Work3,
    title: "React Quiz",
    category: "web",
    name: "Bike Rental Services",
    header: "A Multi-Page React Quiz Application.",
    desc1: " Authorization & Authorization Implementation.",
    desc2: " User can answer quiz question",
    desc3: "Admin and User Inter Connection System.",
    tech: ['React.js','Axios','React Hook','React Router','Tailwind CSS','Redux Saga','Express','JWTToken','Mongoose','Stripe Payment','Nodemon','Dotenv','Rendered']
  },

  {
    id: 4,
    image: Work4,
    title: "Chatting Application",
    category: "web",
  },

  // {
  //   id: 5,
  //   image: Work5,
  //   title: "iMac Mockup Design",
  //   category: "design",
  // },

  // {
  //   id: 6,
  //   image: Work6,
  //   title: "Game Store App Concept",
  //   category: "app",
  // },
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