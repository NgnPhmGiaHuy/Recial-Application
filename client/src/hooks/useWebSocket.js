"use client"

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

import { useAccessTokenContext } from "@/components/ProviderComponents/Providers";

const useWebSocket = (url, onDataReceived) => {
    const router = useRouter();
    const { accessToken } = useAccessTokenContext();

    const socketRef = useRef(null);
    const onDataReceivedCallback = useRef(onDataReceived);

    useEffect(() => {
        onDataReceivedCallback.current = onDataReceived;
    }, [onDataReceived]);

    useEffect(() => {
        const createWebSocket = () => {
            const newSocket = new WebSocket(url + `?token=${accessToken.toString()}`);

            newSocket.onopen = () => {
                console.log("Connected to WebSocket server");
            };

            newSocket.onmessage = async (event) => {
                const data = JSON.parse(event.data);
                onDataReceivedCallback.current(data);
            };

            newSocket.onerror = (error) => {
                console.error("WebSocket error:", error);
            };

            newSocket.onclose = () => {
                console.log("WebSocket connection closed");
            };

            socketRef.current = newSocket;
        };

        if (socketRef.current) {
            socketRef.current.close();
        }

        if (accessToken) {
            createWebSocket();
        }

        return () => {
            if (socketRef.current) {
                socketRef.current.close();
                socketRef.current = null;
            }
        };
    }, [accessToken, router]);

    return socketRef.current;
};

export default useWebSocket;

