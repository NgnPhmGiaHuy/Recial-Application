import Link from "next/link";
import Image from "next/image";

const SuggestGroupMember = ({ groupProps }) => {
    return (
        <div>
            <div className="ml-[14px] my-[12px] flex flex-row items-center relative">
                { groupProps?.members?.slice(0, 4).map((value, index) => (
                    <Link href={value._id} key={index}>
                        <div style={{zIndex: index}} className="w-[40px] h-[40px] ml-[-14px] border-[2px] border-solid border-zinc-100 rounded-full relative cursor-pointer overflow-hidden">
                            <Image src={value.profile?.profile_picture_url} alt={`${value.profile?.profile_picture_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                        </div>
                    </Link>
                )) }
                { groupProps?.members?.length > 4 ? (
                    <div className="w-[40px] h-[40px] ml-[-14px] flex items-center justify-center border-[2px] border-solid border-zinc-100 rounded-full bg-zinc-200 relative cursor-pointer overflow-hidden z-10">
                        <span className="block text-[16px] text-center text-zinc-500 font-bold break-words relative leading-5">
                            <span className="overflow-hidden relative">
                                +{groupProps?.members?.length - 4}
                            </span>
                        </span>
                    </div>
                ) : null}
                <div className="flex flex-col justify-between relative">
                    <span className="block text-[14px] text-center text-zinc-700 font-bold break-words relative leading-5">
                        <span className="overflow-hidden relative">
                            Member apply
                        </span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SuggestGroupMember;