import Link from "next/link";
import Image from "next/image";

import Favicon from "/public/images/Metadata/favicon.ico";

const HeaderLogo = ({ isLogoShowed }) => {
    return (
        <div>
            <div className={`${isLogoShowed ? "hidden" : "flex"} h-full flex-row relative items-center z-0 ml-[16px]`}>
                <Link href="/" className="w-full h-full flex flex-col items-center justify-center relative">
                    <div className="w-[40px] h-[40px] relative">
                        <Image src={Favicon} alt="logo-image" fill={true} sizes="(max-width: 768px) 100vw" className="object-contain"/>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default HeaderLogo;