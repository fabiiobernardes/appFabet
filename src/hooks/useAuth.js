import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); 

  
  useEffect(() => {
    
    const timer = setTimeout(() => {
      
      setIsAuthenticated(true); 
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return { isAuthenticated };
};