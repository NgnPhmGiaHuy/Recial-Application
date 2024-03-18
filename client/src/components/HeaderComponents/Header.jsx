"use client"

import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

import { useHeaderAction } from "@/hooks";
import { HEADER_NAVIGATION } from "@/constants/HeaderConstants";
import { toggleHeaderSearchHistory } from "@/store/actions/toggle/toggleActions";
import { HeaderMenu, HeaderMessage, NotificationHeader, HeaderPersonalAccount, HeaderSearchHistory, HeaderNavigationItem, HeaderButton } from "@/components";

import Favicon from "/public/images/Metadata/favicon.ico";

const Header = ({ disableMessage, disableNotification }) => {
    const dispatch = useDispatch();

    const userProps = useSelector(state => state.user);

    const headerActionProps = useHeaderAction(userProps);

    return (
        <nav>
            <div className="h-[56px] top-0 left-0 fixed z-30">
                <div className="w-full h-full flex flex-row relative">
                    <div className={`${headerActionProps.showSearchHistory ? "hidden" : "flex"} h-full flex-row relative items-center z-0 ml-[16px]`}>
                        <a href="/" className="w-full h-full flex flex-col items-center justify-center relative">
                            <div className="w-[40px] h-[40px] relative">
                                <Image src={Favicon} alt="logo-image" fill={true} sizes="(max-width: 768px) 100vw" className="object-contain"/>
                            </div>
                        </a>
                    </div>
                    <div className="sm:w-[320px] w-[48px] flex h-full">
                        <div className="w-full h-full relative before:shadow-md">
                            <div className={`${headerActionProps.showSearchHistory ? "shadow-xl" : null} w-full h-full sm:px-[16px] px-[4px] mb-[-8px] flex items-center `}>
                                <div className="w-full flex items-center">
                                    <div className={`${headerActionProps.showSearchHistory ? "flex w-[34px] h-[34px] p-[8px]" : "hidden"} items-center justify-center rounded-xl hover:bg-zinc-200 cursor-pointer transition-all duration-500 ease-in-out animate-moveIconRightToLeft`}>
                                        <i>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"/>
                                            </svg>
                                        </i>
                                    </div>
                                    <label className={`${headerActionProps.showSearchHistory ? "w-full" : null} h-full min-w-[40px] min-h-[40px] flex items-center justify-center relative rounded-xl bg-zinc-100 z-10`} htmlFor="headerSearchInput">
                                        <span className={`${headerActionProps.showSearchHistory ? "animate-moveIconRightToLeft hidden" : "flex"} w-auto items-center sm:pl-[12px] transition-all duration-500`}>
                                            <i>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                                                </svg>
                                            </i>
                                        </span>
                                        <span className={`${headerActionProps.showSearchHistory ? "flex" : "hidden"} w-[22px]`}></span>
                                        <input type="text" name="headerSearchInput" id="headerSearchInput" placeholder="Search in Recial" ref={headerActionProps.headerRef.searchHistoryButtonRef} className="w-full h-full px-[8px] pt-[7px] pb-[9px] sm:flex hidden outline-none bg-zinc-100 rounded-r-full" onClick={() => dispatch(toggleHeaderSearchHistory())}/>
                                    </label>
                                </div>
                            </div>
                            <div ref={headerActionProps.headerRef.searchHistoryButtonRef}>
                                {headerActionProps.showSearchHistory && <HeaderSearchHistory/>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[56px] top-0 right-0 fixed shadow z-20 bg-white">
                <div className="w-full h-full flex flex-col justify-end relative z-0">
                    <ul className="w-full h-full sm:flex hidden flex-nowrap list-none items-center justify-center grow px-[110px]">
                        { HEADER_NAVIGATION.map((value, index) => (
                            <HeaderNavigationItem key={index} itemProps={value}/>
                        )) }
                    </ul>
                </div>
            </div>
            <div className="h-[56px] top-0 right-0 fixed z-20">
                <HeaderButton headerActionProps={headerActionProps} disableMessage={disableMessage} disableNotification={disableNotification}/>
                <div>
                    { headerActionProps.showMenu && <HeaderMenu forwardedRef={headerActionProps.headerRef.menuButtonRef}/> }
                </div>
                <div>
                    { (headerActionProps.showMessage && !disableMessage) && <HeaderMessage forwardedRef={headerActionProps.headerRef.messageButtonRef}/> }
                </div>
                <div>
                    { (headerActionProps.showNotification && !disableNotification) && <NotificationHeader forwardedRef={headerActionProps.headerRef.notificationButtonRef}/> }
                </div>
                <div>
                    { headerActionProps.showPersonalAccount && <HeaderPersonalAccount forwardedRef={headerActionProps.headerRef.personalAccountButtonRef}/> }
                </div>
            </div>
        </nav>
    );
};

export default Header;