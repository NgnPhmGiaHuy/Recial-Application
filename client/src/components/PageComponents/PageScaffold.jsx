import { PageScaffoldAside, PageScaffoldMain } from "@/components";

const PageScaffold = ({ postRef, pagePostProps }) => {
    return (
        <div className="flex flex-col grow relative">
            <div className="mx-[-12px] flex flex-row items-stretch justify-center relative">
                <div>
                    <PageScaffoldAside/>
                </div>
                <PageScaffoldMain postRef={postRef} pagePostProps={pagePostProps}/>
            </div>
        </div>
    );
};

export default PageScaffold;