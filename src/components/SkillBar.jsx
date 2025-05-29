import { useEffect, useState } from 'react';

const SkillBar = ({ skill, level }) => {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    // Animate progress bar on mount
    const timer = setTimeout(() => {
      setWidth(level);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [level]);

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-gray-700 font-medium">{skill}</span>
        <span className="text-sm text-gray-500">{level}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded overflow-hidden">
        <div 
          className="h-full bg-indigo-600 transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;