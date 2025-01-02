"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import { TeamMember } from "../../types/TeamMember";
import Navbar from "@/components/Navbar";
import BackgroundLayout from "@/components/BackgroundLayout";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Teams = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("team_members").select("*");

      if (error) {
        console.error("Error fetching data:", error);
      } else {
        console.log("Fetched team members:", data); // Debugging log to inspect fetched data
        setTeamMembers(data || []);
      }
    };

    fetchData();
  }, []);

  const getRole = (member: TeamMember, team: string) => {
    // Trim any extra whitespace or newline characters from first_name and last_name
    const firstName = member.first_name.trim();
    const lastName = member.last_name.trim();

    // Ensure the correct role for Shyam Bharadwaj in Media team
    if (firstName === "Shyam" && lastName === "Bharadwaj" && team === "Media") {
      console.log("Assigning Shyam Bharadwaj as Lead!"); // Debugging log
      return "Lead"; // Explicitly set to Lead for Media team
    } else if (firstName === "Sahil" && lastName === "Raj") {
      return "Lead";
    } else if (firstName === "R" && lastName === "Aswin") {
      return "Co-Lead";
    } else if (firstName === "Harika" && lastName === "T" && team === "Cultural") {
      return "Lead";
    } else if (firstName === "UMME" && lastName === "AAMINA A") {
      return "Co-Lead";
    } else if (firstName === "Likitha") {
      return "Lead";
    } else if (firstName === "Sanjit") {
      return "Co-Lead";
    } else if (firstName === "Dharaneesh" && lastName === "Kuruba") {
      return "Member";
    }
    return "Member";
  };

  const renderTeam = (team: string) => {
    const sortedTeamMembers = teamMembers
      .filter((member) => member.team === team)
      .map((member) => {
        const role = getRole(member, team);
        console.log(`Assigned role for ${member.first_name} ${member.last_name}: ${role}`); // Debugging log
        return {
          ...member,
          role,
        };
      })
      .sort((a, b) => {
        const rolePriority = { Lead: 1, "Co-Lead": 2, Member: 3 };
        return rolePriority[a.role] - rolePriority[b.role];
      });

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

  return (
    <BackgroundLayout>
      <Navbar />
      <div className="container mx-auto px-4 py-20 text-white">
        <h1 className="text-5xl pb-4 font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400 text-center">
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
