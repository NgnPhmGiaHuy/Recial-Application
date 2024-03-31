import { useMediaCopyLink } from "@/hooks";

const MediaPageScaffoldHeaderUrl = () => {
    const { currentURL, copyLinkSuccess, handleCopyToClipboard } = useMediaCopyLink();

    return (
        <div>
            <div className="mt-[16px] flex flex-row rounded-md border border-solid border-zinc-200 bg-zinc-100 overflow-hidden relative">
                <div className="w-full flex flex-row items-center text-[14px] text-zinc-500 text-left font-normal break-words relative overflow-hidden leading-5">
                    <p className="pt-[7px] pb-[5px] pl-[12px] flex-[1_1_auto] text-ellipsis whitespace-nowrap overflow-hidden relative">
                        {currentURL}
                    </p>
                    <div className="px-[18px] py-[7px] flex-[0_0_auto] cursor-pointer relative hover:bg-white/75 transition-all" onClick={handleCopyToClipboard}>
                        <span className="text-black font-bold relative">
                            <span className="overflow-hidden relative">
                                Copy link
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MediaPageScaffoldHeaderUrl;