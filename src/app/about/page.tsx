import React from "react";
import { Shield, Target, Code, Brain, Network, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import BackgroundLayout from "@/components/BackgroundLayout";

import Navbar from "@/components/Navbar";

const About = () => {
  const activities = [
    {
      title: "Workshops",
      description: "Hands-on sessions on ethical hacking, cybersecurity tools, and techniques.",
      icon: <Brain className="w-12 h-12 text-blue-400 mb-4" />,
    },
    {
      title: "Hackathons",
      description: "Exciting 24-hour coding events to solve real-world cybersecurity challenges.",
      icon: <Code className="w-12 h-12 text-teal-400 mb-4" />,
    },
    {
      title: "Training Sessions",
      description: "Weekly sessions on topics like cryptography, penetration testing, and more.",
      icon: <Shield className="w-12 h-12 text-blue-400 mb-4" />,
    },
    {
      title: "Outreach Programs",
      description: "Spreading awareness about cybersecurity through seminars and community events.",
      icon: <Network className="w-12 h-12 text-teal-400 mb-4" />,
    },
  ];

  return (
    <BackgroundLayout>
      <Navbar />
      <div className="container mx-auto px-4 py-20 text-white overflow-x-hidden">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
            About Aegis
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pioneering the future of cybersecurity with innovative solutions
            that protect and empower students to explore, learn, and excel in the field of cybersecurity.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700">
            <Target className="w-12 h-12 text-blue-400 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-300">
              To create a collaborative environment for students to learn,
              experiment, and grow in the field of cybersecurity while fostering
              innovation and teamwork.
            </p>
          </div>
          <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700">
            <Shield className="w-12 h-12 text-teal-400 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-300">
              To establish a community of cybersecurity enthusiasts who excel in
              solving modern digital challenges and inspire others to secure the
              digital world.
            </p>
          </div>
        </div>

        {/* Club Activities Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Activities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="text-center bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700"
              >
                {activity.icon}
                <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
                <p className="text-gray-300">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media Bar */}
        <div className="bg-gray-800/30 rounded-2xl p-8 backdrop-blur-sm border border-gray-700">
          <h2 className="text-3xl font-bold text-center mb-6">Follow Us</h2>
          <div className="flex justify-center space-x-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-teal-400 transition duration-300 flex flex-col items-center"
            >
              <Linkedin className="w-8 h-8" />
              <span className="text-sm text-gray-300 mt-2">LinkedIn</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-teal-400 transition duration-300 flex flex-col items-center"
            >
              <Twitter className="w-8 h-8" />
              <span className="text-sm text-gray-300 mt-2">Twitter</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-teal-400 transition duration-300 flex flex-col items-center"
            >
              <Instagram className="w-8 h-8" />
              <span className="text-sm text-gray-300 mt-2">Instagram</span>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-teal-400 transition duration-300 flex flex-col items-center"
            >
              <Youtube className="w-8 h-8" />
              <span className="text-sm text-gray-300 mt-2">YouTube</span>
            </a>
          </div>
        </div>
      </div>
    </BackgroundLayout>
  );
};

export default About;
