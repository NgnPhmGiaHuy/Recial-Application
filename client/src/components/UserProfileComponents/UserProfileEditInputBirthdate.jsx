"use client"

import Link from "next/link";
import { formatLongDate } from "@/utils";
import { useToggleState, useDateOfBirth } from "@/hooks";

import { SelectInput } from "@/components";

const UserProfileEditInputBirthdate = ({ formData, handleFormChange }) => {
    const [showBirthdateInput, setShowBirthdateInput, handleShowBirthdateInput] = useToggleState(false);

    const {months, daysInMonth, years, selectedDate, selectedMonth, selectedYear, handleMonthChange, handleYearChange, handleDateChange} = useDateOfBirth(formData, handleFormChange)

    return (
        <div className="p-[16px] flex flex-col relative">
            <div className="flex flex-row flex-shrink-0 items-stretch relative">
                <div className="flex flex-col justify-center relative">
                    <span className="text-[15px] text-zinc-500 text-left font-normal break-words relative leading-5">
                        Birth date
                    </span>
                </div>
                <div className="px-[4px] flex flex-col justify-center relative">
                    <span className="text-[15px] text-black text-left font-normal break-words relative leading-5">
                        ·
                    </span>
                </div>
                <div className="flex flex-col justify-center relative" onClick={handleShowBirthdateInput}>
                    <span className="text-[15px] text-lime-500 text-left font-normal cursor-pointer break-words relative leading-5 hover:text-lime-700 hover:underline transition-all">
                        { showBirthdateInput ? "Cancel" : "Edit" }
                    </span>
                </div>
            </div>
            { showBirthdateInput ? (
                <div className="flex flex-col items-stretch relative">
                    <div className="py-[4px] flex flex-col justify-center relative">
                        <span className="text-[14px] text-zinc-500 text-left font-normal break-words relative leading-5">
                            <span className="overflow-hidden relative">
                                This should be the date of birth of the person using the account. Even if you’re making an account for your business, event, or cat.
                            </span>
                        </span>
                    </div>
                    <div className="py-[4px] flex flex-col justify-center relative">
                        <span className="text-[14px] text-zinc-500 text-left font-normal break-words relative leading-5">
                            <span className="overflow-hidden relative">
                                Recial uses your age to customize your experience, including ads, as explained in our &nbsp;
                                <Link href="" className="inline-block text-lime-500 hover:underline">
                                    <span>
                                        Privacy Policy
                                    </span>
                                </Link>
                            </span>
                        </span>
                    </div>
                    <div className="flex flex-col items-stretch relative">
                        <div className="py-[16px] flex flex-row relative">
                            <SelectInput label="Month" name="session_month" value={selectedMonth} onChange={handleMonthChange} options={months} style={{ marginRight: "12px", flexGrow: 2 }}/>
                            <SelectInput label="Day" name="session_date" value={selectedDate} onChange={handleDateChange} options={daysInMonth} style={{ marginRight: "12px" }}/>
                            <SelectInput label="Year" name="session_year" value={selectedYear} onChange={handleYearChange} options={years()}/>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col justify-center relative">
                    <span className="text-[20px] text-black text-left font-normal break-words relative leading-6">
                        <span className="overflow-hidden relative">
                            { formatLongDate(formData?.session_date_of_birth) }
                        </span>
                    </span>
                </div>
            ) }
        </div>
    );
};

export default UserProfileEditInputBirthdate;