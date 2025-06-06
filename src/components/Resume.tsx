import React from 'react';
import { Download, ExternalLink, GraduationCap, Briefcase, Award, Code } from 'lucide-react';
//todo; download resume pdf
const Resume = () => {
  const handleDownloadResume = () => {
    // Create a link to download the resume PDF
    const link = document.createElement('a');
    link.href = 'public/shivan-resume.pdf'; // You'll need to add this file to the public folder
    link.download = 'Shivan_Samala_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewOnline = () => {
    // Open resume in a new tab for online viewing
    window.open('https://drive.google.com/file/d/1KpeYNK0U3EcycBndbjdZ64x_kZnh4J6_/view?usp=sharing', '_blank');
  };

  return (
      <section id="resume" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Resume</span>
            </h2>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">Professional Summary</h3>
                <div className="flex space-x-4">
                  <button
                      onClick={handleDownloadResume}
                      className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-medium"
                  >
                    <Download size={16} />
                    <span>Download PDF</span>
                  </button>
                  <button
                      onClick={handleViewOnline}
                      className="flex items-center space-x-2 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 font-medium"
                  >
                    <ExternalLink size={16} />
                    <span>View Online</span>
                  </button>
                </div>
              </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <GraduationCap className="text-blue-600 mr-2" size={20} />
                  Education
                </h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h5 className="font-semibold text-gray-900">Bachelor of Technology</h5>
                    <p className="text-gray-600">Computer Science Engineering (Networks)</p>
                    <p className="text-sm text-gray-500">Kakatiya Institute of Technology and Science, Warangal</p>
                    <p className="text-sm text-gray-500">2022 - 2026 (Expected)</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Award className="text-teal-600 mr-2" size={20} />
                  Achievements
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                    <span className="text-gray-600">Solved 500+ DSA problems</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                    <span className="text-gray-600">Participated in coding competitions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                    <span className="text-gray-600">Built 4+ full-stack projects</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Code className="text-orange-600 mr-2" size={20} />
                Technical Expertise
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Backend</h5>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Java & Spring Boot</li>
                    <li>• Hibernate ORM</li>
                    <li>• RESTful APIs</li>
                    <li>• Microservices</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Frontend</h5>
                  <ul className="text-gray-600 space-y-1">
                    <li>• React & TypeScript</li>
                    <li>• HTML5 & CSS3</li>
                    <li>• JavaScript ES6+</li>
                    <li>• Responsive Design</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Database</h5>
                  <ul className="text-gray-600 space-y-1">
                    <li>• MySQL</li>
                    <li>• PostgreSQL</li>
                    <li>• Database Design</li>
                    <li>• Query Optimization</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Briefcase className="text-purple-600 mr-2" size={20} />
                Key Projects
              </h4>
              <div className="space-y-4">
                <div className="border rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                  <h5 className="font-semibold text-gray-900">Algo Track</h5>
                  <p className="text-gray-600 text-sm mb-2">Interactive tool for tracking algorithms and data structures</p>
                  <div className="flex flex-wrap gap-2">
                    {['Spring Boot', 'React', 'PostgreSQL'].map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="border rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                  <h5 className="font-semibold text-gray-900">Wake Web</h5>
                  <p className="text-gray-600 text-sm mb-2">Keeps lazy servers awake by pinging periodically</p>
                  <div className="flex flex-wrap gap-2">
                    {['Spring Boot', 'React', 'RestAPIs'].map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;