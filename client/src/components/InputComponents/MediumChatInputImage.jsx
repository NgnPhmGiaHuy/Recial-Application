"use client"

import Image from "next/image";

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
                        <div
                            className="w-[48px] h-[48px] flex flex-row basis-auto items-center justify-center bg-zinc-200 rounded-xl overflow-hidden cursor-pointer relative">
                            <div className="w-[24px] h-[24px] flex items-center justify-center relative">
                                <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12-3-3m0 0-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"/>
                                    </svg>
                                </i>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-row items-center justify-center relative">
                        {selectedImages.map((imageUrl, index) => (
                            <div className="mr-[12px] flex flex-shrink-0 grow-0 relative">
                                <div
                                    className="w-[48px] h-[48px] flex flex-row basis-auto items-center justify-center bg-zinc-200 rounded-xl overflow-hidden cursor-pointer relative">
                                    <Image src={imageUrl} alt={`image-${index}`} fill className="object-cover"/>
                                </div>
                                <div className="-top-[8px] -right-[8px] absolute z-10">
                                    <div onClick={() => handleRemoveSelectedImage(index)}>
                                        <div
                                            className="w-[24px] h-[24px] flex items-center justify-center rounded-full bg-white border border-solid border-zinc-200 cursor-pointer relative hover:bg-zinc-200 transition-all">
                                            <i>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                     strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                          d="M6 18 18 6M6 6l12 12"/>
                                                </svg>
                                            </i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MediumChatInputImage;