
import { useState } from 'react';
import { Mail, Phone, Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import logo from '../../public/logo.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 z-50 transition-all duration-300">
      <div className="container mx-auto px-6 py-2">
        <div className="flex justify-between items-center">
          <img src={logo} alt="logo" className="w-16 h-16 max-sm:w-10 max-sm:h-10" />
          
          <nav className="hidden md:flex space-x-8">
            {['hero', 'about', 'skills', 'projects', 'experience', 'contact'].map((section, index) => (
              <button 
                key={section}
                onClick={() => scrollToSection(section)} 
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:-translate-y-1 capitalize"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {section === 'hero' ? 'Home' : section}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a href="mailto:maherzainabohussen@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110">
              <Mail size={20} />
            </a>
            <a href="tel:+963932304612" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110">
              <Phone size={20} />
            </a>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className={`h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {['hero', 'about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
                <button 
                  key={section}
                  onClick={() => scrollToSection(section)} 
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left capitalize"
                >
                  {section === 'hero' ? 'Home' : section}
                </button>
              ))}
              <button
                onClick={toggleTheme}
                className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                <span>Toggle Theme</span>
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
