import { Award, ChevronDown, ChevronUp, Download, ExternalLink, Eye } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const CertificateCard = ({ certificate, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Get certificate color theme based on index
  const getThemeColors = (idx) => {
    const themes = [
      { border: 'border-blue-500', bg: 'from-blue-500 to-indigo-600', light: 'bg-blue-50 dark:bg-blue-900/20', icon: 'text-blue-600 dark:text-blue-400', glow: 'shadow-blue-500/20' },
      { border: 'border-purple-500', bg: 'from-purple-500 to-fuchsia-600', light: 'bg-purple-50 dark:bg-purple-900/20', icon: 'text-purple-600 dark:text-purple-400', glow: 'shadow-purple-500/20' },
      { border: 'border-green-500', bg: 'from-emerald-500 to-teal-600', light: 'bg-emerald-50 dark:bg-emerald-900/20', icon: 'text-emerald-600 dark:text-emerald-400', glow: 'shadow-emerald-500/20' },
      { border: 'border-amber-500', bg: 'from-amber-500 to-orange-600', light: 'bg-amber-50 dark:bg-amber-900/20', icon: 'text-amber-600 dark:text-amber-400', glow: 'shadow-amber-500/20' }
    ];
    
    return themes[idx % themes.length];
  };
  
  const theme = getThemeColors(index);

  const handleCardFlip = (e) => {
    e.stopPropagation();
    setIsFlipped(!isFlipped);
  };
  
  return (
    <div 
      className="certificate-card-perspective"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`certificate-card-inner ${isFlipped ? 'is-flipped' : ''}`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front of the card */}
        <div 
          className={`certificate-card-front bg-white dark:bg-gray-800 rounded-xl shadow-lg 
            ${isHovered ? `${theme.glow} shadow-xl dark:shadow-lg dark:shadow-${theme.bg.split(' ')[0].replace('from-', '')}-900/30` : ''} 
            transition-all duration-300 overflow-hidden relative`}
        >
          <div className={`h-2 bg-gradient-to-r ${theme.bg}`}></div>
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div className={`p-3 rounded-full ${theme.light} ${theme.icon} mb-4 transform transition-transform duration-300 ${isHovered ? 'rotate-12 scale-110' : ''}`}>
                <Award className="w-6 h-6" />
              </div>
              <span className={`text-xs font-medium text-gray-500 dark:text-gray-400 px-2 py-1 
                ${isHovered ? `bg-gradient-to-r ${theme.bg} text-white` : 'bg-gray-100 dark:bg-gray-700'} 
                rounded-full transition-all duration-300`}>
                {certificate.date}
              </span>
            </div>
            
            <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 
              ${isHovered ? theme.icon.replace('text', 'text') : 'text-gray-800 dark:text-gray-100'}`}>
              {certificate.name}
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {certificate.issuer}
            </p>
            
            {/* Certificate skills or topics */}
            {certificate.skills && (
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {certificate.skills.map((skill, idx) => (
                    <span 
                      key={idx}
                      className={`skill-tag text-xs px-2 py-1 rounded-full ${theme.light} ${theme.icon} 
                        transition-all duration-300 transform ${isHovered ? 'scale-105' : ''}`}
                      style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            <div className="mt-4 flex justify-between items-center">
              <a 
                href={certificate.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`flex items-center font-medium hover:underline ${isHovered ? theme.icon : 'text-gray-600 dark:text-gray-400'} transition-colors duration-300`}
                onClick={(e) => e.stopPropagation()}
              >
                <Eye className="w-4 h-4 mr-1" />
                View Certificate
                <ExternalLink className={`w-4 h-4 ml-1 transition-transform duration-300 ${isHovered ? 'transform translate-x-1' : ''}`} />
              </a>
              
              <button
                onClick={handleCardFlip}
                className={`flip-button p-2 rounded-full ${theme.light} ${theme.icon} opacity-0 transform scale-0 
                  ${isHovered ? 'opacity-100 scale-100' : ''} transition-all duration-300 hover:${theme.light.replace('bg', 'bg-opacity-75 bg')}`}
                aria-label="Flip card"
              >
                <ChevronUp className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          {/* Decorative corner shape */}
          <div className={`absolute -bottom-6 -right-6 w-12 h-12 rounded-full bg-gradient-to-r ${theme.bg} opacity-20 
            transform ${isHovered ? 'scale-150' : 'scale-100'} transition-transform duration-500`}>
          </div>
        </div>
        
        {/* Back of the card */}
        <div 
          className={`certificate-card-back bg-white dark:bg-gray-800 rounded-xl shadow-lg 
            ${isHovered ? `${theme.glow} shadow-xl` : ''} 
            transition-all duration-300 overflow-hidden`}
        >
          <div className={`h-2 bg-gradient-to-r ${theme.bg}`}></div>
          <div className="p-6 h-full flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <h3 className={`text-lg font-semibold ${theme.icon}`}>Certificate Details</h3>
              <button
                onClick={handleCardFlip}
                className={`p-2 rounded-full ${theme.light} ${theme.icon}`}
                aria-label="Flip card back"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            
            <div className="flex-grow prose dark:prose-invert max-w-none prose-sm">
              {certificate.description ? (
                <p>{certificate.description}</p>
              ) : (
                <ul className="space-y-2 list-disc pl-5">
                  <li>Issued by: <span className="font-medium">{certificate.issuer}</span></li>
                  <li>Date: <span className="font-medium">{certificate.date}</span></li>
                  <li>Credential ID: <span className="font-medium">{certificate.credentialId || 'Available on certificate'}</span></li>
                  {certificate.expirationDate && (
                    <li>Valid until: <span className="font-medium">{certificate.expirationDate}</span></li>
                  )}
                </ul>
              )}
              
              {certificate.achievements && (
                <div className="mt-4">
                  <h4 className="font-medium text-sm">Key achievements:</h4>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    {certificate.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm">{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            <div className="mt-4 flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
              <a 
                href={certificate.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`flex items-center font-medium text-sm ${theme.icon}`}
              >
                <Eye className="w-4 h-4 mr-1" />
                View Original
              </a>
              
              {certificate.downloadLink && (
                <a 
                  href={certificate.downloadLink} 
                  className={`flex items-center font-medium text-sm ${theme.icon}`}
                  download
                >
                  <Download className="w-4 h-4 mr-1" />
                  Download PDF
                </a>
              )}
            </div>
          </div>
        </div>
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
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
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
        
        {/* Add Certificate CTA - This appears when you have space for more */}
        {certificates.length % 3 !== 0 && (
          <div 
            className="opacity-0 transform translate-y-8"
            style={{ 
              animation: isVisible ? `fadeInUp 0.6s ease-out ${certificates.length * 0.2}s forwards` : 'none' 
            }}
          >
            <div className="certificate-placeholder border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-8 flex flex-col items-center justify-center text-center h-full min-h-[300px] transition-all duration-300 hover:border-indigo-400 dark:hover:border-indigo-500 group">
              <div className="p-3 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mb-4 transform transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">More achievements coming soon</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Always learning and expanding my skill set
              </p>
              
              <div className="certificate-placeholder-particles">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i} 
                    className="particle"
                    style={{
                      '--delay': `${i * 0.7}s`,
                      '--size': `${Math.random() * 6 + 3}px`,
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificatesSection;