import { CreatePostOptionItem } from "@/components";

const CreateGroupReviewCreatePost = () => {
    const createPostOptionItemList = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="sm:w-5 w-4 sm:h-5 h-4">
                    <g>
                        <path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></path>
                        <path d="m7.5 10.5l2-6l-6 2L6 8z"></path>
                    </g>
                </svg>
            ),
            onclick: ""
        }, {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" stroke="none" strokeLinecap="round" strokeLinejoin="round" className="sm:w-5 w-4 sm:h-5 h-4">
                    <g>
                        <path d="M486 13Q463-5 431 2L218 64q-21 4-34 21.5T171 126v235q-26-20-64-20q-45 0-76 25.5T0 427t31 60t76 25q44 0 75-27t31-63v-1q-1-1-2-16h2V213q0-13 15-21l214-62q8-3 19 4q8 7 8 17v143q-29-17-64-17q-44 0-75 25.5T299 363t31 60t75 25q45 0 76-25t31-60q0-8-4-22h4V64q0-31-26-51zM107 469q-26 0-45-12.5T43 427q0-18 19-30.5t45-12.5t45 12.5t19 30.5q0 17-19 29.5T107 469zm298-64q-26 0-45-12.5T341 363q0-18 19-30.5t45-12.5t45 12.5t19 30.5q0 17-19 29.5T405 405zm26-313l-213 62q-3 0-5 2v-30q0-14 15-21l214-62q15 0 19 4q8 5 8 17v28q-18-8-38 0z"></path>
                    </g>
                </svg>
            ),
            onclick: ""
        }, {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" fill="currentColor" stroke="none"
                     strokeLinecap="round" strokeLinejoin="round" className="sm:w-5 w-4 sm:h-5 h-4">
                    <g>
                        <path
                            d="M8.09.084a.75.75 0 1 0-.232 1.482A5.502 5.502 0 0 1 7 12.5a5.502 5.502 0 0 1-5.116-3.475a.75.75 0 1 0-1.394.552A7.002 7.002 0 0 0 14 7A7.002 7.002 0 0 0 8.09.084M6.164.661a.75.75 0 0 1-.54.914a5.453 5.453 0 0 0-.735.246a.75.75 0 1 1-.576-1.385c.302-.126.615-.231.938-.314a.75.75 0 0 1 .913.54ZM3.185 1.894a.75.75 0 0 1-.016 1.06a5.61 5.61 0 0 0-.95 1.225a.75.75 0 1 1-1.302-.744a7.025 7.025 0 0 1 1.208-1.557a.75.75 0 0 1 1.06.016M.916 5.28a.75.75 0 0 1 .638.847a5.554 5.554 0 0 0-.054.775a.75.75 0 0 1-1.5 0c0-.333.023-.662.069-.984a.75.75 0 0 1 .847-.638M4.5 8.882V5.118a1 1 0 0 1 1.447-.894l3.764 1.882a1 1 0 0 1 0 1.788L5.947 9.776A1 1 0 0 1 4.5 8.882"></path>
                    </g>
                </svg>
            ),
            onclick: ""
        }, {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
                     strokeLinecap="round" strokeLinejoin="round" className="sm:w-5 w-4 sm:h-5 h-4">
                    <g>
                        <path d="M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6Z"></path>
                        <circle cx="8.5" cy="8.5" r="2.5"></circle>
                        <path d="M14.526 12.621L6 22h12.133A3.867 3.867 0 0 0 22 18.133V18c0-.466-.175-.645-.49-.99l-4.03-4.395a2 2 0 0 0-2.954.006Z"></path>
                    </g>
                </svg>
            ),
            onclick: "",
        },
    ]

    return (
        <div>
            <div className="w-full flex flex-col relative">
                <div className="w-full rounded-xl shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] bg-white cursor-not-allowed overflow-hidden relative">
                    <div className="px-[16px] pt-[12px] pb-[10px] flex flex-wrap items-center opacity-50 relative">
                        <div className="w-full mb-[16px] pb-[12px] border-b border-solid border-zinc-200 relative">
                            <div className="before:w-[3px] before:h-[90%] before:top-[-5px] before:left-[-16px] before:rounded-md before:bg-lime-500 before:absolute">
                                <span className="block text-[16px] text-black text-left font-medium break-words leading-5">
                                    <span className="overflow-hidden relative">
                                        Create Post
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className="w-full flex flex-row flex-shrink items-start grow">
                            <div className="mr-[8px] flex bg-transparent relative">
                                <div className="inline-block align-bottom relative">
                                    <div className="w-[40px] h-[40px] rounded-full overflow-hidden relative">
                                        <i>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                            </svg>
                                        </i>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[80px] px-[12px] py-[8px] flex flex-row grow items-start justify-start outline-none bg-zinc-100 rounded-xl relative">
                                <div className="text-[17px] text-zinc-500 hyphens-auto break-words leading-6">
                                    <span className="overflow-hidden line-clamp-2 relative">
                                        Share some what you are thinking?
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full min-h-[20px] mt-[6px] pt-[4px] flex flex-wrap justify-between overflow-hidden relative">
                            <div className="flex flex-row flex-shrink items-center justify-center relative">
                                {createPostOptionItemList.map((value, index) => (
                                    <CreatePostOptionItem key={index} createPostItemData={value} cursorNotAllow={true}/>
                                ))}
                            </div>
                            <div className="flex flex-row flex-shrink-0 items-center justify-center relative">
                                <div className="mr-[16px]">
                                    <div className="sm:px-[12px] px-[10px] sm:py-[4px] py-0 rounded-full outline outline-solid outline-lime-700 text-lime-700">
                                        <span className="block text-[12px] text-center font-medium break-words leading-5">
                                            <span className="overflow-hidden relative">
                                                Preview
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateGroupReviewCreatePost;