import Link from "next/link";

import { AsideScaffoldGroupItem, AsideScaffoldGroupNavigation } from "@/components";
import { useFilterUserGroupsByRole, useGetGroupDataAfterFilterUserRole } from "@/hooks";

const AsideScaffoldGroup = () => {
    const { managedGroups, joinedGroups } = useFilterUserGroupsByRole();
    const { managedGroupsProps, joinedGroupsProps } = useGetGroupDataAfterFilterUserRole(managedGroups, joinedGroups);

    return (
        <div className="max-w-[360px] flex flex-col flex-shrink grow basis-full relative">
            <div className="flex flex-col grow relative">
                <section>
                    <AsideScaffoldGroupNavigation/>
                </section>
                <div className="my-[12px] mx-[8px] border-b border-solid border-zinc-200"></div>
                <section>
                    <div className="m-[-6px] px-[16px] py-[12px] flex flex-row flex-shrink-0 flex-nowrap items-stretch justify-between">
                        <div className="p-[6px] flex flex-col flex-shrink-0 relative">
                            <span className="block text-[17px] text-black text-left font-semibold break-words relative leading-5">
                                <span className="overflow-hidden relative">
                                    (Groups you manage)
                                </span>
                            </span>
                        </div>
                    </div>
                    { managedGroupsProps?.map((value, index) => (
                        <AsideScaffoldGroupItem key={index} groupProps={value}/>
                    )) }
                </section>
                <div className="my-[12px] mx-[8px] border-b border-solid border-zinc-200"></div>
                <section>
                    <div className="m-[-6px] px-[16px] py-[12px] flex flex-row flex-shrink-0 flex-nowrap items-stretch justify-between">
                        <div className="p-[6px] flex flex-col flex-shrink-0 relative">
                            <span className="block text-[17px] text-black text-left font-semibold break-words relative leading-5">
                                Groups you've joined
                            </span>
                        </div>
                        <div className="ml-[8px] p-[8px] flex flex-col flex-shrink-0 relative">
                            <Link href="">
                                <span className="block text-[15px] text-lime-500 text-left font-normal break-words relative leading-5 hover:text-lime-700 transition-all">
                                    See all
                                </span>
                            </Link>
                        </div>
                    </div>
                    { joinedGroupsProps?.map((value, index) => (
                        <AsideScaffoldGroupItem key={index} groupProps={value}/>
                    )) }
                </section>
            </div>
        </div>
    );
};

export default AsideScaffoldGroup;