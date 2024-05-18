import { useGetMediaFetcher } from "@/hooks";
import { clearMediaData, setMediaAuthor, setMediaComment, setMediaData, setMediaReaction } from "@/store/actions/media/mediaActions";

const useStoryData = (user, story) => {
    const mediaProps = useGetMediaFetcher(`story/?story_id=${story}`, setMediaData);
    const mediaAuthorProps = useGetMediaFetcher(`story/author/?user_id=${user}`, setMediaAuthor);
    const mediaCommentProps = useGetMediaFetcher(`story/comment/?story_id=${story}`, setMediaComment);
    const mediaReactionProps = useGetMediaFetcher(`story/reaction/?story_id=${story}`, setMediaReaction);

    return { mediaProps, mediaAuthorProps, mediaCommentProps, mediaReactionProps }
}

export default useStoryData;