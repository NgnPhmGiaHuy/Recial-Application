"use client"

import React, { useEffect } from 'react';

const InputField = ({ forwardRef, handleInput, fontSize = 14, fontWeight = 400, lineHeight = 20, paddingTop = 0, paddingRight = 0, paddingBottom = 0, paddingLeft = 0, width = "auto", height = "auto", maxHeight = "auto", textColor = "black", inputText = "", inputAlt = "Add a comment..." }) => {
    useEffect(() => {
        const element = forwardRef.current;
        if (element) {
            element.focus();
        }
    }, [forwardRef]);

    return (
        <div className="w-auto h-full text-ellipsis flex flex-auto overflow-x-hidden overflow-y-scroll font-normal no-scrollbar"
             style={{ maxHeight: maxHeight, width: width, height: height, fontSize: `${fontSize}px`, fontWeight: fontWeight, textColor: textColor,
                 lineHeight: `${lineHeight}px`, paddingTop: `${paddingTop}px`, paddingRight: `${paddingRight}px`, paddingBottom: `${paddingBottom}px` , paddingLeft: `${paddingLeft}px` }}>
            <div ref={forwardRef} className="w-full h-full text-left outline-none whitespace-pre-wrap break-words relative"
                 contentEditable={true} spellCheck={false} onInput={handleInput} >
            </div>
            <div className="top-[7px] overflow-hidden text-zinc-500 text-ellipsis pointer-events-none absolute z-[1]">{inputText.length === 0 ? inputAlt : null}
            </div>
        </div>
    );
};

export default InputField;