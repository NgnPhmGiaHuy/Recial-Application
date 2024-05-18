import Image from "next/image";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { toggleHeaderMenu, toggleHeaderMessage, toggleHeaderNotification, toggleHeaderPersonalAccount } from "@/store/actions/toggle/toggleActions";

const HeaderButton = ({ headerActionProps, disableMessage, disableNotification }) => {
    const dispatch = useDispatch();

    const userProps = useSelector(state => state.user, shallowEqual);

    return (
        <>
            <div className="h-full pr-[16px] pl-[4px] flex flex-row items-center">
                <div className="h-full flex items-center justify-center mr-[8px]">
                    <div ref={headerActionProps.headerRef.menuButtonRef}
                         className={`${headerActionProps.showMenu ? "bg-lime-200 hover:bg-lime-300 text-lime-700" : "bg-zinc-200 hover:bg-zinc-300"} w-[40px] h-[40px] flex items-center justify-center rounded-xl cursor-pointer relative transition-all`}
                         onClick={() => dispatch(toggleHeaderMenu())}>
                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
                                 strokeWidth={1.5} stroke="none" className="w-6 h-6">
                                <path
                                    d="M15.5 5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M10 8.5a5.5 5.5 0 1 1 10.032 3.117l2.675 2.676l-1.414 1.414l-2.675-2.675A5.5 5.5 0 0 1 10 8.5M3 4h5v2H3zm0 7h5v2H3zm18 7v2H3v-2z"/>
                            </svg>
                        </i>
                    </div>
                </div>
                {disableMessage ? null : (
                    <div className="h-full flex items-center justify-center mr-[8px]">
                        <div ref={headerActionProps.headerRef.messageButtonRef}
                             className={`${headerActionProps.showMessage ? "bg-lime-200 hover:bg-lime-300 text-lime-700" : "bg-zinc-200 hover:bg-zinc-300"} w-[40px] h-[40px] flex items-center justify-center rounded-xl cursor-pointer relative transition-all`}
                             onClick={() => dispatch(toggleHeaderMessage())}>
                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="none" className="w-6 h-6">
                                    <path
                                        d="M5 18v3.766l1.515-.909L11.277 18H16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2zM4 8h12v8h-5.277L7 18.234V16H4z"/>
                                    <path
                                        d="M20 2H8c-1.103 0-2 .897-2 2h12c1.103 0 2 .897 2 2v8c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2"/>
                                </svg>
                            </i>
                        </div>
                    </div>
                )}
                <div className="h-full flex items-center justify-center mr-[8px]">
                    <div ref={headerActionProps.headerRef.notificationButtonRef}
                         className={`${disableNotification ? "pointer-events-none" : null} ${headerActionProps.showNotification || disableNotification ? "bg-lime-200 hover:bg-lime-300 text-lime-700" : "bg-zinc-200 hover:bg-zinc-300"} w-[40px] h-[40px] flex items-center justify-center rounded-xl cursor-pointer relative transition-all`}
                         onClick={() => dispatch(toggleHeaderNotification())}>
                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"/>
                            </svg>
                        </i>
                        <i className="hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M10.5 8.25h3l-3 4.5h3"/>
                            </svg>
                        </i>
                        {userProps?.notifications?.length ? (
                            <span
                                className="absolute h-[19px] min-w-[19px] flex items-center justify-center -top-1 -right-1 bg-red-500 rounded-xl">
                                    <span className="text-white text-[13px] font-medium">
                                        {headerActionProps.notificationUnreadCount}
                                    </span>
                                </span>
                        ) : null}
                    </div>
                </div>
                <div className="h-full flex items-center justify-center">
                    <div ref={headerActionProps.headerRef.personalAccountButtonRef} className="w-[40px] h-[40px] relative cursor-pointer"
                         onClick={() => dispatch(toggleHeaderPersonalAccount())}>
                        <div className="w-full h-full rounded-xl overflow-hidden relative">
                            <Image src={userProps?.user?.profile?.profile_picture_url}
                                   alt={`${userProps?.user?.profile?.profile_picture_url}-image`} fill={true}
                                   sizes="(max-width: 768px) 100vw" className="object-cover"/>
                        </div>
                        <div
                            className="w-3 h-3 top-0 right-0 absolute border border-solid border-white rounded-xl bg-red-500"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderButton;