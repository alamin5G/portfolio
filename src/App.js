import { Award, Brain, Briefcase, Code, Database, Github, GraduationCap, Lightbulb, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';
import AnimatedName from './components/AnimatedName';
import ContactForm from './components/ContactForm';
import EasterEgg from './components/EasterEgg';
import FloatingIcons from './components/FloatingIcons';
import InteractiveSkill from './components/InteractiveSkill';
import MobileMenu from './components/MobileMenu';
import ParticleBackground from './components/ParticleBackground';
import ProjectCard from './components/ProjectCard';
import SkillBar from './components/SkillBar';
import ThemeToggle from './components/ThemeToggle';
import TiltImage from './components/TiltImage';

// Custom Typewriter Effect Component
const Typewriter = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <span>{currentText}</span>;
};

const App = () => {
  // Data extracted from the CV
  const profile = {
    name: "Md. Alamin",
    title: "Passionate Java Programmer & Aspiring ML Engineer",
    intro: "Passionate Java programmer with Spring Boot, SQL, and a basic understanding on System Design. Currently, exploring Machine Learning (ML) and Computer Vision to enhance problem-solving capabilities and build intelligent systems to make our life easy. Experienced in competitive programming and technical support, focusing on delivering high-quality back-end system (application) with scalable solutions.",
    contact: {
      whatsapp: "+88 01822679672",
      email: "alaminvai5g@gmail.com",
      linkedin: "https://www.linkedin.com/in/alamin5g",
      github: "https://github.com/alamin5g"
    },
    address: "Tongi, Gazipur 1710, Bangladesh",
    image: "/images/alamin-profile.png" // Update with your image path
  };

  const skills = {
    programming: ["Java", "Python", "C#", "JavaScript"],
    frameworks: ["Spring Boot", "Thymeleaf", "NextJs", "Restful API"],
    databases: ["MySQL", "PostgreSQL", "Git & GitHub", "Docker"],
    ai_ml: ["Pytorch", "Supervised Learning", "Image Recognition", "Algorithm Design"]
  };

  const skillLevels = {
    programming: {
      "Java": 90,
      "Python": 75,
      "C#": 70,
      "JavaScript": 80
    },
    frameworks: {
      "Spring Boot": 85,
      "Thymeleaf": 80,
      "NextJs": 65, 
      "Restful API": 75
    },
    databases: {
      "MySQL": 85,
      "PostgreSQL": 70,
      "Git & GitHub": 80,
      "Docker": 65
    },
    ai_ml: {
      "Pytorch": 70,
      "Supervised Learning": 75,
      "Image Recognition": 65,
      "Algorithm Design": 80
    }
  };

  const experience = [
    {
      title: "Technical Support Engineer",
      company: "Crystal Bright Technology",
      duration: "10/2023 - 09/2024",
      location: "Dhaka, Bangladesh",
      description: [
        "Provided technical support and communication in spoken English to resolve customer issues.",
        "Demonstrated sales skills in a collaborative environment while ensuring service delivery.",
        "Travelled more than 10 districts to ensure on-demand customer service."
      ]
    }
  ];

  const projects = [
    {
  name: "Gold Lab Management System",
  organization: "International University of Business Agriculture and Technology",
  duration: "10/2024 - 12/2024",
  location: "Dhaka, Bangladesh",
  description: [
    "Spearheaded the development of the Gold Lab Management System utilizing Java Spring Boot and MySQL database.",
    "Employed Spring Web MVC, Spring Data JPA, Thymeleaf, Bootstrap, and JavaScript in the system.",
    "Oversaw the management of Hallmarking, Gold Test vouchers, lab expenses, reports, and client data.",
    "Implemented the system as a course project with a real-world client focus.",
    "Tailored software to meet specific client requirements for the previous organization."
  ],
  technologies: ["Java", "Spring Boot", "MySQL", "Spring Web MVC", "Spring Data JPA", "Thymeleaf", "Bootstrap", "JavaScript"],
  githubUrl: "https://github.com/alamin5g/gold-lab-management",
  liveUrl: "https://gold-lab.alamin.dev" // Optional - remove if you don't have a live demo
}, 
    {
    name: "E-Commerce Platform",
    organization: "Personal Project",
    duration: "Jan 2023 - Mar 2023",
    technologies: ["Java", "Spring Boot", "MySQL", "React", "Redux"],
    description: [
      "Built a full-stack e-commerce platform with user authentication",
      "Implemented payment processing using Stripe API",
      "Created responsive UI with React and Material UI"
    ],
    githubUrl: "https://github.com/alamin5g/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.alamin.dev" // optional
  }
  ];

  const education = [
    {
      degree: "Computer Science & Engineering | BCSE",
      institution: "IUBAT- International University of Business Agriculture and Technology",
      duration: "09/2021 - Present",
      location: "Dhaka, Bangladesh",
      gpa: "3.77 out of 4.00",
      highlights: [
        "Achieved a CGPA of 3.77 out of 4.00 in Computer Science & Engineering program.",
        "Demonstrated skills in coding, programming, and problem-solving.",
        "Completed coursework focused on software development, algorithms, and data structures.",
        "Collaborated with peers on various projects to enhance team dynamics and project outcomes."
      ]
    },
    {
      degree: "Diploma in Engineering | Diploma in Computer Technology",
      institution: "Gazipur Engineering Institute",
      duration: "07/2016 - 08/2021",
      location: "Gazipur, Bangladesh",
      gpa: "3.83 out of 4.00",
      highlights: [
        "Achieved a CGPA of 3.83 out of 4.00 in a 4-year Diploma in Engineering program.",
        "Demonstrated proficiency in technical skills and knowledge related to engineering principles."
      ]
    }
  ];

  const certificates = [
    {
      name: "Core Java Specialization",
      issuer: "Coursera | Learn Quest",
      date: "01/2025",
      link: "https://www.coursera.org/account/accomplishments/specialization/1NOUKO7KW6QL"
    },
    {
      name: "Machine Learning for All",
      issuer: "Coursera | University of London",
      date: "02/2025",
      link: "https://www.coursera.org/account/accomplishments/verify/98V8W7YWFXGD"
    }
  ];

  const strengths = [
    "Team Collaboration", "Problem-Solving", "Communication Skill", "Commitment to Quality within Deadline"
  ];

  const hobbies = [
    { name: "Exploring distant community", icon: (
      <svg className="w-6 h-6 text-indigo-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
    ) },
    { name: "Getting lost in a good book", icon: (
      <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 17H7c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v13c0 .55-.45 1-1 1zM9 9H7V7h2v2zm4 0h-2V7h2v2zm4 0h-2V7h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z" />
      </svg>
    ) },
    { name: "Capturing nature", icon: (
      <svg className="w-6 h-6 text-teal-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z" />
      </svg>
    ) },
    { name: "Aid and support", icon: (
      <svg className="w-6 h-6 text-rose-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
      </svg>
    ) }
  ];

  const references = [
    {
      name: "Dr. Md. Hasibur Rashid Chayon",
      title: "Associate Professor",
      institution: "International University of Business Agriculture and Technology",
      email: "hchayon@gmail.com",
      phone: "+88 01912643723"
    },
    {
      name: "Rubayea Ferdows",
      title: "Associate Professor",
      institution: "International University of Business Agriculture and Technology",
      email: "rubayea@iubat.edu",
      phone: "+88 01677066697"
    }
  ];

  const sections = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'skills', name: 'Skills' },
    { id: 'experience', name: 'Experience' },
    { id: 'projects', name: 'Projects' },
    { id: 'education', name: 'Education' },
    { id: 'certificates', name: 'Certificates' },
    { id: 'strengths', name: 'Strengths' },
    { id: 'hobbies', name: 'Hobbies' },
    { id: 'contact', name: 'Contact' },
  ];

  // Smooth scrolling
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
  <div className="font-inter bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen relative">
    {/* Particle Background */}
    <ParticleBackground />
    <EasterEgg />
    {/* Navigation Header */}
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-800 z-50 p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-indigo-700 dark:text-indigo-400">Md. Alamin</div>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <ul className="hidden md:flex space-x-6">
            {sections.map(section => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className="text-gray-600 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-indigo-400 transition-colors duration-300 font-medium px-3 py-2 rounded-md hover:bg-indigo-50 dark:hover:bg-indigo-900/30 fancy-underline"
                >
                  {section.name}
                </button>
              </li>
            ))}
          </ul>
          {/* Mobile Menu */}
          <MobileMenu sections={sections} scrollToSection={scrollToSection} />
        </div>
      </nav>
    </header>

      <main className="pt-20"> {/* Padding for fixed header */}
        {/* Home Section */}
      <section id="home" className="relative h-screen flex items-center justify-center text-center bg-gradient-animated text-white p-4">

         <FloatingIcons />
  <div className="container mx-auto max-w-4xl">
    <div className="mb-6">
      <TiltImage
        src={profile.image}
        alt={profile.name}
      />
    </div>
    <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
      Hi, I'm <AnimatedName name={profile.name} />
    </h1>
    <p className="text-2xl md:text-3xl font-light mb-8">
      <Typewriter text={profile.title} delay={70} />
    </p>
    
    <div className="mt-10 space-y-4">
      <button 
        onClick={() => scrollToSection('projects')}
        className="px-8 py-3 bg-white text-indigo-600 font-bold rounded-full hover:bg-indigo-100 transition-all duration-300 transform hover:-translate-y-1 shadow-lg mx-2"
      >
        View My Work
      </button>
      
      <button 
        onClick={() => scrollToSection('contact')}
        className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-indigo-600 transition-all duration-300 transform hover:-translate-y-1 mx-2"
      >
        Contact Me
      </button>
    </div>
    
    <div className="flex justify-center space-x-6 mt-8">
      {/* Your social links (same as before) */}
    </div>
  </div>
  
  <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
    <button 
      onClick={() => scrollToSection('about')}
      className="text-white opacity-75 hover:opacity-100 transition-opacity"
      aria-label="Scroll down"
    >
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </button>
  </div>
</section>
            

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-white p-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-center text-indigo-700 mb-12">About Me</h2>
            <p className="text-lg leading-relaxed text-gray-700 text-center md:text-left">
              {profile.intro}
            </p>
            <div className="mt-8 text-center md:text-left">
              <p className="text-md text-gray-600">
                <span className="font-semibold">Address:</span> {profile.address}
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section with SkillBar */}
        <section id="skills" className="py-16 md:py-24 bg-gray-100 p-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-center text-indigo-700 mb-12">My Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-semibold text-indigo-600 mb-4 capitalize flex items-center">
                    {category === 'programming' && <Code className="w-6 h-6 mr-2" />}
                    {category === 'frameworks' && <Lightbulb className="w-6 h-6 mr-2" />}
                    {category === 'databases' && <Database className="w-6 h-6 mr-2" />}
                    {category === 'ai_ml' && <Brain className="w-6 h-6 mr-2" />}
                    {category.replace('_', ' ')} Skills
                  </h3>
                  <div className="space-y-4">
                    {skillList.map((skill, index) => (
                      <SkillBar 
                        key={index} 
                        skill={skill} 
                        level={skillLevels[category]?.[skill] || 75} 
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Update the Skills section to use Interactive Skills */}
    <section id="skills" className="py-16 md:py-24 bg-gray-100 dark:bg-gray-800 p-4 relative z-10">
      <div className="container mx-auto max-w-4xl relative">
        <div className="bubble absolute -top-10 -left-10 w-20 h-20 bg-indigo-500/10 rounded-full"></div>
        <div className="bubble absolute top-1/2 -right-10 w-32 h-32 bg-purple-500/10 rounded-full" style={{animationDelay: "2s"}}></div>
        
        <h2 className="text-4xl font-bold text-center text-indigo-700 dark:text-indigo-400 mb-12">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white dark:bg-gray-850 p-6 rounded-lg shadow-lg hover-lift transition-all duration-300">
            <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4 capitalize flex items-center">
              <Code className="w-6 h-6 mr-2" />
              Programming Skills
            </h3>
            <div className="space-y-4">
              {skillLevels.programming && Object.entries(skillLevels.programming).map(([skill, level], idx) => (
                <InteractiveSkill key={idx} skill={skill} level={level} icon={Code} color="indigo" />
              ))}
            </div>
          </div>
          
          {/* Repeat for other skill categories */}
        </div>
      </div>
    </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 md:py-24 bg-white p-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-center text-indigo-700 mb-12">Work Experience</h2>
            <div className="space-y-8">
              {experience.map((job, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-indigo-500">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2 flex items-center">
                    <Briefcase className="w-6 h-6 mr-2 text-indigo-600" />
                    {job.title} at {job.company}
                  </h3>
                  <p className="text-gray-600 mb-3">{job.duration} | {job.location}</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {job.description.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        
              {/* Update Projects section to use ProjectCards */}
    <section id="projects" className="py-16 md:py-24 bg-gray-100 dark:bg-gray-800 p-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-indigo-700 dark:text-indigo-400 mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>

        {/* Education Section */}
        <section id="education" className="py-16 md:py-24 bg-white p-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-center text-indigo-700 mb-12">Education</h2>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-green-500">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2 flex items-center">
                    <GraduationCap className="w-6 h-6 mr-2 text-green-600" />
                    {edu.degree}
                  </h3>
                  <p className="text-gray-600 mb-1">{edu.institution}</p>
                  <p className="text-gray-600 mb-3">{edu.duration} | {edu.location}</p>
                  <p className="text-gray-700 font-medium mb-3">CGPA: {edu.gpa}</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {edu.highlights.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="py-16 md:py-24 bg-gray-100 p-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-center text-indigo-700 mb-12">Certificates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {certificates.map((cert, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-500">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2 flex items-center">
                    <Award className="w-6 h-6 mr-2 text-blue-600" />
                    {cert.name}
                  </h3>
                  <p className="text-gray-600 mb-1">{cert.issuer}</p>
                  <p className="text-gray-600 mb-3">Issued: {cert.date}</p>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline font-medium">
                    View Certificate
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Strengths Section */}
        <section id="strengths" className="py-16 md:py-24 bg-white p-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-center text-indigo-700 mb-12">My Strengths</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {strengths.map((strength, index) => (
                <span key={index} className="bg-purple-100 text-purple-700 text-lg font-medium px-5 py-2 rounded-full shadow-md hover:scale-105 transition-transform duration-200 cursor-pointer">
                  {strength}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Hobbies Section */}
        <section id="hobbies" className="py-16 md:py-24 bg-gray-100 p-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-center text-indigo-700 mb-12">My Hobbies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {hobbies.map((hobby, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 cursor-pointer">
                  <div className="mb-4 flex justify-center">
                    {hobby.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{hobby.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact & References Section */}
        <section id="contact" className="py-16 md:py-24 bg-white p-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-center text-indigo-700 mb-12">Contact & References</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md border-l-4 border-red-500">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h3>
                <div className="space-y-4 mb-8">
                  <p className="flex items-center text-gray-700">
                    <Mail className="w-5 h-5 mr-3 text-indigo-600" />
                    <a href={`mailto:${profile.contact.email}`} className="hover:underline">{profile.contact.email}</a>
                  </p>
                  {/* WhatsApp Icon (inline SVG) */}
                  <p className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-3 text-indigo-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.04 2c-5.45 0-9.91 4.46-9.91 9.91 0 1.75.46 3.45 1.35 4.96l-1.4 5.16 5.29-1.38c1.45.79 3.08 1.21 4.67 1.21 5.46 0 9.92-4.46 9.92-9.91s-4.46-9.91-9.92-9.91zm.04 1.57c4.61 0 8.34 3.73 8.34 8.34 0 4.61-3.73 8.34-8.34 8.34-1.57 0-3.1-.44-4.43-1.25l-4.66 1.22 1.24-4.56c-.85-1.37-1.32-2.92-1.32-4.55 0-4.61 3.73-8.34 8.34-8.34zm-2.19 2.76c-.22 0-.44.08-.6.24-.16.16-.24.38-.24.64v.08c0 .26.08.48.24.64.16.16.38.24.6.24h.08c.22 0 .44-.08.6-.24.16-.16.24-.38.24-.64v-.08c0-.26-.08-.48-.24-.64-.16-.16-.38-.24-.6-.24zm4.38 0c-.22 0-.44.08-.6.24-.16.16-.24.38-.24.64v.08c0 .26.08.48.24.64.16.16.38.24.6.24h.08c.22 0 .44-.08.6-.24.16-.16.24-.38.24-.64v-.08c0-.26-.08-.48-.24-.64-.16-.16-.38-.24-.6-.24zm-2.19 3.48c-.22 0-.44.08-.6.24-.16.16-.24.38-.24.64v.08c0 .26.08.48.24.64.16.16.38.24.6.24h.08c.22 0 .44-.08.6-.24.16-.16.24-.38.24-.64v-.08c0-.26-.08-.48-.24-.64-.16-.16-.38-.24-.6-.24zm4.38 0c-.22 0-.44.08-.6.24-.16.16-.24.38-.24.64v.08c0 .26.08.48.24.64.16.16.38.24.6.24h.08c.22 0 .44-.08.6-.24.16-.16.24-.38.24-.64v-.08c0-.26-.08-.48-.24-.64-.16-.16-.38-.24-.6-.24zm-2.19 3.48c-.22 0-.44.08-.6.24-.16.16-.24.38-.24.64v.08c0 .26.08.48.24.64.16.16.38.24.6.24h.08c.22 0 .44-.08.6-.24.16-.16.24-.38.24-.64v-.08c0-.26-.08-.48-.24-.64-.16-.16-.38-.24-.6-.24z" />
                    </svg>
                    <a href={`https://wa.me/${profile.contact.whatsapp.replace(/\s|\+/g, '')}`} target="_blank" rel="noopener noreferrer" className="hover:underline">{profile.contact.whatsapp}</a>
                  </p>
                  <p className="flex items-center text-gray-700">
                    <Linkedin className="w-5 h-5 mr-3 text-indigo-600" />
                    <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn Profile</a>
                  </p>
                  <p className="flex items-center text-gray-700">
                    <Github className="w-5 h-5 mr-3 text-indigo-600" />
                    <a href={profile.contact.github} target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub Profile</a>
                  </p>
                </div>
                
                {/* Add the contact form */}
                <ContactForm />
              </div>

              {/* References */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md border-l-4 border-orange-500">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">References</h3>
                <div className="space-y-6">
                  {references.map((ref, index) => (
                    <div key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
                      <p className="font-semibold text-lg text-gray-800">{ref.name}</p>
                      <p className="text-gray-700">{ref.title}, {ref.institution}</p>
                      <p className="text-gray-600">Email: {ref.email}</p>
                      <p className="text-gray-600">Phone: {ref.phone}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-6 mt-12">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} Md. Alamin. All rights reserved.</p>
          <p className="text-sm mt-2">Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default App;