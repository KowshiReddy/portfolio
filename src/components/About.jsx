import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} text-red-500 text-center`}>Overview.</h2>

      </motion.div>

      <motion.p
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.03, // Delay for letter animation
        },
      },
    }}
    initial="hidden"
    animate="visible"
    className="mt-4 text-secondary text-[15px] leading-[25px] max-w-full line-clamp-2 overflow-hidden"
  >
    {[
      "With over 3 years of experience in Software Development, Data Science, and Machine Learning, I have successfully implemented scalable systems, optimized data workflows, and built impactful machine learning models across various industries. I hold a Master’s degree in Computer Science with a specialization in Data Science from the University at Buffalo, where I further honed my expertise in advanced technologies such as Python, PyTorch, TensorFlow, AWS, Apache Spark, and cloud-based systems.My experience spans real-time data processing, building robust ETL pipelines, and deploying machine learning models that provide actionable insights. I have worked extensively with technologies such as Java, Python, SQL, and Docker, enabling me to develop solutions that drive efficiency and innovation. Additionally, I have led projects that integrate complex datasets, develop interactive dashboards using tools like Power BI, and automate workflows using CI/CD practices.Passionate about applying data-driven solutions to real-world problems, I am seeking opportunities in software engineering, data science, or machine learning roles where I can contribute my skills and make a significant impact."
    ].map((text, index) =>
      text.split("").map((char, i) => (
        <motion.span
          key={`${index}-${i}`}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {char}
        </motion.span>
      ))
    )}
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
