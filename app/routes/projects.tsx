import { Link } from "react-router-dom";

export default function Projects() {
  const projects = [
    {
      title: "F1 Pit Stop Predictor",
      img: "/icons/f1.png",
      description:
        "A machine learning project that predicts whether or not a driver will pit in the next lap of a grand prix.",
      tags: ["Python", "Pandas", "NumPy", "Scikit-learn"],
      github: "https://github.com/Abhinavpunnakkan/f1-pitstop-predictor",
      demo: "#",
    },
    {
        title: "Doctor.Ai",
        img: "/icons/doctor_compressed.png",
        description: "A machine learning project that predicts the likelihood of diseases based on user symptoms using a trained medical dataset.",
        tags: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Flask", "HTML", "CSS"],
        github: "https://github.com/Abhinavpunnakkan/doctor.ai",
        demo: "#",
    },
    {
      title: "Sraven Portfolio",
      img: "/icons/sraven.png",
      description: "A personal portfolio website for my friend showcasing their projects and skills.",
      tags: ["TypeScript", "Tailwind CSS"],
      github: "https://github.com/Abhinavpunnakkan/Sraven-Portfolio.git",
      demo: "https://sraven.vercel.app/",
    },
    {
      title: "Global Labs Website",
      img: "/icons/global-labs.png",
      description: "A responsive website for Global Labs using TypeScript and TailwindCSS, featuring smooth animations and mobile-first design. Integrated Cloudinary for media storage and WhatsApp booking for seamless appointment scheduling.",
      tags: ["TypeScript", "Tailwind CSS", "Cloudinary"],
      github: "https://github.com/Abhinavpunnakkan/Global-Labs.git",
      demo: "https://globallabs.co.in",
    }
  ];

  const handleDemoClick = (e: React.MouseEvent<HTMLAnchorElement>, demoUrl: string) => {
    if (!demoUrl || demoUrl === "#" || demoUrl.trim() === "") {
      e.preventDefault();
      alert("Sorry, demo is not available yet!");
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            PROJECTS
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills
            in frontend and backend development, design, and more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl border border-[#2a2a2a] overflow-hidden transition-all hover:border-[#3a3a3a] hover:shadow-lg"
            >
                
              <div className="relative w-full h-48 bg-gray-700 overflow-hidden">
                <img
                  src={project.img}
                  alt={`${project.title} thumbnail`}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h2>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-900 text-gray-300 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-4 bg-[#000] text-white rounded-lg text-center hover:bg-gray-900 transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => handleDemoClick(e, project.demo)}
                    className="flex-1 py-2 px-4 bg-[#3a3a3a] text-white rounded-lg text-center hover:bg-[#4a4a4a] transition-colors"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}