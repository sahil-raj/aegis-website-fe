"use client";

import "../constants/index"; // Import the CSS file

// Importing images for the teams
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";
import team4 from "../assets/team4.png";

// Importing team data
import { TEAM } from "../constants"; // Ensure that TEAM is properly defined in constants

const About = () => {
  const aboutData = {
    title: "About Us",
    description:
      "We are a passionate team dedicated to building innovative solutions that make a difference. Our work is driven by collaboration, creativity, and technology.",
    image: "/path/to/about-image.jpg", // Replace with actual image
    link: "#", // Optional, add a link if needed
  };

  return (
    <div className="about-section border-b border-neutral-900 pb-4">
      {/* Heading */}
      <h2 className="about-heading my-20 text-center text-4xl">
        {aboutData.title}
      </h2>

      {/* About Content */}
      <div className="flex flex-wrap lg:justify-center">
        <div className="w-full lg:w-1/4">
          {/* Image */}
          <a href={aboutData.link} target="_blank" rel="noopener noreferrer">
            <img
              src={aboutData.image}
              width={150}
              height={150}
              alt={aboutData.title}
              className="about-image mb-6 rounded"
            />
          </a>
        </div>

        <div className="w-full max-w-xl lg:w-3/4">
          <p className="about-description mb-4 text-neutral-400">{aboutData.description}</p>

          {/* View Team Button */}
          <a
            href={aboutData.link}
            target="_blank"
            rel="noopener noreferrer"
            className="view-team-button inline-block mt-4 px-6 py-2 rounded border-2 border-transparent text-lg font-semibold text-purple-900 bg-transparent hover:bg-purple-900 hover:text-white transition duration-300"
          >
            View Team
          </a>
        </div>
      </div>

      {/* Teams Section */}
      <div className="teams-section my-20">
        <h3 className="teams-heading text-center text-3xl mb-6">Our Teams</h3>
        {TEAM.map((team, index) => (
          <div key={index} className="team-item mb-8 flex flex-wrap lg:justify-center">
            <div className="team-image w-full lg:w-1/4">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src={team.image}
                  width={150}
                  height={150}
                  alt={team.title}
                  className="team-img mb-6 rounded"
                />
              </a>
            </div>

            <div className="team-info w-full max-w-xl lg:w-3/4">
              <h6 className="team-title mb-2 font-semibold">{team.title}</h6>
              <p className="team-description mb-4 text-neutral-400">{team.description}</p>
              {team.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="team-tech mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="contact-section my-20">
        <h3 className="contact-heading text-center text-3xl mb-6">Contact Us</h3>
        <div className="contact-info text-center">
          <p className="text-neutral-400">{`Address: ${CONTACT.address}`}</p>
          <p className="text-neutral-400">{`Phone: ${CONTACT.phoneNo}`}</p>
          <p className="text-neutral-400">{`Email: ${CONTACT.email}`}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
