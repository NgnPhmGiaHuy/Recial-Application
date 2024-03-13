import { useDispatch } from "react-redux";

import { HeaderMenuSectionItem } from "@/components";
import { toggleHeaderMenu } from "@/store/actions/toggle/toggleActions";
import { headerMenuSocial, headerMenuPersonal } from "@/constants/HeaderConstants";

const HeaderMenu = ({ forwardedRef }) => {
    const dispatch = useDispatch();

    return (
        <div className="w-screen h-screen mt-[56px] fixed top-0 left-0 bg-black/75 z-50">
            <div ref={forwardedRef} className={`w-[380px] h-[calc(100vh-56px)] max-w-full max-h-screen absolute top-0 right-0 flex flex-col rounded-xl bg-white shadow-lg border border-solid border-black transform-none overflow-hidden animate-movePanelRightToLeft`}>
                <div className="flex flex-row py-[8px] pl-[12px] pr-[48px] items-center justify-between text-black font-normal break-words leading-5 relative">
                    <div className="text-[20px] font-semibold leading-6">
                        <h1>Menu</h1>
                    </div>
                    <div className="w-[32px] h-[32px] absolute top-[8px] right-[8px] flex flex-col items-center justify-center overflow-hidden">
                        <button type="button" className="w-full h-full flex flex-row items-center justify-center rounded-full hover:bg-zinc-200 transition-all" onClick={() => dispatch(toggleHeaderMenu())}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="min-h-[5.6rem] flex flex-col px-[12px] py-[8px] overflow-auto">
                    <section className="mt-[12px] bg-white border border-solid border-gray-200 rounded-xl overflow-visible relative">
                        <header className="px-[24px] py-[16px] border-b-[1px] border-solid border-gray-300">
                            <div className="flex flex-col text-[16px] text-black font-semibold leading-5">
                                <h2>Social</h2>
                            </div>
                        </header>
                        <ul className="flex flex-row flex-wrap p-[8px]">
                            {headerMenuSocial.map((value, index) => (
                                <HeaderMenuSectionItem key={index} sectionItemData={value}/>
                            ))}
                        </ul>
                    </section>
                    <section className="mt-[12px] bg-white border border-solid border-gray-200 rounded-xl overflow-visible relative">
                        <header className="px-[24px] py-[16px] border-b-[1px] border-solid border-gray-300">
                            <div className="flex flex-col text-[16px] text-black font-semibold leading-5">
                                <h2>Personal</h2>
                            </div>
                        </header>
                        <ul className="flex flex-row flex-wrap p-[8px]">
                            {headerMenuPersonal.map((value, index) => (
                                <HeaderMenuSectionItem key={index} sectionItemData={value}/>
                            ))}
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default HeaderMenu;