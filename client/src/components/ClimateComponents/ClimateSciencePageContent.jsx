import { ClimateSciencePageContentAside, ClimateSciencePageContentMain } from "@/components";

const ClimateSciencePageContent = () => {
    return (
        <div className="flex flex-col grow relative">
            <div className="pb-[8px] w-full flex flex-col items-center relative">
                <div className="w-[1320px] px-[16px] pt-[16px] relative">
                    <div className="m-[-8px] flex flex-row flex-wrap-reverse items-stretch justify-center relative">
                        <ClimateSciencePageContentMain/>
                        <div>
                            <ClimateSciencePageContentAside/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClimateSciencePageContent;