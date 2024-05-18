import { useGetMediaFetcher } from "@/hooks";
import { clearMediaData, setMediaAuthor, setMediaComment, setMediaData, setMediaReaction } from "@/store/actions/media/mediaActions";

const usePhotoData = (user, photo) => {
    const mediaProps = useGetMediaFetcher(`photo/?photo_id=${photo}`, setMediaData);
    const mediaAuthorProps = useGetMediaFetcher(`photo/author/?user_id=${user}`, setMediaAuthor);
    const mediaCommentProps = useGetMediaFetcher(`photo/comment/?photo_id=${photo}`, setMediaComment);
    const mediaReactionProps = useGetMediaFetcher(`photo/reaction/?photo_id=${photo}`, setMediaReaction);

    return { mediaProps, mediaAuthorProps, mediaCommentProps, mediaReactionProps }
}

export default usePhotoData;