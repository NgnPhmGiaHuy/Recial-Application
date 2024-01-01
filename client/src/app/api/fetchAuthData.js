import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const fetchLoginData = async ({ router, session_key, session_password, setError, setAccessToken }) => {
    try {
        const dataToSend = { session_key, session_password };

        const url = process.env.NEXT_PUBLIC_API_URL + "/api/v1/auth/login/";

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

                setAccessToken(responseData.accessToken);

                return router.push("/");
            }
        } else {
            if (response.status === 404) {
                const errorData = await response.json();
                return setError({ isEmailError: true, isPasswordError: false, formErrorStatus: errorData.message });
            } else if (response.status === 401) {
                const errorData = await response.json();
                return setError({ isEmailError: false, isPasswordError: true, formErrorStatus: errorData.message });
            } else {
                return NextResponse.json({ error: "Login was unsuccessful or tokens missing" }, { status: 400 });
            }
        }
    } catch (error) {
        throw error;
    }
}

export const fetchRegisterData = async ({ router, registerFormData, setError }) => {
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