import useCheckAccessToken from "@/hooks/useAuth/useCheckAccessToken";
import useDecodeToken from "@/hooks/useAuth/useDecodeToken";
import useLogout from "@/hooks/useAuth/useLogout";
import useTokenRefresh from "@/hooks/useAuth/useTokenRefresh";
import useWithAuth from "@/hooks/useAuth/useWithAuth";

import { useCommentData } from "@/hooks/useComment/useCommentData";
import { useCommentMediaData } from "@/hooks/useComment/useCommentData";

import { useEventData } from "@/hooks/useEvent/useEventData";

import useClickOutside from "@/hooks/useFunction/useClickOutside";
import useContentEditable from "@/hooks/useFunction/useContentEditable";
import useCountComment from "@/hooks/useFunction/useCountComment";
import useCountLikeReaction from "@/hooks/useFunction/useCountLikeReaction";
import useDateOfBirth from "@/hooks/useFunction/useDateOfBirth";
import useFetchAndScroll from "@/hooks/useFunction/useFetchAndScroll";
import useFilteredNotification from "@/hooks/useFunction/useFilteredNotification";
import { useSingleImageData } from "@/hooks/useFunction/useImageData";
import { useMultipleImagesData } from "@/hooks/useFunction/useImageData";
import useMostReactedIcons from "@/hooks/useFunction/useMostReactedIcons";
import useMultipleHandleState from "@/hooks/useFunction/useMultipleHandleState";
import useMultipleRefs from "@/hooks/useFunction/useMultipleRefs";
import useOverflowText from "@/hooks/useFunction/useOverflowText";
import useSliderScroll from "@/hooks/useFunction/useSliderScroll";
import useToggleState from "@/hooks/useFunction/useToggleState";
import useWeatherData from "@/hooks/useFunction/useWeatherData";
import useWeatherForecast from "@/hooks/useFunction/useWeatherForecast";

import useGroupCreateAction from "@/hooks/useGroup/useGroupCreateAction";
import { useGroupData } from "@/hooks/useGroup/useGroupData";
import { useFilterUserGroupsByRole } from "@/hooks/useGroup/useGroupData";

import useHeaderAction from "@/hooks/useHeader/useHeaderAction";

import useMediaData from "@/hooks/useMedia/useMediaData";
import useMediaNavigation from "@/hooks/useMedia/useMediaNavigation";
import useMediaPageFunctionality from "@/hooks/useMedia/useMediaPageFunctionality";
import { useStoryData } from "@/hooks/useMedia/useStoryData";
import { useStoryControls } from "@/hooks/useMedia/useStoryData";

import { usePageData } from "@/hooks/usePage/usePageData";

import useNotificationHeaderAction from "@/hooks/useNotification/useNotificationHeaderAction";
import useNotificationHeaderItemAction from "@/hooks/useNotification/useNotificationHeaderItemAction";

import { useGetPostData } from "@/hooks/usePost/usePostData";
import { useSetPostData } from "@/hooks/usePost/usePostData";
import { usePostItemData } from "@/hooks/usePost/usePostItemData";
import usePostDataByUserId from "@/hooks/usePost/usePostDataById";

import useRoleData from "@/hooks/useRole/useRoleData";

import { useSuggestEventData, useSuggestGroupData, useSuggestPageData } from "@/hooks/useSuggest/useSuggestData";

import { useUserData } from "@/hooks/useUser/useUserData";
import useUpdateUserProfile from "@/hooks/useUser/useUpdateUserProfile";
import useUserIdLayout from "@/hooks/useUser/useUserIdLayout";
import useUserProfileActions from "@/hooks/useUser/useUserProfileActions";

import useWebSocket from "@/hooks/useWebSocket";

export {
    useCheckAccessToken, useDecodeToken, useLogout, useTokenRefresh, useWithAuth,

    useCommentData, useCommentMediaData,

    useEventData,

    useClickOutside, useContentEditable, useCountComment, useCountLikeReaction, useDateOfBirth, useFetchAndScroll, useFilteredNotification, useSingleImageData, useMultipleImagesData, useMostReactedIcons, useMultipleHandleState, useMultipleRefs, useOverflowText, useSliderScroll, useToggleState, useWeatherData, useWeatherForecast,

    useGroupCreateAction, useGroupData, useFilterUserGroupsByRole,

    useHeaderAction,

    useMediaData, useMediaNavigation, useMediaPageFunctionality, useStoryData, useStoryControls,

    usePageData,

    useNotificationHeaderAction, useNotificationHeaderItemAction,

    useGetPostData, useSetPostData, usePostItemData, usePostDataByUserId,

    useRoleData,

    useSuggestEventData, useSuggestGroupData, useSuggestPageData,

    useUserData, useUserIdLayout, useUpdateUserProfile, useUserProfileActions,

    useWebSocket,
}