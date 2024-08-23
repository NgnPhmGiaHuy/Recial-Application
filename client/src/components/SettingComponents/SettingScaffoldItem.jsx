import Link from "next/link";

import { ArrowRightIcon } from "@/components";

const SettingScaffoldItem = ({ settingProps, isBorderBottom }) => {
    return (
        <li className={`${isBorderBottom && "after:w-full after:border-b after:border-solid after:border-zinc-200 after:absolute"}`}>
            <Link href={settingProps.link}>
                <section className="px-[24px] py-[16px] flex bg-white">
                    <div className="flex flex-1">
                        <div className="flex-[1_1_auto]">
                            <span className="text-[16px] text-black text-left font-normal break-words relative leading-5">
                                <span className="overflow-hidden relative">
                                    { settingProps.title }
                                </span>
                            </span>
                        </div>
                        { settingProps.itemProps && (
                            <div className="pl-[16px] flex-[1_1_auto]">
                                <span className="block text-[16px] text-zinc-500 self-center text-right text-ellipsis whitespace-nowrap overflow-hidden">
                                    { settingProps.itemProps }
                                </span>
                            </div>
                        ) }
                    </div>
                    <div className="h-[18px] pl-[16px] flex flex-[0_0_16px] items-center justify-end self-center">
                        <ArrowRightIcon fill="none" stroke="currentColor" strokeWidth={2} width={16} height={16} />
                    </div>
                </section>
            </Link>
        </li>
    );
};

export default SettingScaffoldItem;