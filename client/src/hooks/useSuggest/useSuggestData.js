"use client"

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import { getSuggestEvent, getSuggestGroup, getSuggestPage } from "@/app/api/fetchSuggestData";

export const useSuggestEventData = () => {
    const router = useRouter();
    const [suggestEvent, setSuggestEvent] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const suggestEventData = await getSuggestEvent();

                return setSuggestEvent(suggestEventData);
            } catch (error) {
                return console.error(error);
            }
        };

        fetchData();

    }, [router]);

    return suggestEvent;
}

export const useSuggestGroupData = () => {
    const router = useRouter();
    const [suggestGroup, setSuggestGroup] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const suggestGroupData = await getSuggestGroup();

                return setSuggestGroup(suggestGroupData);
            } catch (error) {
                return console.error(error);
            }
        };

        fetchData();
    }, [router]);

    return suggestGroup;
}

export const useSuggestPageData = () => {
    const router = useRouter();
    const [suggestPage, setSuggestPage] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const suggestPageData = await getSuggestPage();

                return setSuggestPage(suggestPageData);
            } catch (error) {
                return console.error(error);
            }
        };

        fetchData();
    }, [router]);

    return suggestPage;
};