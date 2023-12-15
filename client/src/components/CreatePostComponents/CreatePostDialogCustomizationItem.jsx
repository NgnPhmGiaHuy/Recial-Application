import Image from "next/image";

const CreatePostDialogCustomizationItem = ({createPostContentCustomizationData}) => {
    return (
        <div className="m-[2px]">
            <div className="inline-flex flex-row items-stretch cursor-pointer relative">
                <div className="w-[36px] h-[36px] flex items-center justify-center rounded-full relative bg-transparent hover:bg-zinc-100">
                    <div className="w-[24px] h-[24px] flex items-center justify-center relative">
                        <Image src={createPostContentCustomizationData.postContentCustomizationIcon} alt={`${createPostContentCustomizationData.postContentCustomizationIcon}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePostDialogCustomizationItem;