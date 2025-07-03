import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface LandingPageLoaderProps {
  onLoadingComplete?: () => void;
}

const LandingPageLoader = ({ onLoadingComplete }: LandingPageLoaderProps) => {
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(true);

  
  const greetings = [
    { text: "Hello", language: "English" },
    { text: "Hola", language: "Spanish" },
    { text: "Bonjour", language: "French" },
    { text: "Hallo", language: "German" },
    { text: "Ciao", language: "Italian" },
    { text: "Olá", language: "Portuguese" },
    { text: "Привет", language: "Russian" },
    { text: "こんにちは", language: "Japanese" },
    { text: "안녕하세요", language: "Korean" },
    { text: "你好", language: "Chinese" },
    { text: "नमस्ते", language: "Hindi" },
    { text: "السلام عليكم", language: "Arabic" },
    { text: "Shalom", language: "Hebrew" },
    { text: "Γεια σας", language: "Greek" },
    { text: "Hej", language: "Swedish" },
    { text: "Merhaba", language: "Turkish" },
    { text: "Aloha", language: "Hawaiian" },
    { text: "നമസ്കാരം", language: "Malayalam" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLanguageIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % greetings.length;
        
        
        if (nextIndex === 0 && prevIndex === greetings.length - 1) {
          setTimeout(() => {
            setIsAnimating(false);
            setTimeout(() => {
              setIsVisible(false);
              if (onLoadingComplete) {
                onLoadingComplete();
              }
            }, 500);
          }, 400);
        }
        
        return nextIndex;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [greetings.length, onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className={`
      fixed inset-0 bg-[#0a0a0a] z-50 flex items-center justify-center
      transition-all duration-500 ease-in-out
      ${!isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}
    `}>
      
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 animate-pulse" />
      


      <div className="relative z-10 text-center px-4">
        
        <div className="mb-8">
          <h1 className={`
            text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4
            transition-all duration-300 ease-in-out transform
            ${isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-70'}
          `}>
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              {greetings[currentLanguageIndex].text}
            </span>
          </h1>
        </div>


        <div className="flex flex-col items-center space-y-4">
          
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" />
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce delay-100" />
            <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce delay-200" />
          </div>
        </div>
      </div>


      <style>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        
        .animate-progress {
          animation: progress 3.6s ease-in-out infinite;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeOutDown {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
};


const AppWithLoader = () => {
  
  const [isLoading, setIsLoading] = useState(() => {
    
    if (typeof window !== 'undefined' && window.sessionStorage) {
      const hasAnimationPlayed = sessionStorage.getItem('landingAnimationPlayed');
      
      return !hasAnimationPlayed;
    }
    
    return true;
  });

  const handleLoadingComplete = () => {
    
    if (typeof window !== 'undefined' && window.sessionStorage) {
      sessionStorage.setItem('landingAnimationPlayed', 'true');
    }
    setIsLoading(false);
  };

  
  function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 animate-pulse" />
      
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500/30 rounded-full animate-pulse delay-100" />
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-500/40 rounded-full animate-pulse delay-300" />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-pink-500/30 rounded-full animate-pulse delay-500" />
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-blue-400/30 rounded-full animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-purple-400/40 rounded-full animate-pulse delay-200" />
        <div className="absolute bottom-1/3 right-1/6 w-2 h-2 bg-pink-400/20 rounded-full animate-pulse delay-600" />
      </div>

      <div className="relative z-10 flex items-center justify-center p-4 md:p-8 min-h-screen">
        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-5 grid-rows-5 gap-4">
            
            <div className="md:col-span-3 row-span-4 bg-[#171717]/80 backdrop-blur-sm p-6 rounded-xl border border-[#2a2a2a]/50 shadow-lg transition-all hover:border-[#3a3a3a] hover:bg-[#171717]/90 relative overflow-hidden group">
            
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-purple-900/5 to-pink-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">About</h1>
                <p className="text-gray-300 leading-relaxed">
    Hey there! I'm Abhinav — welcome to my corner of the internet. I'm someone who loves creating, learning, and chasing ideas or topics that keep me up at night (sometimes for good reasons, sometimes because of missing semicolons).<br /><br />
    I hold a degree in Computer Science and Engineering and for the past year I have tried to embrace adulthood.<br /><br />
    I'm passionate about solving problems, learning from people around me, and staying curious no matter where life takes me.<br /><br />
    When I'm not behind a screen, you'll probably find me catching up with friends, overanalyzing life (emphasis on OVER), enjoying music, or exploring something random just for the fun of it.<br /><br />
    So feel free to explore. Thanks for stopping by!
  </p>
              </div>
            </div>


            <Link 
              to="/projects" 
              className="md:col-span-2 row-span-2 bg-[#171717]/80 backdrop-blur-sm p-6 rounded-xl border border-[#2a2a2a]/50 shadow-lg transition-all hover:border-blue-500/50 hover:bg-[#171717]/90 relative overflow-hidden group hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:scale-[1.02]"
            >
              
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img 
                src="/icons/project.png" 
                alt="" 
                className="absolute right-4 bottom-4 w-24 h-24 opacity-10 object-contain group-hover:opacity-20 transition-opacity duration-300"
              />
              <div className="relative z-10">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-4 group-hover:from-blue-300 group-hover:to-blue-500 transition-all duration-300">Projects</h1>
              </div>
            </Link>


            <Link 
              to="/education" 
              className="md:col-span-2 md:col-start-4 row-span-2 bg-[#171717]/80 backdrop-blur-sm p-6 rounded-xl border border-[#2a2a2a]/50 shadow-lg transition-all hover:border-purple-500/50 hover:bg-[#171717]/90 relative overflow-hidden group hover:shadow-[0_0_20px_rgba(147,51,234,0.15)] hover:scale-[1.02]"
            >
              
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img 
                src="/icons/education.png" 
                alt="" 
                className="absolute right-4 bottom-4 w-28 h-28 opacity-10 object-contain group-hover:opacity-20 transition-opacity duration-300"
              />
              <div className="relative z-10">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-4 group-hover:from-purple-300 group-hover:to-purple-500 transition-all duration-300">Education</h1>
              </div>
            </Link>


            <Link 
              to="/contact" 
              className="md:col-span-2 row-span-1 md:col-start-1 bg-[#171717]/80 backdrop-blur-sm p-6 rounded-xl border border-[#2a2a2a]/50 shadow-lg transition-all hover:border-pink-500/50 hover:bg-[#171717]/90 relative overflow-hidden group hover:shadow-[0_0_20px_rgba(236,72,153,0.15)] hover:scale-[1.02]"
            >
              
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600/10 to-rose-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img 
                src="/icons/contact.png" 
                alt="" 
                className="absolute right-1 top-1/2 -translate-x-1 -translate-y-1/2 w-30 h-20 opacity-10 object-contain group-hover:opacity-20 transition-opacity duration-300"
              />
              <div className="relative z-10">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent mb-4 group-hover:from-pink-300 group-hover:to-pink-500 transition-all duration-300">Contact</h2>
              </div>
            </Link>


            <Link 
              to="/socials" 
              className="md:col-span-3 row-span-1 bg-[#171717]/80 backdrop-blur-sm p-6 rounded-xl border border-[#2a2a2a]/50 shadow-lg transition-all hover:border-cyan-500/50 hover:bg-[#171717]/90 relative overflow-hidden group hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:scale-[1.02]"
            >
              
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img 
                src="/icons/network.png" 
                alt="" 
                className="absolute right-2 top-4 w-30 h-30 opacity-10 object-contain group-hover:opacity-20 transition-opacity duration-300"
              />
              <div className="relative z-10">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent mb-4 group-hover:from-cyan-300 group-hover:to-cyan-500 transition-all duration-300">Socials</h2>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

  return (
    <div>
      {isLoading && <LandingPageLoader onLoadingComplete={handleLoadingComplete} />}
      {!isLoading && <Home />}
    </div>
  );
};

export default AppWithLoader;