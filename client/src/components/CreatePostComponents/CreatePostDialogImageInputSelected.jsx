"use client"

import Image from "next/image";
import { useState } from 'react';

import { calculateGridProperties } from "@/utils";
import { PencilIcon, PhotoAddIcon } from "@/components";

const CreatePostDialogImageInputSelected = ({ selectedImagesFunction }) => {
    const [selectedImageHover, setSelectedImageHover] = useState(false);

    const containerStyle = selectedImagesFunction.selectedImages ? { height: `${(2 / 3) * 900}px` } : { height: "900px" };
    const { gridTemplateRowsValue, gridTemplateColumnsValue, imageGridAreas } = calculateGridProperties(selectedImagesFunction.selectedImages);

    return (
        <div className="w-full rounded-xl overflow-hidden relative">
            <div style={containerStyle}>
                <div className="w-full h-full grid gap-2" style={{gridTemplateColumns: gridTemplateColumnsValue, gridTemplateRows: gridTemplateRowsValue}}>
                    {selectedImagesFunction.selectedImages.map((imageUrl, index) => (
                        <div key={index} className="relative rounded-xl shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] overflow-hidden" style={{gridArea: imageGridAreas[index] || "auto"}}
                             onMouseEnter={() => setSelectedImageHover(true)}
                             onMouseLeave={() => setSelectedImageHover(false)}>
                            <Image src={imageUrl} alt={`image-${index}`} fill className="object-cover"/>
                        </div>
                    ))}
                </div>
            </div>
            <div className={`${selectedImageHover ? "opacity-100" : "opacity-0"} w-full h-full pt-[12px] top-0 left-0 bg-white/10 absolute`}
                onMouseEnter={() => setSelectedImageHover(true)}
                onMouseLeave={() => setSelectedImageHover(false)}>
                <div className="m-[-6px] px-[12px] flex flex-row items-stretch justify-start relative">
                    <div className="p-[6px] flex flex-col flex-shrink-0 relative">
                        <div className="h-[36px] px-[12px] flex flex-row flex-shrink-0 items-center justify-center rounded-xl cursor-pointer bg-white">
                            <div className="flex flex-row items-center relative">
                                <div className="mx-[3px] flex flex-shrink-0 items-center relative">
                                    <PencilIcon fill="none" stroke="currentColor" width={16} height={16} />
                                </div>
                                <div className="mx-[3px] flex flex-shrink-0 items-center relative">
                                    <span className="block text-[15px] text-black text-left font-semibold break-words relative leading-5">
                                        Edit
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-[6px] flex flex-col flex-shrink-0 relative">
                        <input ref={selectedImagesFunction.fileInputRef} type="file" className="hidden" accept="image/*,image/heif,image/heic,video/*,video/mp4,video/x-m4v,video/x-matroska,.mkv" multiple={true} onChange={selectedImagesFunction.handleFileUpload}/>
                        <div className="h-[36px] px-[12px] flex flex-row flex-shrink-0 items-center justify-center rounded-xl cursor-pointer bg-white" onClick={selectedImagesFunction.handleTriggerClick}>
                            <div className="flex flex-row items-center relative">
                                <div className="mx-[3px] flex flex-shrink-0 items-center relative">
                                    <PhotoAddIcon stroke="currentColor" strokeWidth={0} width={16} height={16} />
                                </div>
                                <div className="mx-[3px] flex flex-shrink-0 items-center relative">
                                    <span className="block text-[15px] text-black text-left font-semibold break-words relative leading-5">
                                        Add Photos/Videos
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatePostDialogImageInputSelected;