import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Code, FileText, Briefcase, Coffee, Award, Book, Database, Globe, Laptop } from "lucide-react";
// Remove the Next.js Link import

const AboutMe = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-28 pb-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400"
            >
              About Me
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300"
            >
            Passionate about building sleek, high-performing websites & software solutions. 
          
           <h3>E-mail: amey.p.kadam@gmail.com      </h3>
            <h3>contact: +91 8329684050</h3> 
            </motion.p>
          </div>

          {/* Bio Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
          >
            <div className="md:col-span-1">
              <div className="aspect-square rounded-full bg-gradient-to-br from-gray-300 to-gray-500 dark:from-gray-600 dark:to-gray-800 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-white text-7xl font-thin">
                  {/* Replace this with an actual profile image if you have one */}
                  <span>DP</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Hello, I'm Amey Kadam</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
                I'm a full-stack developer with over Four years of experience building smooth, responsive websites and software solutions for businesses.  
                My focus is on crafting seamless digital experiences that blend performance with usability.
            </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
              I specialize in creating modern, user-friendly interfaces that are both functional 
              and visually engaging, ensuring that every project delivers real value.
              </p> 

              <div className="flex space-x-4">
                <Button className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 dark:text-gray-900">
                Contact Me
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Skills Section - Original format with improved grid */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">My Skills</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Code size={24} />, title: "Frontend Development", skills: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"] },
                { icon: <FileText size={24} />, title: "Backend Development", skills: ["Node.js", "Python", "SQL", "API Design"] },
                { icon: <Briefcase size={24} />, title: "UI/UX Design", skills: ["Figma", "User Research", "Prototyping", "Design Systems"] },
                { icon: <Database size={24} />, title: "Data & Automation", skills: ["Python", "Flask", "Data Processing", "Web Scraping", "Automation"] },
                { icon: <Book size={24} />, title: "Soft Skills", skills: ["Communication", "Problem-Solving", "Time Management", "Teamwork"] }
              ].map((skill, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + (i * 0.1) }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex items-center mb-4">
                    <div className="mr-3 text-gray-900 dark:text-white">
                      {skill.icon}
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white">{skill.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {skill.skills.map((item, j) => (
                      <li key={j} className="text-gray-600 dark:text-gray-300">{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* My Works Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="max-w-4xl mx-auto mb-16"
            id="my-works"
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">My Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Roodan General Trading",
                  description: "A modern website for a dubai based General Trading company built with React and Python",
                  tech: ["Website", "Logo Design", "Business Cards", "Posters"],
                  image: "photo-1486312338219-ce68d2c6f44d",
                  link: "https://roodan.ae/"
                },

                {
                  title: "AI Resume Editor",
                  description: "Developed a AI resume editor where you can imporve your resume and get feedback on it",
                  image: "photo-1488590528505-98d2b5aba04b",
                  tech: ["Website", "Logo Design"],
                  link: "https://cvmaster.in"
                },

                {
                  title: "ShreeGreen ",
                  description: "Complete Website design and development for ShreeGreen a company that manufactures AAC blocks",
                  tech: ["Website"],
                  image: "taskapp",
                  link: "https://shreegreenaac.com/"
                },

                {
                  title: "Sachi Traders",
                  description: "A simple yet minimal website made with React and Typescript for Sachi Traders a Indian export company",
                  tech: ["Logo Design", "Website"],
                  image: "dashboard",
                  link: "https://sachitraders.com"
                }
               
              ].map((project, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + (i * 0.1) }}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700"
                >
                  <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
                    {/* Project image placeholder - replace with actual images */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400">
                      <Laptop size={48} />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, j) => (
                        <span key={j} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-xs text-gray-700 dark:text-gray-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="w-full mt-2">
                        View Project
                      </Button>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-16 max-w-4xl mx-auto text-center"
          >
            <div className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Ready to work together?</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                I'm currently available for freelance work. If you have a project that you want to get started,
                think you need my help with something, or just want to say hello, then get in touch.
              </p>
              <Button size="lg" className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 dark:text-gray-900">
                Get in Touch
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
