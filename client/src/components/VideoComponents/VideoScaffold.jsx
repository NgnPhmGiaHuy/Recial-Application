import dynamic from 'next/dynamic';

import { GlobalMuteProvider } from "@/components/ProviderComponents/GlobalMuteProvider";
const DynamicVideoScaffoldItem = dynamic(() => import("@/components/VideoComponents/VideoScaffoldItem"), { ssr: false });

const VideoScaffold = ({videoProps}) => {
    return (
        <GlobalMuteProvider>
            <section className="mt-[16px] mr-[24px] min-h-screen flex flex-col rounded-md bg-white shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] overflow-x-hidden relative no-scrollbar">
                <main className="flex flex-col grow rounded-md order-4">
                    <div className="h-screen pt-[32px] scroll-pt-8 snap-y snap-mandatory overscroll-y-auto">
                        <div className="flex flex-col gap-[32px]">
                            {videoProps.map((value, index) => (
                                <DynamicVideoScaffoldItem key={index} autoPlay={index === 0} videoProps={value}/>
                            ))}
                        </div>
                    </div>
                </main>
            </section>
        </GlobalMuteProvider>
    );
};

export default VideoScaffold;
