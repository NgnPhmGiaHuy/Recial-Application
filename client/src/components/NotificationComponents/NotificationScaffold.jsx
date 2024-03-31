import { useNotificationAnimation, useNotificationState } from "@/hooks";
import { SmallTypeButton, NotificationHeaderContent, NotificationHeaderQuickSetting, NotificationTitle } from "@/components";

const NotificationScaffold = () => {
    const { showTypeNotification, handleTypeClick, filteredNotifications } = useNotificationState();
    const { noticeRef, noticeQuickSettingRef, showNoticeQuickSetting, noticeTranslateXValue, noticeQuickSettingTranslateYValue, handleNoticeQuickSettingButton } = useNotificationAnimation();

    return (
        <div ref={noticeRef} className="max-w-full w-[760px] min-h-[inherit] my-[16px] flex flex-col justify-start relative">
            <div className="w-full flex relative">
                <div className="w-full rounded-xl shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] bg-white overflow-hidden relative">
                    <div className="max-w-[cacl(100vw-24px)] min-h-[inherit] flex flex-col">
                        <div className="flex flex-shrink grow overflow-x-hidden overflow-y-auto overscroll-y-contain basis-full relative">
                            <div className="flex flex-col grow relative">
                                <NotificationTitle noticeQuickSettingRef={noticeQuickSettingRef} handleNoticeQuickSettingButton={handleNoticeQuickSettingButton}/>
                                <div>
                                    <div className="mb-[12px] pl-[16px] flex flex-row flex-wrap">
                                        <SmallTypeButton type="all" showType={showTypeNotification} onClick={handleTypeClick} />
                                        <SmallTypeButton type="unread" showType={showTypeNotification} onClick={handleTypeClick} />
                                    </div>
                                    <div className="mt-[-12px] mb-[20px] flex flex-col">
                                        { filteredNotifications?.newNotifications.length ? (
                                            <NotificationHeaderContent title="News" props={filteredNotifications?.newNotifications} hasNews={true}/>
                                        ) : null }
                                        { filteredNotifications?.otherNotifications.length ? (
                                            <NotificationHeaderContent title="Before" props={filteredNotifications?.otherNotifications} hasNews={true}/>
                                        ) : null }
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

export default NotificationScaffold;