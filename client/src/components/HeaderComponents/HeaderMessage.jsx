"use client"

import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";

import { useClickOutside, useToggleState } from "@/hooks";
import { HeaderMessageContentItem, HeaderMessageQuickSetting } from "@/components";
import { useGetUserMessageData } from "@/hooks/useUser/useUserData";

const HeaderMessage = ({ forwardedRef }) => {
    const userProps = useSelector(state => state.user);

    const messageQuickSettingButtonRef = useRef(null);

    const [messageQuickSettingTranslateYValue, setMessageQuickSettingTranslateYValue] = useState(-415);
    const [showMessageQuickSetting, setShowMessageQuickSetting, handleMessageQuickSettingButton] = useToggleState(false);

    useEffect(() => {
        if (messageQuickSettingButtonRef.current && showMessageQuickSetting) {
            setMessageQuickSettingTranslateYValue(-messageQuickSettingButtonRef.current.clientHeight);
        }
    }, [showMessageQuickSetting]);

    useClickOutside(messageQuickSettingButtonRef, showMessageQuickSetting, setShowMessageQuickSetting);

    const { data, error, isLoading, isValidating } = useGetUserMessageData();

    return (
        <div ref={forwardedRef} className="absolute top-0 left-0 translate-x-[-172px] translate-y-[48px]">
            <div className="mt-[5px] mr-[8px] animate-slideInTop">
                <div className="overflow-hidden rounded-xl bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                    <div className="w-[360px] max-h-[calc(100vh-56px-16px)] flex flex-col">
                        <div className="flex flex-col flex-shrink grow no-scrollbar overflow-x-hidden overflow-y-auto overscroll-y-contain basis-full relative">
                            <div className="flex flex-col grow relative">
                                <div className="mx-[16px] mb-[12px] mt-[20px] flex flex-row flex-shrink-0 items-center justify-between relative">
                                    <div className="flex flex-col flex-shrink basis-0 grow relative">
                                        <div className="flex flex-row flex-shrink-0 flex-nowrap items-center justify-between relative">
                                            <div className="flex flex-col">
                                                <span className="block text-[22px] text-black text-left break-words font-bold leading-7">
                                                    <h2>ChatBox</h2>
                                                </span>
                                            </div>
                                            <div className="flex flex-row flex-shrink-0 items-end justify-center basis-auto">
                                                <div ref={messageQuickSettingButtonRef}
                                                     className="w-[32px] h-[32px] mx-[4px] flex items-center justify-center relative rounded-xl cursor-pointer hover:bg-zinc-100 transition-all overflow-hidden"
                                                     onClick={handleMessageQuickSettingButton}>
                                                    <i >
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
                                                        </svg>
                                                    </i>
                                                </div>
                                                <div className="w-[32px] h-[32px] mx-[4px] flex items-center justify-center relative rounded-xl cursor-pointer hover:bg-zinc-100 transition-all overflow-hidden">
                                                    <i>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="none" className="w-5 h-5">
                                                            <path d="M20 2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3v3.767L13.277 18H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2m0 14h-7.277L9 18.233V16H4V4h16z"/>
                                                        </svg>
                                                    </i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <div className="w-full h-full flex flex-col">
                                            <div className="w-full h-full px-[16px] my-[8px]">
                                                <div className="w-full h-full flex items-center">
                                                    <label htmlFor="headerMessageSearchInput" className="w-full h-full">
                                                        <label className="w-full h-full min-w-[40px] min-h-[40px] flex items-center relative rounded-xl bg-zinc-100 z-10">
                                                                <span className="flex items-center pl-[12px] transition-all duration-500">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                                                                    </svg>
                                                                </span>
                                                            <input type="text" name="headerMessageSearchInput" id="headerMessageSearchInput" placeholder="Search in Recial Message" className="px-[8px] pt-[7px] pb-[9px] w-full h-full outline-none bg-zinc-100 rounded-r-full"/>
                                                        </label>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="w-full h-full flex flex-col ">
                                            <div className="flex flex-row items-center mx-[10px] mb-[8px] p-[8px] rounded-md hover:bg-zinc-100 transition-all cursor-pointer">
                                                <div className="w-[56px] h-[56px] mr-[8px] flex flex-row items-center justify-center text-white border border-solid border-gray-500 rounded-full bg-lime-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={0} stroke="currentColor" className="w-5 h-5">
                                                        <path d="M23.3458 0.633387C22.4924 -0.211454 21.1083 -0.211454 20.2549 0.633387L18.7363 2.13571L21.8272 5.1931L23.3727 3.66441C24.2268 2.82023 24.1999 1.47756 23.3458 0.633387ZM17.762 3.10349L9.39669 11.3893L8.35883 15.6412L12.4876 14.4467L20.8963 6.23791L17.762 3.10349ZM4.70156 1.01393C2.10496 1.01393 0 3.16788 0 5.82491V19.1887C0 21.8458 2.10496 23.9997 4.70156 23.9997H18.2838C20.8804 23.9997 22.9854 21.8458 22.9854 19.1887V14.074C22.9854 13.1884 22.2838 12.5068 21.4182 12.5068C20.5527 12.5068 19.851 13.1884 19.851 14.074V19.1887C19.851 20.0744 19.1494 20.7924 18.2838 20.7924H4.70156C3.83603 20.7924 3.13437 20.0744 3.13437 19.1887V5.82491C3.13437 4.93923 3.83603 4.22125 4.70156 4.22125H9.92552C10.7911 4.22125 11.4927 3.50326 11.4927 2.61759C11.4927 1.73191 10.7911 1.01393 9.92552 1.01393H4.70156Z"></path>
                                                    </svg>
                                                </div>
                                                <div className="flex flex-row items-center text-left text-[16px] font-semibold leading-5">
                                                    <h3>New message</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                {userProps?.message && (
                                    <div className="px-[16px] py-[12px]">
                                        <div className="flex flex-row items-center text-left text-[16px] font-normal leading-5">
                                            <span>Messages</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div>
                                {isLoading ? (
                                    <div className="w-full h-full py-[16px] flex items-center justify-center relative">
                                        <div className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-lime-700 motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                                            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                                                Loading...
                                            </span>
                                        </div>
                                    </div>
                                ) : (
                                    <ul className="flex flex-col relative">
                                        {userProps?.messages?.map((value, index) => (
                                            <HeaderMessageContentItem key={index} messageProps={value}/>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {showMessageQuickSetting &&
                    <HeaderMessageQuickSetting messageQuickSettingButtonRef={messageQuickSettingButtonRef} messageQuickSettingTranslateYValue={messageQuickSettingTranslateYValue}/>}
            </div>
        </div>
    );
};

export default HeaderMessage;