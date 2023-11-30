"use client"

import axios from "axios";
import bcrypt from "bcryptjs";
import {useState} from "react";
import {useRouter} from "next/navigation";
import {NextResponse} from "next/server";

import {AuthHeader, AuthLoginForm} from "@/components";

const Signup = () => {
    const router = useRouter();
    const [registerFormData, setRegisterFormData] = useState({
        session_key: '',
        session_password: '',
        session_firstname: '',
        session_lastname: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setRegisterFormData({...registerFormData, [name]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const {session_key, session_password, session_firstname, session_lastname} = registerFormData;

        try {
            const hashedPassword = await bcrypt.hash(session_password, 10);

            const dataToSend = {session_key, hashedPassword, session_firstname, session_lastname,};

            const response = await axios.post("/api/auth/register", dataToSend);

            if (response.data.userExists) {
                console.log("User already exists. Render component or show a message.");
            } else {
                // router.push("/auth/login");
            }
        } catch (error) {
            return NextResponse.json({error: error});
        }
    }

    return (
        <div className="w-screen h-screen bg-stone-100">
            <AuthHeader/>
            <main className="flex flex-col items-center justify-center relative overflow-hidden">
                <section
                    className="min-h-[560px] max-w-[1128px] flex flex-nowrap items-center justify-center w-full h-full relative">
                    <div className="self-start relative flex-shrink-0 w-[60%] px-[42px]">
                        <AuthLoginForm isSignup="true" action={handleSubmit} handleChange={handleChange}/>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Signup;