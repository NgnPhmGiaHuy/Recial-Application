"use client"

import React, { createContext, useContext } from "react";
import { SessionProvider } from "next-auth/react";

import { useTokenRefresh } from "@/hooks";

const AccessTokenContext = createContext(null);

export const useAccessTokenContext = () => {
    return useContext(AccessTokenContext);
};

const Providers = (props) => {
    const { accessToken, setAccessToken } = useTokenRefresh();

    return (
        <AccessTokenContext.Provider value={{ accessToken, setAccessToken }}>
            <SessionProvider>
                {props.children}
            </SessionProvider>
        </AccessTokenContext.Provider>
    )
};

export default Providers;

