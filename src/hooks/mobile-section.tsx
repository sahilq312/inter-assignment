import { useState, useEffect, ReactNode } from 'react';
import { ScreenSizeContext } from './screensize-context';

interface ScreenSizeProviderProps {
  children: ReactNode;
}

export const ScreenSizeProvider = ({ children }: ScreenSizeProviderProps) => {
  const [isMobile, setIsMobile] = useState<boolean>(() => window.innerWidth <= 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ScreenSizeContext.Provider value={{ isMobile }}>
      {children}
    </ScreenSizeContext.Provider>
  );
};