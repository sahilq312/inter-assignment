import { createContext, useContext } from 'react';

export interface ScreenSizeContextProps {
    isMobile: boolean;
}

export const ScreenSizeContext = createContext<ScreenSizeContextProps | undefined>(undefined);

export const useScreenSize = (): ScreenSizeContextProps => {
    const context = useContext(ScreenSizeContext);
    if (!context) {
        throw new Error('useScreenSize must be used within a ScreenSizeProvider');
    }
    return context;
};
