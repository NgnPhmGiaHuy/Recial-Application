import Image from "next/image";

const CreatePostOptionItem = ({createPostItemData}) => {
    return (
        <div className="min-w-fit p-[8px] flex flex-row flex-shrink grow basis-0 items-center justify-center rounded-md cursor-pointer bg-transparent relative hover:bg-zinc-200">
            <div className="flex items-center justify-center overflow-x-hidden overflow-y-hidden leading-3">
                <div className="w-[24px] h-[24px] mr-[8px] inline-flex flex-shrink-0 grow overflow-hidden relative">
                    <Image src={createPostItemData.createPostItemImage} alt={`${createPostItemData.createPostItemImage}-image`} fill className="object-cover"/>
                </div>
                <span className="block text-[15px] text-zinc-700 font-semibold break-words leading-5">
                    <span className="block whitespace-nowrap overflow-x-hidden overflow-y-hidden relative">
                        {createPostItemData.createPostItemTitle}
                    </span>
                </span>
            </div>
        </div>
    );
};

export default CreatePostOptionItem;