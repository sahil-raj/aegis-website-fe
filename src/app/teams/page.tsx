import React from 'react';
import '../globals.css';
import Navbar from '@/components/Navbar';

const Teams = () => {
  // Team members data
  const teamMembers = [
    // Cultural Team
    {
      id: 1,
      created_at: new Date(),
      first_name: 'Emily',
      last_name: 'Clark',
      pet_name: 'Buddy',
      team: 'Cultural',
      description: 'Passionate about fostering team culture and engagement.',
      tags: ['Culture', 'Team Engagement'],
      email: 'emily.clark@example.com',
      linkedin: 'https://linkedin.com/in/emilyclark',
      github: '',
      image: 'https://images.unsplash.com/photo-1502764613149-7f1d229e230f?auto=format&fit=crop&q=80&w=400&h=400',
    },
    {
      id: 2,
      created_at: new Date(),
      first_name: 'Liam',
      last_name: 'Johnson',
      pet_name: 'Max',
      team: 'Cultural',
      description: 'Expert in creating inclusive team environments.',
      tags: ['Diversity', 'Inclusion'],
      email: 'liam.johnson@example.com',
      linkedin: 'https://linkedin.com/in/liamjohnson',
      github: '',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400',
    },
    {
      id: 3,
      created_at: new Date(),
      first_name: 'Sophia',
      last_name: 'Lee',
      pet_name: 'Coco',
      team: 'Cultural',
      description: 'Drives creative initiatives and cultural programs.',
      tags: ['Creativity', 'Initiatives'],
      email: 'sophia.lee@example.com',
      linkedin: 'https://linkedin.com/in/sophialee',
      github: '',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400&h=400',
    },
    // Media Team
    {
      id: 4,
      created_at: new Date(),
      first_name: 'Michael',
      last_name: 'Brown',
      pet_name: 'Rocky',
      team: 'Media',
      description: 'Specialist in multimedia content creation.',
      tags: ['Video', 'Photography'],
      email: 'michael.brown@example.com',
      linkedin: 'https://linkedin.com/in/michaelbrown',
      github: '',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400',
    },
    {
      id: 5,
      created_at: new Date(),
      first_name: 'Olivia',
      last_name: 'Davis',
      pet_name: 'Luna',
      team: 'Media',
      description: 'Leads social media strategies and campaigns.',
      tags: ['Social Media', 'Campaigns'],
      email: 'olivia.davis@example.com',
      linkedin: 'https://linkedin.com/in/oliviadavis',
      github: '',
      image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&q=80&w=400&h=400',
    },
    {
      id: 6,
      created_at: new Date(),
      first_name: 'Ethan',
      last_name: 'Garcia',
      pet_name: 'Shadow',
      team: 'Media',
      description: 'Creative designer with a focus on branding.',
      tags: ['Branding', 'Design'],
      email: 'ethan.garcia@example.com',
      linkedin: 'https://linkedin.com/in/ethangarcia',
      github: '',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400',
    },
    // Operations Team
    {
      id: 7,
      created_at: new Date(),
      first_name: 'Ava',
      last_name: 'Martinez',
      pet_name: 'Bella',
      team: 'Operations',
      description: 'Ensures smooth day-to-day operations.',
      tags: ['Efficiency', 'Logistics'],
      email: 'ava.martinez@example.com',
      linkedin: 'https://linkedin.com/in/avamartinez',
      github: '',
      image: 'https://images.unsplash.com/photo-1502764613149-7f1d229e230f?auto=format&fit=crop&q=80&w=400&h=400',
    },
    {
      id: 8,
      created_at: new Date(),
      first_name: 'Noah',
      last_name: 'Harris',
      pet_name: 'Charlie',
      team: 'Operations',
      description: 'Focuses on optimizing workflows.',
      tags: ['Optimization', 'Workflows'],
      email: 'noah.harris@example.com',
      linkedin: 'https://linkedin.com/in/noahharris',
      github: '',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400',
    },
    {
      id: 9,
      created_at: new Date(),
      first_name: 'Isabella',
      last_name: 'White',
      pet_name: 'Daisy',
      team: 'Operations',
      description: 'Handles team logistics and resource management.',
      tags: ['Logistics', 'Resources'],
      email: 'isabella.white@example.com',
      linkedin: 'https://linkedin.com/in/isabellawhite',
      github: '',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400&h=400',
    },
    // Technical Team
    {
      id: 10,
      created_at: new Date(),
      first_name: 'James',
      last_name: 'Wilson',
      pet_name: 'Scout',
      team: 'Technical',
      description: 'Expert in backend development and database design.',
      tags: ['Backend', 'Databases'],
      email: 'james.wilson@example.com',
      linkedin: 'https://linkedin.com/in/jameswilson',
      github: 'https://github.com/jameswilson',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400',
    },
    {
      id: 11,
      created_at: new Date(),
      first_name: 'Charlotte',
      last_name: 'Taylor',
      pet_name: 'Milo',
      team: 'Technical',
      description: 'Frontend developer passionate about UI/UX.',
      tags: ['Frontend', 'UI/UX'],
      email: 'charlotte.taylor@example.com',
      linkedin: 'https://linkedin.com/in/charlottetaylor',
      github: 'https://github.com/charlottetaylor',
      image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&q=80&w=400&h=400',
    },
    {
      id: 12,
      created_at: new Date(),
      first_name: 'Lucas',
      last_name: 'Anderson',
      pet_name: 'Simba',
      team: 'Technical',
      description: 'DevOps engineer ensuring system reliability.',
      tags: ['DevOps', 'Reliability'],
      email: 'lucas.anderson@example.com',
      linkedin: 'https://linkedin.com/in/lucasanderson',
      github: 'https://github.com/lucasanderson',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400&h=400',
    },
  ];

  // Render team sections
  const renderTeam = (team) =>
    teamMembers
      .filter((member) => member.team === team)
      .map((member) => (
        <div
          key={member.id}
          className="text-center bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700"
        >
          <img
            src={member.image}
            alt={`${member.first_name} ${member.last_name}`}
            className="w-40 h-40 rounded-full mx-auto mb-4 object-cover border-4 border-blue-400"
          />
          <h3 className="text-xl font-bold mb-2">{`${member.first_name} ${member.last_name}`}</h3>
          <p className="text-gray-400">{member.description}</p>
          <div className="mt-2">
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              LinkedIn
            </a>
            {member.github && (
              <span className="ml-4">
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  GitHub
                </a>
              </span>
            )}
          </div>
        </div>
      ));

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
              Meet Our Aegis Team
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore the brilliant minds and dedicated individuals driving our success.
            </p>
          </div>

          {/* Cultural Team */}
          <h2 className="text-3xl font-bold mb-8">Cultural Team</h2>
          <div className="grid md:grid-cols-3 gap-8">{renderTeam('Cultural')}</div>

          {/* Media Team */}
          <h2 className="text-3xl font-bold mb-8 mt-16">Media Team</h2>
          <div className="grid md:grid-cols-3 gap-8">{renderTeam('Media')}</div>

          {/* Operations Team */}
          <h2 className="text-3xl font-bold mb-8 mt-16">Operations Team</h2>
          <div className="grid md:grid-cols-3 gap-8">{renderTeam('Operations')}</div>

          {/* Technical Team */}
          <h2 className="text-3xl font-bold mb-8 mt-16">Technical Team</h2>
          <div className="grid md:grid-cols-3 gap-8">{renderTeam('Technical')}</div>
        </div>
      </div>
    </>
  );
};

export default Teams;
