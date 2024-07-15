import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate fresher who has completed a full stack development course from AlmaBetter. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a passionate fresher who has completed a full stack development course from AlmaBetter. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy travelling, exploring new technologies, and reading .`;

export const PROJECTS = [
  {
    title: "Resume Builder",
    image: project1,
    description:
      "A fully functional resume builder offers pre-designed templates, intuitive editing, and customizable options. It ensures consistent formatting and real-time previews. Ideal for quick, polished resumes, it integrates user-friendly features for seamless creation and editing, enhancing job application effectiveness.",
    technologies: ["JavaScript", "React", "Tailwind", "Node.js", "Redux"],
    link: "https://resume-maker-theta-sepia.vercel.app/"
  }
  ,
  {
    title: "Get Youtube Subscriber",
    image: project2,
    description:
      "The project retrieves subscriber details by name, ID, or all records using MongoDB, Express, Node, and Mongoose, offering a seamless and efficient way to access subscriber information.",
    technologies: ["Node.js", "Express", "MongoDB", "Mongoose"],
    link: "https://youtube-subscribers-27rq.onrender.com/"
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["Javascript", "React", "Tailwind"],
    link: "#"
  },
//   {
//     title: "Blogging Platform",
//     image: project4,
//     description:
//       "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
//     technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
//   },
];

export const CONTACT = {
  address: "Minocha Colony, Bilaspur, Chhattisgarh",
  phoneNo: "+91 8602387452 ",
  email: "abhishektiwary201@gmail.com",
};