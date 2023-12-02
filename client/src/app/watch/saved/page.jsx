import {fakeUserData, fakeVideoListData} from "@/constants";
import {AsideScaffold, Header, VideoScaffold} from "@/components";

const MovieSavedPage = ({videoProps}) => {
    return (
        <div>
            <Header navigationProps="video" userProps={fakeUserData}/>
            <div className="flex flex-col relative z-0 ">
                <div className="top-[56px] min-h-[calc(100vh-88px)] flex flex-col relative">
                    <div className="min-h-[inherit] mb-[calc(-100vh-56px)] flex flex-col flex-shrink-0 items-stretch justify-start relative">
                        <div className="min-w-[900px] min-h-[inherit] flex flex-row flex-nowrap flex-shrink-0 grow items-stretch justify-start relative">
                            <div className="w-[320px] min-h-[inherit] flex flex-col flex-nowrap flex-shrink-0 items-stretch justify-center relative">
                                <div className="min-h-[inherit] flex flex-row flex-shrink flex-nowrap grow items-start justify-between basis-0 relative">
                                    <AsideScaffold asideTitle="Video" userProps={fakeUserData} asideWatch={true} navigationProps="saved_video"/>
                                </div>
                            </div>
                            <div className="w-full min-h-[inherit] flex flex-col flex-shrink grow basis-0 relative">
                                <VideoScaffold videoProps={fakeVideoListData}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieSavedPage;