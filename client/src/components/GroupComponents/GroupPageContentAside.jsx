import { GroupPageContentAsideAbout } from "@/components";

const GroupPageContentAside = () => {
    return (
        <div className="max-w-[480px] m-[8px] flex flex-shrink grow-[18] basis-[360px] relative z-0">
            <div className="top-[132px] sticky">
                <GroupPageContentAsideAbout/>
                <div>

                </div>
            </div>
        </div>
    );
};

export default GroupPageContentAside;