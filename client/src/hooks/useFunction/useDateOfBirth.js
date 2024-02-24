"use client"

import { useState, useEffect } from "react";

const useDateOfBirth = (formData, handleFormChange) => {
    const initialDate = new Date(formData.session_date_of_birth || Date.now());

    const [selectedMonth, setSelectedMonth] = useState(initialDate.getMonth() + 1);
    const [selectedYear, setSelectedYear] = useState(initialDate.getFullYear());
    const [selectedDate, setSelectedDate] = useState(initialDate.getDate());

    const [daysInMonth, setDaysInMonth] = useState([]);

    const months = [
        { value: "1", label: "January" },
        { value: "2", label: "February" },
        { value: "3", label: "March" },
        { value: "4", label: "April" },
        { value: "5", label: "May" },
        { value: "6", label: "June" },
        { value: "7", label: "July" },
        { value: "8", label: "August" },
        { value: "9", label: "September" },
        { value: "10", label: "October" },
        { value: "11", label: "November" },
        { value: "12", label: "December" },
    ];

    const years = () => {
        const currentYear = new Date().getFullYear();
        const yearsArray = [];
        for (let year = currentYear; year >= currentYear - 100; year--) {
            yearsArray.push(year);
        }
        return yearsArray;
    };

    const handleMonthChange = (e) => {
        const { value } = e.target;
        setSelectedMonth(parseInt(value));
        setDaysInMonth(getDaysArray(parseInt(value), selectedYear));
        handleFormChange({ target: { name: "session_date_of_birth", value: `${selectedYear}-${value}-${selectedDate}` } });
    };

    const handleYearChange = (e) => {
        const { value } = e.target;
        setSelectedYear(parseInt(value));
        setDaysInMonth(getDaysArray(selectedMonth, parseInt(value)));
        handleFormChange({ target: { name: "session_date_of_birth", value: `${value}-${selectedMonth}-${selectedDate}` } });
    };

    const handleDateChange = (e) => {
        const { value } = e.target;
        setSelectedDate(parseInt(value));
        handleFormChange({ target: { name: "session_date_of_birth", value: `${selectedYear}-${selectedMonth}-${value}` } });
    };

    const getDaysArray = (month, year) => {
        if (!month || !year) return [];

        const daysInSelectedMonth = new Date(year, month, 0).getDate();
        return Array.from({ length: daysInSelectedMonth }, (_, i) => i + 1);
    };

    useEffect(() => {
        setDaysInMonth(getDaysArray(selectedMonth, selectedYear));
    }, [selectedMonth, selectedYear]);

    return { daysInMonth, months, years, selectedDate, selectedMonth, selectedYear, handleMonthChange, handleYearChange, handleDateChange };
};

export default useDateOfBirth;