import React from 'react';
import { Code, Database, Zap, Trophy } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a passionate final year student at Kakatiya Institute of Technology and Science, Warangal, 
                with a strong foundation in full-stack development and problem-solving.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                My journey in technology has been driven by curiosity and the desire to build meaningful 
                applications that solve real-world problems. I specialize in modern web technologies 
                and have a solid grasp of data structures and algorithms.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or sharing my knowledge with the developer community.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center">
                <Code className="text-blue-600 mx-auto mb-3" size={32} />
                <h3 className="font-semibold text-gray-900 mb-2">Full Stack</h3>
                <p className="text-sm text-gray-600">React, Spring Boot</p>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-xl text-center">
                <Database className="text-teal-600 mx-auto mb-3" size={32} />
                <h3 className="font-semibold text-gray-900 mb-2">Database</h3>
                <p className="text-sm text-gray-600">MySQL, PostgreSQL</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl text-center">
                <Zap className="text-orange-600 mx-auto mb-3" size={32} />
                <h3 className="font-semibold text-gray-900 mb-2">Performance</h3>
                <p className="text-sm text-gray-600">Optimization & Scaling</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl text-center">
                <Trophy className="text-purple-600 mx-auto mb-3" size={32} />
                <h3 className="font-semibold text-gray-900 mb-2">DSA</h3>
                <p className="text-sm text-gray-600">Problem Solving</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">My DSA Journey</h3>
            <p className="text-blue-100 leading-relaxed">
              My data structures and algorithms journey has been transformative. I've solved hundreds of problems 
              across various platforms, participating in coding competitions and building a strong foundation in 
              algorithmic thinking. This journey has not only improved my problem-solving skills but also made me 
              a better software developer overall. I believe that strong DSA fundamentals are crucial for writing 
              efficient, scalable code and tackling complex technical challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;