import { motion } from "framer-motion";
import { ArrowRight, Code, Globe, Palette } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  // Function to handle click and scroll to the "my-works" section
  const scrollToWorks = () => {
    const worksSection = document.getElementById("my-works");
    if (worksSection) {
      worksSection.scrollIntoView({ behavior: "smooth" });
    } else {
      // If on a different page, navigate to about page with the hash
      window.location.href = "/about#my-works";
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-blue-100/40 to-purple-100/40 dark:from-blue-900/20 dark:to-purple-900/20 blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-green-100/40 to-yellow-100/40 dark:from-green-900/20 dark:to-yellow-900/20 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center min-h-screen px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-8 max-w-4xl"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400"
          >
            Crafting Digital Experiences & Visual Identities
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            I'm a freelance developer specializing in creating stunning websites and comprehensive branding solutions that help businesses stand out.
          </motion.p>
          <h3>Currently Website Under Development, so few features may not work</h3>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-6 justify-center items-center mt-8"
          >
            <Button 
              size="lg" 
              className="group text-lg h-14 px-8 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 dark:text-gray-900"
              onClick={scrollToWorks}
            >
              View My Work
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button variant="outline" size="lg" className="text-lg h-14 px-8 shadow-sm hover:shadow-md transition-all duration-300">
              Contact Me
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-8 justify-center mt-16 text-gray-600 dark:text-gray-300"
          >
            <div className="flex items-center gap-3 bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-sm">
              <Globe className="w-5 h-5" />
              <span className="text-sm font-medium">Web Development</span>
            </div>
            <div className="flex items-center gap-3 bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-sm">
              <Code className="w-5 h-5" />
              <span className="text-sm font-medium">Custom Solutions</span>
            </div>
            <div className="flex items-center gap-3 bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-sm">
              <Palette className="w-5 h-5" />
              <span className="text-sm font-medium">Brand Design</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};