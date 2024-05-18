import {fakeVideoItemData} from "@/constants";
import {MediaPageScaffold} from "@/components";

const VideoPage = ({ params }) => {
    const videoId = params.videoId;

    return (
        <div className="relative">
            <MediaPageScaffold videoProps={fakeVideoItemData}/>
        </div>
    );
};

export default VideoPage;