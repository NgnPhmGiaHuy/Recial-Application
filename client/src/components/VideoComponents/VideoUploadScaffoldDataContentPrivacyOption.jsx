import { CheckIcon } from "@/components";

const VideoUploadScaffoldDataContentPrivacyOption = ({ option, selectedPrivacy, onClick }) => {
    return (
        <li className="p-[14px] flex items-center cursor-pointer rounded-md hover:bg-zinc-100 relative" onClick={() => onClick(option)}>
            <div className="flex-1">
                { option }
            </div>
            { selectedPrivacy === option && (
                <div className="w-[20px] h-[20px] flex items-center justify-center relative">
                    <CheckIcon fill="none" stroke="currentColor" strokeWidth={2} width={16} height={16} />
                </div>
            ) }
        </li>
    );
};

export default VideoUploadScaffoldDataContentPrivacyOption;