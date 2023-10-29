"use client"

import Image from "next/image";
import React, {useState} from "react";

import {navigationItems} from "@/constants";
import {NavigationItemList} from "@/components"
import Favicon from "/public/images/Metadata/favicon.ico";

const Header = ({navigationItem}) => {
    const [showSearchHistory, setShowSearchHistory] = useState(false);

    return (
        <nav>
            <div className="h-[56px] top-0 left-0 fixed z-20">
                <div className="w-full h-full flex flex-row relative">
                    <div
                        className={`${showSearchHistory ? "hidden" : "flex"} h-full flex-row relative items-center z-0 ml-[16px]`}>
                        <div className="w-[40px] h-[40px] relative">
                            <Image src={Favicon} alt="logo-image" fill className="object-contain"/>
                        </div>
                    </div>
                    <div className="w-[320px] h-full">
                        <div className="w-full h-full relative before:shadow-md">
                            <div className="w-full h-full flex items-center px-[16px] mb-[-8px]">
                                <div className="w-full flex items-center">
                                    <div
                                        className={`${showSearchHistory ? "flex w-[36px] h-[36px]" : "hidden"} items-center justify-center transition-all duration-500 ease-in-out animate-moveIconRightToLeft`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"/>
                                        </svg>
                                    </div>
                                    <label
                                        className={`${showSearchHistory ? "w-full" : ""} h-full min-w-[40px] min-h-[40px] flex items-center relative rounded-full bg-gray-100 z-10`}>
                                    <span
                                        className={`${showSearchHistory ? "animate-moveIconRightToLeft hidden" : "flex"} items-center pl-[12px] transition-all duration-500`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                                        </svg>
                                    </span>
                                        <span className={`${showSearchHistory ? "flex" : "hidden"} w-[22px]`}>

                                    </span>
                                        <input type="text" name="" id="" placeholder="Search in Recial"
                                               className="px-[8px] pt-[7px] pb-[9px] outline-none bg-gray-100 rounded-r-full"
                                               onFocus={() => setShowSearchHistory(true)}
                                               onBlur={() => setShowSearchHistory(false)}/>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[56px] top-0 right-0 fixed shadow-md">
                <div className="w-full h-full flex flex-col justify-end relative z-0">
                    <ul className="w-full h-full flex flex-nowrap list-none items-center justify-center grow px-[110px]">
                        {navigationItems.map((item, index) => (
                            <NavigationItemList key={index} itemProps={item} navigationItem={navigationItem}/>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="h-[56px] top-0 right-0 fixed">
                <div className="h-full pr-[16px] pl-[4px] flex flex-row items-center">
                    <div className="h-full flex items-center justify-center mr-[8px]">
                        <div
                            className="w-[40px] h-[40px] flex items-center justify-center rounded-full cursor-pointer bg-gray-200 hover:bg-gray-300 transition-all">
                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"/>
                                </svg>
                            </i>
                        </div>
                    </div>
                    <div className="h-full flex items-center justify-center mr-[8px]">
                        <div
                            className="w-[40px] h-[40px] flex items-center justify-center rounded-full cursor-pointer bg-gray-200 hover:bg-gray-300 transition-all">
                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"/>
                                </svg>
                            </i>
                        </div>
                    </div>
                    <div className="h-full flex items-center justify-center mr-[8px]">
                        <div
                            className="w-[40px] h-[40px] flex items-center justify-center rounded-full cursor-pointer relative bg-gray-200 hover:bg-gray-300 transition-all">
                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"/>
                                </svg>
                            </i>
                            <i className="hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M10.5 8.25h3l-3 4.5h3"/>
                                </svg>
                            </i>
                            <span
                                className="absolute h-[19px] min-w-[19px] flex items-center justify-center -top-1 -right-1 bg-red-500 rounded-full">
                                <span className="text-white text-[13px] font-medium">
                                    1
                                </span>
                            </span>
                        </div>
                    </div>
                    <span></span>
                </div>
            </div>
        </nav>
    );
};

export default Header;