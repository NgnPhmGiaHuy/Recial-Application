import React from "react";

import {AuthHeader, AuthLoginForm} from "@/components";

const Signup = () => {
    return (
        <div className="w-screen h-screen bg-stone-100">
            <AuthHeader/>
            <main className="flex flex-col items-center justify-center relative overflow-hidden">
                <section
                    className="min-h-[560px] max-w-[1128px] flex flex-nowrap items-center justify-center w-full h-full relative">
                    <div className="self-start relative flex-shrink-0 w-[60%] px-[42px]">
                        <AuthLoginForm isSignup="true"/>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Signup;