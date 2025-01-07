import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  spark,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  flask,
  docker,
  aws,
  hadoop,
  powerbi,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
 
];

const technologies = [
  
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "flask",
    icon: flask,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "aws",
    icon: aws,
  },
  {
    name: "hadoop",
    icon: hadoop,
  },
  {
    name: "powerbi",
    icon: powerbi,
  },
];

const experiences = [
  {
    title: "Graduate Research Assistant",
    company_name: "University at Buffalo",
    icon: starbucks,
    iconBg: "#ffffff",
    date: "Aug 2024 - Dec 2024",
    points: [
    "Developed Transformer-based models (BERT, GPT) with Python and TensorFlow, achieving 30% higher accuracy in classifying university job postings.",
    "Built machine learning pipelines with Apache Kafka for real-time processing and MongoDB for efficient storage.",
    "Applied NLP techniques for data preprocessing and feature engineering to enhance model performance.",
    "Boosted data ingestion efficiency by 35%, enabling faster analysis of job postings.",
      
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "One Park Finacial",
    icon: tesla,
    iconBg: "#ffffff",
    date: "May 2024 - July 2024",
    points: [
      "Developed real-time loan repayment systems with Java, Spring Boot, and MongoDB, achieving 99% uptime and 20% faster transactions.",
      "Built financial analytics platforms using React and REST APIs, enhancing insights and user engagement by 30%.",
      "Automated CI/CD pipelines with Git and Jenkins, streamlining deployments and integrating Agile practices.",
      "Reduced deployment time by 40%, ensuring efficient and scalable delivery processes.",
    ],
  },
  {
    title: "Data Scientist",
    company_name: "IIT Indore",
    icon: shopify,
    iconBg: "#ffffff",
    date: "Nov 2022 - Apr 2023",
    points: [
      "Developed machine learning models with Python, scikit-learn, and Haar Cascade, incorporating NLP for real-time drowsiness detection.",
      "Designed a Hadoop-based data lake, accelerating data retrieval by 40% and streamlining drowsiness detection research.",
      "Utilized Reinforcement Learning, Random Forest, and SVM to boost decision-making efficiency by 20%.",
      "Enabled real-time adjustments in research methodologies, improving overall project outcomes.",
    ],
  },
  {
    title: "Data Engineer",
    company_name: "Contriver",
    icon: meta,
    iconBg: "#ffffff",
    date: "Aug 2020 - Oct 2022",
    points: [
      "Engineered ETL pipelines with Pandas and PySpark, processing 1M+ daily records, improving KPI generation speed by 35%.",
      "Streamlined workflows using Docker, Apache Airflow, and Celery, enhancing data reliability and efficiency by 40%.",
      "Built and deployed Random Forest models for cancer detection with 85% accuracy, processing 10,000+ patient records daily.",
      "Designed a real-time dashboard with React, Flask, and Power BI, ensuring 99.9% uptime via Docker and Kubernetes under GDPR/HIPAA compliance",
    ],
  },
];

const testimonials = [
  
];

const projects = [
  {
    name: "Product Trend Analytics ",
    description:
      "Developed a word co-occurrence analytics system for e-commerce platforms, leveraging Apache Spark Streaming, AWS Kinesis, PostgreSQL, and a front-end interface to track and display trending customer-product interactions",
    tags: [
      {
        name: "Spark",
        color: "blue-text-gradient",
      },
      {
        name: "AWS",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/KowshiReddy",
  },
  {
    name: "Multilingual LLM Knowledge Hub",
    description:
      "Built a multilingual LLM-powered knowledge hub for real-time document summarization and translation, using Flask, React, and PostgreSQL with text uploads and live chat functionalities for dynamic user interaction",
    tags: [
      {
        name: "LLM",
        color: "blue-text-gradient",
      },
      {
        name: "Flask",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/KowshiReddy",
  },
  {
    name: "Financial Transactions Tracker ",
    description:
      "RESTFUL API platform for tracking financial transactions, Spring Boot for secure CRUD operations, MongoDB , and Docker for containerization. Implemented role-based user authentication and real-time tracking of balances and expenses.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Springboot",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/KowshiReddy",
  },
];

export { services, technologies, experiences, testimonials, projects };
