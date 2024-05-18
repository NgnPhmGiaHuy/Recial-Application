import { shallowEqual, useSelector } from "react-redux";

import { CreatePost, Post } from "@/components";

const GroupPageContentPost = () => {
    const groupPostProps = useSelector(state => state.group.post_list, shallowEqual);

    return (
        <div className="max-w-[840px] m-[8px] flex flex-col flex-shrink grow-[25] basis-[500px] relative">
            <div>
                <CreatePost/>
            </div>
            <div>
                <div className="mx-[-16px] pl-[16px] pb-[12px] ">
                    <div className="pb-[4px] flex flex-col flex-shrink-0 relative">
                        <div className="px-[16px] flex flex-col flex-shrink-0 grow relative">
                            <div className="inline-flex flex-row flex-shrink-0 items-stretch basis-auto cursor-pointer relative">
                                <div className="flex flex-row flex-nowrap items-center justify-between relative">
                                    <div className="flex flex-col flex-shrink grow basis-0 relative">
                                        <span className="block text-[17px] text-zinc-500 text-left font-semibold break-words relative leading-5">
                                            <span className="overflow-hidden relative">
                                                Most relevant
                                            </span>
                                        </span>
                                    </div>
                                    <div className="h-full ml-[8px] flex flex-col flex-shrink-0 self-start items-center justify-center relative">
                                        <div className="w-[16px] h-[16px] flex items-center justify-center relative">
                                            <i>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                                                </svg>
                                            </i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Post postRef={groupPostProps?.ref} postListProps={groupPostProps?.posts}/>
            </div>
        </div>
    );
};

export default GroupPageContentPost;