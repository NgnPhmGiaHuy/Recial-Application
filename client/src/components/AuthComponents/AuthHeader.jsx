import React from "react";
import Image from "next/image";

import Favicon from "/public/images/Metadata/favicon.ico";

const AuthHeader = () => {
    return (
        <nav className="pt-[12px] pb-[16px] max-w-[1128px] flex flex-nowrap justify-between items-center m-auto">
            <a href="" className="mr-auto z-50 font-bold text-lime-500">
                <span className="hidden">Recial</span>
                <div className="w-[135px] h-[34px] relative overflow-hidden ">
                    <Image src={Favicon} alt="logo-image" fill className="object-contain"/>
                </div>
            </a>
            <ul className="flex flex-row items-center justify-center mr-1 after:!h-[37px] after:w-[1px] after:flex after:items-center after:bg-gray-500">
                <li>
                    <a href=""
                       className="w-[64px] h-[52px] mx-[8px] flex flex-col items-center justify-center text-gray-500 hover:text-black transition-all">
                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 20 17" focusable="false"
                                 className="lazy-loaded" aria-busy="false">
                                <path
                                    d="m11 9.5h5v1h-5v-1zm5-5h-12v3h12v-3zm-5 8h5v-1h-5v1zm9-12v13c0 1.657-1.343 3-3 3h-14c-1.657 0-3-1.343-3-3v-13h20zm-2 2h-16v11c0 0.552 0.449 1 1 1h14c0.551 0 1-0.448 1-1v-11zm-9 7h-5v3h5v-3z"
                                    fill="currentColor" fillOpacity=".9"></path>
                            </svg>
                        </i>
                        <span className="text-[12px] text-center leading-normal font-normal">Articles</span>
                    </a>
                </li>
                <li>
                    <a href=""
                       className="w-[64px] h-[52px] mx-[8px] flex flex-col items-center justify-center text-gray-500 hover:text-black transition-all">
                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" focusable="false"
                                 className="lazy-loaded" aria-busy="false">
                                <path
                                    d="M9 14v6H0v-6c0-1.7 1.3-3 3-3h3c1.7 0 3 1.3 3 3Zm5.5-3c1.9 0 3.5-1.6 3.5-3.5S16.4 4 14.5 4 11 5.6 11 7.5s1.6 3.5 3.5 3.5Zm1 2h-2c-1.4 0-2.5 1.1-2.5 2.5V20h7v-4.5c0-1.4-1.1-2.5-2.5-2.5ZM4.5 0C2 0 0 2 0 4.5S2 9 4.5 9 9 7 9 4.5 7 0 4.5 0Z"
                                    fill="currentColor"></path>
                            </svg>
                        </i>
                        <span className="text-[12px] text-center leading-normal font-normal">People</span>
                    </a>
                </li>
                <li>
                    <a href=""
                       className="w-[64px] h-[52px] mx-[8px] flex flex-col items-center justify-center text-gray-500 hover:text-black transition-all">
                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" focusable="false"
                                 className="lazy-loaded" aria-busy="false">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M23 3H1a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1ZM2 19h20V5H2v14Z"
                                      fill="currentColor"></path>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M4 9h6V7H4v2Zm0 4h6v-2H4v2Zm0 4h6v-2H4v2Zm-2 2h10V5H2v14Z" fill="currentColor"
                                      fillOpacity=".25"></path>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M14 9h6V7h-6v2Zm0 4h6v-2h-6v2Zm6 4h-6v-2h6v2Z" fill="currentColor"
                                      fillOpacity=".6"></path>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M10 7.534v8.933a.28.28 0 0 0 .439.23l6.433-4.436A.307.307 0 0 0 17 12a.305.305 0 0 0-.128-.26l-6.433-4.437a.28.28 0 0 0-.439.23Z"
                                      fill="currentColor"></path>
                            </svg>
                        </i>
                        <span className="text-[12px] text-center leading-normal font-normal">Learing</span>
                    </a>
                </li>
            </ul>
            <div className="min-w-[100px] flex flex-nowrap flex-shrink-0 justify-end gap-x-1">
                <a href="/auth/signup" className="h-min min-h-[48px] px-[24px] py-[12px] text-[16px] font-semibold leading-normal text-center text-gray-500 rounded-3xl hover:bg-gray-100 hover:text-gray-700 transition-all duration-500">Join now</a>
                <a href="/auth/login" className="h-min min-h-[48px] px-[24px] py-[12px] text-[16px] bg-white border border-solid border-lime-500 font-semibold leading-normal text-center text-lime-500 rounded-3xl hover:border-lime-700 hover:text-lime-700 hover:bg-lime-50 transition-all duration-500">Sign in</a>
            </div>
        </nav>
    );
};

export default AuthHeader;