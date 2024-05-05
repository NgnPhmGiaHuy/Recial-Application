"use client"

import { useEffect } from "react";

import { useContentEditable } from "@/hooks";

const MediumChatInput = ({ submitStatus, setText, setIsText }) => {
    const { inputContentEditableRef, inputText, setInputText, setAllowSubmit, handleInputTextChange } = useContentEditable();

    useEffect(() => {
        setIsText(!!inputText);
    }, [inputText, setIsText]);

    useEffect(() => {
        setText(inputText);
    }, [inputText]);

    useEffect(() => {
        const resetInputText = () => {
            setInputText('');
            setAllowSubmit(false);
            inputContentEditableRef.current.innerText = '';
        }

        resetInputText();
    }, [submitStatus]);

    return (
        <div className="w-full h-full flex flex-col">
            <div className="flex-grow rounded-xl bg-zinc-100 relative">
                <div className="flex justify-end relative">
                    <div className="mx-[12px] my-[8px] flex flex-grow relative">
                        <div className="max-h-[124px] min-h-[20px] w-full h-full flex flex-grow items-center overflow-y-auto relative">
                            <div className="w-full h-full text-black select-text whitespace-pre-wrap break-words outline-none relative" contentEditable={true} spellCheck={true} tabIndex={0} onInput={handleInputTextChange} ref={inputContentEditableRef}>
                            </div>
                            <div className="top-[0px] overflow-hidden text-zinc-500 text-ellipsis pointer-events-none absolute z-[1]">
                                {inputText.length === 0 ? `Aa` : null}
                            </div>
                        </div>
                    </div>
                    <div className="ml-[-12px] pb-[8px] pr-[4px] flex items-center justify-center self-end relative">
                        <div className="w-[24px] h-[24px] flex items-center justify-center rounded-full overflow-hidden cursor-pointer text-lime-500 hover:bg-zinc-100 relative transition-all">
                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 0 0-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634Zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 0 1-.189-.866c0-.298.059-.605.189-.866Zm2.023 6.828a.75.75 0 1 0-1.06-1.06 3.75 3.75 0 0 1-5.304 0 .75.75 0 0 0-1.06 1.06 5.25 5.25 0 0 0 7.424 0Z" clipRule="evenodd"/>
                                </svg>
                            </i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MediumChatInput;