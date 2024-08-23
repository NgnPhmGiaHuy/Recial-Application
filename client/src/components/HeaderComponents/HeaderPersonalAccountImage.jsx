import Link from "next/link";
import Image from "next/image";

import { shallowEqual, useSelector } from "react-redux";

const HeaderPersonalAccountImage = () => {
    const userProps = useSelector(state => state.user, shallowEqual);

    return (
        <>
            <Link href={`/${userProps?.user?._id}`} className="mx-[4px] my-[8px] rounded-xl relative hover:bg-zinc-100 transition-all cursor-pointer">
                <div className="my-[-4px] p-[8px] flex flex-row flex-nowrap items-center justify-between">
                    <div className="p-[4px] flex flex-col flex-shrink-0 items-center justify-center relative">
                        <div className="w-[36px] h-[36px] flex items-center justify-center rounded-lg overflow-hidden relative">
                            <Image src={userProps?.user?.profile?.profile_picture_url} alt={`${userProps?.user?.profile?.profile_picture_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                        </div>
                    </div>
                    <div className="p-[4px] flex flex-col flex-shrink grow relative">
                        <span className="block text-[16px] text-left text-black font-semibold break-words leading-4">
                            { userProps?.user?.profile?.username || userProps?.user?.profile?.firstname + " " + userProps?.user?.profile?.lastname }
                        </span>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default HeaderPersonalAccountImage;