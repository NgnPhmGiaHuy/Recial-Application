import Link from "next/link";
import Image from "next/image";

const UserAboutPhotoScaffoldItem = ({ userProps, mediaProps }) => {
    return (
        <div className="min-w-[200px] max-w-[200px] p-[4px] grow basis-0 overflow-hidden  relative">
            <div className="w-full h-0 pt-[100%] rounded-md shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] relative">
                <div className="top-0 right-0 bottom-0 left-0 flex flex-col items-stretch justify-between absolute">
                    <Link href={`/photo/?user=${userProps?.user?._id}&photo=${mediaProps?._id}`} className="w-full h-full block relative">
                        <div className="w-full h-full rounded-md overflow-hidden relative">
                            <Image src={mediaProps?.photo_url} alt={`${mediaProps?.photo_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default UserAboutPhotoScaffoldItem;