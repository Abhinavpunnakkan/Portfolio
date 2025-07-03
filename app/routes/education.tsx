import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const EducationPage = () => {
  const [activeSection, setActiveSection] = useState('university');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  
  const universityEducation = [
    {
      id: 1,
      degree: "Bachelor of Engineering in Computer Science and Engineering",
      institution: "Yenepoya Institute of Technology",
      year: "2024",
      gpa: "7.04",
      logo: "/icons/yit.png", 
      description: [
        "Completed a Bachelor's in Computer Science and Engineering with a strong foundation in data structures, algorithms, web development, and system design. Gained hands-on experience through labs and academic projects."
      ]
    },
  ];

  
  const certificates = [
    {
      id: 1,
      name: "Full Stack Developer Certification",
      issuer: "Kodnest",
      year: "2025",
      image: "/icons/kodnest.jpg", 
    },
    {
      id: 2,
      name: "Software Engineering Job Simulation",
      issuer: "Forage Midas(JPMorgan Chase & Co.)",
      year: "2025",
      image: "/icons/jpmc.jpg",
    }
    
  ];

  
  const skills = {
    "Programming Languages": ["JavaScript", "Python", "Java", "TypeScript", "C/C++"],
    "Frontend": ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
    "Backend": ["Node.js", "Express", "REST APIs"],
    "Databases": ["MongoDB", "MySQL", "Firebase"],
    "Tools & Others": ["VS Code", "Figma", "Postman", "Jira", "Git"]
  };

  const sections = [
    { key: 'university', label: 'University Education' },
    { key: 'certifications', label: 'Certifications' },
    { key: 'skills', label: 'Skills & Coursework' }
  ];

  const handleSectionChange = (section: React.SetStateAction<string>) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);
  };

  const renderUniversityEducation = () => (
    <div className="space-y-6">
      {universityEducation.map((edu) => (
        <div key={edu.id} className="bg-gray-800 rounded-lg p-4 md:p-6 border border-gray-700">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
              <img src={edu.logo} alt={`${edu.institution} logo`} className="w-12 h-12 rounded-lg object-cover" />
            </div>
            
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-lg md:text-xl font-semibold text-white mb-1">{edu.degree}</h3>
              <p className="text-gray-400 mb-3">{edu.institution}</p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 sm:gap-4 mb-4 text-sm text-gray-500">
                <span>{edu.year}</span>
                <span className="hidden sm:inline">•</span>
                <span>GPA: {edu.gpa}</span>
              </div>
              
              <div className="space-y-2">
                {edu.description.map((item, index) => (
                  <p key={index} className="text-gray-300 leading-relaxed text-sm md:text-base">{item}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderCertifications = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
      {certificates.map((cert) => (
        <div key={cert.id} className="bg-gray-800 rounded-lg p-4 md:p-6 border border-gray-700">
          
          <div className="w-full h-40 md:h-48 bg-gray-700 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
            <img src={cert.image} alt={cert.name} className="w-full h-full object-cover rounded-lg" />
          </div>
          
          <h3 className="text-base md:text-lg font-semibold text-white mb-2">{cert.name}</h3>
          <p className="text-gray-400 mb-2 text-sm md:text-base">{cert.issuer}</p>
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span>{cert.year}</span>
          </div>
        </div>
      ))}
    </div>
  );

  const renderSkills = () => (
    <div className="space-y-4 md:space-y-6">
      {Object.entries(skills).map(([category, skillList]) => (
        <div key={category} className="bg-gray-800 rounded-lg p-4 md:p-6 border border-gray-700">
          <h3 className="text-base md:text-lg font-semibold text-white mb-4">{category}</h3>
          <div className="flex flex-wrap gap-2">
            {skillList.map((skill) => (
              <span
                key={skill}
                className="px-2 md:px-3 py-1 bg-blue-600 text-blue-100 rounded-full text-xs md:text-sm font-medium hover:bg-blue-500 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'university':
        return renderUniversityEducation();
      case 'certifications':
        return renderCertifications();
      case 'skills':
        return renderSkills();
      default:
        return renderUniversityEducation();
    }
  };

  const getCurrentSectionLabel = () => {
    const section = sections.find(s => s.key === activeSection);
    return section ? section.label : 'University Education';
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white py-8 md:pt-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="md:hidden mb-6">
          <h1 className="text-2xl font-bold text-white mb-4 text-center">Education</h1>
          
          
          <div className="relative">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-left flex items-center justify-between text-white"
            >
              <span>{getCurrentSectionLabel()}</span>
              <ChevronDown 
                className={`w-5 h-5 transition-transform duration-200 ${
                  isMobileMenuOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            
            {isMobileMenuOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-10">
                {sections.map((section) => (
                  <button
                    key={section.key}
                    onClick={() => handleSectionChange(section.key)}
                    className={`w-full text-left px-4 py-3 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg ${
                      activeSection === section.key
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-400 hover:text-white hover:bg-gray-700'
                    }`}
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>


        <div className="hidden md:flex gap-8">
          
          <div className="w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-2">
              {sections.map((section) => (
                <button
                  key={section.key}
                  onClick={() => setActiveSection(section.key)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                    activeSection === section.key
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700 hover:bg-opacity-80 hover:shadow-md'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>


          <div className="flex-1">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white">
                {getCurrentSectionLabel()}
              </h1>
            </div>
            
            {renderContent()}
          </div>
        </div>


        <div className="md:hidden">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default EducationPage;