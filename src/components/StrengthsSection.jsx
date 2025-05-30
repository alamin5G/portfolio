import { Brain, Clock, MessageCircle, Users } from 'lucide-react';
import { useEffect, useRef } from 'react';

const StrengthsSection = ({ strengths }) => {
  const strengthsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const strengthItems = entry.target.querySelectorAll('.strength-item');
            strengthItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate-in');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (strengthsRef.current) {
      observer.observe(strengthsRef.current);
    }

    return () => {
      if (strengthsRef.current) {
        observer.unobserve(strengthsRef.current);
      }
    };
  }, []);

  // Map icons to strengths based on keywords
  const getIcon = (strength) => {
    if (strength.toLowerCase().includes('team') || strength.toLowerCase().includes('collaboration')) {
      return <Users className="w-6 h-6" />; // Changed from PuzzlePiece to Users
    } else if (strength.toLowerCase().includes('problem') || strength.toLowerCase().includes('solving')) {
      return <Brain className="w-6 h-6" />;
    } else if (strength.toLowerCase().includes('communication') || strength.toLowerCase().includes('skill')) {
      return <MessageCircle className="w-6 h-6" />;
    } else if (strength.toLowerCase().includes('quality') || strength.toLowerCase().includes('deadline')) {
      return <Clock className="w-6 h-6" />;
    } else {
      return <Users className="w-6 h-6" />; // Changed from PuzzlePiece to Users
    }
  };

  // Get appropriate gradient based on index
  const getGradient = (index) => {
    const gradients = [
      'from-indigo-500 to-purple-600',
      'from-blue-500 to-cyan-600',
      'from-emerald-500 to-green-600',
      'from-amber-500 to-orange-600',
      'from-rose-500 to-pink-600'
    ];
    
    return gradients[index % gradients.length];
  };

  return (
    <div ref={strengthsRef} className="container mx-auto max-w-4xl">
      <h2 className="text-4xl font-bold text-center text-indigo-700 dark:text-indigo-400 mb-12">
        My Strengths
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {strengths.map((strength, index) => (
          <div 
            key={index} 
            className={`strength-item opacity-0 transform translate-y-8 transition-all duration-700 ease-out
              bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl p-6
              border-b-4 border-transparent hover:border-b-4 hover:border-indigo-500
              dark:hover:border-indigo-400 flex items-start space-x-4`}
          >
            <div className={`p-3 rounded-lg bg-gradient-to-r ${getGradient(index)} text-white`}>
              {getIcon(strength)}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                {strength}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {getStrengthDescription(strength)}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl shadow-inner">
        <p className="text-center text-gray-700 dark:text-gray-300 italic">
          "The strengths that make me an effective developer are the same ones that make me a valuable team member."
        </p>
      </div>
    </div>
  );
};

// Helper function to generate descriptions for strengths
const getStrengthDescription = (strength) => {
  const descriptions = {
    "Team Collaboration": "I thrive in collaborative environments and believe the best solutions come from diverse perspectives working together.",
    "Problem-Solving": "I approach challenges methodically, breaking complex problems into manageable components to find efficient solutions.",
    "Communication Skill": "I communicate technical concepts clearly to both technical and non-technical stakeholders, ensuring everyone stays informed.",
    "Commitment to Quality within Deadline": "I deliver high-quality work on time by maintaining strong attention to detail while efficiently managing priorities."
  };

  return descriptions[strength] || "A core capability that helps me deliver exceptional results consistently.";
};

export default StrengthsSection;