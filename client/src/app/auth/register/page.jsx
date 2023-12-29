"use client"

import bcrypt from "bcryptjs";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";

import { useCheckAccessToken } from "@/hooks";
import { AuthHeader, AuthLoginForm } from "@/components";
import { checkPasswordStrength, validateEmail } from "@/utils";

const Signup = () => {
    const router = useRouter();

    const [error, setError] = useState({ isEmailError: false, isPasswordError: false, formErrorStatus: "" });
    const [registerFormData, setRegisterFormData] = useState({ session_key: "", session_password: "", session_firstname: "", session_lastname: "" });

    const handleValidateForm = () => {
        const { session_key, session_password } = registerFormData;
        const isValidEmail = validateEmail(session_key);
        const passwordStrength = checkPasswordStrength(session_password);

        if (!isValidEmail) {
            return setError({ isEmailError: true, isPasswordError: false, formErrorStatus: "" });
        }

        if (passwordStrength === "weak") {
            return setError({ isEmailError: false, isPasswordError: true, formErrorStatus: "Password is too weak. Please use a stronger password." });
        }

        return setError({ isEmailError: false, isPasswordError: false, formErrorStatus: "" });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegisterFormData({ ...registerFormData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!handleValidateForm) {
            return;
        }

        try {
            const { session_key, session_password, session_firstname, session_lastname } = registerFormData;

            const hashedPassword = await bcrypt.hash(session_password, 10);

            const dataToSend = { session_key, hashedPassword, session_firstname, session_lastname };

            const url = process.env.NEXT_PUBLIC_API_URL + "/api/v1/auth/register";

            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dataToSend),
            });

            if (response.ok) {
                return router.push("/auth/login");
            } else {
                if (response.status === 409) {
                    const errorData = await response.json();
                    return setError({ isEmailError: true, isPasswordError: false, formErrorStatus: errorData.message });
                } else {
                    return NextResponse.json({ error: ((await response.json()).message || "Unexpected error occurred" )});
                }
            }
        } catch (error) {
            return NextResponse.json({ error: "An unexpected error occurred" });
        }
    }

    return (
        <div className="w-full h-full bg-stone-100">
            <AuthHeader/>
            <main className="flex flex-col items-center justify-center relative overflow-hidden">
                <section
                    className="max-w-[1128px] min-h-[560px] w-full h-full flex flex-nowrap items-center justify-center relative">
                    <div className="sm:w-[80%] md:w-[70%] lg:w-[60%] w-fit sm:px-[26px] md:px-[34px] lg:px-[42px] px-[18px] flex-shrink-0 self-start relative">
                        <AuthLoginForm isSignup="true" action={handleSubmit} handleChange={handleChange} error={error} setError={setError}/>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default useCheckAccessToken(Signup);