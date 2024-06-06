const VideoUploadScaffoldDataContentPrivacyOption = ({ option, selectedPrivacy, onClick }) => {
    return (
        <li className="p-[14px] flex items-center cursor-pointer rounded-md hover:bg-zinc-100 relative" onClick={() => onClick(option)}>
            <div className="flex-1">
                { option }
            </div>
            { selectedPrivacy === option && (
                <div className="w-[20px] h-[20px] flex items-center justify-center relative">
                    <i>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/>
                        </svg>
                    </i>
                </div>
            ) }
        </li>
    );
};

export default VideoUploadScaffoldDataContentPrivacyOption;