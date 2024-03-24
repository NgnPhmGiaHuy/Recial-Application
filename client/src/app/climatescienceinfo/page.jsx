"use client"

import { useUserData, useWithAuth } from "@/hooks";
import { ClimateSciencePage, Header, LoadingPageComponent } from "@/components";

const ClimateScienceInfoPage = () => {
    const { userProps } = useUserData();

    return (
        <>
            { userProps ? (
                <div>
                    <Header/>
                    <div className="flex flex-col relative z-0 ">
                        <ClimateSciencePage/>
                    </div>
                </div>
            ) : (
                <LoadingPageComponent/>
            ) }
        </>
    );
};

export default useWithAuth(ClimateScienceInfoPage);