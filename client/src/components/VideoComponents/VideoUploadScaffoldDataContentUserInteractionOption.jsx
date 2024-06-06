const VideoUploadScaffoldDataContentUserInteractionOption = ({ option, isChecked, onChange }) => {
    return (
        <div className="flex items-start">
            <div className="w-[24px] h-[24px] p-[2px] flex-shrink-0 relative">
                <input type="checkbox" id={option} className="custom-checkbox" checked={isChecked} onChange={() => onChange(option)}/>
            </div>
            <div className="ml-[10px] pt-[2px] flex flex-col flex-1 items-start relative">
                <label htmlFor={option} className="flex text-[17px] text-black text-left font-normal break-words cursor-pointer relative leading-5">
                    { option }
                </label>
            </div>
        </div>
    );
};

export default VideoUploadScaffoldDataContentUserInteractionOption;