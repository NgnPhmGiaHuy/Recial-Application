import {useTokenRefresh} from "@/hooks";
import {fakeVideoItemData} from "@/constants";
import {MediaPageScaffold} from "@/components";

const VideoPage = ({videoProps}) => {
    useTokenRefresh();

    return (
        <div className="relative">
            <MediaPageScaffold videoProps={fakeVideoItemData}/>
        </div>
    );
};

export default VideoPage;