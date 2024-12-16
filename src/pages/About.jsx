import React from 'react';
import { LuUsers } from "react-icons/lu";
import { TbTargetArrow } from "react-icons/tb";
import { SlTrophy } from "react-icons/sl";

const About = () => {
  return (
    <div className="min-h-screen bg-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're a team of passionate creators dedicated to building amazing digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {[
            {
              Icon: <LuUsers  className="w-12 h-12 text-blue-600"/>,
              title: 'Our Team',
              description: 'Expert professionals with diverse skills and experience'
            },
            {
              Icon: <TbTargetArrow  className="w-12 h-12 text-blue-600"/>,
              title: 'Our Mission',
              description: 'Creating innovative solutions that drive business growth'
            },
            {
              Icon: <SlTrophy className="w-12 h-12 text-blue-600"/>,
              title: 'Our Values',
              description: 'Excellence, integrity, and customer satisfaction'
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
            Our Journey
          </h2>
          <div className="space-y-8">
            {[2020, 2021, 2022].map((year) => (
              <div key={year} className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold">
                    {year}
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Milestone {year}
                  </h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
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