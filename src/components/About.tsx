
const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-right">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm a passionate Frontend Web Developer with a deep love for creating 
                beautiful, functional, and user-friendly web applications. My journey in 
                web development has been driven by curiosity and a constant desire to learn 
                and improve.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I specialize in React.js and Next.js, focusing on creating seamless user 
                experiences that combine aesthetic appeal with robust functionality. Every 
                project I work on is an opportunity to push boundaries and deliver 
                exceptional results.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                When I'm not coding, I'm exploring new technologies, contributing to 
                open-source projects, or sharing my knowledge with the developer community. 
                I believe in continuous learning and staying updated with the latest trends 
                in web development.
              </p>
            </div>
            
            <div className="relative animate-slide-in-left">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">What drives me</h3>
                  <ul className="space-y-3">
                    {[
                      'Creating intuitive user interfaces',
                      'Solving complex problems with code',
                      'Continuous learning and growth',
                      'Collaborating with amazing teams'
                    ].map((item, index) => (
                      <li key={index} className="flex items-center animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                        <div className={`w-2 h-2 ${index % 2 === 0 ? 'bg-blue-600' : 'bg-purple-600'} rounded-full mr-3`}></div>
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
