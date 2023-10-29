"use client"

import React, {ReactNode} from "react";
import {SessionProvider} from "next-auth/react";

const Providers = (props) => {
    return(
        <SessionProvider>
            {props.children}
        </SessionProvider>
    )
};

export default Providers;
