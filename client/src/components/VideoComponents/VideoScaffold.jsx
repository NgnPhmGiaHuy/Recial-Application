"use client"

import { useState } from "react";
import { shallowEqual, useSelector } from "react-redux";

import { LoadingComponent, VideoScaffoldItem } from "@/components";

const VideoScaffold = () => {
    const [globalMute, setGlobalMute] = useState(false);
    const watchProps = useSelector(state => state.watch, shallowEqual);

    return (
        <section className="w-full flex flex-col items-center justify-center relative">
            <main className="w-full flex flex-row flex-wrap items-stretch justify-center">
                <div className="w-full flex flex-col items-stretch">
                    <div ref={watchProps?.watch_list?.ref} className="w-full max-h-[calc(-60px+100lvh)] overflow-y-scroll snap-y snap-mandatory z-10">
                        { watchProps?.watch_list?.video_list?.map((value, index) => (
                            <VideoScaffoldItem key={index} autoPlay={index === 0} globalMute={globalMute} setGlobalMute={setGlobalMute} videoProps={value}/>
                        )) }
                    </div>
                    { watchProps?.isLoading && (
                        <LoadingComponent/>
                    ) }
                </div>
            </main>
        </section>
    );
};

export default VideoScaffold;

