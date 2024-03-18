import { useSelector } from "react-redux";

const GroupPageContentBlockAboutPrivacy = () => {
    const groupProps = useSelector(state => state.group);

    return (
        <div>
            <div className="min-h-[44px] px-[16px] flex flex-row items-center justify-between relative">
                <div className="flex flex-row items-center relative">
                    <div className="my-[8px] mr-[12px] flex flex-col self-start relative">
                        <div className="w-[16px] h-[16px] flex items-center justify-center overflow-hidden relative">
                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"/>
                                </svg>
                            </i>
                        </div>
                    </div>
                    <div
                        className="py-[12px] flex flex-col flex-shrink grow items-stretch justify-between basis-0 relative">
                        <div className="my-[-5px] flex flex-col relative">
                            <div>
                                <span className="block text-[17px] text-black text-left font-medium break-words relative leading-5">
                                    <span className="overflow-hidden relative">
                                        {groupProps?.profile?.group_privacy}
                                    </span>
                                </span>
                            </div>
                            <div>
                                <span className="block text-[15px] text-zinc-700 text-left font-normal break-words relative leading-5">
                                    <span className="overflow-hidden relative">
                                        Only members can see who's in the group and what they post.
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GroupPageContentBlockAboutPrivacy;