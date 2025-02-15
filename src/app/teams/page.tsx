"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { TeamMember } from "@/types/TeamMember";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

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
        const { data, error } = await supabase
          .from("team_members")
          .select("*")
          .eq("present_member", true);
        if (error) throw new Error(error.message);
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

  const getRole = (member: TeamMember): string => {
    const role = member.role?.trim().toLowerCase() || "member";
    switch (role) {
      case "lead":
        return "Lead";
      case "co-lead":
      case "colead":
      case "co lead":
        return "Co-Lead";
      case "club lead":
        return "Club Lead";
      case "club co-lead":
      case "club colead":
      case "club co lead":
        return "Club Co-Lead";
      case "faculty chair":
        return "Faculty Chair"
      case "faculty convenor":
        return "Faculty convenor"
      default:
        return "Member";
    }
  };

  const renderTeam = (team: string) => {
    const rolePriority: RolePriority = {
      "Club Lead": 1,
      "Club Co-Lead": 2,
      Lead: 3,
      "Co-Lead": 4,
      Member: 5,
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
          {/* Pet name overlay */}
          {member.pet_name &&
            !isPetNameSimilar(
              member.pet_name,
              member.first_name,
              member.last_name
            ) && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-sm font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-full">
                (aka: {member.pet_name})
              </div>
            )}
        </div>
        <h3 className="text-xl font-bold mb-2">{`${member.first_name} ${member.last_name}`}</h3>
        <p className="text-sm text-gray-300">{member.role}</p>
        <p className="text-gray-400 mt-4">{member.description}</p>
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
        {/* Render tags as badges */}
        {member.tags && member.tags.length > 0 && (
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {member.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/20 backdrop-blur-md ring-1 ring-white/10 text-white hover:bg-white/30 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    ));
  };

  const isPetNameSimilar = (
    petName: string | null,
    firstName: string,
    lastName: string
  ): boolean => {
    if (!petName) return false;

    const normalizedPetName = petName.trim().toLowerCase();
    const normalizedFirstName = firstName.trim().toLowerCase();
    const normalizedLastName = lastName.trim().toLowerCase();
    const normalizedFullName =
      `${firstName.trim()} ${lastName.trim()}`.toLowerCase();

    // Check if pet_name matches first_name, last_name, or full name
    return (
      normalizedPetName === normalizedFirstName ||
      normalizedPetName === normalizedLastName ||
      normalizedPetName === normalizedFullName
    );
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-20 text-white text-center">
        <h2 className="text-3xl">Loading team members...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-20 text-white text-center">
        <h2 className="text-3xl">{error}</h2>
      </div>
    );
  }

  return (
    <div className="container overflow-x-hidden mx-auto px-4 py-20 text-white">
      <h1 className="text-5xl pb-4 mt-10 font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400 text-center">
        Meet Our Aegis Team
      </h1>
      <h2 className="text-3xl font-bold mb-8 mt-16">Faculty</h2>
      <div className="grid md:grid-cols-3 gap-8">{renderTeam("Faculty")}</div>
      <h2 className="text-3xl font-bold mb-8 mt-16">Club Leaders</h2>
      <div className="grid md:grid-cols-3 gap-8">{renderTeam("Club")}</div>
      <h2 className="text-3xl font-bold mb-8 mt-16">Technical Team</h2>
      <div className="grid md:grid-cols-3 gap-8">{renderTeam("Technical")}</div>
      <h2 className="text-3xl font-bold mb-8 mt-16">Media Team</h2>
      <div className="grid md:grid-cols-3 gap-8">{renderTeam("Media")}</div>
      <h2 className="text-3xl font-bold mb-8 mt-16">Cultural Team</h2>
      <div className="grid md:grid-cols-3 gap-8">{renderTeam("Cultural")}</div>
      <h2 className="text-3xl font-bold mb-8 mt-16">Operations Team</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {renderTeam("Operations")}
      </div>
    </div>
  );
};

export default Teams;
