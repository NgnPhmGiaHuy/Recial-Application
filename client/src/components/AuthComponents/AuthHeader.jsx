import Link from "next/link";
import Image from "next/image";

import Favicon from "/public/images/Metadata/favicon.ico";
import { ArticleIcon, ArticleVideoIcon, UsersSecondOptionIcon } from "@/components";

const AuthHeader = () => {
    return (
        <nav className="max-w-[1280px] m-auto sm:px-[60px] px-[20px] pt-[12px] pb-[16px] flex flex-nowrap items-center justify-between">
            <Link href="" className="mr-auto text-lime-500 font-bold z-50">
                <span className="hidden">Recial</span>
                <div className="w-[34px] h-[34px] relative overflow-hidden ">
                    <Image src={Favicon} alt="logo-image" fill={true} sizes="(max-width: 768px) 100vw" className="object-contain"/>
                </div>
            </Link>
            <ul className="mr-1 sm:flex hidden flex-row items-center justify-center after:!h-[37px] after:w-[1px] after:flex after:items-center after:bg-zinc-500">
                <li>
                    <Link href="" className="w-[64px] h-[52px] mx-[8px] flex flex-col items-center justify-center text-gray-500 hover:text-black transition-all">
                        <ArticleIcon width={28} height={28} />
                        <span className="text-[12px] text-center font-normal leading-normal">Articles</span>
                    </Link>
                </li>
                <li>
                    <Link href="" className="w-[64px] h-[52px] mx-[8px] flex flex-col items-center justify-center text-gray-500 hover:text-black transition-all">
                        <UsersSecondOptionIcon width={28} height={28} />
                        <span className="text-[12px] text-center font-normal leading-normal">People</span>
                    </Link>
                </li>
                <li>
                    <Link href="" className="w-[64px] h-[52px] mx-[8px] flex flex-col items-center justify-center text-gray-500 hover:text-black transition-all">
                        <ArticleVideoIcon width={28} height={28} />
                        <span className="text-[12px] text-center font-normal leading-normal">Learning</span>
                    </Link>
                </li>
            </ul>
            <div className="min-w-[100px] flex flex-nowrap flex-shrink-0 justify-end gap-x-1">
                <Link href="/auth/register" className="min-h-[44px] h-min px-[24px] py-[8px] text-[16px] font-semibold leading-normal text-center text-gray-500 rounded-xl hover:bg-zinc-100 hover:text-gray-700 transition-all duration-500">Join now</Link>
                <Link href="/auth/login" className="min-h-[44px] h-min px-[24px] py-[8px] text-[16px] bg-white border border-solid border-lime-700 font-semibold leading-normal text-center text-lime-700 rounded-xl hover:border-lime-700 hover:text-black hover:bg-lime-100 transition-all duration-300">Sign in</Link>
            </div>
        </nav>
    );
};

export default AuthHeader;