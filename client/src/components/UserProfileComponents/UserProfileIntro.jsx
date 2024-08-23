import { UserProfileIntroItem } from "@/components";

const UserProfileIntro = ({ userProps }) => {
    return (
        <section className="mb-[16px] flex flex-col bg-white rounded-xl shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] relative overflow-hidden">
            <div className="pt-[20px] pb-[4px] flex flex-col relative">
                <div className="px-[16px] flex flex-col flex-shrink-0 relative">
                    <div className="flex flex-col flex-shrink grow basis-0 relative">
                        <div className="before:w-[3px] before:h-full before:left-[-16px] before:rounded-md before:bg-lime-500 before:absolute">
                            <span className="text-[20px] text-black font-bold break-words relative leading-6">
                                Intro
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-[28px]">
                <div className="m-[-6px] px-[16px] pt-[16px] flex flex-nowrap items-stretch justify-between relative">
                    <div className="p-[6px] flex flex-col flex-shrink grow basis-0 relative">
                        <ul>
                            <UserProfileIntroItem userProps={userProps}/>
                        </ul>
                    </div>
                </div>
                <div className="m-[-6px] px-[16px] pt-[16px] flex flex-nowrap items-stretch justify-between relative">
                    <div className="p-[6px] flex flex-col flex-shrink grow basis-0 relative">
                        <div className="h-[36px] px-[12px] flex flex-row flex-nowrap items-center justify-center cursor-pointer rounded-lg bg-zinc-200 relative hover:bg-zinc-300 transition-all">
                            <span className="text-[14px] text-black text-left font-semibold break-words relative leading-4">
                                Edit details
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserProfileIntro;