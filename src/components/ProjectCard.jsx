import { ArrowRight, ChevronRight, ExternalLink, Github } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const ProjectCard = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  
  // Handle link clicks without triggering card flip
  const handleLinkClick = (e, url) => {
    e.stopPropagation();
    window.open(url, '_blank');
  };
  
  // For tracking mouse position for 3D hover effect
  const handleMouseMove = (e) => {
    if (!cardRef.current || !isHovered) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    const x = e.clientX - rect.left; // x position within the element
    const y = e.clientY - rect.top;  // y position within the element
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation based on mouse position
    const rotateY = ((x - centerX) / centerX) * 5; // Max 5 degrees
    const rotateX = ((centerY - y) / centerY) * 5; // Max 5 degrees
    
    // Apply the transform to create 3D tilt effect when not flipped
    if (!isFlipped) {
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
  };
  
  // Reset transform when mouse leaves
  const handleMouseLeave = () => {
    setIsHovered(false);
    if (cardRef.current) {
      cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
      setTimeout(() => {
        if (cardRef.current && isFlipped) {
          cardRef.current.style.transform = `perspective(1000px) rotateY(180deg)`;
        }
      }, 150);
    }
  };
  
  useEffect(() => {
    if (cardRef.current) {
      if (isFlipped) {
        cardRef.current.style.transform = `perspective(1000px) rotateY(180deg)`;
      } else {
        cardRef.current.style.transform = `perspective(1000px) rotateY(0deg)`;
      }
    }
  }, [isFlipped]);

  
  
  // Get a color scheme for the project based on its name
  const getProjectColor = () => {
    // Simple hash function to get a consistent color for the same project name
    const stringToHash = str => {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
      }
      return hash;
    };
    
    const hash = stringToHash(project.name);
    const colorIndex = Math.abs(hash) % projectColors.length;
    return projectColors[colorIndex];
  };
  
    // Only change this part - the color combinations
 // Updated color combinations with more distinct palettes and no blue
const projectColors = [
  // Deep purple to violet gradient
  { 
    primary: 'from-purple-600 to-violet-500', 
    hover: 'from-purple-700 to-violet-600', 
    light: 'bg-purple-50 dark:bg-purple-900/30', 
    text: 'text-purple-600 dark:text-purple-300',
    border: 'border-purple-200 dark:border-purple-800'
  },
  
  // Rich emerald to teal gradient
  { 
    primary: 'from-emerald-600 to-teal-500', 
    hover: 'from-emerald-700 to-teal-600', 
    light: 'bg-emerald-50 dark:bg-emerald-900/30', 
    text: 'text-emerald-600 dark:text-emerald-300',
    border: 'border-emerald-200 dark:border-emerald-800'
  },
  
  // Warm amber to orange gradient
  { 
    primary: 'from-amber-500 to-orange-500', 
    hover: 'from-amber-600 to-orange-600', 
    light: 'bg-amber-50 dark:bg-amber-900/30', 
    text: 'text-amber-600 dark:text-amber-300',
    border: 'border-amber-200 dark:border-amber-800'
  },
  
  // Rose to fuchsia gradient
  { 
    primary: 'from-rose-500 to-fuchsia-500', 
    hover: 'from-rose-600 to-fuchsia-600', 
    light: 'bg-rose-50 dark:bg-rose-900/30', 
    text: 'text-rose-600 dark:text-rose-300',
    border: 'border-rose-200 dark:border-rose-800'
  },
  
  // Deep red to crimson gradient
  { 
    primary: 'from-red-600 to-rose-500', 
    hover: 'from-red-700 to-rose-600', 
    light: 'bg-red-50 dark:bg-red-900/30', 
    text: 'text-red-600 dark:text-red-300',
    border: 'border-red-200 dark:border-red-800'
  }
];
    
  const colorScheme = getProjectColor();

    // Add this inside your useEffect hook
 
        useEffect(() => {
      if (cardRef.current && colorScheme) {
        try {
          // Parse the color names from the primary gradient - more robust approach
          const parts = colorScheme.primary.split(' ');
          const startColor = parts.find(p => p.startsWith('from-'))?.replace('from-', '') || 'purple';
          const endColor = parts.find(p => p.startsWith('to-'))?.replace('to-', '') || 'violet';
          
          // Set CSS variables for the gradient colors based on Tailwind's palette
          const colorMap = {
            'purple': '#9333ea',
            'violet': '#7c3aed',
            'emerald': '#10b981',
            'teal': '#14b8a6',
            'amber': '#f59e0b',
            'orange': '#f97316',
            'rose': '#e11d48',
            'fuchsia': '#d946ef',
            'red': '#dc2626'
          };
          
          // Extract base color names - handle potential undefined values
          const startBase = startColor?.split('-')[0] || 'purple';
          const endBase = endColor?.split('-')[0] || 'violet';
          
          cardRef.current.style.setProperty('--gradient-start', colorMap[startBase] || '#9333ea');
          cardRef.current.style.setProperty('--gradient-end', colorMap[endBase] || '#d946ef');
        } catch (error) {
          // Fallback to default colors if parsing fails
          cardRef.current.style.setProperty('--gradient-start', '#9333ea');
          cardRef.current.style.setProperty('--gradient-end', '#d946ef');
          console.error('Error setting color variables:', error);
        }
      }
    }, [colorScheme]);
  
  return (
    <div 
      className="relative h-96 perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        ref={cardRef}
        className="project-card relative w-full h-full transition-all duration-500"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front of card */}
       <div className="absolute w-full h-full bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden backface-hidden border border-transparent transition-all duration-300 group">
  {/* Animated border wrapper - new! */}
  <div className={`absolute inset-0 -z-10 rounded-xl animate-gradient-border opacity-0 group-hover:opacity-100 transition-opacity duration-300`} style={{
    background: `linear-gradient(60deg, var(--gradient-start, #9333ea), var(--gradient-end, #d946ef))`,
    backgroundSize: '300% 300%',
    filter: 'blur(0.5px)'
  }}></div>
  
  {/* Top colored bar - updated with animation */}
  <div className={`h-1.5 bg-gradient-to-r ${colorScheme.primary} w-full animate-gradient-shift`}></div>
  
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-1.5">{project.name}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{project.organization} | {project.duration}</p>
            
            {/* Technologies */}
            <div className="flex flex-wrap gap-1.5 mt-4">
              {project.technologies.slice(0, 4).map((tech, idx) => (
                <span 
                  key={idx} 
                  className={`${colorScheme.light} ${colorScheme.text} text-xs font-medium px-2.5 py-1 rounded-full
                    transform transition-all duration-300 hover:scale-105 hover:shadow-sm`}
                  style={{animationDelay: `${idx * 100}ms`}}
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium px-2.5 py-1 rounded-full">
                  +{project.technologies.length - 4} more
                </span>
              )}
            </div>
            
            {/* Project thumbnail or icon - optional */}
            <div className="my-5 flex justify-center">
              {project.image ? (
                <img 
                  src={project.image} 
                  alt={`${project.name} preview`}
                  className="max-h-24 object-cover rounded-md shadow-sm transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${colorScheme.primary} flex items-center justify-center text-white text-xl font-bold`}>
                  {project.name.charAt(0)}
                </div>
              )}
            </div>
            
            {/* Project links */}
            <div className="flex space-x-3 mt-4">
              {project.githubUrl && (
                <button 
                  onClick={(e) => handleLinkClick(e, project.githubUrl)}
                  className={`flex items-center hover:${colorScheme.text} transition-colors`}
                  aria-label="View GitHub repository"
                >
                  <Github className="w-4 h-4 mr-1" />
                  <span className="text-sm">Code</span>
                </button>
              )}
              {project.liveUrl && (
                <button 
                  onClick={(e) => handleLinkClick(e, project.liveUrl)}
                  className={`flex items-center hover:${colorScheme.text} transition-colors`}
                  aria-label="View live project"
                >
                  <ExternalLink className="w-4 h-4 mr-1" />
                  <span className="text-sm">Live Demo</span>
                </button>
              )}
            </div>
            
            <div className={`mt-4 text-center text-sm ${colorScheme.text} flex items-center justify-center gap-1 project-details-prompt transition-opacity duration-300`}>
              <span>View details</span>
              <ChevronRight className="w-3.5 h-3.5 details-arrow transition-transform duration-300" />
            </div>
          </div>
          
          {/* Decorative corners */}
          <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
            <div className={`absolute transform rotate-45 bg-gradient-to-r ${colorScheme.primary} text-white py-1 px-6 -right-6 top-4`}></div>
          </div>
        </div>
        
        {/* Back of card */}
        <div className="absolute w-full h-full bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden rotate-y-180 backface-hidden">
          {/* Top colored bar */}
          <div className={`h-1.5 bg-gradient-to-r ${colorScheme.primary} w-full`}></div>
          
          <div className="p-6">
            <h3 className={`text-lg font-semibold ${colorScheme.text} mb-3 flex items-center`}>
              <span>{project.name}</span>
              <div className={`ml-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${colorScheme.primary} animate-pulse`}></div>
            </h3>
            
            <div className="max-h-52 overflow-y-auto project-description pr-1">
              <ul className="list-none space-y-2 text-gray-700 dark:text-gray-300">
                {project.description.map((point, idx) => (
                  <li key={idx} className="text-sm flex items-start">
                    <div className={`${colorScheme.text} mr-1.5 mt-0.5`}>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Project links on back side too */}
            <div className="flex space-x-3 mt-6">
              {project.githubUrl && (
                <button 
                  onClick={(e) => handleLinkClick(e, project.githubUrl)}
                  className={`flex items-center bg-gray-100 dark:bg-gray-700 px-3 py-1.5 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm`}
                  aria-label="View GitHub repository"
                >
                  <Github className="w-4 h-4 mr-1.5" />
                  <span>Code</span>
                </button>
              )}
              {project.liveUrl && (
                <button 
                  onClick={(e) => handleLinkClick(e, project.liveUrl)}
                  className={`flex items-center bg-gradient-to-r ${colorScheme.primary} hover:${colorScheme.hover} text-white px-3 py-1.5 rounded-md transition-all duration-300 text-sm hover:shadow-md`}
                  aria-label="View live project"
                >
                  <ExternalLink className="w-4 h-4 mr-1.5" />
                  <span>Live Demo</span>
                </button>
              )}
            </div>
            
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <div className="inline-flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors cursor-pointer">
                <span>Flip back</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;