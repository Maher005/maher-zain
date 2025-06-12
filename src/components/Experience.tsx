
const Experience = () => {
  const experiences = [
    {
      company: 'CONFIDO',
      position: 'Frontend Developer',
      period: 'Current',
      type: 'Full-time',
      description: 'Leading frontend development initiatives and creating user-centric web applications with modern React.js frameworks.',
      achievements: [
        'Improved application performance by 40%',
        'Led frontend architecture decisions',
        'Mentored junior developers',
        'Implemented responsive design systems'
      ]
    },
    {
      company: 'NVT',
      position: 'React Developer',
      period: 'Previous Role',
      type: 'Full-time',
      description: 'Developed and maintained complex React applications with focus on performance optimization and user experience.',
      achievements: [
        'Built reusable component libraries',
        'Optimized bundle sizes and loading times',
        'Collaborated with design and backend teams',
        'Implemented automated testing strategies'
      ]
    },
    {
      company: 'Freelance Projects',
      position: 'Frontend Consultant',
      period: 'Ongoing',
      type: 'Contract',
      description: 'Providing frontend development services to various clients, specializing in React.js and Next.js applications.',
      achievements: [
        'Delivered 15+ successful projects',
        'Maintained 100% client satisfaction rate',
        'Specialized in e-commerce solutions',
        'Built long-term client relationships'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-0.5 h-full w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
            
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`relative flex items-center mb-12 animate-slide-in-right ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="absolute left-2 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10"></div>
                
                <div className={`w-full md:w-5/12 ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="flex flex-wrap items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{exp.position}</h3>
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/50 px-3 py-1 rounded-full">
                        {exp.type}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">{exp.company}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{exp.period}</p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                    
                    <div>
                      <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                            <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
