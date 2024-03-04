import { CreateGroupReviewAbout, CreateGroupReviewContent, CreateGroupReviewCreatePost, CreateGroupReviewHeader, CreateGroupReviewIllustration} from "@/components";

const CreateGroupReview = ({ state }) => {
    return (
        <div className="flex flex-col grow items-stretch justify-center relative">
            <div className="w-full flex flex-col items-center justify-center relative">
                <div className="max-w-[calc(100%-48px)] w-[980px] h-full my-[16px] flex flex-col flex-shrink grow rounded-xl shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] bg-white relative">
                    <CreateGroupReviewHeader/>
                    <div className="m-[16px] flex flex-col grow border border-solid border-zinc-500 rounded-xl overflow-hidden relative">
                        <div>
                            <CreateGroupReviewIllustration/>
                        </div>
                        <div>
                            <CreateGroupReviewContent state={state}/>
                        </div>
                        <div className="flex flex-col items-center relative">
                            <div className="max-w-[980px] px-[16px] pt-[16px] bg-zinc-100 relative">
                                <div className="mx-[8px] flex flex-row items-stretch justify-between gap-2 relative">
                                    <div className="w-full flex flex-shrink">
                                        <CreateGroupReviewCreatePost/>
                                    </div>
                                    <div className="flex flex-shrink-0">
                                        <CreateGroupReviewAbout state={state}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateGroupReview;