"use client"

import { useUserData, usePageData, useWithAuth } from "@/hooks";
import { Header, PageCover, PageScaffold} from "@/components";

const PagePage = ({ params }) => {
    const { userProps } = useUserData();
    const { postRef, pagePostProps } = usePageData(params.pageId);

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
                                            <PageScaffold postRef={postRef} pagePostProps={pagePostProps}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="w-screen h-screen py-[16px] flex items-center justify-center relative">
                    <div className="w-[120px] h-[120px] inline-block animate-spin rounded-full border-8 border-solid border-current border-e-transparent align-[-0.125em] text-lime-700 motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                            Loading...
                        </span>
                    </div>
                </div>
            ) }
        </>
    );
};

export default useWithAuth(PagePage);