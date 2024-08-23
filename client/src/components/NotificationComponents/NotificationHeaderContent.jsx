import Link from "next/link";

import { NotificationHeaderItem } from "@/components";

const NotificationHeaderContent = ({ title, props, hasNews }) => {
    return (
        <>
            <div className="flex flex-col pt-[20px] pb-[4px]">
                <div className="flex flex-col flex-shrink-0 grow relative px-[16px]">
                    <div className="flex flex-col my-[-5px]">
                        <div className="my-[5px] flex flex-row flex-nowrap items-center justify-between relative">
                            <div className="flex flex-col flex-shrink grow relative">
                                <span className="block text-[17px] text-black font-semibold break-words leading-5">
                                    <span className="overflow-hidden relative">
                                        { title }
                                    </span>
                                </span>
                            </div>
                            { !hasNews && (
                                <div className="flex flex-col flex-shrink-0 self-start justify-center relative ml-[8px]">
                                    <div className="flex flex-row flex-shrink-0 flex-nowrap items-center justify-between relative ">
                                        <Link href="/notifications" className="text-[15px] text-lime-500 font-normal break-words leading-5 rounded-md cursor-pointer hover:text-lime-700 hover:bg-zinc-100 transition-all p-[8px]">
                                            <span className="overflow-hidden relative">
                                                See all
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            ) }
                        </div>
                    </div>
                </div>
            </div>
            <ul className="relative">
                { props?.map((value, index) => (
                    <NotificationHeaderItem key={index} notificationProps={value}/>
                )) }
            </ul>
        </>
    );
};

export default NotificationHeaderContent;