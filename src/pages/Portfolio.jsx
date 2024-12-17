import React from 'react';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import iPhoneImg from '../assets/iPhone-Ss.png';
import fashmoreImg from '../assets/fashmore-ss.png';
import quitImg from '../assets/quit.png';
import soundcloudImg from '../assets/soundcloud.png';

const Portfolio = () => {
  const projects = [
    {
      title: 'iPhone 15 Pro',
      category: 'Web Development',
      image: iPhoneImg,
      description: ' iPhone 15 Pro website replica with an advanced video carousel and enhanced user experience.',
      link: 'https://iphone-15pro-seven.vercel.app/'
    },
    {
      title: 'Fashmore Shopping Website',
      category: 'Web Development',
      image: fashmoreImg,
      description: 'A modern e-commerce platform delivering the latest in fashion trends',
      link: 'https://fashmore-emcommerce.vercel.app/'
    },
    {
      title: 'SoundCloud Music',
      category: 'Web Development',
      image: soundcloudImg,
      description: 'Professional SoundCloud Music Website replica',
      link: 'https://yashiigupta.github.io/'
    },
    {
      title: 'Catchy Quitting Website',
      category: 'UI/UX Web Design',
      image: quitImg,
      description: 'site for showcasing functionalities knowledge of html css',
      link: 'https://doyouquit.vercel.app/'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore my projects which showcase my skills in web developement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {project.title}
                    </h3>
                    <p className="text-sm text-blue-600">{project.category}</p>
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <FaArrowUpRightFromSquare className="w-5 h-5 text-gray-400 hover:text-blue-600 cursor-pointer" />
                  </a>
                </div>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;