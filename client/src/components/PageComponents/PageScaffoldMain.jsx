import Link from "next/link";

import { PostPage } from "@/components";

const PageScaffoldMainNavigationItem = ({ title, active}) => {
    return (
        <div className={`${active ? "text-lime-500 border-lime-500" : "text-zinc-500 border-zinc-200 hover:border-black hover:text-black"} min-w-[100px] flex flex-col items-center bg-white rounded-xl border border-solid transition-all`}>
            <Link href="" replace={true}>
                <div className="px-[16px] py-[4px] flex flex-row items-center relative transition-all">
                    <span className="text-[16px] text-left font-normal  break-words leading-6 relative">
                        <span className="overflow-hidden relative">
                            {title}
                        </span>
                    </span>
                </div>
            </Link>
        </div>
    )
}

const PageScaffoldMain = ({ userProps, postByIdRef, postByUserIdProps }) => {
    return (
        <div className="w-full min-h-[inherit] mx-[12px] flex flex-col flex-shrink grow basis-0 relative">
            <header>
                <div className="px-[8px] py-[4px] flex flex-col relative rounded-xl bg-white shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] overflow-hidden">
                    <div className="flex items-center justify-center relative">
                        <div className="w-full h-full flex flex-row items-center justify-between relative">
                            <div className="px-[6px]">
                                <span
                                    className="block text-[16px] text-black text-left font-medium break-words relative leading-5">
                                    <span className="overflow-hidden relative">
                                        Posts
                                    </span>
                                </span>
                            </div>
                            <div className="h-[40px] flex items-center justify-center gap-2 cursor-pointer overflow-hidden relative">
                                <PageScaffoldMainNavigationItem title="Recent" active={true}/>
                                <PageScaffoldMainNavigationItem title="Popular" active={false}/>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <div className="my-[16px] flex flex-col gap-4 relative">
                    <PostPage postRef={postByIdRef} userData={userProps} userProps={userProps} isCurrentUser={false} postListProps={postByUserIdProps}/>
                </div>
            </main>
        </div>
    );
};

export default PageScaffoldMain;