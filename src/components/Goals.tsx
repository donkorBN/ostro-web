import React from 'react';

const Goals: React.FC = () => {
  return (
    <section className="relative bg-gray-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-lg font-semibold leading-8 text-indigo-600">Our Commitment</h2>
          <h3 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Sustainable Development Goals & 2025 Objectives
          </h3>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            At Ostrohub, we are dedicated to advancing the United Nations’ Sustainable Development Goals (SDGs).
            Our focus areas include:
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-blue-500 p-6 shadow-sm hover:bg-white transition-transform duration-1000 transform hover:-translate-y-2 cursor-pointer">
            <h4 className="text-xl font-bold text-white hover:text-gray-900">SDG 4</h4>
            <p className="mt-2 text-white font-semibold hover:text-gray-600">
              Enhance inclusive and equitable quality education and promote lifelong learning opportunities.
            </p>
          </div>
          <div className="rounded-lg bg-red-500 p-6 shadow-sm hover:bg-white transition-transform duration-1000 transform hover:-translate-y-2 cursor-pointer">
            <h4 className="text-xl font-bold text-white hover:text-gray-900">SDG 5</h4>
            <p className="mt-2 text-white font-semibold hover:text-gray-600">
              Achieve gender equality and empower all women and girls.
            </p>
          </div>
          <div className="rounded-lg bg-green-500 p-6 shadow-sm hover:bg-white transition-transform duration-1000 transform hover:-translate-y-2 cursor-pointer">
            <h4 className="text-xl font-bold text-white hover:text-gray-900">SDG 8</h4>
            <p className="mt-2 text-white font-semibold hover:text-gray-600">
              By offering high-demand tech training, we contribute to creating employment opportunities and fostering economic growth.
            </p>
          </div>
          <div className="rounded-lg bg-yellow-500 p-6 shadow-sm hover:bg-white transition-transform duration-1000 transform hover:-translate-y-2 cursor-pointer">
            <h4 className="text-xl font-bold text-white hover:text-gray-900">SDG 9</h4>
            <p className="mt-2 text-white font-semibold  hover:text-gray-600">
                We foster innovation and build a skilled workforce, driving sustainable industrialization and infrastructure development.
            </p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <h4 className="text-2xl font-bold text-gray-900">Our Goals by 2025</h4>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            By 2025, we aim to:
          </p>
          <ul className="mt-6 space-y-4 text-lg text-gray-600">
            <li>Empower over 1 million individuals through educational initiatives.</li>
            <li>Achieve a 50% reduction in our carbon footprint.</li>
            <li>Ensure gender parity across all levels of our organization.</li>
            <li>Drive economic growth through sustainable practices and innovative solutions.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Goals;
