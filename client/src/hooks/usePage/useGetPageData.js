import { useCheckUserPageRole, useGetPageDataFetcher, useGetPagePostData } from "@/hooks";

import { setPageData, setPageFollowData, setPageLikeData } from "@/store/actions/page/pageActions";

const useGetPageData = (pageId) => {
    useGetPagePostData(pageId);
    useCheckUserPageRole(pageId);

    useGetPageDataFetcher(pageId, "profile", setPageData);
    useGetPageDataFetcher(pageId, "like", setPageLikeData);
    useGetPageDataFetcher(pageId, "follow", setPageFollowData);
}

export default useGetPageData;