import React from "react";
import Navbar from "@/components/Navbar";
import BackgroundLayout from "@/components/BackgroundLayout";

const Teams = () => {
  const teamMembers = [
    // Technical
    {
      id: 10,
      first_name: "James",
      last_name: "Wilson",
      team: "Technical",
      description: "Expert in backend development and database design.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400",
    },
    {
      id: 11,
      first_name: "Charlotte",
      last_name: "Taylor",
      team: "Technical",
      description: "Frontend developer passionate about UI/UX.",
      image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&q=80&w=400&h=400",
    },
    {
      id: 12,
      first_name: "Lucas",
      last_name: "Anderson",
      team: "Technical",
      description: "DevOps engineer ensuring system reliability.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400&h=400",
    },
    // Media
    {
      id: 4,
      first_name: "Michael",
      last_name: "Brown",
      team: "Media",
      description: "Specialist in multimedia content creation.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400",
    },
    {
      id: 5,
      first_name: "Olivia",
      last_name: "Davis",
      team: "Media",
      description: "Leads social media strategies and campaigns.",
      image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&q=80&w=400&h=400",
    },
    {
      id: 6,
      first_name: "Ethan",
      last_name: "Garcia",
      team: "Media",
      description: "Creative designer with a focus on branding.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400",
    },
    // Cultural
    {
      id: 1,
      first_name: "Emily",
      last_name: "Clark",
      team: "Cultural",
      description: "Passionate about fostering team culture and engagement.",
      image: "https://images.unsplash.com/photo-1502764613149-7f1d229e230f?auto=format&fit=crop&q=80&w=400&h=400",
    },
    {
      id: 2,
      first_name: "Liam",
      last_name: "Johnson",
      team: "Cultural",
      description: "Expert in creating inclusive team environments.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400",
    },
    {
      id: 3,
      first_name: "Sophia",
      last_name: "Lee",
      team: "Cultural",
      description: "Drives creative initiatives and cultural programs.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400&h=400",
    },
    // Operations
    {
      id: 7,
      first_name: "Ava",
      last_name: "Martinez",
      team: "Operations",
      description: "Ensures smooth day-to-day operations.",
      image: "https://images.unsplash.com/photo-1502764613149-7f1d229e230f?auto=format&fit=crop&q=80&w=400&h=400",
    },
    {
      id: 8,
      first_name: "Noah",
      last_name: "Harris",
      team: "Operations",
      description: "Focuses on optimizing workflows.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400",
    },
    {
      id: 9,
      first_name: "Isabella",
      last_name: "White",
      team: "Operations",
      description: "Handles team logistics and resource management.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400&h=400",
    },
  ];

  const renderTeam = (team: string) =>
    teamMembers
      .filter((member) => member.team === team)
      .map((member) => (
        <div key={member.id} className="text-center bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700">
          <img
            src={member.image}
            alt={`${member.first_name} ${member.last_name}`}
            className="w-40 h-40 rounded-full mx-auto mb-4 object-cover border-4 border-blue-400"
          />
          <h3 className="text-xl font-bold mb-2">{`${member.first_name} ${member.last_name}`}</h3>
          <p className="text-gray-400">{member.description}</p>
        </div>
      ));

  return (
    <BackgroundLayout>
      <Navbar />
      <div className="container mx-auto px-4 py-20 text-white">
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400 text-center">
          Meet Our Aegis Team
        </h1>
        <h2 className="text-3xl font-bold mb-8">Technical Team</h2>
        <div className="grid md:grid-cols-3 gap-8">{renderTeam("Technical")}</div>
        <h2 className="text-3xl font-bold mb-8 mt-16">Media Team</h2>
        <div className="grid md:grid-cols-3 gap-8">{renderTeam("Media")}</div>
        <h2 className="text-3xl font-bold mb-8 mt-16">Cultural Team</h2>
        <div className="grid md:grid-cols-3 gap-8">{renderTeam("Cultural")}</div>
        <h2 className="text-3xl font-bold mb-8 mt-16">Operations Team</h2>
        <div className="grid md:grid-cols-3 gap-8">{renderTeam("Operations")}</div>
      </div>
    </BackgroundLayout>
  );
};

export default Teams;
