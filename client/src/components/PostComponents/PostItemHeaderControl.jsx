import { EllipsisHorizontalIcon, XMarkIcon } from "@/components";

const PostItemHeaderControl = ({ handleState }) => {
    return (
        <div>
            <div className="flex flex-row flex-shrink-0 grow-0 items-center relative">
                <div className="w-[40px] h-[40px] mx-[4px] p-[8px] flex self-start rounded-full cursor-pointer relative hover:bg-zinc-200"
                    onClick={handleState.handleShowPostItemQuickSetting}>
                    <div className="w-full h-full inline-flex flex-row items-stretch ">
                        <EllipsisHorizontalIcon fill="none" stroke="currentColor"/>
                    </div>
                </div>
                <div className="w-[40px] h-[40px] mx-[4px] p-[8px] flex self-start rounded-full cursor-pointer relative hover:bg-zinc-200"
                    onClick={handleState.handleShowPostItemDelete}>
                    <div className="w-full h-full inline-flex flex-row items-stretch ">
                        <XMarkIcon fill="none" stroke="currentColor"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostItemHeaderControl;