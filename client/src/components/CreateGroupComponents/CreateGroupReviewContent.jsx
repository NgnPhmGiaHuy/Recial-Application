import { CreateGroupReviewContentName, CreateGroupReviewContentNavigation } from "@/components";

const CreateGroupReviewContent = ({ state }) => {
    return (
        <div>
            <CreateGroupReviewContentName state={state}/>
            <div className="mx-[16px] h-[1px] bg-zinc-300"></div>
            <div>
                <CreateGroupReviewContentNavigation/>
            </div>
        </div>
    );
};

export default CreateGroupReviewContent;