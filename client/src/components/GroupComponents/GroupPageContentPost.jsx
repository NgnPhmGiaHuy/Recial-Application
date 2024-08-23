import { shallowEqual, useSelector } from "react-redux";

import { ChevronDownIcon, CreatePost, Post } from "@/components";

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
                                            Most relevant
                                        </span>
                                    </div>
                                    <div className="h-full ml-[8px] flex flex-col flex-shrink-0 self-start items-center justify-center relative">
                                        <div className="w-[16px] h-[16px] flex items-center justify-center relative">
                                            <ChevronDownIcon fill="none" stroke="currentColor" width={16} height={16} />
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