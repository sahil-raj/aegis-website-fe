"use client";
import React, { useEffect, useState } from "react";
import { FaTrophy, FaCalendarAlt } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import BackgroundLayout from "@/components/BackgroundLayout";
import { supabase } from "@/lib/supabaseClient";
import { AchievementError } from "@/types/Achievements";

export default function Achievements() {
  const [achievements, setAchievements] =
    useState<Array<AchievementError> | null>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAchievements() {
      try {
        // Fetch achievements with team member IDs
        const { data: achievementsData, error: achievementsError } =
          await supabase
            .from("achievements")
            .select(
              "id, created_at, field, description, image, achievement, achievement_date, member_id"
            );

        if (achievementsError) throw achievementsError;

        // Fetch team member names (first and last) for the achievements
        const teamMemberIds = achievementsData.map((ach) => ach.member_id);
        const { data: teamMembersData, error: teamMembersError } =
          await supabase
            .from("team_members")
            .select("id, first_name, last_name")
            .in("id", teamMemberIds);

        if (teamMembersError) throw teamMembersError;

        // Map achievements with team member full names
        const achievementsWithNames = achievementsData.map((achievement) => {
          const teamMember = teamMembersData.find(
            (member) => member.id === achievement.member_id
          );
          const fullName = teamMember
            ? `${teamMember.first_name} ${teamMember.last_name}`
            : "Unknown";
          return {
            ...achievement,
            teamMemberName: fullName,
          };
        });

        setAchievements(achievementsWithNames);
      } catch (error) {
        console.error("Error fetching achievements:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchAchievements();
  }, []);

  if (loading) {
    return <div className="text-center text-white py-20">Loading...</div>;
  }

  return (
    <BackgroundLayout>
      <Navbar />
      <div className="container mx-auto px-4 py-20 text-white">
        <h1 className="text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400 text-center">
          Our Achievements
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements?.map((achievement) => (
            <div
              key={achievement.id}
              className="bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-blue-400"
            >
              <div className="relative w-full h-48">
                <img
                  src={achievement.image}
                  alt={achievement.achievement}
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">
                  {achievement.achievement}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {achievement.description}
                </p>
                <p className="text-gray-300 text-sm mb-4">
                  Team Member: {achievement.teamMemberName}
                </p>
                <div className="flex justify-between items-center text-blue-400 text-sm">
                  <div className="flex items-center">
                    <FaTrophy className="mr-1" />
                    <span>{achievement.field}</span>
                  </div>
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-1" />
                    <span>{achievement.achievement_date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BackgroundLayout>
  );
}
