import { Post } from "@/components";

const GroupScaffoldPost = ({ postRef, groupPostProps}) => {
    return (
        <div className="w-full p-[16px] flex flex-col items-center justify-center relative">
            <div className="w-full m-[-8px] flex flex-row flex-wrap items-stretch justify-center">
                <div className="max-w-[800px] m-[8px] flex flex-shrink grow-[25] basis-[500px] relative">
                    <div className="w-full flex flex-col items-stretch">
                        <div className="mx-[-16px] pb-[12px]">
                            <div className="pt-[20px] pb-[4px] flex flex-col relative">
                                <div className="px-[16px] flex flex-col relative">
                                    <span className="block text-[15px] text-zinc-500 text-left font-semibold relative leading-5">
                                        <span className="overflow-hidden relative">
                                            Recent activity
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <Post postRef={postRef} isCurrentUser={true} postListProps={groupPostProps}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GroupScaffoldPost;