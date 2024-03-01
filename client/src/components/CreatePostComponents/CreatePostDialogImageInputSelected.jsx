"use client"

import Image from "next/image";
import { useState } from 'react';

import { calculateGridProperties } from "@/utils";

const CreatePostDialogImageInputSelected = ({ selectedImagesFunction }) => {
    const [selectedImageHover, setSelectedImageHover] = useState(false);

    const containerStyle = selectedImagesFunction.selectedImages ? { height: `${(2 / 3) * 900}px` } : { height: "900px" };
    const { gridTemplateRowsValue, gridTemplateColumnsValue, imageGridAreas } = calculateGridProperties(selectedImagesFunction.selectedImages)

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
                                    <i>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"/>
                                        </svg>
                                    </i>
                                </div>
                                <div className="mx-[3px] flex flex-shrink-0 items-center relative">
                                    <span className="block text-[15px] text-black text-left font-semibold break-words relative leading-5">
                                        <span className="overflow-hidden relative">
                                            Edit
                                        </span>
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
                                    <i>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={0} stroke="currentColor" className="w-4 h-4">
                                            <g>
                                                <path d="M14,2.25l-7,-0c-1.26,-0 -2.468,0.5 -3.359,1.391c-0.891,0.891 -1.391,2.099 -1.391,3.359c0,2.977 0,7.023 0,10c-0,1.26 0.5,2.468 1.391,3.359c0.891,0.891 2.099,1.391 3.359,1.391l10,0c1.26,0 2.468,-0.5 3.359,-1.391c0.891,-0.891 1.391,-2.099 1.391,-3.359c0,-3.146 0,-7 0,-7c0,-0.414 -0.336,-0.75 -0.75,-0.75c-0.414,-0 -0.75,0.336 -0.75,0.75c0,-0 0,3.854 -0,7c0,0.862 -0.342,1.689 -0.952,2.298c-0.609,0.61 -1.436,0.952 -2.298,0.952l-10,-0c-0.862,0 -1.689,-0.342 -2.298,-0.952c-0.61,-0.609 -0.952,-1.436 -0.952,-2.298c0,-2.977 0,-7.023 -0,-10c-0,-0.862 0.342,-1.689 0.952,-2.298c0.609,-0.61 1.436,-0.952 2.298,-0.952l7,-0c0.414,-0 0.75,-0.336 0.75,-0.75c-0,-0.414 -0.336,-0.75 -0.75,-0.75Z"/>
                                                <path d="M21.469,15.414c-0,0 -2.044,-1.634 -3.518,-2.813c-1.142,-0.915 -2.801,-0.774 -3.773,0.32c-2.254,2.535 -6.739,7.581 -6.739,7.581c-0.275,0.309 -0.247,0.784 0.063,1.059c0.309,0.275 0.784,0.247 1.059,-0.063c-0,0 4.484,-5.045 6.738,-7.581c0.442,-0.497 1.196,-0.561 1.715,-0.145c0,-0 3.517,2.814 3.517,2.814c0.324,0.258 0.796,0.206 1.055,-0.117c0.258,-0.324 0.206,-0.796 -0.117,-1.055Z"/>
                                                <path d="M13.005,14.445c-0,0 -2.657,-2.415 -4.277,-3.888c-0.976,-0.887 -2.445,-0.957 -3.5,-0.165c-1.165,0.873 -2.678,2.008 -2.678,2.008c-0.331,0.248 -0.398,0.719 -0.15,1.05c0.248,0.331 0.719,0.398 1.05,0.15c-0,0 1.513,-1.135 2.678,-2.008c0.479,-0.36 1.147,-0.329 1.591,0.075l4.276,3.888c0.307,0.278 0.782,0.256 1.06,-0.05c0.278,-0.307 0.256,-0.782 -0.05,-1.06Z"/>
                                                <path d="M18.25,3l0,4c0,0.414 0.336,0.75 0.75,0.75c0.414,-0 0.75,-0.336 0.75,-0.75l0,-4c0,-0.414 -0.336,-0.75 -0.75,-0.75c-0.414,-0 -0.75,0.336 -0.75,0.75Z"/>
                                                <path d="M17,5.75l4,-0c0.414,0 0.75,-0.336 0.75,-0.75c0,-0.414 -0.336,-0.75 -0.75,-0.75l-4,-0c-0.414,0 -0.75,0.336 -0.75,0.75c0,0.414 0.336,0.75 0.75,0.75Z"/>
                                                <circle cx="9.5" cy="6.5" r="1.5"/>
                                            </g>
                                        </svg>
                                    </i>
                                </div>
                                <div className="mx-[3px] flex flex-shrink-0 items-center relative">
                                    <span className="block text-[15px] text-black text-left font-semibold break-words relative leading-5">
                                        <span className="overflow-hidden relative">
                                            Add Photos/Videos
                                        </span>
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