"use client"

import { useEffect, useState } from "react";

const useSearchData = (data, filterFunction) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchData, setSearchData] = useState(data || []);

    useEffect(() => {
        setSearchData(data || []);
    }, [data]);

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredSearchData = searchData.filter(item =>
        filterFunction(item, searchQuery)
    );

    return { searchQuery, setSearchQuery, filteredSearchData, handleSearchInputChange };
}

export default useSearchData;