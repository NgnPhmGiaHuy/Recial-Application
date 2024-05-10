import { fetchDataWithAccessToken } from "@/utils";

const handleDeletePostData = async (postId, handleState) => {
    try {
        const url = process.env.NEXT_PUBLIC_API_URL + `/api/v1/secure/post/?postId=${postId}`;

        const deletedPost = await fetchDataWithAccessToken(url, "DELETE")

        if (deletedPost && !deletedPost.error) {
            return handleState();
        }
    } catch (error) {
        return console.error(error);
    }
}

export default handleDeletePostData;