import React from 'react';
import { GrPersonalComputer } from "react-icons/gr";
import { IoPersonCircle } from "react-icons/io5";
import { MdMusicNote } from "react-icons/md";

const achievements = [
  {
    "year": 2024,
    "milestone":  "Achieved a CGPA of 8.57 in the first year of my college" 
  }, 
  {
    "year": 2022,
    "milestone":  "Achieved a percentage of 94.26% in the 12th standard of my school"
  }, 
  {
    "year": 2020,
    "milestone":  "Achieved a percentage of 93.4% in the 10th standard of my school"
  }
]

const About = () => {
  return (
    <div className="min-h-screen bg-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My name is Yashi Gupta, sophomore at Newton School of Technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {[
            {
              Icon: <GrPersonalComputer  className="w-12 h-12 text-blue-600"/>,
              title: 'Skills',
              description: 'Include Javascript, React JS, Tailwind CSS, Node JS, Python, MySql, etc'
            },
            {
              Icon: <IoPersonCircle  className="w-12 h-12 text-blue-600"/>,
              title: 'Summer Internship',
              description: 'Interned at IIT Roorkee and Social Studies Foundation'
            },
            {
              Icon: <MdMusicNote className="w-12 h-12 text-blue-600"/>,
              title: 'Hobbies',
              description: 'Include coding, listening to music.'
            }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                {item.Icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            My Academic Journey
          </h2>
          <div className="space-y-8">
            {achievements.map((item) => (
              <div key={item.year} className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold">
                    {item.year}
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Milestone {item.year}
                  </h3>
                  <p className="text-gray-600">{item.milestone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;