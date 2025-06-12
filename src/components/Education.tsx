
const Education = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-blue-900 rounded-2xl p-8 md:p-12 animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="text-center">
              <div className="inline-block p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6 animate-bounce">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
              </div>
              
              <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                Information Technology Engineering
              </h3>
              <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-6 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                Syrian Virtual University
              </h4>
              
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg animate-slide-in-left" style={{ animationDelay: '1s' }}>
                  <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">Core Subjects</h5>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-center text-gray-600 dark:text-gray-300">
                      <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></div>
                      Software Engineering
                    </li>
                    <li className="flex items-center text-gray-600 dark:text-gray-300">
                      <div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full mr-3"></div>
                      Web Development
                    </li>
                    <li className="flex items-center text-gray-600 dark:text-gray-300">
                      <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></div>
                      Database Systems
                    </li>
                    <li className="flex items-center text-gray-600 dark:text-gray-300">
                      <div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full mr-3"></div>
                      Computer Networks
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg animate-slide-in-right" style={{ animationDelay: '1.2s' }}>
                  <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">Key Skills Developed</h5>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-center text-gray-600 dark:text-gray-300">
                      <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full mr-3"></div>
                      Problem Solving
                    </li>
                    <li className="flex items-center text-gray-600 dark:text-gray-300">
                      <div className="w-2 h-2 bg-orange-600 dark:bg-orange-400 rounded-full mr-3"></div>
                      System Analysis
                    </li>
                    <li className="flex items-center text-gray-600 dark:text-gray-300">
                      <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full mr-3"></div>
                      Project Management
                    </li>
                    <li className="flex items-center text-gray-600 dark:text-gray-300">
                      <div className="w-2 h-2 bg-orange-600 dark:bg-orange-400 rounded-full mr-3"></div>
                      Technical Research
                    </li>
                  </ul>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 mt-8 leading-relaxed animate-fade-in" style={{ animationDelay: '1.5s' }}>
                My academic background in Information Technology Engineering has provided me with a 
                strong foundation in software development principles, system design, and problem-solving 
                methodologies that I apply daily in my frontend development work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
