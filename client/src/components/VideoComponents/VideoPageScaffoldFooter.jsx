import React from 'react';

const VideoPageScaffoldFooter = ({isComment, handleShowReplyPanel}) => {
    return (
        <div className="flex flex-row items-center">
            <div className="flex-[1_1_auto]">
                <div className="px-[8px] flex flex-row items-end rounded-md bg-zinc-100 border border-solid border-transparent">
                    <div className="h-auto mr-[8px] my-[10px] flex-[1_1_auto]">
                        <div className="max-h-[68px] min-h-[17px] text-[14px] text-black text-left break-words overflow-y-auto leading-4">
                            <div>
                                <div className="text-[14px] text-zinc-500 absolute leading-4">
                                    <div className="whitespace-pre-wrap">
                                        Write a comment...
                                    </div>
                                </div>
                                <div>
                                    {/*<div className="outline-none select-text whitespace-pre-wrap break-words" contentEditable={true} role="textbox" spellCheck={false}>*/}
                                    {/*    <div>*/}

                                    {/*    </div>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[32px] h-[32px] m-[3px] p-[5px] flex flex-[0_0_32px] items-center justify-center rounded-md cursor-pointer bg-transparent hover:bg-zinc-300">
                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                            </svg>
                        </i>
                    </div>
                    <div className="w-[32px] h-[32px] m-[3px] p-[5px] flex flex-[0_0_32px] items-center justify-center rounded-md cursor-pointer bg-transparent hover:bg-zinc-300">
                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 48 48" className="w-6 h-6">
                                <path fillRule="evenodd" clipRule="evenodd" d="M24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6ZM2 24C2 11.8497 11.8497 2 24 2C36.1503 2 46 11.8497 46 24C46 36.1503 36.1503 46 24 46C11.8497 46 2 36.1503 2 24Z"></path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M17 23C18.6569 23 20 21.2091 20 19C20 16.7909 18.6569 15 17 15C15.3431 15 14 16.7909 14 19C14 21.2091 15.3431 23 17 23Z"></path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M31 23C32.6569 23 34 21.2091 34 19C34 16.7909 32.6569 15 31 15C29.3431 15 28 16.7909 28 19C28 21.2091 29.3431 23 31 23Z"></path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M16 28.3431C16 31.4673 19.5817 36 24 36C28.4183 36 32 31.4673 32 28.3431C32 25.219 16 25.219 16 28.3431Z"></path>
                            </svg>
                        </i>
                    </div>
                </div>
            </div>
            <div className="mr-[4px] flex-[0_0_48px]">
                <span className="block text-[14px] text-zinc-300 text-right font-semibold break-words relative leading-10 pointer-events-none">
                    Post
                </span>
            </div>
            {isComment && handleShowReplyPanel ? (
                <div className="w-fit h-full flex flex-[0_0_32px] items-center justify-center cursor-pointer" onClick={handleShowReplyPanel}>
                    <i>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </i>
                </div>
            ) : null}
        </div>
    );
};

export default VideoPageScaffoldFooter;