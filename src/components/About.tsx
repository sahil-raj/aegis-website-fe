"use client";

export const TEAM = [
  {
    title: "Technical Team",
    image: "./team1.png",
    description:
      "The Technical Team of Aegis is the driving force behind the club's innovations and cyber defense initiatives. Comprising highly skilled and motivated individuals, this team works relentlessly to tackle complex cybersecurity challenges, develop security solutions, and promote awareness in the ever-evolving world of digital threats.",
    technologies: ["Ethical Hacking", "Network Security", "Cryptography", "Penetration Testing"],
    link: "#",
  },
  {
    title: "Development Team",
    image: "./team2.png",
    description: "The Development Team focuses on creating robust and scalable solutions for the club's cyber defense tools.",
    technologies: ["Web Development", "App Development", "Security", "UI/UX Design"],
    link: "#",
  },
  {
    title: "Research Team",
    image: "./team3.png",
    description: "The Research Team is responsible for conducting in-depth research into the latest cyber threats and developing new methodologies to counter them.",
    technologies: ["Cyber Threat Intelligence", "Data Analytics", "Machine Learning", "Blockchain"],
    link: "#",
  },
  {
    title: "Operations Team",
    image: "./team4.png",
    description: "The Operations Team ensures the seamless operation and management of the club's cybersecurity programs and initiatives.",
    technologies: ["Project Management", "Logistics", "Team Coordination", "Event Management"],
    link: "#",
  },
];

const About = () => {
  return (
    <div className="relative bg-black min-h-screen w-full overflow-hidden py-12 sm:py-16 lg:py-20">
      {/* Grid Background */}
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] z-0"></div>
      
      {/* About Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-20">
        <h2 className="text-center text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-white">About Us</h2>
        <p className="text-center italic text-lg sm:text-xl text-neutral-300 mb-12 sm:mb-16">
          Sanctum Sanctorum Aegis Invicta!
        </p>
        <h3 className="text-center text-2xl sm:text-3xl mb-6 text-white font-bold">Our Teams</h3>
        
        {TEAM.map((team, index) => (
          <div key={index} className="mb-12 sm:mb-16 flex flex-col lg:flex-row items-center lg:items-start lg:justify-center gap-6 lg:gap-12">
            <div className="w-full max-w-[200px] lg:w-1/6">
              <a href={team.link} target="_blank" rel="noopener noreferrer">
                <div className="fade-border rounded">
                  <img
                    src={team.image}
                    alt={team.title}
                    className="w-full h-auto rounded"
                  />
                </div>
              </a>
            </div>
            
            <div className="w-full lg:w-3/4 max-w-xl text-center lg:text-left">
              <h6 className="mb-3 text-xl font-semibold text-white">{team.title}</h6>
              <p className="mb-4 text-neutral-300">{team.description}</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-4">
                {team.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={team.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 rounded border-2 border-transparent text-base sm:text-lg font-semibold text-purple-500 bg-transparent hover:bg-purple-500 hover:text-white transition duration-300"
              >
                View Team
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;