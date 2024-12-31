import React from 'react';
import '../../globals.css';
import Navbar from '@/components/Navbar';

const Teams = () => {
  return (
  <>
  <Navbar/>
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
            The operations Team
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the brilliant minds and dedicated individuals driving our success.
          </p>
        </div>

        {/* Teams Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Chen",
              role: "Project Manager",
              image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400"
            },
            {
              name: "Michael Rodriguez",
              role: "Lead Developer",
              image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400"
            },
            {
              name: "Emma Thompson",
              role: "UI/UX Designer",
              image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400"
            },
            {
              name: "John Doe",
              role: "Cybersecurity Expert",
              image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400&h=400"
            },
            {
              name: "Jane Smith",
              role: "Data Scientist",
              image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&q=80&w=400&h=400"
            },
            {
              name: "Sam Wilson",
              role: "Marketing Specialist",
              image: "https://images.unsplash.com/photo-1502764613149-7f1d229e230f?auto=format&fit=crop&q=80&w=400&h=400"
            }
          ].map((member, index) => (
            <div key={index} className="text-center bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700">
              <img
                src={member.image}
                alt={member.name}
                className="w-40 h-40 rounded-full mx-auto mb-4 object-cover border-4 border-blue-400"
              />
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Teams;
