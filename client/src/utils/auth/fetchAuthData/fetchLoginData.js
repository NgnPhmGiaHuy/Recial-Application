import { NextResponse } from "next/server";

const fetchLoginData = async (router, session_key, session_password, setError, setAccessToken) => {
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
        return console.error(error);
    }
};

export default fetchLoginData;