import fetchLoginData from "@/utils/auth/fetchAuthData/fetchLoginData";
import fetchLogoutData from "@/utils/auth/fetchAuthData/fetchLogoutData";
import fetchRegisterData from "@/utils/auth/fetchAuthData/fetchRegisterData";
import fetchTokenRefresh from "@/utils/auth/fetchAuthData/fetchTokenRefresh";
import handleValidateForm from "@/utils/auth/handleValidateForm";
import handleCheckPasswordStrength from "@/utils/auth/handleCheckPasswordStrength";
import handleDecodeToken from "@/utils/auth/handleDecodeToken";
import handleValidEmail from "@/utils/auth/handleValidEmail";

import calculateAttachmentStyles from "@/utils/calculate/calculateAttachmentStyles";
import calculateGridProperties from "@/utils/calculate/calculateGridProperties";
import calculateTimeDifference from "@/utils/calculate/calculateTimeDifference";

import createCommentData from "@/utils/comment/createCommentData/createCommentData";
import createPostComment from "@/utils/comment/createCommentData/createPostComment";
import getCommentData from "@/utils/comment/fetchCommentData/getCommentData";
import updateComment from "@/utils/comment/updateCommentData/updateComment";
import updateNestedComments from "@/utils/comment/updateCommentData/updateNestedComments";

import fetcherWithAccessToken from "@/utils/fetcher/fetcherWithAccessToken";
import fetcherWithoutAccessToken from "@/utils/fetcher/fetcherWithoutAccessToken";

import getGeocodeByCoordinates from "@/utils/geocode/getGeocodeByCoordinates";

import fetchGoogleData from "@/utils/google/fetchGoogleData";

import getGroupPostData from "@/utils/group/getGroupData/getGroupPostData";

import handleMultipleImageFileUpload from "@/utils/image/handleMultipleImageFileUpload";
import handleSingleImageFileUpload from "@/utils/image/handleSingleImageFileUpload";
import handleUploadImage from "@/utils/image/handleUploadImage";

import getMessageData from "@/utils/message/getMessageData";
import shouldDisplayMessageWithTimeStamp from "@/utils/message/shouldDisplayMessageWithTimeStamp";

import handleFormatNumber from "@/utils/number/handleFormatNumber";

import getPagePostDataById from "@/utils/page/getPageData/getPagePostDataById";

import createPostData from "@/utils/post/createPostData/createPostData";
import getPostData from "@/utils/post/fetchPostData/getPostData";
import deletePostData from "@/utils/post/deletePostData/deletePostData";
import handleNewPostData from "@/utils/post/handleNewPostData/handleNewPostData";

import createPostReaction from "@/utils/reaction/createReactionData/createPostReaction";
import createReactionData from "@/utils/reaction/createReactionData/createReactionData";
import getReactionData from "@/utils/reaction/fetchReactionData/getReactionData";
import getPostDataByPostId from "@/utils/post/fetchPostData/getPostDataByPostId";
import getPostDataByUserId from "@/utils/post/fetchPostData/getPostDataByUserId";
import updatePostReaction from "@/utils/reaction/updateReactionData/updatePostReaction";

import extractMonthAndDay from "@/utils/time/extractMonthAndDay";
import formatCurrentFullDate from "@/utils/time/formatCurrentFullDate";
import formatCurrentWeekday from "@/utils/time/formatCurrentWeekday";
import formatDate from "@/utils/time/formatDate";
import formatDateTime from "@/utils/time/formatDateTime";
import formatFullTimeAgo from "@/utils/time/formatFullTimeAgo";
import formatLongDate from "@/utils/time/formatLongDate";
import formatShortTimeAgo from "@/utils/time/formatShortTimeAgo";
import formatTime from "@/utils/time/formatTime";
import formatTime12Hour from "@/utils/time/formatTime12Hour";
import formatTimestampForCover from "@/utils/time/formatTimestampForCover";
import getCurrentAndNextSixDaysOfWeekNames from "@/utils/time/getCurrentAndNextSixDaysOfWeekNames";

import createUserFriendRequest from "@/utils/user/createUserData/createUserFriendRequest";
import fetchUserData from "@/utils/user/fetchUserData/fetchUserData";
import getUserMessageData from "@/utils/user/fetchUserData/getUserMessageData";
import getUserProfileData from "@/utils/user/fetchUserData/getUserProfileData";
import handleNewUserData from "@/utils/user/handleNewUserData/handleNewUserData";
import handleNewUserPostData from "@/utils/user/handleNewUserPostData/handleNewUserPostData";
import handleSetUserProfileData from "@/utils/user/handleSetUser/handleSetUserProfileData";
import setUserProfile from "@/utils/user/setUserData/setUserProfile";
import setUserFriendRequest from "@/utils/user/setUserData/setUserFriendRequest";

import getRandomWeatherIllustration from "@/utils/weather/getRandomWeatherIllustration";
import getWeatherForecastData from "@/utils/weather/getWeatherForecastData";
import interpretWeatherCode from "@/utils/weather/interpretWeatherCode";

export {
    fetchLoginData, fetchLogoutData, fetchRegisterData, fetchTokenRefresh, handleValidateForm, handleCheckPasswordStrength, handleDecodeToken, handleValidEmail,
    calculateAttachmentStyles, calculateGridProperties, calculateTimeDifference,
    createCommentData, createPostComment, getCommentData, updateComment, updateNestedComments,
    fetcherWithAccessToken, fetcherWithoutAccessToken,
    getGeocodeByCoordinates,
    fetchGoogleData,
    getGroupPostData,
    handleMultipleImageFileUpload, handleSingleImageFileUpload, handleUploadImage,
    getMessageData, shouldDisplayMessageWithTimeStamp,
    handleFormatNumber,
    getPagePostDataById,
    createPostData, getPostData, deletePostData, handleNewPostData,
    createPostReaction, createReactionData, getReactionData, getPostDataByPostId, getPostDataByUserId, updatePostReaction,
    extractMonthAndDay, formatCurrentFullDate, formatCurrentWeekday, formatDate, formatDateTime, formatFullTimeAgo, formatLongDate, formatShortTimeAgo, formatTime, formatTime12Hour, formatTimestampForCover, getCurrentAndNextSixDaysOfWeekNames,
    createUserFriendRequest, fetchUserData, getUserMessageData, getUserProfileData, handleNewUserData, handleNewUserPostData, handleSetUserProfileData, setUserProfile, setUserFriendRequest,
    getRandomWeatherIllustration, getWeatherForecastData, interpretWeatherCode,
}