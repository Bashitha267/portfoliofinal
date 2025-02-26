import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const Experience = () => {

  return (
    <section id="experience" className="py-20 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3"
        >
          <Briefcase className="text-purple-400" /> Work Experience
        </motion.h2>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: index * 0.2,
                },
              }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{
                scale: 1.05,
                rotateY: 10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
              }}
              className="bg-gray-700 p-6 rounded-lg relative overflow-hidden transform-gpu"
            >
              <motion.div
                className="absolute top-0 left-0 w-2 h-[200%] bg-purple-500"
                whileHover={{ height: "200%", top: "-50%" }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-purple-400"
                initial={{ width: 0 }}
                whileInView={{
                  width: `${job.progress}%`,
                  transition: {
                    duration: 1.5,
                    ease: "easeOut",
                    delay: 0.5 + index * 0.2,
                  },
                }}
                viewport={{ once: false }}
              />
              <div className="relative z-10">
                <motion.h3
                  className="text-xl font-bold mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: 0.3 + index * 0.2,
                    },
                  }}
                  viewport={{ once: false }}
                >
                  {job.title}
                </motion.h3>
                <motion.p
                  className="text-purple-400 mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: 0.4 + index * 0.2,
                    },
                  }}
                  viewport={{ once: false }}
                >
                  {job.company}
                </motion.p>
                <motion.p
                  className="text-gray-400 mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: 0.5 + index * 0.2,
                    },
                  }}
                  viewport={{ once: false }}
                >
                  {job.period}
                </motion.p>
                <motion.ul
                  className="text-gray-300 list-disc list-inside"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: 0.6 + index * 0.2,
                    },
                  }}
                  viewport={{ once: false }}
                >
                  {job.description.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.5,
                          delay: 0.7 + i * 0.1,
                        },
                      }}
                      viewport={{ once: false }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Experience;
