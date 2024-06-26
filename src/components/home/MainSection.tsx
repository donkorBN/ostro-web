import React from 'react';

interface CardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description }) => (
  <div className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
    <span className="p-5 rounded-full bg-red-500 text-white shadow-lg shadow-red-200">
      {icon}
    </span>
    <p className="text-xl font-medium text-slate-700 mt-3">{title}</p>
    <p className="mt-2 text-sm font-semibold text-slate-500">{description}</p>
  </div>
);

const CallToAction: React.FC = () => (
  <div className="w-full bg-indigo-600 shadow-xl shadow-indigo-200 py-10 px-20 flex justify-between items-center">
    <p className="text-white">
      <span className="text-4xl font-medium">Still Confused ?</span><br />
      <span className="text-lg">Reach Out to A Mentor</span>
    </p>
    <button className="px-5 py-3 font-medium text-slate-700 shadow-xl hover:text-indigo-600 hover:bg-white duration-150 bg-yellow-500">
      Talk to Someone
    </button>
  </div>
);

const MainSection: React.FC = () => (
  <div
    className="px-3 md:lg:xl:px-40 border-t border-b py-10 bg-opacity-10" // Reduced the padding on the y-axis to make it even
    style={{ backgroundImage: "url('https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png')" }}
  >
    <p className='text-6xl font-bold text-center text-slate-700 mt-0 mb-8'> Why OstroHub?</p>
    <div className="grid grid-cols-1 md:lg:xl:grid-cols-3 group bg-white shadow-xl shadow-neutral-100 border">
      <Card
        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>}
        title="Active Community"
        description="Learning is with a group of highly focused, energetic set of people."
      />
      <Card
        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>}
        title="Best Preparation"
        description="Know where you stand and what next to do to succeed."
      />
      <Card
        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>}
        title="Great Mentorship Network"
        description="Learn from people who are already where you want to be !"
      />
      <Card
        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>}
        title="Best Track Record"
        description="Yet another year! Yet another jewel in our crown!"
      />
      <Card
        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>}
        title="Hackathons"
        description="Get to engage in competitive hackathons organized by OstroHub to showcase your skills and solve problems"
      />
      <Card
        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>}
        title="Top-Notch Collaborations"
        description="OstroHub will forge patnerships with institutions and persons who buy into our vision of a 'techified' Africa"
      />
    </div>
    <CallToAction />
  </div>
);

export default MainSection;
