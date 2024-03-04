import Image from "next/image";

import Favicon from "/public/images/Metadata/favicon.ico";

const PageScaffoldAsideSecurityCard = () => {
    return (
        <section className="w-full h-full">
            <div className="my-[12px] flex flex-col bg-white rounded-xl shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] relative overflow-hidden">
                <div className="pt-[20px] pb-[4px] flex flex-col relative">
                    <div className="px-[16px] flex flex-col flex-shrink-0 relative">
                        <div className="flex flex-col flex-shrink grow basis-0 relative">
                            <div className="before:w-[3px] before:h-full before:left-[-16px] before:rounded-md before:bg-lime-500 before:absolute flex flex-row items-center gap-2 relative">
                                <div>
                                    <div className="w-[24px] h-[24px] flex items-center justify-center relative">
                                        <Image src={Favicon} alt={`${Favicon}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                                    </div>
                                </div>
                                <div>
                                    <span className="text-[20px] text-black font-bold break-words relative leading-6">
                                        <span className="overflow-hidden relative">
                                            Security
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-[8px]">
                    <div className="p-[16px] flex flex-col flex-shrink grow basis-0 relative">
                        <div>
                            <span className="block text-[12px] text-zinc-700 text-left font-normal break-words relative leading-5">
                                <span className="overflow-hidden relative">
                                    Idem iste, inquam, de voluptate quid sentit? Re mihi non aeque satisfacit, et quidem locis pluribus. Consequens enim est et post oritur, ut dixi
                                </span>
                            </span>
                        </div>
                        <div className="mt-[16px]">
                            <div className="flex flex-row items-center justify-start gap-2 text-zinc-500 relative">
                                <div className="w-[16px] h-[16px] flex items-center justify-center relative">
                                    <i>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"/>
                                        </svg>
                                    </i>
                                </div>
                                <div>
                                    <span className="block text-[12px] text-left font-normal break-words relative leading-5">
                                        <span className="overflow-hidden relative">
                                            Page created on May 6th 2019
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PageScaffoldAsideSecurityCard;