"use client"

import { useEffect, useState } from "react";

const useDecodeToken = () => {
    const [decodedToken, setDecodedToken] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("accessToken");

        if (token) {
            const decoded = JSON.parse(atob(token.split('.')[1]));
            setDecodedToken(decoded);
        }
    }, []);

    return decodedToken;
}

export default useDecodeToken;
