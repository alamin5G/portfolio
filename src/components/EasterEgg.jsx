import { useEffect, useState } from 'react';

const EasterEgg = () => {
  const [sequence, setSequence] = useState([]);
  const [showGame, setShowGame] = useState(false);
  const konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  
  useEffect(() => {
    const handleKeyDown = (e) => {
      const newSequence = [...sequence, e.key];
      
      if (newSequence.length > konami.length) {
        newSequence.shift(); // Keep only the latest keys
      }
      
      setSequence(newSequence);
      
      // Check if Konami code was entered
      if (newSequence.join('') === konami.join('')) {
        setShowGame(true);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [sequence, konami]); // Added konami to the dependency array
  
  if (!showGame) return null;
  
  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-2xl w-full text-center">
        <h2 className="text-2xl font-bold mb-4">You found the secret game!</h2>
        <p className="mb-6">Press arrow keys to move, spacebar to pause</p>
        
        <div className="h-60 border-2 border-gray-300 dark:border-gray-600 mb-4 relative">
          {/* Simple snake game could be implemented here */}
          <div className="absolute inset-0 flex items-center justify-center">
            <p>Simple snake game would go here!</p>
          </div>
        </div>
        
        <button 
          onClick={() => setShowGame(false)}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
        >
          Close Game
        </button>
      </div>
    </div>
  );
};

export default EasterEgg;