import Link from "next/link";
import Image from "next/image";
import { shallowEqual, useSelector } from "react-redux";

const GroupPageHeaderCover = () => {
    const groupProps = useSelector(state => state.group, shallowEqual);

    return (
        <div className="flex flex-row flex-nowrap items-stretch justify-center bg-white relative">
            <div className="flex flex-col flex-shrink grow relative">
                <div className="w-full h-full relative">
                    <div className="flex flex-row flex-nowrap items-stretch justify-center relative">
                        <div className="inset-0 overflow-hidden absolute">
                            <div className="w-full h-0 top-0 left-[50%] pt-[50%] -translate-x-1/2 opacity-10 blur-lg absolute">
                                <div className="inset-0 flex flex-col absolute">
                                    <div className="w-full h-full relative">
                                        <Image src={groupProps?.profile?.group_cover_picture_url} alt={`${groupProps?.profile?.group_cover_picture_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="max-w-[1360px] flex flex-col flex-shrink grow items-center justify-center relative z-10">
                            <div className="w-full rounded-xl overflow-hidden relative">
                                <Link href={`/groups/${groupProps?.profile?._id}`}>
                                    <div className="w-full h-0 pt-[40%] overflow-hidden relative">
                                        <div className="inset-0 flex flex-col absolute">
                                            <div className="w-full h-0 top-0 left-[50%] pt-[50%] -translate-x-1/2 -translate-y-[10%] absolute">
                                                <div className="inset-0 flex flex-col absolute">
                                                    <div className="w-full h-full relative">
                                                        <Image src={groupProps?.profile?.group_cover_picture_url} alt={`${groupProps?.profile?.group_cover_picture_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GroupPageHeaderCover;