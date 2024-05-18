import { useGetMediaFetcher } from "@/hooks";
import { setMediaAuthor, setMediaComment, setMediaData, setMediaReaction, setMediaRecent } from "@/store/actions/media/mediaActions";

const usePostMediaData = (user, post, photo) => {
    const mediaProps = useGetMediaFetcher(`photo/?photo_id=${photo}`, setMediaData);
    const mediaAuthorProps = useGetMediaFetcher(`post/author/?user_id=${user}`, setMediaAuthor);
    const mediaCommentProps = useGetMediaFetcher(`post/comment/?photo_id=${photo}`, setMediaComment);
    const mediaReactionProps = useGetMediaFetcher(`post/reaction/?photo_id=${photo}`, setMediaReaction);
    const mediaPhotoRecentProps = useGetMediaFetcher(`post/recent/?post_id=${post}`, setMediaRecent);

    return { mediaProps, mediaPhotoRecentProps, mediaAuthorProps, mediaCommentProps, mediaReactionProps }
}

export default usePostMediaData;

