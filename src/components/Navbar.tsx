
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold ml-7 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
          AMEY KADAM
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 mr-7" >
          <Link to="/" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors">
            About Me
          </Link>
          <Link to="/pricing" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors">
            Pricing
          </Link>
          <Button className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 dark:text-gray-900">
            Hire Me
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMobileMenu}
            className="text-gray-700 dark:text-gray-200"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Me
            </Link>
            <Link 
              to="/pricing" 
              className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Button 
              className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 dark:text-gray-900 w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hire Me
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};
