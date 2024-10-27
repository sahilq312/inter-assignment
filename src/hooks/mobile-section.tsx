import React, { createContext, useState, useEffect, ReactNode } from 'react';

interface ScreenSizeContextProps {
  isMobile: boolean;
}

const ScreenSizeContext = createContext<ScreenSizeContextProps | undefined>(undefined);

interface ScreenSizeProviderProps {
  children: ReactNode;
}

export const ScreenSizeProvider = ({ children }: ScreenSizeProviderProps) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

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

export const useScreenSize = (): ScreenSizeContextProps => {
  const context = React.useContext(ScreenSizeContext);
  if (!context) {
    throw new Error('useScreenSize must be used within a ScreenSizeProvider');
  }
  return context;
};

export default ScreenSizeContext;