
const Skills = () => {
  const skills = [
    { name: 'HTML', level: 95, color: 'from-orange-500 to-red-500' },
    { name: 'CSS', level: 90, color: 'from-blue-500 to-cyan-500' },
    { name: 'JavaScript', level: 85, color: 'from-yellow-500 to-orange-500' },
    { name: 'React.js', level: 90, color: 'from-blue-600 to-cyan-600' },
    { name: 'Tailwind CSS', level: 85, color: 'from-teal-500 to-blue-500' },
    { name: 'Next.js', level: 80, color: 'from-gray-700 to-gray-900' },
    { name: 'RESTful APIs', level: 75, color: 'from-green-500 to-emerald-500' },
    { name: 'Figma', level: 70, color: 'from-purple-500 to-pink-500' },
    { name: 'Adobe XD', level: 65, color: 'from-pink-500 to-purple-500' }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={skill.name} 
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{skill.name}</h3>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out animate-slide-in-right`}
                    style={{ 
                      width: `${skill.level}%`,
                      animationDelay: `${index * 0.1 + 0.5}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '1s' }}>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              I'm constantly expanding my skill set and staying up-to-date with the latest 
              technologies and best practices in frontend development. Always eager to learn 
              and take on new challenges!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
