"use client"

import {usePostDataByUserId, useUserData} from "@/hooks";
import { Header, PageCover, PageScaffold } from "@/components";

const PagePage = ({ params }) => {
    const pageId = params.pageId;
    const userId = "65ba81a67acabc248ac5cd7f";

    const { userProps, setUserProps } = useUserData();
    const { postByIdRef, postByUserIdProps, setPostByUserIdProps } = usePostDataByUserId(userId);


    return (
        userProps && (
            <>
                <div>
                    <Header userProps={userProps}/>
                    <div>
                        <div className="mx-[160px] flex flex-col relative z-0">
                            <div className="top-[56px] min-h-[calc(100vh-88px)] flex flex-col relative">
                                <div className="min-h-[inherit] mb-[calc(-100vh-56px)] flex flex-col flex-shrink-0 items-stretch justify-start relative">
                                    <div className="min-h-[inherit] flex flex-col grow relative">
                                        <PageCover userProps={userProps}/>
                                        <div className="min-w-[900px] min-h-[inherit] py-[12px] flex flex-row flex-nowrap flex-shrink-0 grow items-stretch justify-start relative">
                                            <PageScaffold userProps={userProps} postByIdRef={postByIdRef} postByUserIdProps={postByUserIdProps}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    );
};

export default PagePage;