import {fakeVideoItemData} from "@/constants";
import {MediaPageScaffold} from "@/components";

const VideoPage = () => {
    return (
        <div className="relative">
            <MediaPageScaffold videoProps={fakeVideoItemData}/>
        </div>
    );
};

export default VideoPage;