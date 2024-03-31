"use client"

import { useUserData, useGetPageData, useWithAuth } from "@/hooks";
import { Header, LoadingPageComponent, PageCover, PageScaffold } from "@/components";

const PagePage = ({ params }) => {
    useGetPageData(params.pageId);

    const { userProps } = useUserData();

    return (
        <>
            { userProps ? (
                <div>
                    <Header/>
                    <div>
                        <div className="mx-[160px] flex flex-col relative z-0">
                            <div className="top-[56px] min-h-[calc(100vh-88px)] flex flex-col relative">
                                <div className="min-h-[inherit] mb-[calc(-100vh-56px)] flex flex-col flex-shrink-0 items-stretch justify-start relative">
                                    <div className="min-h-[inherit] flex flex-col grow relative">
                                        <PageCover/>
                                        <div className="min-w-[900px] min-h-[inherit] py-[12px] flex flex-row flex-nowrap flex-shrink-0 grow items-stretch justify-start relative">
                                            <PageScaffold/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <LoadingPageComponent/>
            ) }
        </>
    );
};

export default useWithAuth(PagePage);