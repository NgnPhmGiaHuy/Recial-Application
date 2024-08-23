import { ChevronLeftIcon } from "@/components";

const MediumPrevButton = ({ onClick }) => {
    return (
        <div className="top-[calc(50%-30px)] left-1 absolute">
            <div className="w-[60px] h-[60px] animate-bounceFadeIn relative">
                <div onClick={onClick} className="w-full h-full flex items-center justify-center cursor-pointer rounded-full overflow-hidden text-black bg-white outline outline-zinc-300 relative hover:bg-white transition-all">
                    <ChevronLeftIcon fill="none" stroke="currentColor" strokeWidth={3} width={28} height={28} />
                </div>
            </div>
        </div>
    );
};

export default MediumPrevButton;