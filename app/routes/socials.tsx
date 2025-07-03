import { useState } from "react";
import { ExternalLink, Github, Linkedin, Instagram, Twitter, Mail, Globe, Youtube, MessageCircle } from "lucide-react";

export default function Socials() {
    const [hoveredTile, setHoveredTile] = useState(null);

    const XLogo = ({ size = 24, className = "" }) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        className={className}
    >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
);

    const socialLinks = [
        {
            id: 'github',
            name: 'GitHub',
            username: 'Abhinavpunnakkan',
            url: 'https://github.com/Abhinavpunnakkan',
            icon: Github,
            color: 'from-gray-700 to-gray-900',
            hoverColor: 'from-gray-600 to-gray-800',
        },
        {
            id: 'linkedin',
            name: 'LinkedIn',
            username: 'Abhinav Punnakkan',
            url: 'https://www.linkedin.com/in/abhinavpunnakkan/',
            icon: Linkedin,
            color: 'from-blue-700 to-blue-900',
            hoverColor: 'from-blue-600 to-blue-800',
        },
        {
            id: 'instagram',
            name: 'Instagram',
            username: '_abh.nav',
            url: 'https://www.instagram.com/_abh.nav/',
            icon: Instagram,
            color: 'from-pink-700 to-purple-900',
            hoverColor: 'from-pink-600 to-purple-800',
        },
        {
            id: 'X',
            name: 'X',
            username: 'AbhinavRajeev11',
            url: 'https://x.com/AbhinavRajeev11',
            icon: XLogo,
            color: 'from-sky-700 to-sky-900',
            hoverColor: 'from-sky-600 to-sky-800',
        }
    ];

    const handleSocialClick = (url: string | URL | undefined) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="min-h-screen bg-[#0a0a0a] py-12 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Connect With Me
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Find me across the web and let's connect! Click on any platform below to visit my profile.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {socialLinks.map((social) => {
                        const IconComponent = social.icon;
                        const isHovered = hoveredTile === social.id;
                        
                        return (
                            <div
                                key={social.id}
                                className={`
                                    relative group cursor-pointer transform transition-all duration-300 ease-out
                                    ${isHovered ? 'scale-105 -translate-y-2' : 'hover:scale-105 hover:-translate-y-2'}
                                `}
                                onClick={() => handleSocialClick(social.url)}
                            >
                                <div className={`
                                    relative p-6 rounded-xl bg-gradient-to-br ${isHovered ? social.hoverColor : social.color}
                                    border border-gray-800 hover:border-gray-600
                                    transition-all duration-300 ease-out
                                    shadow-lg hover:shadow-2xl
                                    overflow-hidden
                                `}>
                                    
                                    <div className={`
                                        absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-20
                                        transition-opacity duration-300 blur-xl
                                    `} />
                                    
                                    
                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between mb-4">
                                            <IconComponent 
                                                size={28} 
                                                className="text-white drop-shadow-lg" 
                                            />
                                            <ExternalLink 
                                                size={16} 
                                                className={`
                                                    text-gray-400 transition-all duration-300
                                                    ${isHovered ? 'text-white translate-x-1 -translate-y-1' : 'group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1'}
                                                `}
                                            />
                                        </div>
                                        
                                        <h3 className="text-xl font-semibold text-white mb-1">
                                            {social.name}
                                        </h3>
                                        
                                        <p className="text-gray-300 text-sm mb-3 font-medium">
                                            {social.username}
                                        </p>
                                    </div>
                                    
                                    
                                    <div className={`
                                        absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100
                                        transition-opacity duration-300
                                        bg-gradient-to-r from-transparent via-white/10 to-transparent
                                        animate-pulse
                                    `} />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}