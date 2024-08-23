import { HeaderPersonalAccountControls, HeaderPersonalAccountImage } from "@/components";

const HeaderPersonalAccount = ({ forwardedRef }) => {
    return (
        <div ref={forwardedRef} className="absolute top-0 left-0 translate-x-[-172px] translate-y-[48px]">
            <div className="mt-[5px] animate-slideInTop">
                <div className="overflow-hidden rounded-xl bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                    <div className="w-[360px] max-w-[calc(100vw-24px] max-h-[calc(100vh-56px-16px)] flex flex-col overflow-x-auto overscroll-x-contain overflow-y-auto overscroll-y-contain relative">
                        <div className="flex flex-col grow relative">
                            <div className="w-auto h-auto overflow-hidden relative">
                                <div className="w-full h-full">
                                    <div className="pt-[8px] pb-[12px] flex flex-col grow relative">
                                        <div className="flex flex-col flex-shrink-0 relative">
                                            <div className="mx-[16px] mb-[16px] mt-[4px]">
                                                <div className="w-full flex flex-col rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] relative">
                                                    <HeaderPersonalAccountImage/>
                                                </div>
                                            </div>
                                        </div>
                                        <HeaderPersonalAccountControls />
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

export default HeaderPersonalAccount;