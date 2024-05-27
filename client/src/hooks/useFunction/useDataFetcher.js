"use client"

import { useEffect, useState } from "react";

const useDataFetcher = (fetchDataFunction, dependencies, initialPage = 0) => {
    const [page, setPage] = useState(initialPage);
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        if (isLoading) return;

        setIsLoading(true);

        try {
            const response = await fetchDataFunction(page);

            if (!response || response.error) {
                return { error: response ? response.error : "Error fetching data" };
            }

            if (!Array.isArray(response)) {
                return { error: response.error };
            }

            if (page <= 1) {
                setData(response);
            }

            setData((prevData) => [...prevData, ...response]);
            setPage((prevPage) => prevPage + 1);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        setPage(initialPage);
        setData([]);

        return () => {};
    }, dependencies);

    useEffect(() => {
        fetchData();
    }, dependencies);

    return { page, data, isLoading, fetchData };
};

export default useDataFetcher;