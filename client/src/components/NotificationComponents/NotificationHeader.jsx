import { setUserNotificationData } from "@/store/actions/user/userActions";
import { useGetUserDataFetcher, useNotificationAnimation, useNotificationState } from "@/hooks";
import { SmallTypeButton, NotificationHeaderQuickSetting, NotificationHeaderContent, NotificationTitle, LoadingComponent } from "@/components";

const NotificationHeader = ({ forwardedRef }) => {
    const { isLoading } = useGetUserDataFetcher("notification", setUserNotificationData);

    const { showTypeNotification, handleTypeClick, filteredNotifications } = useNotificationState();
    const { noticeRef, noticeQuickSettingRef, showNoticeQuickSetting, noticeTranslateXValue, noticeQuickSettingTranslateYValue, handleNoticeQuickSettingButton } = useNotificationAnimation()

    return (
        <div ref={forwardedRef} className="absolute top-0 left-0 sm:translate-x-[-172px] translate-x-[-160px] translate-y-[48px]">
            <div ref={noticeRef} className="mt-[5px] mr-[8px] animate-slideInTop">
                <div className="overflow-hidden rounded-xl bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                    <div className="sm:w-[360px] w-[300px] sm:max-h-[calc(100vh-56px-16px)] max-h-[calc(80vh-56px-16px)] flex flex-col">
                        <div className="flex flex-col flex-shrink grow overflow-x-hidden overflow-y-auto overscroll-y-contain no-scrollbar basis-full relative">
                            <div className="flex flex-col grow relative">
                                <NotificationTitle forwardRef={noticeQuickSettingRef} handleOnclick={handleNoticeQuickSettingButton}/>
                                <div>
                                    <div className="mb-[12px] pl-[16px] flex flex-row flex-wrap">
                                        <SmallTypeButton type="all" showType={showTypeNotification} onClick={handleTypeClick}/>
                                        <SmallTypeButton type="unread" showType={showTypeNotification} onClick={handleTypeClick}/>
                                    </div>
                                    <div className="mt-[-12px] mb-[20px] flex flex-col">
                                        { isLoading ? (
                                            <LoadingComponent/>
                                        ) : (
                                            <>
                                                { filteredNotifications?.newNotifications?.length ? (
                                                    <NotificationHeaderContent title="News" props={filteredNotifications?.newNotifications} hasNews={false}/>
                                                ) : null }
                                                { filteredNotifications?.otherNotifications?.length ? (
                                                    <NotificationHeaderContent title="Before" props={filteredNotifications?.otherNotifications} hasNews={filteredNotifications?.newNotifications.length}/>
                                                ) : null }
                                            </>
                                        ) }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                { showNoticeQuickSetting && (
                    <NotificationHeaderQuickSetting noticeQuickSettingRef={noticeQuickSettingRef} noticeTranslateXValue={noticeTranslateXValue} noticeQuickSettingTranslateYValue={noticeQuickSettingTranslateYValue}/>
                ) }
            </div>
        </div>
    );
};

export default NotificationHeader;