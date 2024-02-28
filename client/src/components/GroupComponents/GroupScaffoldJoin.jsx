import { GroupScaffoldJoinItem } from "@/components";

const GroupScaffoldJoin = ({ userProps }) => {
    return (
        <div className="w-full p-[16px] flex flex-col items-center justify-center relative">
            <div className="w-full m-[-8px] flex flex-row flex-wrap items-stretch justify-center">
                <div className="max-w-[1024px] m-[8px] flex flex-shrink grow-[25] basis-[500px] relative">
                    <div className="w-full flex flex-col items-stretch">
                        <div className="mx-[-16px] pb-[12px]">
                            <div className="pt-[20px] pb-[4px] flex flex-col relative">
                                <div className="px-[16px] flex flex-col relative">
                                    <span className="block text-[17px] text-black text-left font-semibold relative leading-5">
                                        <span className="overflow-hidden relative">
                                            All groups you've joined ({userProps?.group_list?.length})
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="m-[-4px] flex flex-row flex-wrap items-start justify-start gap-1 relative">
                            {userProps?.group_list?.map((value, index) => (
                                <GroupScaffoldJoinItem key={index} groupProps={value}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GroupScaffoldJoin;