import Link from "next/link";
import Image from "next/image";

import { MediumFollowButton } from "@/components";

const RecognizedOrganizationsItem = ({ organizationProps }) => {
    return (
        <div>
            <div className="py-[4px] flex flex-col flex-shrink-0 relative">
                <div className="px-[16px]">
                    <div className="min-h-[44px] flex flex-row items-center justify-between relative">
                        <div className="py-[6px] pr-[12px] flex flex-col self-start relative">
                            <Link href={organizationProps?.profile?._id}>
                                <div className="w-[60px] h-[60px] flex items-center justify-center rounded-xl overflow-hidden hover:bg-black/20 relative">
                                    <Image src={organizationProps?.profile?.profile_picture_url} alt={`${organizationProps?.profile?.profile_picture_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                                </div>
                            </Link>
                        </div>
                        <div className="w-full flex flex-row flex-shrink items-center justify-between relative">
                            <div className="my-[-6px] py-[8px] flex flex-row flex-shrink grow basis-0 items-center justify-between relative">
                                <div className="w-full py-[6px] pr-[16px] flex flex-shrink grow basis-1/2 relative">
                                    <div className="my-[-5px] flex flex-col relative">
                                        <div className="my-[5px] flex flex-row items-center justify-start gap-2 relative">
                                            <span className="block text-[14px] text-black text-left font-normal break-words relative leading-3">
                                                <Link href={organizationProps?.profile?._id}>
                                                    { organizationProps?.profile?.organization_name }
                                                </Link>
                                            </span>
                                            <span>
                                                <div className="w-[12px] h-[12px] flex items-center justify-center relative">
                                                    <i>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" className="w-3 h-3">
                                                            <path fill="#84CC16" fillRule="evenodd" d="M7.252.066a.5.5 0 0 1 .496 0l7 4A.5.5 0 0 1 15 4.5v.72a10.15 10.15 0 0 1-7.363 9.76a.5.5 0 0 1-.274 0A10.152 10.152 0 0 1 0 5.22V4.5a.5.5 0 0 1 .252-.434l7-4Zm-.18 10.645l4.318-5.399l-.78-.624l-3.682 4.601L4.32 7.116l-.64.768l3.392 2.827Z" clipRule="evenodd"></path>
                                                        </svg>
                                                    </i>
                                                </div>
                                            </span>
                                        </div>
                                        <div className="my-[5px]">
                                            <span className="block text-[14px] text-zinc-500 text-left font-normal break-words relative leading-3">
                                                { organizationProps?.profile?.organization_description }
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="max-w-[150px] flex flex-shrink-0 items-center justify-center relative">
                                    <MediumFollowButton/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default RecognizedOrganizationsItem;