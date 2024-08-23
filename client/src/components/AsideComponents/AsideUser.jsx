import { shallowEqual, useSelector } from "react-redux";

import { UserProfileIntro, UserProfileScaffold } from "@/components";

const AsideUser = () => {
    const { isCurrentUser } = useSelector(state => state.userRelationship, shallowEqual);

    const userProps = isCurrentUser ? useSelector(state => state.user, shallowEqual) : useSelector(state => state.userId, shallowEqual);

    return (
        <div className="my-[16px] ml-[12px] max-w-[360px] min-w-[280px] max-h-0 min-h-[inherit] basis-[360px] rounded-xl">
            <div className="max-h-[inherit] min-h-[inherit] flex flex-col relative">
                <div className="flex flex-col min-h-0 flex-shrink grow basis-full relative">
                    <div className="flex flex-col grow relative">
                        <div>
                            <UserProfileIntro userProps={userProps}/>
                        </div>
                        { userProps?.photo_list && userProps?.photo_list?.length ? (
                            <div>
                                <UserProfileScaffold userProps={userProps} mediaProps={userProps?.photo_list} label="Photos" link="" linkText="See all photos" />
                            </div>
                        ) : null }
                        { userProps?.user?.friends && userProps?.user?.friends.length ? (
                            <div>
                                <UserProfileScaffold userProps={userProps?.user?.friends} label="Friends" link="" linkText="See all friends" />
                            </div>
                        ) : null }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AsideUser;