import { QuickSettingItem, TriangleDownIcon } from "@/components";

import POST_ITEM_COMMENT_SORT_LIST from "@/constants/PostConstants/PostItemCommentSortList";

const PostItemCommentSort = ({ forwardRef, showState, setShowState, handleClick }) => {
    return (
        <div>
            <div className="mx-[16px] mb-[8px] relative">
                <div className="w-fit flex flex-col cursor-pointer relative" onClick={handleClick}>
                    <span className="flex flex-row items-center justify-between text-[16px] text-zinc-500 text-left font-semibold break-words relative leading-5">
                        <span>
                            Most relevant
                        </span>
                        <span>
                            <TriangleDownIcon stroke="currentColor" strokeWidth={2} width={16} height={16}/>
                        </span>
                    </span>
                </div>
                <div>
                    { showState && (
                        <div ref={forwardRef} className="absolute top-0 left-0 translate-x-[0px] translate-y-[20px] z-50">
                            <div className="animate-slideInTop relative mt-[15px] rounded-b-xl rounded-r-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                                <div className="overflow-hidden rounded-b-xl rounded-r-xl bg-white">
                                    <div className="flex flex-col grow items-stretch origin-top-left relative">
                                        <div className="w-[344px] py-[8px] overflow-x-hidden overflow-y-auto overscroll-y-contain flex flex-col relative">
                                            <div className="flex flex-col grow relative">
                                                { POST_ITEM_COMMENT_SORT_LIST.map((value, index) => (
                                                    <QuickSettingItem key={index} settingProps={value}/>
                                                )) }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) }
                </div>
            </div>
        </div>
    );
};

export default PostItemCommentSort;