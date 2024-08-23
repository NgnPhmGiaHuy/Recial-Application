import { useDispatch } from "react-redux";

import { ArrowLeftIcon, HeaderSearchHistory, SearchIcon } from "@/components";
import { toggleHeaderSearchHistory } from "@/store/actions/toggle/toggleActions";

const HeaderSearchBar = ({ isSearchShowed, forwardRef }) => {
    const dispatch = useDispatch();

    return (
        <div>
            <div className="sm:w-[320px] w-[48px] flex h-full">
                <div className="w-full h-full relative before:shadow-md">
                    <div className={`${isSearchShowed ? "shadow-xl" : null} w-full h-full sm:px-[16px] px-[4px] mb-[-8px] flex items-center`}>
                        <div className="w-full flex items-center">
                            <div className={`${isSearchShowed ? "flex w-[34px] h-[34px] p-[8px]" : "hidden"} items-center justify-center rounded-xl hover:bg-zinc-200 cursor-pointer transition-all duration-500 ease-in-out animate-moveIconRightToLeft`}>
                                <ArrowLeftIcon fill="none" stroke="currentColor" width={20} height={20}/>
                            </div>
                            <label className={`${isSearchShowed ? "w-full" : null} h-full min-w-[40px] min-h-[40px] flex items-center justify-center relative rounded-xl bg-zinc-100 z-10`}
                                htmlFor="headerSearchInput">
                                <span className={`${isSearchShowed ? "animate-moveIconRightToLeft hidden" : "flex"} w-auto items-center sm:pl-[12px] transition-all duration-500`}>
                                    <SearchIcon fill="none" stroke="currentColor"/>
                                </span>
                                <span className={`${isSearchShowed ? "flex" : "hidden"} w-[22px]`}></span>
                                <input type="text" name="headerSearchInput" id="headerSearchInput"
                                       ref={forwardRef}
                                       placeholder="Search in Recial"
                                       onClick={() => dispatch(toggleHeaderSearchHistory())}
                                       className="w-full h-full px-[8px] pt-[7px] pb-[9px] sm:flex hidden outline-none bg-zinc-100 rounded-r-full"/>
                            </label>
                        </div>
                    </div>
                    <div ref={forwardRef}>
                        { isSearchShowed && <HeaderSearchHistory/> }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderSearchBar;