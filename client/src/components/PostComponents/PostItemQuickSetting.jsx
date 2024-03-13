import { QuickSettingItem } from "@/components";

import POST_ITEM_QUICK_SETTING from "@/constants/PostConstants/PostItemQuickSettingConstants";

const PostItemQuickSetting = ({ props, postQuickSettingButtonRef, translateX, translateY }) => {
    const postItemQuickSettingList = POST_ITEM_QUICK_SETTING(props)

    return (
        <div ref={postQuickSettingButtonRef} className="absolute top-0 left-0 translate-x-[400px] translate-y-[50px] z-50" style={{"--tw-translate-x": `${translateX.postItemTranslateXValue}px`}}>
            <div className="relative mt-[15px] rounded-l-md rounded-r-md shadow-[rgba(0,_0,_0,_0.24)_4px_7px_50px_1px]">
                <div className="overflow-hidden rounded-l-md rounded-r-md bg-white">
                    <div className="flex flex-col grow items-stretch origin-top-left relative">
                        <div className="w-[344px] py-[8px] overflow-x-hidden overflow-y-auto overscroll-y-contain flex flex-col relative">
                            <div className="flex flex-col grow relative">
                                {postItemQuickSettingList.map((value, index) => (
                                    <QuickSettingItem key={index} settingProps={value}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <svg height="12" viewBox="0 0 21 12" width="21" className="absolute right-0 bottom-[calc(100%-1)] scale-x-[-1] scale-y-[-1] translate-x-[-60px]" style={{"--tw-translate-y": `${translateY.postItemQuickSettingTranslateYValue + 5}px`}} fill="white">
                    <path d="M20.685.12c-2.229.424-4.278 1.914-6.181 3.403L5.4 10.94c-2.026 2.291-5.434.62-5.4-2.648V.12h20.684z"></path>
                </svg>
            </div>
        </div>
    );
};

export default PostItemQuickSetting;