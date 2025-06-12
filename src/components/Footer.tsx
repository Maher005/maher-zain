
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-6 animate-fade-in">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Maher Zain
            </h3>
            <p className="text-gray-400 mt-2">Frontend Web Developer</p>
          </div>
          
          <div className="flex justify-center space-x-8 mb-8 animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
            <button 
              onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:-translate-y-1"
            >
              Home
            </button>
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:-translate-y-1"
            >
              About
            </button>
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:-translate-y-1"
            >
              Projects
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:-translate-y-1"
            >
              Contact
            </button>
          </div>
          
          <div className="border-t border-gray-800 dark:border-gray-700 pt-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <p className="text-gray-400">
              © {currentYear} Maher Zain. Built with React.js and Tailwind CSS.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Designed with passion for creating exceptional user experiences.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
