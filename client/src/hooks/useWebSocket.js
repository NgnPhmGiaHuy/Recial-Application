"use client"

import { useEffect } from "react";

const useWebSocket = (url, onDataReceived) => {
    useEffect(() => {
        const socket = new WebSocket(url);

        socket.onopen = () => {
            console.log("Connected to WebSocket server");
        };

        socket.onmessage = async (event) => {
            const data = JSON.parse(event.data);
            onDataReceived(data);
        };

        return () => {
            socket.close();
        };
    }, [url, onDataReceived]);
};

export default useWebSocket;
