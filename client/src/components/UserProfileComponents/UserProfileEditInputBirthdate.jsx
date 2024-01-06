"use client"

import { convertDateFormat } from "@/utils";
import { useToggleState, useDateOfBirth } from "@/hooks";

const UserProfileEditInputBirthdate = ({ formData, handleFormChange }) => {
    const [showBirthdateInput, setShowBirthdateInput, handleShowBirthdateInput] = useToggleState(false);

    const {months, daysInMonth, years, selectedDate, selectedMonth, selectedYear, handleMonthChange, handleYearChange, handleDateChange} = useDateOfBirth(formData, handleFormChange)

    return (
        <div className="p-[16px] flex flex-col relative">
            <div className="flex flex-row flex-shrink-0 items-stretch relative">
                <div className="flex flex-col justify-center relative">
                    <span className="text-[15px] text-zinc-500 text-left font-normal break-words relative leading-5">
                        <span className="overflow-hidden relative">
                            Birth date
                        </span>
                    </span>
                </div>
                <div className="px-[4px] flex flex-col justify-center relative">
                    <span className="text-[15px] text-black text-left font-normal break-words relative leading-5">
                        <span className="overflow-hidden relative">
                            ·
                        </span>
                    </span>
                </div>
                <div className="flex flex-col justify-center relative" onClick={handleShowBirthdateInput}>
                    <span className="text-[15px] text-lime-500 text-left font-normal cursor-pointer break-words relative leading-5 hover:text-lime-700 hover:underline transition-all">
                        <span className="overflow-hidden relative">
                            {showBirthdateInput ? "Cancel" : "Edit"}
                        </span>
                    </span>
                </div>
            </div>
            {showBirthdateInput ? (
                <div className="flex flex-col items-stretch relative">
                    <div className="py-[4px] flex flex-col justify-center relative">
                        <span
                            className="text-[14px] text-zinc-500 text-left font-normal break-words relative leading-5">
                            <span className="overflow-hidden relative">
                                This should be the date of birth of the person using the account. Even if you’re making an account for your business, event, or cat.
                            </span>
                        </span>
                    </div>
                    <div className="py-[4px] flex flex-col justify-center relative">
                        <span className="text-[14px] text-zinc-500 text-left font-normal break-words relative leading-5">
                            <span className="overflow-hidden relative">
                                Recial uses your age to customize your experience, including ads, as explained in our &nbsp;
                                <a href="" className="inline-block text-lime-500 hover:underline">
                                    <span>
                                        Privacy Policy
                                    </span>
                                </a>
                            </span>
                        </span>
                    </div>
                    <div className="flex flex-col items-stretch relative">
                        <div className="py-[16px] flex flex-row relative">
                            <div className="mr-[12px] flex flex-col grow-[2] bg-white border border-solid border-zinc-200 rounded-md relative">
                                <label htmlFor="session_month" className="px-[8px] pt-[8px] absolute">
                                    <span className="text-[13px] text-zinc-500 text-left font-normal break-words relative leading-5">
                                        <span className="overflow-hidden relative">
                                            Month
                                        </span>
                                    </span>
                                </label>
                                <select name="session_month" value={selectedMonth} onChange={handleMonthChange}
                                        className="mt-[16px] px-[8px] pt-[12px] pb-[8px] text-[17px] text-black text-left rounded-md cursor-pointer appearance-none outline-none leading-5">
                                    <option disabled={true} value="" className="bg-white">Select Month</option>
                                    {months.map(month => (
                                        <option key={month.value} value={month.value}>
                                            {month.label}
                                        </option>
                                    ))}
                                </select>
                                <div className="w-[24px] h-[24px] mt-[-12px] top-1/2 right-[12px] absolute">
                                    <div className="w-full h-full flex items-center justify-center relative">
                                        <i>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                                            </svg>
                                        </i>
                                    </div>
                                </div>
                            </div>
                            <div className="mr-[12px] flex flex-col grow bg-white border border-solid border-zinc-200 rounded-md relative">
                                <label htmlFor="session_date" className="px-[8px] pt-[8px] absolute">
                                    <span className="text-[13px] text-zinc-500 text-left font-normal break-words relative leading-5">
                                        <span className="overflow-hidden relative">
                                            Day
                                        </span>
                                    </span>
                                </label>
                                <select name="session_date" value={selectedDate} onChange={handleDateChange}
                                        className="mt-[16px] px-[8px] pt-[12px] pb-[8px] text-[17px] rounded-md text-black text-left cursor-pointer appearance-none outline-none leading-5">
                                    <option disabled={true} value="" className="bg-white">Select Day</option>
                                    {daysInMonth.map((day) => (
                                        <option key={day} value={day}>
                                            {day}
                                        </option>
                                    ))}
                                </select>
                                <div className="w-[24px] h-[24px] mt-[-12px] top-1/2 right-[12px] absolute">
                                    <div className="w-full h-full flex items-center justify-center relative">
                                        <i>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                                            </svg>
                                        </i>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col grow bg-white border border-solid border-zinc-200 rounded-md relative">
                                <label htmlFor="session_year" className="px-[8px] pt-[8px] absolute">
                                    <span className="text-[13px] text-zinc-500 text-left font-normal break-words relative leading-5">
                                        <span className="overflow-hidden relative">
                                            Year
                                        </span>
                                    </span>
                                </label>
                                <select name="session_year" value={selectedYear} onChange={handleYearChange}
                                        className="mt-[16px] px-[8px] pt-[12px] pb-[8px] text-[17px] text-black text-left rounded-md cursor-pointer appearance-none outline-none leading-5">
                                    <option disabled={true} value="" className="bg-white"></option>
                                    {years().map((year) => (
                                        <option key={year} value={year}>
                                            {year}
                                        </option>
                                    ))}
                                </select>
                                <div className="w-[24px] h-[24px] mt-[-12px] top-1/2 right-[12px] absolute">
                                    <div className="w-full h-full flex items-center justify-center relative">
                                        <i>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                                            </svg>
                                        </i>
                                    </div>
                                </div>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col justify-center relative">
                    <span className="text-[20px] text-black text-left font-normal break-words relative leading-6">
                        <span className="overflow-hidden relative">
                            {convertDateFormat(formData.session_date_of_birth)}
                        </span>
                    </span>
                </div>
            )}
        </div>
    );
};

export default UserProfileEditInputBirthdate;