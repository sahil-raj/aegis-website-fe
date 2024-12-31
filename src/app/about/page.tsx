// "use client";
import React from "react";
import {Shield, Users, Target, Award} from "lucide-react";
import "../globals.css";
import Navbar from "@/components/Navbar";

const About = () => {
 return (
  <>
  <Navbar/>
   <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
    {/* Hero Section */}
    <div className="container mx-auto px-4 py-20">
     <div className="text-center mb-16">
      <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
       About Aegis
      </h1>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
       Pioneering the future of cybersecurity with innovative solutions that
       protect and empower businesses worldwide.
      </p>
     </div>

     {/* Mission & Vision */}
     <div className="grid md:grid-cols-2 gap-12 mb-20">
      <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700">
       <Target className="w-12 h-12 text-blue-400 mb-4" />
       <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
       <p className="text-gray-300">
        To provide cutting-edge cybersecurity solutions that safeguard
        organizations against evolving digital threats while ensuring seamless
        business operations.
       </p>
      </div>
      <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700">
       <Shield className="w-12 h-12 text-teal-400 mb-4" />
       <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
       <p className="text-gray-300">
        To be the global leader in innovative cybersecurity solutions, creating
        a safer digital world for businesses and individuals alike.
       </p>
      </div>
     </div>

     {/* Team Section */}
     <div className="mb-20">
      <h2 className="text-3xl font-bold text-center mb-12">
       Our Leadership Team
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
       {[
        {
         name: "Sarah Chen",
         role: "Chief Executive Officer",
         image:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400",
        },
        {
         name: "Michael Rodriguez",
         role: "Chief Technology Officer",
         image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400",
        },
        {
         name: "Emma Thompson",
         role: "Head of Security Research",
         image:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400",
        },
       ].map((member, index) => (
        <div key={index} className="text-center">
         <img
          src={member.image}
          alt={member.name}
          className="w-48 h-48 rounded-full mx-auto mb-4 object-cover border-4 border-blue-400"
         />
         <h3 className="text-xl font-bold mb-2">{member.name}</h3>
         <p className="text-gray-400">{member.role}</p>
        </div>
       ))}
      </div>
     </div>

     {/* Values Section */}
     <div className="bg-gray-800/30 rounded-2xl p-12 backdrop-blur-sm border border-gray-700">
      <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
      <div className="grid md:grid-cols-3 gap-8">
       <div className="text-center">
        <Shield className="w-12 h-12 mx-auto mb-4 text-blue-400" />
        <h3 className="text-xl font-bold mb-2">Security First</h3>
        <p className="text-gray-300">
         Unwavering commitment to protecting our clients' digital assets
        </p>
       </div>
       <div className="text-center">
        <Award className="w-12 h-12 mx-auto mb-4 text-teal-400" />
        <h3 className="text-xl font-bold mb-2">Excellence</h3>
        <p className="text-gray-300">
         Delivering superior solutions through innovation and expertise
        </p>
       </div>
       <div className="text-center">
        <Users className="w-12 h-12 mx-auto mb-4 text-blue-400" />
        <h3 className="text-xl font-bold mb-2">Client Trust</h3>
        <p className="text-gray-300">
         Building lasting relationships through reliability and transparency
        </p>
       </div>
      </div>
     </div>
    </div>
   </div>
  </>
 );
};

export default About;