import Image from "next/image";

const CreatePostOptionItem = ({ createPostItemData }) => {
    return (
        <div className="sm:min-w-fit w-full sm:p-[8px] p-[2px] flex flex-row flex-shrink grow basis-0 items-center justify-center rounded-md cursor-pointer bg-transparent relative hover:bg-zinc-200" onClick={createPostItemData.onclick}>
            <div className="flex items-center justify-center overflow-x-hidden overflow-y-hidden leading-3">
                <div className="sm:w-[24px] w-[20px] sm:h-[24px] h-[20px] sm:mr-[8px] mr-[4px] inline-flex flex-shrink-0 grow overflow-hidden relative">
                    <Image src={createPostItemData.icon} alt={`${createPostItemData.icon}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                </div>
                <span className="block sm:text-[15px] text-[10px] text-zinc-700 font-semibold break-words leading-5">
                    <span className="block whitespace-nowrap overflow-x-hidden overflow-y-hidden relative">
                        {createPostItemData.title}
                    </span>
                </span>
            </div>
        </div>
    );
};

export default CreatePostOptionItem;