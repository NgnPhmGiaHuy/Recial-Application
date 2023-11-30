"use client"

import axios from "axios";
import Image from "next/image";
import {useState} from "react";
import {useRouter} from "next/navigation";
import {useSession} from "next-auth/react";
import {signIn, signOut} from "next-auth/react";

import {AuthLoginForm, AuthHeader} from "@/components";
import Illustration from "/public/images/Illustration/illustration-of-a-man-and-a-woman-watering-a-plant.jpg";
import {NextResponse} from "next/server";

const Login = () => {
    const router = useRouter();
    const {data: session} = useSession();
    const [loginFormData, setLoginFormData] = useState({
        session_key: "",
        session_password: "",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setLoginFormData({...loginFormData, [name]: value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const {session_key, session_password} = loginFormData;

        try {
            const hashedPassword = await bcrypt.hash(session_password, 10);

            const dataToSend = {session_key, hashedPassword};

            const response = await axios.post("/api/auth/login", dataToSend);

            if (response.data.userExists) {
                router.push("/");
            } else {
                console.log("User already exists. Render component or show a message.");
            }

        } catch (error) {
            console.log(error);
            return NextResponse.json({error: error});
        }
    }


    return (
        <div className="w-screen h-screen bg-white">
            <AuthHeader/>
            <main className="flex flex-col items-center justify-center relative overflow-hidden">
                <section
                    className="min-h-[560px] max-w-[1128px] flex flex-nowrap pt-[0px] items-center justify-center w-full h-full relative">
                    <div className="self-start relative flex-shrink-0 w-[55%] pr-[42px]">
                        <AuthLoginForm isLogin="true" action={handleSubmit} handleChange={handleChange}/>
                    </div>
                    <Image src={Illustration} alt="illustration-of-a-man-and-a-woman-watering-a-plant" width={600} height={560} className="hidden z-[1] relative flex-shrink object-cover lg:block"/>
                </section>
            </main>
        </div>
    );
};

export default Login;