import Image from "next/image";

import Illustration from "/public/images/Illustration/Group/group-bg-00001.png";

const CreateGroupReviewIllustration = () => {
    return (
        <div>
            <div className="flex flex-row items-stretch justify-center bg-zinc-200 relative">
                <div className="max-w-[1000px] flex flex-col flex-shrink items-center justify-center grow basis-0 relative">
                    <div className="pt-[40%] w-full h-0 overflow-hidden relative">
                        <div className="inset-0 flex items-stretch justify-between absolute">
                            <div className="inset-0 flex flex-col items-stretch justify-between absolute">
                                <div className="w-full h-full overflow-hidden relative">
                                    <Image src={Illustration} alt={`${Illustration}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover opacity-60 grayscale"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateGroupReviewIllustration;