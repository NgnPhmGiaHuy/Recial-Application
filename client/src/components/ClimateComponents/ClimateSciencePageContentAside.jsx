import {ClimateSolutionsPhotos, RecognizedOrganizations} from "@/components";

const ClimateSciencePageContentAside = () => {
    return (
        <div>
            <div className="max-w-[680px] min-w-[500px] m-[8px] flex flex-shrink grow-[18] basis-[360px] relative">
                <div className="w-full flex flex-col gap-2 relative">
                    <RecognizedOrganizations/>
                    <ClimateSolutionsPhotos/>
                </div>
            </div>
        </div>
    );
};

export default ClimateSciencePageContentAside;