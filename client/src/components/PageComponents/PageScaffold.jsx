import { PageScaffoldAside, PageScaffoldMain } from "@/components";

const PageScaffold = () => {
    return (
        <div className="flex flex-col grow relative">
            <div className="mx-[-12px] flex flex-row items-stretch justify-center relative">
                <div>
                    <PageScaffoldAside/>
                </div>
                <PageScaffoldMain/>
            </div>
        </div>
    );
};

export default PageScaffold;