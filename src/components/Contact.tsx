import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        to_name : "maher",
        from_email : formData.email,
        to_email : "maherzainabohussen@gmail.com",
        message : formData.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      alert("Message sent successfully");
    }).catch((error) => {
      console.log(error)
      alert("Message failed to send");
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8 animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">Let's Work Together</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you have a project in mind or just want to say hello, 
                  I'd love to hear from you!
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mr-4">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-100">Email</h4>
                    <a href="mailto:maherzainabohussen@gmail.com" className="text-blue-600 dark:text-blue-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                      maherzainabohussen@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mr-4">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-100">Phone</h4>
                    <a href="tel:+963932304612" className="text-blue-600 dark:text-blue-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                      +963 932304612
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4 pt-4 animate-fade-in" style={{ animationDelay: '1s' }}>
                <a href="https://github.com/Maher005" className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <Github className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" size={24} />
                </a>
                <a href="https://www.linkedin.com/in/maher-zain-b69b69330/" className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <Linkedin className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" size={24} />
                </a>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg animate-slide-in-right" style={{ animationDelay: '0.5s' }}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    placeholder="Your Name"
                  />
                </div>
                
                <div className="animate-fade-in" style={{ animationDelay: '1s' }}>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="animate-fade-in" style={{ animationDelay: '1.2s' }}>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    placeholder="Tell me about your project or just say hello!"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: '1.4s' }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
