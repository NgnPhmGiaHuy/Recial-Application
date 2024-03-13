"use client"

import { Provider } from "react-redux";
import { createContext, useContext } from "react";
import { SessionProvider } from "next-auth/react";

import { store } from "@/store";
import { useTokenRefresh } from "@/hooks";

const AccessTokenContext = createContext(null);

export const useAccessTokenContext = () => {
    return useContext(AccessTokenContext);
};

const Providers = (props) => {
    const { accessToken, setAccessToken } = useTokenRefresh();

    return (
        <Provider store={store}>
            <AccessTokenContext.Provider value={{ accessToken, setAccessToken }}>
                <SessionProvider>
                    {props.children}
                </SessionProvider>
            </AccessTokenContext.Provider>
        </Provider>
    )
};

export default Providers;

