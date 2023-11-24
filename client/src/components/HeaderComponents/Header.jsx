"use client"

import Image from "next/image";
import React, {useEffect, useRef, useState, useCallback} from "react";

import {headerNavigationItemList} from "@/constants/HeaderConstants";
import {HeaderMenu, HeaderMessage, HeaderNotification, HeaderPersonalAccount, HeaderSearchHistory, HeaderNavigationItem} from "@/components";

import Favicon from "/public/images/Metadata/favicon.ico";

const Header = ({navigationItem, userData}) => {
    const menuButtonRef = useRef(null);
    const messageButtonRef = useRef(null);
    const notificationButtonRef = useRef(null);
    const searchHistoryButtonRef = useRef(null);
    const personalAccountButtonRef = useRef(null);

    const [showMenu, setShowMenu] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [showNotification, setShowNotification] = useState(false);
    const [showSearchHistory, setShowSearchHistory] = useState(false);
    const [showPersonalAccount, setShowPersonalAccount] = useState(false);

    const handleMenuButtonClick = useCallback(() => {
        setShowMenu((prevShowMenu) => !prevShowMenu);
    }, []);

    const handleMessageButtonClick = useCallback(() => {
        setShowMessage((prevShowMessage) => !prevShowMessage);
    }, []);

    const handleNotificationButtonClick = useCallback(() => {
        setShowNotification((prevShowNotification) => !prevShowNotification);
    }, []);

    const handleSearchHistoryButtonClick = useCallback(() => {
        setShowSearchHistory((prevShowSearchHistory) => !prevShowSearchHistory);
    }, []);

    const handlePersonalAccountButtonClick = useCallback(() => {
        setShowPersonalAccount((prevShowPersonalAccount) => !prevShowPersonalAccount);
    }, []);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (menuButtonRef.current && !menuButtonRef.current.contains(event.target)) {
                setShowMenu(false);
            }
            if (messageButtonRef.current && !messageButtonRef.current.contains(event.target)) {
                setShowMessage(false);
            }
            if (notificationButtonRef.current && !notificationButtonRef.current.contains(event.target)) {
                setShowNotification(false);
            }
            if (searchHistoryButtonRef.current && !searchHistoryButtonRef.current.contains(event.target)) {
                setShowSearchHistory(false);
            }
            if (personalAccountButtonRef.current && !personalAccountButtonRef.current.contains(event.target)) {
                setShowPersonalAccount(false);
            }
        };

        if (showMenu || showMessage || showNotification || showSearchHistory || showPersonalAccount) {
            document.addEventListener("mousedown", handleOutsideClick);
        } else {
            document.removeEventListener("mousedown", handleOutsideClick);
        }

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [showMenu, showMessage, showNotification, showSearchHistory, showPersonalAccount]);

    return (
        <nav>
            <div className="h-[56px] top-0 left-0 fixed z-30">
                <div className="w-full h-full flex flex-row relative">
                    <div className={`${showSearchHistory ? "hidden" : "flex"} h-full flex-row relative items-center z-0 ml-[16px]`}>
                        <a href="/" className="w-full h-full flex flex-col items-center justify-center relative">
                            <div className="w-[40px] h-[40px] relative">
                                <Image src={Favicon} alt="logo-image" fill className="object-contain"/>
                            </div>
                        </a>
                    </div>
                    <div className="w-[320px] h-full">
                        <div className="w-full h-full relative before:shadow-md">
                            <div className={`${showSearchHistory ? "shadow-xl" : ""} w-full h-full flex items-center px-[16px] mb-[-8px]`}>
                                <div className="w-full flex items-center">
                                    <div className={`${showSearchHistory ? "flex w-[34px] h-[34px] p-[8px]" : "hidden"} items-center justify-center rounded-full hover:bg-zinc-200 cursor-pointer transition-all duration-500 ease-in-out animate-moveIconRightToLeft`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"/>
                                        </svg>
                                    </div>
                                    <label className={`${showSearchHistory ? "w-full" : ""} h-full min-w-[40px] min-h-[40px] flex items-center relative rounded-full bg-zinc-100 z-10`} htmlFor="headerSearchInput">
                                        <span className={`${showSearchHistory ? "animate-moveIconRightToLeft hidden" : "flex"} items-center pl-[12px] transition-all duration-500`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                                            </svg>
                                        </span>
                                        <span className={`${showSearchHistory ? "flex" : "hidden"} w-[22px]`}></span>
                                        <input type="text" name="headerSearchInput" id="headerSearchInput" placeholder="Search in Recial" ref={searchHistoryButtonRef} className="px-[8px] pt-[7px] pb-[9px] w-full h-full outline-none bg-zinc-100 rounded-r-full" onClick={handleSearchHistoryButtonClick}/>
                                    </label>
                                </div>
                            </div>
                            <div ref={searchHistoryButtonRef}>
                                {showSearchHistory ? (<HeaderSearchHistory userData={userData}/>) : ""}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[56px] top-0 right-0 fixed shadow z-20 bg-white">
                <div className="w-full h-full flex flex-col justify-end relative z-0">
                    <ul className="w-full h-full flex flex-nowrap list-none items-center justify-center grow px-[110px]">
                        {headerNavigationItemList.map((value, index) => (
                            <HeaderNavigationItem key={index} itemProps={value} navigationItem={navigationItem}/>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="h-[56px] top-0 right-0 fixed z-20">
                <div className="h-full pr-[16px] pl-[4px] flex flex-row items-center">
                    <div className="h-full flex items-center justify-center mr-[8px]">
                        <div ref={menuButtonRef} className={`${showMenu ? "bg-lime-200 hover:bg-lime-300 text-lime-700" : "bg-zinc-200 hover:bg-zinc-300"} w-[40px] h-[40px] flex items-center justify-center rounded-full cursor-pointer relative transition-all`} onClick={handleMenuButtonClick}>
                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"/>
                                </svg>
                            </i>
                        </div>
                    </div>
                    <div className="h-full flex items-center justify-center mr-[8px]">
                        <div ref={messageButtonRef} className={`${showMessage ? "bg-lime-200 hover:bg-lime-300 text-lime-700" : "bg-zinc-200 hover:bg-zinc-300"} w-[40px] h-[40px] flex items-center justify-center rounded-full cursor-pointer relative transition-all`} onClick={handleMessageButtonClick}>
                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"/>
                                </svg>
                            </i>
                        </div>
                    </div>
                    <div className="h-full flex items-center justify-center mr-[8px]">
                        <div ref={notificationButtonRef} className={`${showNotification ? "bg-lime-200 hover:bg-lime-300 text-lime-700" : "bg-zinc-200 hover:bg-zinc-300"} w-[40px] h-[40px] flex items-center justify-center rounded-full cursor-pointer relative transition-all`} onClick={handleNotificationButtonClick}>
                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"/>
                                </svg>
                            </i>
                            <i className="hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M10.5 8.25h3l-3 4.5h3"/>
                                </svg>
                            </i>
                            <span className="absolute h-[19px] min-w-[19px] flex items-center justify-center -top-1 -right-1 bg-red-500 rounded-full">
                                <span className="text-white text-[13px] font-medium">
                                    1
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className="h-full flex items-center justify-center">
                        <div ref={personalAccountButtonRef} className="w-[40px] h-[40px] relative cursor-pointer" onClick={handlePersonalAccountButtonClick}>
                            <div className="w-full h-full rounded-full overflow-hidden relative">
                                <Image src={userData.user.profile_picture_url} alt={`${userData.user.profile_picture_url}-image`} fill className="object-cover"/>
                            </div>
                            <div className="w-3 h-3 top-0 right-0 absolute border border-solid border-white rounded-full bg-red-500">
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {showMenu ? (<HeaderMenu forwardedRef={menuButtonRef} handleMenuButtonClick={handleMenuButtonClick}/>) : ""}
                </div>
                <div>
                    {showMessage ? (<HeaderMessage forwardedRef={messageButtonRef} userData={userData}/>) : ""}
                </div>
                <div>
                    {showNotification ? (<HeaderNotification forwardedRef={notificationButtonRef} userData={userData}/>) : ""}
                </div>
                <div>
                    {showPersonalAccount ? (<HeaderPersonalAccount forwardedRef={personalAccountButtonRef} userData={userData}/>) : ""}
                </div>
            </div>
        </nav>
    );
};

export default Header;