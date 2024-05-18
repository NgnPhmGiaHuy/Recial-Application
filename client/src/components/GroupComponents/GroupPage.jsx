import { shallowEqual, useSelector } from "react-redux";
import { GroupPageContent, GroupPageContentBlock, GroupPageHeader, GroupPageNavigation } from "@/components";

const GroupPage = () => {
    const groupProps = useSelector(state => state.group, shallowEqual);

    return (
        <div className="min-h-[calc(100vh-56px)] mb-[calc(-100vh+56px)] top-[56px] flex flex-col relative">
            <div className="min-h-full flex flex-col grow relative">
                <div className="max-w-full min-w-[cacl(100%-360px)] min-h-[inherit] w-[cacl(100%-360px) flex flex-shrink-0 grow relative">
                    <div className="min-h-[inherit] flex flex-col grow relative">
                        <div>
                            <GroupPageHeader/>
                        </div>
                        <GroupPageNavigation/>
                        { (groupProps?.profile?.group_privacy === "Public" || groupProps?.currentUserRole) ? (
                            <GroupPageContent/>
                        ) : (
                            <GroupPageContentBlock/>
                        ) }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GroupPage;