import { useState, useEffect } from 'react';

// Este é nosso hook customizado!
export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // null = carregando

  // O useEffect simula uma verificação de token ou sessão
  useEffect(() => {
    // Simula uma chamada de API que demora 1.5 segundos
    const timer = setTimeout(() => {
      // Altere para false para testar o fluxo de login
      setIsAuthenticated(true); 
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return { isAuthenticated };
};