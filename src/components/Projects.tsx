import React from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';
const Projects = () => {
  const projects = [
    {
      title: 'Algo Track',
      description: 'AlgoTrack is a full-stack web application built to help beginners start and stay consistent on their Data Structures & Algorithms (DSA) journey. It provides a curated list of problems from popular platforms like LeetCode, Codeforces, and HackerRank — organized by topics and difficulty.',
      image: 'https://raw.githubusercontent.com/shivan2004/portfolio/refs/heads/master/public/algo-track.png',
      tech: ['React', 'Spring Boot', 'MySQL', 'AWS', 'JWT', 'OAuth2'],
      liveLink: 'https://master.d1200zyxveyp4t.amplifyapp.com/',
      githubLink: 'https://github.com/shivan2004/algo-track-backend',
      date: '2025'
    },
    {
      title: 'Wake Web',
      description: 'WakeWeb is a full-stack web application designed to keep web servers alive by periodically pinging registered URLs to prevent them from idling or shutting down due to inactivity (common in free-tier hosting environments).',
      image: 'https://raw.githubusercontent.com/shivan2004/portfolio/refs/heads/master/public/wake-web.png',
      tech: ['React', 'Spring Boot', 'PostgreSQL', 'AWS', 'JWT', 'OAuth2'],
      liveLink: 'https://master.d2u3qq0cygkju3.amplifyapp.com/',
      githubLink: 'https://github.com/shivan2004/wake-web-backend',
      date: '2025'
    },
    {
      title: 'Restaurant Application',
      description: 'Created a full-stack restaurant application with features like menu management, order processing, and user authentication.',
      image: 'https://raw.githubusercontent.com/shivan2004/portfolio/refs/heads/master/public/restaurant-app.png',
      tech: ['React', 'Spring Boot', 'MySQL', ],
      liveLink: 'https://shivan-restaurant-application.netlify.app/',
      githubLink: 'https://github.com/shivan2004/Restaurant-application',
      date: '2025'
    },
    {
      title: 'Uber App',
      description: 'Developed the backend for an Uber-like app using a monolithic architecture, handling ride management and user services.',
      image: 'https://raw.githubusercontent.com/shivan2004/portfolio/refs/heads/master/public/uber-app.png',
      tech: ['Spring Boot', 'PostgreSQL', 'PostGIS'],
      liveLink: '#',
      githubLink: 'https://github.com/shivan2004/uber_app',
      date: '2025'
    },
    {
      title: 'Linkedin Clone',
      description: 'Built the backend for a LinkedIn clone using microservices, ensuring scalability, modularity, and real-time functionality.',
      image: 'https://raw.githubusercontent.com/shivan2004/portfolio/refs/heads/master/public/linkedin-clone.png',
      tech: ['Spring Boot', 'PostgreSQL', 'Microservices', 'Rest APIs'],
      liveLink: '#',
      githubLink: '#',
      date: '2025'
    },
    {
      title: 'Tiny Url',
      description: 'Built a full-stack application that allows redirection from long URLs to shorter, more manageable ones using unique short codes.',
      image: 'https://raw.githubusercontent.com/shivan2004/portfolio/refs/heads/master/public/tiny-url.png',
      tech: ['Spring Boot', 'PostgreSQL', 'Rest APIs'],
      liveLink: '#',
      githubLink: '#',
      date: '2025'
    },
  ];

  return (
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Projects</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                  <div key={index} className="group">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                      <div className="relative overflow-hidden">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                          <div className="flex items-center text-sm text-gray-500">
                            <Calendar size={14} className="mr-1" />
                            {project.date}
                          </div>
                        </div>

                        <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tech, techIndex) => (
                              <span
                                  key={techIndex}
                                  className="px-3 py-1 bg-gradient-to-r from-blue-100 to-teal-100 text-blue-800 text-xs rounded-full font-medium"
                              >
                          {tech}
                        </span>
                          ))}
                        </div>

                        <div className="flex space-x-4">
                          <a
                              href={project.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium"
                          >
                            <ExternalLink size={16} />
                            <span>Live Demo</span>
                          </a>
                          <a
                              href={project.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors duration-200 font-medium"
                          >
                            <Github size={16} />
                            <span>Code</span>
                          </a>
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

export default Projects;