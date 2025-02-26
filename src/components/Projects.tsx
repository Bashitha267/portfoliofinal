import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Elysiaan Bites",
      description:
        "I created a restaurant website with a user-friendly design and seamless functionality, showcasing my web development skills. It highlights my ability to build dynamic and responsive applications.",
      image: "https://res.cloudinary.com/dnfbik3if/image/upload/v1740296500/Pink_minimal_new_website_instagram_post_500_x_500_px_1000_x_1000_px_ramjhe.jpg",
      link: "https://www.linkedin.com/posts/nimesh-bashitha-a87b2a33a_fullstackdevelopment-reactjs-nodejs-activity-7291322013766279169-Y50Q?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFU9j4cBQ1Fc7ozQxEhJ6V58TUcH-8smueA",
    },
    {
      id: 2,
      title: "Portfolio",
      description:
        "My portfolio website showcases my skills and projects using React and React 3D models, creating an interactive and visually engaging experience. It highlights my expertise in full-stack development and passion for building dynamic web applications",
      image: "",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Featured Projects
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              whileHover={{
                y: -20,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 },
              }}
              className="bg-gray-800 rounded-lg overflow-hidden transform-gpu max-w-lg"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform transition-transform duration-500"
                />
              </motion.div>
              <div className="p-6">
                <motion.h3
                  className="text-xl font-semibold mb-2"
                  whileHover={{ x: 10 }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex gap-2">
                  <motion.a
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    href={`${project.link}`}
                    target={"_blank"}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 rounded-md hover:bg-purple-700 transition-all duration-300"
                  >
                    View Project <ExternalLink size={16} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
