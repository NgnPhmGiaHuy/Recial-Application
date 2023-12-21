"use client"

import Image from "next/image";
import {useRouter} from "next/navigation";
import {NextResponse} from "next/server";
import {useState, useEffect} from "react";

import {useCheckAccessToken} from "@/hooks";
import {AuthLoginForm, AuthHeader} from "@/components";
import Illustration from "/public/images/Illustration/illustration-of-a-man-and-a-woman-watering-a-plant.jpg";

const Login = () => {
    const router = useRouter();

    const [error, setError] = useState({
        isEmailError: false,
        isPasswordError: false,
        formErrorStatus: '',
    });
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

        try {
            const {session_key, session_password} = loginFormData;

            const dataToSend = {session_key, session_password};

            const url = process.env.NEXT_PUBLIC_API_URL + "/api/auth/login";

            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dataToSend)
            });

            if (response.ok) {
                const responseData = await response.json();
                if (responseData.accessToken && responseData.refreshToken) {
                    localStorage.setItem("accessToken", responseData.accessToken);
                    localStorage.setItem("refreshToken", responseData.refreshToken);
                    return router.push("/");
                }
            } else {
                if (response.status === 404) {
                    const errorData = await response.json();
                    setError({
                        isEmailError: true,
                        isPasswordError: false,
                        formErrorStatus: errorData.message,
                    });
                } else if (response.status === 401) {
                    const errorData = await response.json();
                    setError({
                        isEmailError: false,
                        isPasswordError: true,
                        formErrorStatus: errorData.message,
                    });
                } else {
                    return NextResponse.json({ error: "Login was unsuccessful or tokens missing" }, { status: 400 });
                }
            }
        } catch (error) {
            return NextResponse.json({ error: "Server error" }, { status: 500 });
        }
    }

    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken");
        const refreshToken = localStorage.getItem("refreshToken");

        if (accessToken && refreshToken) {
            router.replace('/');
        }
    }, [router]);

    return (
        <div className="w-full h-full bg-white">
            <AuthHeader/>
            <main className="flex flex-col items-center justify-center relative overflow-hidden">
                <section className="min-h-[560px] max-w-[1128px] flex flex-nowrap pt-[0px] items-center justify-center w-full h-full relative">
                    <div className="self-start relative flex-shrink-0 sm:w-[55%] w-full sm:pr-[42px]">
                        <AuthLoginForm isLogin="true" action={handleSubmit} handleChange={handleChange} error={error} setError={setError}/>
                    </div>
                    <Image src={Illustration} alt="illustration-of-a-man-and-a-woman-watering-a-plant" width={600} height={560} priority={true} className="w-auto h-auto hidden z-[1] relative flex-shrink object-cover lg:block"/>
                </section>
            </main>
        </div>
    );
};

export default useCheckAccessToken(Login);