"use client"

import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

import { useHeaderAction } from "@/hooks";
import { headerNavigation } from "@/constants/HeaderConstants";
import { HeaderMenu, HeaderMessage, NotificationHeader, HeaderPersonalAccount, HeaderSearchHistory, HeaderNavigationItem } from "@/components";
import { toggleHeaderMenu, toggleHeaderMessage, toggleHeaderNotification, toggleHeaderPersonalAccount, toggleHeaderSearchHistory } from "@/store/actions/toggle/toggleActions";

import Favicon from "/public/images/Metadata/favicon.ico";

const Header = ({ disableMessage, disableNotification }) => {
    const dispatch = useDispatch();

    const userProps = useSelector(state => state.user);

    const { showMenu, showMessage, showNotification, showSearchHistory, showPersonalAccount, headerRef, notificationUnreadCount } = useHeaderAction(userProps);

    return (
        <nav>
            <div className="h-[56px] top-0 left-0 fixed z-30">
                <div className="w-full h-full flex flex-row relative">
                    <div className={`${showSearchHistory ? "hidden" : "flex"} h-full flex-row relative items-center z-0 ml-[16px]`}>
                        <a href="/" className="w-full h-full flex flex-col items-center justify-center relative">
                            <div className="w-[40px] h-[40px] relative">
                                <Image src={Favicon} alt="logo-image" fill={true} sizes="(max-width: 768px) 100vw" className="object-contain"/>
                            </div>
                        </a>
                    </div>
                    <div className="sm:w-[320px] w-[48px] flex h-full">
                        <div className="w-full h-full relative before:shadow-md">
                            <div className={`${showSearchHistory ? "shadow-xl" : null} w-full h-full sm:px-[16px] px-[4px] mb-[-8px] flex items-center `}>
                                <div className="w-full flex items-center">
                                    <div className={`${showSearchHistory ? "flex w-[34px] h-[34px] p-[8px]" : "hidden"} items-center justify-center rounded-xl hover:bg-zinc-200 cursor-pointer transition-all duration-500 ease-in-out animate-moveIconRightToLeft`}>
                                        <i>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"/>
                                            </svg>
                                        </i>
                                    </div>
                                    <label className={`${showSearchHistory ? "w-full" : null} h-full min-w-[40px] min-h-[40px] flex items-center justify-center relative rounded-xl bg-zinc-100 z-10`} htmlFor="headerSearchInput">
                                        <span className={`${showSearchHistory ? "animate-moveIconRightToLeft hidden" : "flex"} w-auto items-center sm:pl-[12px] transition-all duration-500`}>
                                            <i>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                                                </svg>
                                            </i>
                                        </span>
                                        <span className={`${showSearchHistory ? "flex" : "hidden"} w-[22px]`}></span>
                                        <input type="text" name="headerSearchInput" id="headerSearchInput" placeholder="Search in Recial" ref={headerRef.searchHistoryButtonRef} className="w-full h-full px-[8px] pt-[7px] pb-[9px] sm:flex hidden outline-none bg-zinc-100 rounded-r-full" onClick={() => dispatch(toggleHeaderSearchHistory())}/>
                                    </label>
                                </div>
                            </div>
                            <div ref={headerRef.searchHistoryButtonRef}>
                                {showSearchHistory && <HeaderSearchHistory/>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[56px] top-0 right-0 fixed shadow z-20 bg-white">
                <div className="w-full h-full flex flex-col justify-end relative z-0">
                    <ul className="w-full h-full sm:flex hidden flex-nowrap list-none items-center justify-center grow px-[110px]">
                        {headerNavigation.map((value, index) => (
                            <HeaderNavigationItem key={index} itemProps={value}/>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="h-[56px] top-0 right-0 fixed z-20">
                <div className="h-full pr-[16px] pl-[4px] flex flex-row items-center">
                    <div className="h-full flex items-center justify-center mr-[8px]">
                        <div ref={headerRef.menuButtonRef} className={`${showMenu ? "bg-lime-200 hover:bg-lime-300 text-lime-700" : "bg-zinc-200 hover:bg-zinc-300"} w-[40px] h-[40px] flex items-center justify-center rounded-xl cursor-pointer relative transition-all`} onClick={() => dispatch(toggleHeaderMenu())}>
                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="none" className="w-6 h-6">
                                    <path d="M15.5 5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M10 8.5a5.5 5.5 0 1 1 10.032 3.117l2.675 2.676l-1.414 1.414l-2.675-2.675A5.5 5.5 0 0 1 10 8.5M3 4h5v2H3zm0 7h5v2H3zm18 7v2H3v-2z"/>
                                </svg>
                            </i>
                        </div>
                    </div>
                    {disableMessage ? null : (
                        <div className="h-full flex items-center justify-center mr-[8px]">
                            <div ref={headerRef.messageButtonRef}
                                 className={`${showMessage ? "bg-lime-200 hover:bg-lime-300 text-lime-700" : "bg-zinc-200 hover:bg-zinc-300"} w-[40px] h-[40px] flex items-center justify-center rounded-xl cursor-pointer relative transition-all`} onClick={() => dispatch(toggleHeaderMessage())}>
                                <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="none" className="w-6 h-6">
                                        <path d="M5 18v3.766l1.515-.909L11.277 18H16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2zM4 8h12v8h-5.277L7 18.234V16H4z"/>
                                        <path d="M20 2H8c-1.103 0-2 .897-2 2h12c1.103 0 2 .897 2 2v8c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2"/>
                                    </svg>
                                </i>
                            </div>
                        </div>
                    )}
                    <div className="h-full flex items-center justify-center mr-[8px]">
                        <div ref={headerRef.notificationButtonRef}
                             className={`${disableNotification ? "pointer-events-none" : null} ${showNotification || disableNotification ? "bg-lime-200 hover:bg-lime-300 text-lime-700" : "bg-zinc-200 hover:bg-zinc-300"} w-[40px] h-[40px] flex items-center justify-center rounded-xl cursor-pointer relative transition-all`} onClick={() => dispatch(toggleHeaderNotification())}>
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
                            {userProps?.notifications?.length ? (
                                <span className="absolute h-[19px] min-w-[19px] flex items-center justify-center -top-1 -right-1 bg-red-500 rounded-xl">
                                    <span className="text-white text-[13px] font-medium">
                                        {notificationUnreadCount}
                                    </span>
                                </span>
                            ) : null}
                        </div>
                    </div>
                    <div className="h-full flex items-center justify-center">
                        <div ref={headerRef.personalAccountButtonRef} className="w-[40px] h-[40px] relative cursor-pointer" onClick={() => dispatch(toggleHeaderPersonalAccount())}>
                            <div className="w-full h-full rounded-xl overflow-hidden relative">
                                <Image src={userProps?.user?.profile?.profile_picture_url} alt={`${userProps?.user?.profile?.profile_picture_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                            </div>
                            <div className="w-3 h-3 top-0 right-0 absolute border border-solid border-white rounded-xl bg-red-500"></div>
                        </div>
                    </div>
                </div>
                <div>
                    { showMenu && <HeaderMenu forwardedRef={headerRef.menuButtonRef}/> }
                </div>
                <div>
                    { (showMessage && !disableMessage) && <HeaderMessage forwardedRef={headerRef.messageButtonRef}/> }
                </div>
                <div>
                    { (showNotification && !disableNotification) && <NotificationHeader forwardedRef={headerRef.notificationButtonRef}/> }
                </div>
                <div>
                    { showPersonalAccount && <HeaderPersonalAccount forwardedRef={headerRef.personalAccountButtonRef}/> }
                </div>
            </div>
        </nav>
    );
};

export default Header;