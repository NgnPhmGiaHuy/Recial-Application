import { useGetGroupFeedPostData } from "@/hooks";

const useGetGroupFeedData = (user) => {
    const { postRef, groupPostProps, setGroupPostProps } = useGetGroupFeedPostData(user);

    return { postRef, groupPostProps, setGroupPostProps };
}

export default useGetGroupFeedData;