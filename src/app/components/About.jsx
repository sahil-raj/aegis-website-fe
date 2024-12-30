"use client";

export const TEAM = [
  {
    title: "Technical Team",
    image: "/assets/team1.png",
    description:
      "The Technical Team of Aegis is the driving force behind the club’s innovations and cyber defense initiatives. Comprising highly skilled and motivated individuals, this team works relentlessly to tackle complex cybersecurity challenges, develop security solutions, and promote awareness in the ever-evolving world of digital threats.",
    technologies: ["Ethical Hacking", "Network Security", "Cryptography", "Penetration Testing"],
    link: "#",
  },
  {
    title: "Development Team",
    image: "/assets/team2.png",
    description: "The Development Team focuses on creating robust and scalable solutions for the club's cyber defense tools.",
    technologies: ["Web Development", "App Development", "Security", "UI/UX Design"],
    link: "#",
  },
  {
    title: "Research Team",
    image: "/assets/team3.png",
    description: "The Research Team is responsible for conducting in-depth research into the latest cyber threats and developing new methodologies to counter them.",
    technologies: ["Cyber Threat Intelligence", "Data Analytics", "Machine Learning", "Blockchain"],
    link: "#",
  },
  {
    title: "Operations Team",
    image: "/assets/team4.png",
    description: "The Operations Team ensures the seamless operation and management of the club’s cybersecurity programs and initiatives.",
    technologies: ["Project Management", "Logistics", "Team Coordination", "Event Management"],
    link: "#",
  },
];

const About = () => {
  return (
    <div className="relative bg-black min-h-screen w-full overflow-hidden py-20">
      {/* Grid Background */}
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] z-0"></div>

      {/* Radial Gradient Background */}
      <div className="absolute top-1/2 left-1/2 h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_center,#46a5aa4a,#000)] transform -translate-x-1/2 -translate-y-1/2 z-0"></div>

      {/* About Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-20">
        <h2 className="text-center text-4xl font-bold mb-12 text-white">About Us</h2>
        <p className="text-center italic text-xl text-neutral-300 mb-16">
          Sanctum Sanctorum Aegis Invicta!
        </p>

        <h3 className="text-center text-3xl mb-6 text-white">Our Teams</h3>

        {TEAM.map((team, index) => (
          <div key={index} className="mb-16 flex flex-wrap lg:justify-center items-start">
            <div className="w-full lg:w-1/6">
              <a href={team.link} target="_blank" rel="noopener noreferrer">
                <div className="fade-border mb-6 rounded">
                  <img
                    src={team.image}
                    alt={team.title}
                    style={{ width: '200px', height: '200px', display: 'block', margin: '0 auto' }}
                    className="rounded"
                  />
                </div>
              </a>
            </div>

            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold text-white">{team.title}</h6>
              <p className="mb-4 text-neutral-300">{team.description}</p>
              {team.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500"
                >
                  {tech}
                </span>
              ))}

              <a
                href={team.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-2 rounded border-2 border-transparent text-lg font-semibold text-purple-500 bg-transparent hover:bg-purple-500 hover:text-white transition duration-300"
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
