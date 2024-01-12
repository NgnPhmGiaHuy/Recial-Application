import { GroupScaffoldNavigationButton } from "@/components";

const GroupScaffoldNavigation = ({ groupData, userRole }) => {
    const button = [
        ...(!userRole.length && (groupData?.groupProps?.group_privacy === "Private")
                ? [
                    {
                        link: "",
                        active: true,
                        title: "About",
                    },
                    {
                        link: "",
                        active: false,
                        title: "Discussion",
                    }
                ]
                : [
                    {
                        link: "",
                        active: true,
                        title: "Discussion",
                    },
                    {
                        link: "",
                        active: false,
                        title: "Members",
                    },
                    {
                        link: "",
                        active: false,
                        title: "Events",
                    },
                    {
                        link: "",
                        active: false,
                        title: "Media",
                    },
                    {
                        link: "",
                        active: false,
                        title: "Files",
                    }
                ]
        )
    ].filter(Boolean);

    return (
        <div className="top-[56px] sticky z-[9999]">
            <div className="flex flex-row flex-nowrap items-stretch justify-center bg-white shadow-[0_1px_2px_rbga(0,0,0,0.1)] relative">
                <div className="max-w-[1218px] px-[16px] flex flex-col flex-shrink grow relative">
                    <div className="mx-[-4px] flex flex-row flex-nowrap flex-shrink-0 items-center justify-between relative">
                        <div className="px-[4px] flex flex-col flex-shrink grow basis-0 relative">
                            <div className="overflow-hidden relative">
                                <div className="min-h-[60px] flex flex-row flex-nowrap items-stretch justify-between relative">
                                    <div className="flex flex-col flex-shrink grow basis-0 relative">
                                        <div className="w-full h-[60px] overflow-hidden relative">
                                            <div className="flex flex-row items-center relative">
                                                {button.map((value, index) => (
                                                    <GroupScaffoldNavigationButton key={index} buttonProps={value}/>
                                                ))}
                                                <div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>

                                </div>
                            </div>
                        </div>
                        <div className="px-[4px] flex flex-col flex-shrink-0 relative">
                            <div className="m-[-4px] flex flex-row flex-nowrap flex-shrink-0 items-stretch justify-between relative">
                                <div className="p-[4px] flex flex-col flex-shrink-0 relative">
                                    <div className="h-[36px] px-[16px] flex flex-row flex-nowrap flex-shrink-0 items-center rounded-md cursor-pointer bg-zinc-200 hover:bg-zinc-300 transition-all">
                                        <div className="w-[16px] h-[16px] flex items-center justify-center overflow-hidden relative">
                                            <i>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
                                                </svg>
                                            </i>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-[4px] flex flex-col flex-shrink-0 relative">
                                    <div className="h-[36px] px-[16px] flex flex-row flex-nowrap flex-shrink-0 items-center rounded-md cursor-pointer bg-zinc-200 hover:bg-zinc-300 transition-all">
                                        <div className="w-[16px] h-[16px] flex items-center justify-center overflow-hidden relative">
                                            <i>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                     strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                          d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"/>
                                                </svg>
                                            </i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GroupScaffoldNavigation;