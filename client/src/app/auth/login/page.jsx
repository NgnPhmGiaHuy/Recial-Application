"use client"

import React from "react";
import Image from "next/image";
import {useSession} from "next-auth/react";
import {signIn, signOut} from "next-auth/react";

import {AuthLoginForm, AuthHeader} from "@/components";
import Illustration from "/public/images/Illustration/illustration-of-a-man-and-a-woman-watering-a-plant.jpg";

const Login = () => {
    const {data: session} = useSession();

    if (session && session.user) {
        return (
            <>
                <p>{session.user.name}</p>
                <p>{session.user.email}</p>
                <button onClick={() => signOut()}>Out</button>
            </>
        )
    }
    return (
        <div className="w-screen h-screen bg-white">
            <AuthHeader/>
            <main className="flex flex-col items-center justify-center relative overflow-hidden">
                <section
                    className="min-h-[560px] max-w-[1128px] flex flex-nowrap pt-[0px] items-center justify-center w-full h-full relative">
                    <div className="self-start relative flex-shrink-0 w-[55%] pr-[42px]">
                        <AuthLoginForm isLogin="true"/>
                    </div>
                    <Image src={Illustration} alt="illustration-of-a-man-and-a-woman-watering-a-plant" width={600}
                           height={560}
                           className="hidden z-[1] relative flex-shrink object-cover lg:block"/>
                </section>
            </main>
        </div>
    );
};

export default Login;