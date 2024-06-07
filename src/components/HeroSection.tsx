import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-100 bg-white-100 overflow-hidden ">
      <div className="relative z-10 flex items-center justify-center h-full bg-black bg-opacity-10">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-32">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-8 text-gray-600 ring-1 ring-gray-800/10 hover:ring-gray-900/30">
              Free Resources + An Active Community.{' '}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Join Discord <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Empowering and Growing 250,000 African Tech Talent
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
             At OstroHub, we are dedicated to nurturing Africa's tech talent to drive 
innovation and social progress. Join us in creating a brighter future by empowering the next 
generation of tech leaders.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Join Us
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1422 800">
            <defs>
              <radialGradient id="cccircular-grad" r="50%" cx="50%" cy="50%">
                <stop offset="70%" stopColor="hsl(231, 100%, 64%)" stopOpacity="0"></stop>
                <stop offset="97%" stopColor="#0039cb" stopOpacity="1"></stop>
              </radialGradient>
            </defs>
            <g fill="url(#cccircular-grad)">
              <circle r="435" cx="1422" cy="400" opacity="0.05"></circle>
              <circle r="391.5" cx="1422" cy="400" opacity="0.16"></circle>
              <circle r="348" cx="1422" cy="400" opacity="0.26"></circle>
              <circle r="304.5" cx="1422" cy="400" opacity="0.37"></circle>
              <circle r="261" cx="1422" cy="400" opacity="0.47"></circle>
              <circle r="217.5" cx="1422" cy="400" opacity="0.58"></circle>
              <circle r="174" cx="1422" cy="400" opacity="0.68"></circle>
              <circle r="130.5" cx="1422" cy="400" opacity="0.79"></circle>
              <circle r="87" cx="1422" cy="400" opacity="0.89"></circle>
            </g>
          </svg>
        </div>
      </div>
    </div>

  );
};

export default HeroSection;