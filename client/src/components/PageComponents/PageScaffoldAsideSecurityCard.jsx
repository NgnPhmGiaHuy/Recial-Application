import { shallowEqual, useSelector } from "react-redux";

import { formatLongDate } from "@/utils";
import { FlagIcon, ImageIcon } from "@/components";

import Favicon from "/public/images/Metadata/favicon.ico";

const PageScaffoldAsideSecurityCard = () => {
    const pageProps = useSelector(state => state.page, shallowEqual);

    return (
        <section className="w-full h-full">
            <div className="my-[12px] flex flex-col bg-white rounded-xl shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] relative overflow-hidden">
                <div className="pt-[20px] pb-[4px] flex flex-col relative">
                    <div className="px-[16px] flex flex-col flex-shrink-0 relative">
                        <div className="flex flex-col flex-shrink grow basis-0 relative">
                            <div className="before:w-[3px] before:h-full before:left-[-16px] before:rounded-md before:bg-lime-500 before:absolute flex flex-row items-center gap-2 relative">
                                <div>
                                    <ImageIcon src={Favicon} width={24} height={24} borderRadius={0} />
                                </div>
                                <div>
                                    <span className="text-[20px] text-black font-bold break-words relative leading-6">
                                        Security
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
                                    <FlagIcon fill="none" stroke="currentColor" width={16} height={16} />
                                </div>
                                <div>
                                    <span className="block text-[12px] text-left font-normal break-words relative leading-5">
                                        <span className="overflow-hidden relative">
                                            Page created on {formatLongDate(pageProps?.profile?.created_at)}
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