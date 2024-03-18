import { useSelector } from "react-redux";

import { CreatePost, PageScaffoldMainNavigationItem, PostPage } from "@/components";

const PageScaffoldMain = ({ postRef, pagePostProps }) => {
    const pageProps = useSelector(state => state.page);

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
            { pageProps?.currentUserRole && (
                <div className="mt-[12px]">
                    <CreatePost/>
                </div>
            ) }
            <main>
                <div className="my-[16px] flex flex-col gap-4 relative">
                    <PostPage postRef={postRef} pagePostProps={pagePostProps}/>
                </div>
            </main>
        </div>
    );
};

export default PageScaffoldMain;