import { Award, Calendar, ChevronDown, ChevronUp, ExternalLink, Eye } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const CertificateCard = ({ certificate, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const expandRef = useRef(null);
  
  // Get certificate color theme based on index
  const getThemeColors = (idx) => {
    const themes = [
      { 
        primary: 'from-blue-500 to-indigo-600',
        border: 'border-blue-400 dark:border-blue-500',
        light: 'bg-blue-50 dark:bg-blue-900/20', 
        icon: 'text-blue-600 dark:text-blue-400', 
        glow: 'shadow-blue-500/30',
        bg: 'bg-blue-500/20 dark:bg-blue-600/10'
      },
      { 
        primary: 'from-purple-500 to-violet-600',
        border: 'border-purple-400 dark:border-purple-500',
        light: 'bg-purple-50 dark:bg-purple-900/20', 
        icon: 'text-purple-600 dark:text-purple-400', 
        glow: 'shadow-purple-500/30',
        bg: 'bg-purple-500/20 dark:bg-purple-600/10'
      },
      { 
        primary: 'from-emerald-500 to-teal-600',
        border: 'border-emerald-400 dark:border-emerald-500',
        light: 'bg-emerald-50 dark:bg-emerald-900/20', 
        icon: 'text-emerald-600 dark:text-emerald-400', 
        glow: 'shadow-emerald-500/30',
        bg: 'bg-emerald-500/20 dark:bg-emerald-600/10'
      },
      { 
        primary: 'from-amber-500 to-orange-600',
        border: 'border-amber-400 dark:border-amber-500',
        light: 'bg-amber-50 dark:bg-amber-900/20', 
        icon: 'text-amber-600 dark:text-amber-400', 
        glow: 'shadow-amber-500/30',
        bg: 'bg-amber-500/20 dark:bg-amber-600/10'
      }
    ];
    
    return themes[idx % themes.length];
  };
  
  const theme = getThemeColors(index);

  const toggleExpanded = (e) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };
  
  useEffect(() => {
    if (expandRef.current) {
      expandRef.current.style.maxHeight = isExpanded ? `${expandRef.current.scrollHeight}px` : '0';
    }
  }, [isExpanded]);

  return (
    <div 
      className={`certificate-card bg-white dark:bg-gray-800 rounded-xl overflow-hidden
        border border-${theme.primary.split('-')[1]}-300/30 dark:border-${theme.primary.split('-')[1]}-500/30
        ${isHovered ? `${theme.glow} shadow-lg` : 'shadow-md'} 
        transition-all duration-300`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top gradient bar */}
      <div className={`h-1.5 bg-gradient-to-r ${theme.primary}`}></div>
      
      <div className="p-5">
        <div className="flex items-start justify-between">
          {/* Certificate icon */}
          <div className={`cert-icon p-2.5 rounded-full ${theme.light} ${theme.icon}`}>
            <Award className="w-5 h-5" />
          </div>
          
          {/* Date badge */}
          <span className={`text-xs font-medium px-2 py-0.5 rounded-full flex items-center
            ${isHovered ? `bg-gradient-to-r ${theme.primary} text-white` : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'} 
            transition-all duration-300`}>
            <Calendar className="w-3 h-3 mr-1" />
            {certificate.date}
          </span>
        </div>
        
        {/* Certificate title */}
        <h3 className={`text-lg font-semibold mt-3 mb-1 transition-colors duration-300 
          ${isHovered ? theme.icon : 'text-gray-800 dark:text-gray-100'}`}>
          {certificate.name}
        </h3>
        
        {/* Issuer */}
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
          {certificate.issuer}
        </p>
        
        {/* Skills tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {certificate.skills && certificate.skills.map((skill, idx) => (
            <span 
              key={idx}
              className="skill-tag text-xs px-2 py-0.5 rounded-full 
                transition-all duration-300"
              style={{ 
                background: `linear-gradient(${isHovered ? '140deg' : '120deg'}, var(--cert-bg-start), var(--cert-bg-end))`,
                color: 'white',
                boxShadow: isHovered ? '0 2px 4px var(--cert-shadow)' : 'none'
              }}
              data-color={theme.primary.split(' ')[0].replace('from-', '')}
            >
              {skill}
            </span>
          ))}
        </div>
        
        {/* Actions row */}
        <div className="mt-4 flex items-center justify-between">
          <button 
            onClick={toggleExpanded}
            className={`certificate-expand-btn flex items-center text-xs font-medium py-1 px-2.5 rounded-full
              ${isExpanded ? 'bg-gradient-to-r ' + theme.primary + ' text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'} 
              transition-all duration-300`}
          >
            {isExpanded ? (
              <>
                <ChevronUp className="w-3.5 h-3.5 mr-0.5" />
                Hide details
              </>
            ) : (
              <>
                <ChevronDown className="w-3.5 h-3.5 mr-0.5" />
                Show details
              </>
            )}
          </button>
          
          <a 
            href={certificate.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`flex items-center text-xs font-medium py-1 px-2.5 rounded-full
              ${isHovered ? 'bg-gradient-to-r ' + theme.primary + ' text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'} 
              transition-all duration-300`}
            onClick={(e) => e.stopPropagation()}
          >
            <Eye className="w-3.5 h-3.5 mr-0.5" />
            View Certificate
            <ExternalLink className="w-3 h-3 ml-0.5" />
          </a>
        </div>
        
        {/* Expandable details section */}
        <div 
          ref={expandRef} 
          className={`overflow-hidden transition-all duration-500 ease-in-out
            ${theme.bg} rounded-lg mt-4 
            ${isExpanded ? 'border border-' + theme.primary.split('-')[1] + '-300/30 dark:border-' + theme.primary.split('-')[1] + '-500/30' : ''}`}
        >
          {isExpanded && (
            <div className="p-3.5">
              <h4 className={`text-xs font-semibold ${theme.icon} mb-2`}>What I learned:</h4>
              <ul className="space-y-1 list-disc pl-4">
                {certificate.achievements ? certificate.achievements.map((item, i) => (
                  <li key={i} className="text-xs text-gray-700 dark:text-gray-300">{item}</li>
                )) : certificate.skills.map((skill, i) => (
                  <li key={i} className="text-xs text-gray-700 dark:text-gray-300">
                    Mastered {skill} fundamentals and practical applications
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const PlaceholderCard = ({ index, isVisible }) => {
  return (
    <div 
      className="certificate-placeholder border border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-4
        flex flex-col items-center justify-center text-center h-full
        transition-all duration-500 hover:border-indigo-400 dark:hover:border-indigo-500 group"
    >
      <div 
        className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 
          dark:from-indigo-500/10 dark:to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      ></div>
      
      <div className="p-3 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 
        mb-3 transform transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 relative z-10">
        <Award className="w-6 h-6" />
      </div>
      
      <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-1.5 relative z-10">More achievements coming soon</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 relative z-10">
        Always learning and expanding my skill set
      </p>
      
      {/* Animated particles */}
      <div className="certificate-placeholder-particles">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i} 
            className="particle"
            style={{
              '--delay': `${i * 0.7}s`,
              '--size': `${Math.random() * 6 + 3}px`,
              '--opacity': '0.3'
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

const CertificatesSection = ({ certificates }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="container mx-auto max-w-6xl relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full filter blur-3xl animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500/5 dark:bg-purple-500/10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-500/5 dark:bg-pink-500/10 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      
      <div className="relative mb-16">
        <h2 className="text-4xl font-bold text-center text-indigo-700 dark:text-indigo-400">
          My Certificates
        </h2>
        
        {/* Decorative elements */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {certificates.map((certificate, index) => (
          <div 
            key={index} 
            className="opacity-0 transform translate-y-8"
            style={{ 
              animation: isVisible ? `fadeInUp 0.6s ease-out ${index * 0.2}s forwards` : 'none' 
            }}
          >
            <CertificateCard certificate={certificate} index={index} />
          </div>
        ))}
        
        {/* Add Certificate Placeholder */}
        {certificates.length % 3 !== 0 && (
          <div 
            className="opacity-0 transform translate-y-8"
            style={{ 
              animation: isVisible ? `fadeInUp 0.6s ease-out ${certificates.length * 0.2}s forwards` : 'none' 
            }}
          >
            <PlaceholderCard index={certificates.length} isVisible={isVisible} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificatesSection;