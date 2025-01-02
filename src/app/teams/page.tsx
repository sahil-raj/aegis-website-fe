"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { TeamMember } from "@/types/TeamMember";
import Navbar from "@/components/Navbar";
import BackgroundLayout from "@/components/BackgroundLayout";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

// Define a type for the rolePriority mapping
type RolePriority = {
  [key: string]: number;
};

const Teams = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetching data from the Supabase team_members table dynamically
        const { data, error } = await supabase.from("team_members").select("*");

        if (error) {
          throw new Error(error.message);
        }

        setTeamMembers(data || []);
      } catch (err) {
        setError("Error fetching team members.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Dynamically determine the role from the database
  const getRole = (member: TeamMember): string => {
    const role = member.role?.trim().toLowerCase() || "member"; // Normalize to lowercase
    if (role === "lead") return "Lead";
    if (role === "co-lead" || role === "colead" || role === "co lead")
      return "Co-Lead"; // Handle co-lead variations
    return "Member"; // Default to Member
  };

  const renderTeam = (team: string) => {
    // Define the role priority mapping with explicit types
    const rolePriority: RolePriority = {
      Lead: 1,
      "Co-Lead": 2,
      Member: 3,
    };

    const sortedTeamMembers = teamMembers
      .filter((member) => member.team === team)
      .map((member) => ({
        ...member,
        role: getRole(member),
      }))
      .sort((a, b) => rolePriority[a.role] - rolePriority[b.role]);

    return sortedTeamMembers.map((member) => (
      <div
        key={member.id}
        className="text-center bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700"
      >
        <div className="relative w-40 h-40 mx-auto mb-4">
          <Image
            src={member.image || "/default-image.jpg"}
            alt={`${member.first_name} ${member.last_name}`}
            layout="fill"
            className="rounded-full object-cover border-4 border-blue-400"
          />
        </div>
        <h3 className="text-xl font-bold mb-2">{`${member.first_name} ${member.last_name}`}</h3>
        <p className="text-gray-400">{member.description}</p>
        <div className="flex justify-center gap-4 mt-4">
          {member.email && (
            <Link
              href={`mailto:${member.email}`}
              className="text-blue-400 hover:text-blue-300"
            >
              <FaEnvelope size={24} />
            </Link>
          )}
          {member.linkedin && (
            <Link
              href={member.linkedin}
              className="text-blue-400 hover:text-blue-300"
            >
              <FaLinkedin size={24} />
            </Link>
          )}
          {member.github && (
            <Link
              href={member.github}
              className="text-blue-400 hover:text-blue-300"
            >
              <FaGithub size={24} />
            </Link>
          )}
        </div>
        <p className="text-sm text-gray-300 mt-4">{member.role}</p>
      </div>
    ));
  };

  if (loading) {
    return (
      <BackgroundLayout>
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-white text-center">
          <h2 className="text-3xl">Loading team members...</h2>
        </div>
      </BackgroundLayout>
    );
  }

  if (error) {
    return (
      <BackgroundLayout>
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-white text-center">
          <h2 className="text-3xl">{error}</h2>
        </div>
      </BackgroundLayout>
    );
  }

  return (
    <BackgroundLayout>
      <Navbar />
      <div className="container overflow-x-hidden mx-auto px-4 py-20 text-white">
        <h1 className="text-5xl pb-4 mt-10 font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400 text-center">
          Meet Our Aegis Team
        </h1>
        <h2 className="text-3xl font-bold mb-8">Technical Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {renderTeam("Technical")}
        </div>
        <h2 className="text-3xl font-bold mb-8 mt-16">Media Team</h2>
        <div className="grid md:grid-cols-3 gap-8">{renderTeam("Media")}</div>
        <h2 className="text-3xl font-bold mb-8 mt-16">Cultural Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {renderTeam("Cultural")}
        </div>
        <h2 className="text-3xl font-bold mb-8 mt-16">Operations Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {renderTeam("Operations")}
        </div>
      </div>
    </BackgroundLayout>
  );
};

export default Teams;
