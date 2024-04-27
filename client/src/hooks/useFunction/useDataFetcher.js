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
            const fetchedData = await fetchDataFunction(page);

            if (!fetchedData || fetchedData.error) {
                return { error: fetchedData ? fetchedData.error : "Error fetching data" };
            }

            if (Array.isArray(fetchedData)) {
                if (page <= 1) {
                    setData(fetchedData);
                } else {
                    setData((prevData) => [...prevData, ...fetchedData]);
                }
                setPage((prevPage) => prevPage + 1);
            }
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
