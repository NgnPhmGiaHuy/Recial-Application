"use client"

import { useEffect, useRef, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";

import { useClickOutside, useToggleState } from "@/hooks";
import { EllipsisHorizontalIcon, QuickSettingItem } from "@/components";

import USER_ABOUT_OVERVIEW_SETTINGS from "@/constants/UserProfileConstants/UserAboutOverviewSetting";

const UserAboutOverview = () => {
    const { isCurrentUser } = useSelector(state => state.userRelationship, shallowEqual);

    const userProps = isCurrentUser ? useSelector(state => state.user, shallowEqual) : useSelector(state => state.userId, shallowEqual);

    const overviewRef = useRef(null);
    const settingsButtonRef = useRef(null);

    const [translateX, setTranslateX] = useState(0);
    const [settingsTranslateX, setSettingsTranslateX] = useState(0);
    const [settingsTranslateY, setSettingsTranslateY] = useState(0);
    const [showSettings, setShowSettings, toggleShowSettings] = useToggleState(false);

    useEffect(() => {
        if (overviewRef.current && settingsButtonRef.current && showSettings) {
            setTranslateX(overviewRef.current.clientWidth - settingsButtonRef.current.clientWidth + 80)
        }

        if (settingsButtonRef.current && showSettings) {
            setSettingsTranslateX(-settingsButtonRef.current.clientWidth + 225);
            setSettingsTranslateY(-settingsButtonRef.current.clientHeight);
        }
    }, [showSettings]);

    useClickOutside(settingsButtonRef, showSettings, setShowSettings);

    return (
        <section className="bg-white rounded-xl shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] relative" ref={overviewRef}>
            <div className="p-[16px] flex flex-col gap-6 relative">
                <header className="flex flex-row items-center justify-between relative">
                    <div className="flex flex-col">
                        <span className="text-[24px] text-black text-left font-semibold break-words relative leading-6">
                            Overview
                        </span>
                    </div>
                    <div className="p-[4px] flex flex-col flex-shrink-0 relative">
                        <div className="p-[8px] flex flex-row flex-nowrap items-center justify-center rounded-xl cursor-pointer bg-zinc-100 relative hover:bg-zinc-200 transition-all" onClick={toggleShowSettings}>
                            <div className="w-[16px] h-[16px] mx-[3px] flex items-center justify-center overflow-hidden relative">
                                <EllipsisHorizontalIcon stroke="currentColor" strokeWidth={2} width={20} height={20} />
                            </div>
                        </div>
                    </div>
                </header>
                <div>
                    <span className="text-[16px] text-zinc-500 font-normal break-words relative leading-5">
                        <span className="overflow-hidden relative">
                            { userProps?.user?.contact?.description }
                        </span>
                    </span>
                </div>
                <div>
                    <dl className="flex flex-col gap-4 overflow-hidden relative">
                        {userProps?.user?.job_title && (
                            <div>
                                <dt className="mb-[4px] text-[16px] text-black text-left font-bold relative leading-5">
                                    Job
                                </dt>
                                <dd className="text-[16px] text-zinc-500 text-left font-normal relative leading-5">
                                    <span className="overflow-hidden relative">
                                        { userProps?.user?.job_title }
                                    </span>
                                </dd>
                            </div>
                        ) }
                        { userProps?.user?.location && (
                            <div>
                                <dt className="mb-[4px] text-[16px] text-black text-left font-bold relative leading-5">
                                    Location
                                </dt>
                                <dd className="text-[16px] text-zinc-500 text-left font-normal relative leading-5">
                                    <span className="overflow-hidden relative">
                                        {userProps?.user?.location?.city} city, {userProps?.user?.location?.country}
                                    </span>
                                </dd>
                            </div>
                        ) }
                    </dl>
                </div>
            </div>
            <div ref={settingsButtonRef}>
                { showSettings && (
                    <div ref={settingsButtonRef} className="absolute top-0 left-0 translate-x-[525px] translate-y-[65px] z-50" style={{ '--tw-translate-x': `${translateX}px`}}>
                        <div className="relative mt-[15px] rounded-l-md rounded-r-md shadow-[rgba(0,_0,_0,_0.24)_4px_7px_50px_1px]">
                            <div className="overflow-hidden rounded-l-md rounded-r-md bg-white">
                                <div className="flex flex-col grow items-stretch origin-top-left relative">
                                    <div className="w-[344px] py-[8px] overflow-x-hidden overflow-y-auto overscroll-y-contain flex flex-col relative">
                                        <div className="flex flex-col grow relative">
                                            { USER_ABOUT_OVERVIEW_SETTINGS.map((value, index) => (
                                                <QuickSettingItem key={index} settingProps={value}/>
                                            )) }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <svg height="12" viewBox="0 0 21 12" width="21" className="absolute right-0 bottom-[calc(100%-1)] scale-x-[-1] scale-y-[-1] translate-x-[-40px]" style={{ '--tw-translate-x': `${settingsTranslateX}px`, '--tw-translate-y': `${settingsTranslateY + 5}px` }} fill="white">
                                <path d="M20.685.12c-2.229.424-4.278 1.914-6.181 3.403L5.4 10.94c-2.026 2.291-5.434.62-5.4-2.648V.12h20.684z"></path>
                            </svg>
                        </div>
                    </div>
                ) }
            </div>
        </section>
    );
};

export default UserAboutOverview;