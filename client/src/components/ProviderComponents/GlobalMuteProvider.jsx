"use client"

import { createContext, useContext, useState } from 'react';

const GlobalMuteContext = createContext({
    globalMute: false,
    setGlobalMute: () => {},
});

export const useGlobalMute = () => useContext(GlobalMuteContext);

export const GlobalMuteProvider = ({ children }) => {
    const [globalMute, setGlobalMute] = useState(true);

    return (
        <GlobalMuteContext.Provider value={{ globalMute, setGlobalMute }}>
            {children}
        </GlobalMuteContext.Provider>
    );
};
