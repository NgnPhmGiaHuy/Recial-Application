const UserProfileEditHeader = ({ handleState, handleSubmitForm }) => {
    return (
        <div className="top-0 sticky z-[9999]">
            <div className="h-[56px] bg-white/90 rounded-t-xl backdrop-blur-xl">
                <div className="max-w-[600px] h-[56px] mx-auto px-[16px] flex flex-row items-center justify-center relative">
                    <div className="min-w-[56px] min-h-[32px] flex flex-col items-start justify-center self-stretch relative">
                        <div className="w-[36px] h-[36px] flex items-center justify-center rounded-xl cursor-pointer hover:bg-zinc-200 relative transition-all"
                            onClick={handleState.handleShowEditProfile}>
                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
                                </svg>
                            </i>
                        </div>
                    </div>
                    <div className="h-full py-[2px] flex flex-col grow justify-center relative">
                        <span className="block text-[20px] text-black text-left font-bold break-words relative leading-5">
                            <span className="overflow-hidden relative">
                                Edit profile
                            </span>
                        </span>
                    </div>
                    <div className="min-w-[56px] min-h-[32px] flex flex-col items-end justify-center self-stretch relative" onClick={handleSubmitForm}>
                        <div className="min-w-[32px] min-h-[32px] px-[16px] flex flex-col items-center justify-center bg-lime-500 rounded-xl cursor-pointer relative hover:bg-lime-700 transition-all">
                            <span className="block text-[15px] text-white text-center font-semibold break-words relative leading-5">
                                <span className="overflow-hidden relative">
                                    Save
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfileEditHeader;