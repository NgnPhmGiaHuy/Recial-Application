import { useGetUserDataFetcher } from "@/hooks";
import { fetchDataWithAccessToken } from "@/utils";
import { setUserPhotoListData } from "@/store/actions/user/userActions";

const handleDeletePost = async (data, props, setProps) => {
    try {
        const { userId } = data;
        const url = process.env.NEXT_PUBLIC_API_URL + `/api/v1/public/post/?user=${userId}&page=${0}`;

        const newPostData = await fetchDataWithAccessToken(url, "GET");

        await fetchAndSetUserPhoto();

        return setProps(newPostData);
    } catch (error) {
        return console.error(error);
    }
}

const handleCreateNewPost = async (data, props, setProps) => {
    try {
        const { postId } = data;

        const url = process.env.NEXT_PUBLIC_API_URL + `/api/v1/public/post/post/?post=${postId}`;

        const newPostProps = await fetchDataWithAccessToken(url, "GET");

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

