import { GroupScaffoldContentAsideAbout } from "@/components";

const GroupScaffoldContentAside = ({ groupProps }) => {
    return (
        <div className="max-w-[680px] m-[8px] flex flex-shrink grow-[18] basis-[360px] relative z-0">
            <div className="top-[132px] sticky">
                <GroupScaffoldContentAsideAbout groupProps={groupProps}/>
                <div>

                </div>
            </div>
        </div>
    );
};

export default GroupScaffoldContentAside;