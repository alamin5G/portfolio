import { ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';

const ProjectCard = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  // Handle link clicks without triggering card flip
  const handleLinkClick = (e, url) => {
    e.stopPropagation();
    window.open(url, '_blank');
  };
  
  return (
    <div 
      className="relative h-96 perspective-1000 cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front of card */}
        <div className="absolute w-full h-full bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 backface-hidden hover-lift">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">{project.name}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-3">{project.organization} | {project.duration}</p>
          
          {/* Project links */}
          <div className="flex space-x-3 mb-4">
            {project.githubUrl && (
              <button 
                onClick={(e) => handleLinkClick(e, project.githubUrl)}
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                aria-label="View GitHub repository"
              >
                <Github className="w-5 h-5 mr-1" />
                <span className="text-sm">Code</span>
              </button>
            )}
            {project.liveUrl && (
              <button 
                onClick={(e) => handleLinkClick(e, project.liveUrl)}
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                aria-label="View live project"
              >
                <ExternalLink className="w-5 h-5 mr-1" />
                <span className="text-sm">Live Demo</span>
              </button>
            )}
          </div>
          
          <div className="flex flex-wrap gap-2 mt-4">
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <span key={idx} className="bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200 text-sm font-medium px-3 py-1 rounded-full">
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium px-3 py-1 rounded-full">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>
          
          <div className="mt-6 text-center">
            <span className="text-sm text-gray-500 dark:text-gray-400">Click to see details</span>
          </div>
        </div>
        
        {/* Back of card */}
        <div className="absolute w-full h-full bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 rotate-y-180 backface-hidden overflow-y-auto">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">{project.name}</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 mb-4">
            {project.description.map((point, idx) => (
              <li key={idx} className="text-sm">{point}</li>
            ))}
          </ul>
          
          {/* Project links on back side too */}
          <div className="flex space-x-4 mt-6 mb-8">
            {project.githubUrl && (
              <button 
                onClick={(e) => handleLinkClick(e, project.githubUrl)}
                className="flex items-center bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                aria-label="View GitHub repository"
              >
                <Github className="w-5 h-5 mr-2" />
                <span>View Code</span>
              </button>
            )}
            {project.liveUrl && (
              <button 
                onClick={(e) => handleLinkClick(e, project.liveUrl)}
                className="flex items-center bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 px-4 py-2 rounded-md hover:bg-indigo-200 dark:hover:bg-indigo-800 transition-colors"
                aria-label="View live project"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                <span>Live Demo</span>
              </button>
            )}
          </div>
          
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <span className="text-sm text-gray-500 dark:text-gray-400">Click to flip back</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;