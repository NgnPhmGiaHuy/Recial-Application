import Image from "next/image";

const StoryItem = ({index, selected, storyItemSelectedRef, storyItemData}) => {
    return (
        <div key={index} ref={selected ? storyItemSelectedRef : null} className="mr-[12px] flex flex-shrink-0 grow-0 basis-[160px] relative">
            <a href="" className="w-full block overflow-x-hidden overflow-y-hidden cursor-pointer shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] rounded-md relative">
                <div className="w-full h-0 pt-[230px] overflow-x-hidden overflow-y-hidden relative">
                    <div className="absolute top-0 right-0 bottom-0 left-0">
                        <div className="h-full flex flex-col relative">
                            <div className="h-full overflow-x-hidden overflow-y-hidden relative transition ease-in-out duration-150">
                                <Image src={storyItemData.media_url} alt={`${storyItemData.media_url}-image`} width={0} height={0} className="w-full h-full object-cover"/>
                            </div>
                            <div className="w-full pt-[28px] pb-[12px] px-[16px] bottom-0 flex flex-shrink-0 justify-center absolute">
                                <div className="w-[40px] h-[40px] top-[-20px] flex items-center justify-center rounded-full bg-lime-500 absolute">
                                    <div className="w-[32px] h-[32px] flex items-center justify-center text-white bg-lime-500 rounded-full overflow-hidden relative">
                                        <Image src={storyItemData.storyItemUserImage} alt={`${storyItemData.storyItemUserImage}-image`} fill className="object-cover"/>
                                        <span className="w-2 h-2 -bottom-1 -right-1 rounded-full bg-lime-500 absolute z-20"></span>
                                    </div>
                                </div>
                                <div>
                                    <span className="block text-[13px] text-center text-white break-words font-semibold leading-4">
                                        <span className="line-clamp-3 overflow-x-hidden overflow-y-hidden relative">
                                            {storyItemData.storyItemUserName}
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default StoryItem;