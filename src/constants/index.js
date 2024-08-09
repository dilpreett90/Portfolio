import project1 from "../assets/project1-bg.png";
import project2 from "../assets/project2-bg.png";
import project3 from "../assets/Portfolio-bg.png";
import project4 from "../assets/Blog-bg.png";
import project5 from "../assets/fooddelivery-bg.png";

export const PROJECTS = [
    {
      title: "Book-store",
      image: project1,
      description:
        `Developed a comprehensive Book Store application using the MERN (MongoDB, Express.js, React, Node.js) stack. This application was deployed on Render and Netlify
          to ensure scalability and efficient performance.`,
      technologies: ["TailwindCss", "Firebase", "React", "Node.js", "MongoDB","Express"],
      Link:"https://66a1745f05f75845146d5fc2--stupendous-mochi-4ea8f0.netlify.app/"
    },
    {
      title: "Booking-Hotel Application",
      image: project2,
      description:
        `Developed a Travel Application using the MERN stack (MongoDB, Express.js, React, Node.js) with Stripe for payment processing and
         Cloudinary for image management. Deployed the backend on Render and frontend on Netlify for optimal performance.
        Implemented secure user authentication with JWT and managed state with Redux. Delivered a responsive app for trip planning and booking. `,
      technologies: ["Stripe", "Cloudinary", "React", "NodeJs","Mongodb","Express"],
      Link:"https://github.com/dilpreett90/Booking-Hotel-App"
    },
    {
      title: "Portfolio Website",
      image: project3,
      description:
        "A personal portfolio website showcasing projects, skills, and contact information.",
      technologies: ["React", "TailwindCSS", "Frame Motion"],
      Link:"https://github.com/dilpreett90/Portfolio",
    },
    {
      title: "Blogging Platform",
      image: project4,
      description:
        `A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.`,
      technologies: ["React", "MongodB", "Express", "NodeJs"],
      Link:"https://github.com/dilpreett90/Blogging-App",
    },
    {
        title: "Food Delivery Application",
        image: project5,
        description:
        `Food Delivery Application, developed using the MERN stack (MongoDB, Express.js, React.js, and Node.js), is designed to offer a seamless and efficient food ordering experience. 
        The application allows users to browse a variety of restaurants, view their menus, and place orders with ease.`,
        technologies: ["React", "MongodB", "Stripe", "Express", "NodeJs"],
        Link:"https://github.com/dilpreett90/Food-Delivery-App",
      },
  ];