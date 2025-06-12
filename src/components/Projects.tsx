
import { Code, Settings } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Car Parts E-commerce Platform',
      tech: 'Next.js',
      description: 'A comprehensive e-commerce platform for car parts with advanced search, filtering, and payment integration.',
      features: ['Advanced product search', 'Payment gateway integration', 'User authentication', 'Admin dashboard']
    },
    {
      title: 'Vape Products Store',
      tech: 'Next.js',
      description: 'Modern e-commerce store for vape products with sleek design and seamless shopping experience.',
      features: ['Product catalog', 'Shopping cart', 'Order management', 'Responsive design']
    },
    {
      title: 'Flight & Hotel Booking Website',
      tech: 'React',
      description: 'Travel booking platform with real-time search for flights and hotels.',
      features: ['Real-time search', 'Booking system', 'Price comparison', 'Travel itinerary']
    },
    {
      title: 'Restaurant Order Delivery System',
      tech: 'React',
      description: 'Complete food delivery platform with order tracking and payment processing.',
      features: ['Menu management', 'Order tracking', 'Payment processing', 'Delivery tracking']
    },
    {
      title: 'Car Diagnostics Web App',
      tech: 'React',
      description: 'Professional diagnostic tool for automotive professionals with detailed reporting.',
      features: ['Diagnostic reports', 'Data visualization', 'Vehicle history', 'Professional dashboard']
    },
    {
      title: 'Hairstyling Salon UI',
      tech: 'React',
      description: 'Beautiful and intuitive interface for hair salon management and booking.',
      features: ['Appointment booking', 'Service catalog', 'Staff management', 'Customer profiles']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mr-3">
                      {project.tech === 'Next.js' ? <Settings className="text-white" size={20} /> : <Code className="text-white" size={20} />}
                    </div>
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/50 px-3 py-1 rounded-full">
                      {project.tech}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '1s' }}>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Each project represents a unique challenge and learning opportunity. 
              I focus on creating scalable, maintainable, and user-friendly solutions.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 hover:scale-105">
              View All Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
