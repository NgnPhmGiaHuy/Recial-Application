import { useGetUserDataFetcher } from "@/hooks";
import { setUserPhotoListData } from "@/store/actions/user/userActions";
import { getPostDataByUserId, getPostDataByPostId } from "@/app/api/fetchPostDataById";

const handleDeletePost = async (data, props, setProps) => {
    try {
        const { userId } = data;

        const newPostData = await getPostDataByUserId({ userId, page: 0 });

        await fetchAndSetUserPhoto();

        return setProps(newPostData);
    } catch (error) {
        return console.error(error);
    }
}

const handleCreateNewPost = async (data, props, setProps) => {
    try {
        const { postId } = data;

        const newPostProps = await getPostDataByPostId(postId);

        if (newPostProps && newPostProps.photo) {
            await fetchAndSetUserPhoto();
        }

        return setProps(prevProps => [newPostProps, ...prevProps]);
    } catch (error) {
        return console.error(error);
    }
};


const fetchAndSetUserPhoto = async () => {
    return useGetUserDataFetcher("photo-list", setUserPhotoListData);
};

export const handleNewPostData = async (data, props, setProps) => {
    if (data.type === "create_new_post") {
        await handleCreateNewPost(data, props, setProps);
    }

    if (data.type === "delete_post") {
        await handleDeletePost(data, props, setProps);
    }

};

