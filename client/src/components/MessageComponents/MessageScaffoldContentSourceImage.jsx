"use client"

import Link from "next/link";
import Image from "next/image";
import { Tooltip } from "react-tooltip";

import { DeleteButton, SmallMoreButton } from "@/components";
import { calculateGridProperties, formatTimestampForCover } from "@/utils";

const MessageScaffoldContentSourceImage = ({ messageProps, isReverse = false, deleteRef, buttonRef, showDelete, showButton, handleShowDelete, handleShowDeleteScaffold }) => {
    const containerStyle = messageProps?.message_content_url ? { height: `${(2 / 3) * 450}px` } : { height: "450px" };
    const { gridTemplateRowsValue, gridTemplateColumnsValue, imageGridAreas } = calculateGridProperties(messageProps?.message_content_url);

    return (
        <div>
            <div style={containerStyle} className="mx-[8px] mb-[8px]">
                <div className={`${isReverse ? "justify-end" : "justify-start"} w-full h-full flex items-center relative`}>
                    { isReverse && messageProps?.message_content_url?.length > 0 && !messageProps?.message_content && (
                        <div className="mr-[12px] flex items-center justify-center relative">
                            <SmallMoreButton state={showDelete ? showDelete : showButton} buttonRef={buttonRef} onClick={handleShowDelete}/>
                            {showDelete && (
                                <div ref={deleteRef} className="top-0 left-[20px] absolute">
                                    <DeleteButton buttonRef={deleteRef} onClick={handleShowDeleteScaffold}/>
                                </div>
                            )}
                        </div>
                    ) }
                    <div className="max-w-[385px] max-h-[385px] w-full h-full grid gap-2 relative" style={{ gridTemplateColumns: gridTemplateColumnsValue, gridTemplateRows: gridTemplateRowsValue }}>
                        { messageProps?.message_content_url.map((imageUrl, index) => (
                            <div key={index} data-tooltip-id={imageUrl._id} data-tooltip-content={formatTimestampForCover(imageUrl?.created_at)} className="relative cursor-pointer rounded-xl shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] overflow-hidden" style={{gridArea: imageGridAreas[index] || "auto"}}>
                                <Link href={imageUrl.photo_url} target="_blank" rel="noopener noreferrer">
                                    <Image src={imageUrl.photo_url} alt={`image-${index}`} fill className="object-cover"/>
                                </Link>
                                <div>
                                    <Tooltip id={imageUrl._id} className="z-20"/>
                                </div>
                            </div>
                        )) }
                    </div>
                    { !isReverse && messageProps?.message_content_url?.length > 0 && !messageProps?.message_content && (
                        <div className="ml-[12px] flex items-center justify-center relative">
                            <SmallMoreButton state={showDelete ? showDelete : showButton} buttonRef={buttonRef} onClick={handleShowDelete}/>
                            {showDelete && (
                                <div ref={deleteRef} className="top-0 left-[20px] absolute">
                                    <DeleteButton buttonRef={deleteRef} onClick={handleShowDeleteScaffold}/>
                                </div>
                            )}
                        </div>
                    ) }
                </div>
            </div>
        </div>
    );
};

export default MessageScaffoldContentSourceImage;