import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavItem {
  name: string;
  path: string;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems: NavItem[] = [
    { name: 'About', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Education', path: '/education' },
    { name: 'Contact', path: '/contact' },
    { name: 'Socials', path: '/socials' }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-[#0a0a0a] border-b border-[#2a2a2a] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          <div className="flex-shrink-0">
            <Link to="/">
              <img 
                src="/icons/logo.png" 
                alt="Logo" 
                className="h-10 w-10"
              />
            </Link>
          </div>


          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all
                    ${
                      isActive(item.path)
                        ? 'bg-[#1c1c1c] text-white'
                        : 'text-gray-300 hover:text-white hover:bg-[#2a2a2a]'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>


          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>


      {isOpen && (
        <div className="md:hidden bg-[#171717] border-t border-[#2a2a2a]">
          <div className="max-w-6xl mx-auto px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all
                  ${
                    isActive(item.path)
                      ? 'bg-[#3a3a3a] text-white'
                      : 'text-gray-300 hover:text-white hover:bg-[#2a2a2a]'
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}