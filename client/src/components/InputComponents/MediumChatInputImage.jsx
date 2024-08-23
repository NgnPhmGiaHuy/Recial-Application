"use client"

import Image from "next/image";

import { FileUpIcon, XMarkIcon } from "@/components";

const MediumChatInputImage = ({ inputRef, selectedImages, setSelectedImages }) => {
    const handleRemoveSelectedImage = (index) => {
        return setSelectedImages((prevState) => {
            const updatedImages = [...prevState.slice(0, index), ...prevState.slice(index + 1)];
            return updatedImages;
        });
    }

    return (
        <div>
            <div className="w-full p-[12px] flex flex-nowrap items-center justify-start overflow-x-auto relative">
                <div onClick={() => inputRef.current.click()}>
                    <div className="mr-[12px] flex flex-shrink-0 grow-0 relative">
                        <div className="w-[48px] h-[48px] flex flex-row basis-auto items-center justify-center bg-zinc-200 rounded-xl overflow-hidden cursor-pointer relative">
                            <div className="w-[24px] h-[24px] flex items-center justify-center relative">
                                <FileUpIcon fill="none" stroke="currentColor" width={24} height={24} />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-row items-center justify-center relative">
                        { selectedImages.map((imageUrl, index) => (
                            <div className="mr-[12px] flex flex-shrink-0 grow-0 relative">
                                <div className="w-[48px] h-[48px] flex flex-row basis-auto items-center justify-center bg-zinc-200 rounded-xl overflow-hidden cursor-pointer relative">
                                    <Image src={imageUrl} alt={`image-${index}`} fill className="object-cover"/>
                                </div>
                                <div className="-top-[8px] -right-[8px] absolute z-10">
                                    <div onClick={() => handleRemoveSelectedImage(index)}>
                                        <div className="w-[24px] h-[24px] flex items-center justify-center rounded-full bg-white border border-solid border-zinc-200 cursor-pointer relative hover:bg-zinc-200 transition-all">
                                            <XMarkIcon fill="none" stroke="currentColor" width={16} height={16} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )) }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MediumChatInputImage;