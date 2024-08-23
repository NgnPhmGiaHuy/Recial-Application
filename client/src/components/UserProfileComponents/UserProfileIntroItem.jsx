import Link from "next/link";

import { BriefcaseIcon } from "@/components";

const UserProfileIntroItem = ({ userProps }) => {
    return (
        <li>
            <div className="m-[-6px] flex flex-row flex-nowrap items-stretch justify-start relative">
                <div className="p-[6px] flex flex-col flex-shrink-0 relative">
                    <div className="w-[20px] h-[20px] flex flex-row items-center justify-center overflow-hidden relative">
                        <BriefcaseIcon fill="none" stroke="currentColor" width={20} height={20} />
                    </div>
                </div>
                <div className="p-[6px] flex flex-col flex-shrink grow self-center basis-0 relative">
                    <span className="block text-[14px] text-black text-left font-normal relative break-words leading-5">
                        <span>
                            Live in &nbsp;
                        </span>
                        <Link href="" className="font-semibold hover:underline">
                            {userProps?.user?.location?.city + ", " + userProps?.user?.location?.country}
                        </Link>
                    </span>
                </div>
            </div>
        </li>
    );
};

export default UserProfileIntroItem;