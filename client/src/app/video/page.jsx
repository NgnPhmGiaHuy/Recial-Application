import {fakeVideoItemData} from "@/constants";
import {VideoPageScaffold} from "@/components";

const VideoPage = ({videoProps}) => {
    return (
        <div className="relative">
            <VideoPageScaffold videoProps={fakeVideoItemData}/>
        </div>
    );
};

export default VideoPage;