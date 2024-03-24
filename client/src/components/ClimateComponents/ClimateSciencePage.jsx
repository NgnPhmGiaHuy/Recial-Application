import { ClimateSciencePageContent, ClimateSciencePageHeader } from "@/components";

const ClimateSciencePage = () => {
    return (
        <div className="top-[56px] min-h-[calc(100vh-56px)] flex flex-col relative">
            <div className="min-h-full flex flex-col grow relative">
                <div className="max-w-full min-w-[cacl(100%-360px)] min-h-[inherit] w-[cacl(100%-360px) flex flex-shrink-0 grow relative">
                    <div className="min-h-[inherit] flex flex-col grow relative">
                        <div>
                            <ClimateSciencePageHeader/>
                        </div>
                        <ClimateSciencePageContent/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClimateSciencePage;