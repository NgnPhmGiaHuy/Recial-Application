import {UserProfileIntro, UserProfileScaffold} from "@/components";

const AsideUser = ({userProps}) => {
    return (
        <div className="my-[16px] ml-[12px] max-w-[360px] min-w-[280px] max-h-0 min-h-[inherit] basis-[360px] rounded-md">
            <div className="max-h-[inherit] min-h-[inherit] flex flex-col relative">
                <div className="flex flex-col min-h-0 flex-shrink grow basis-full relative">
                    <div className="flex flex-col grow relative">
                        <div>
                            <UserProfileIntro userProps={userProps}/>
                        </div>
                        <div>
                            <UserProfileScaffold userProps={userProps.photos_list} isPhotoList={true}/>
                        </div>
                        <div>
                            <UserProfileScaffold userProps={userProps.friends_list} isFriendList={true}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AsideUser;