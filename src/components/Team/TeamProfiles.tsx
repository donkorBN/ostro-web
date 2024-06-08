// src/components/TeamSection.tsx
import React from 'react';

interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Dany Bailey',
    role: 'Software Engineer',
    imageUrl: 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
  },
  {
    name: 'Lucy Carter',
    role: 'Graphic Designer',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
  },
  {
    name: 'Jade Bradley',
    role: 'Dev Ops',
    imageUrl: 'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80',
  },
  {
    name: 'Chibuzo Franklin',
    role: 'CTO',
    imageUrl: 'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80'
  }
  // Repeat or add more team members as needed
];

const TeamProfiles: React.FC = () => {
  return (
    <div className="w-full bg-grey-700">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="text-center pb-12">
          <h2 className="text-base font-bold text-indigo-600">
            Our teams are reshaping the tech landscape in their unique way
          </h2>
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-black">
            Check our awesome team members
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="w-full bg-gray-900 rounded-lg shadow-lg p-12 flex flex-col justify-center items-center"
            >
              <div className="mb-8">
                <img
                  className="object-center object-cover rounded-full h-36 w-36"
                  src={member.imageUrl}
                  alt={member.name}
                />
              </div>
              <div className="text-center">
                <p className="text-xl text-white font-bold mb-2">{member.name}</p>
                <p className="text-base text-gray-400 font-normal">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TeamProfiles;
