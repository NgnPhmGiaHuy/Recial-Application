import { SearchIcon } from "@/components";

const SmallSearchInput = ({ id, name, placeholder, value, onChange }) => {
    return (
        <section>
            <div className="w-full h-full my-[8px] flex flex-col">
                <div className="w-full h-full flex items-center">
                    <label htmlFor={id} className="w-full h-full">
                        <label className="w-full h-full min-w-[40px] min-h-[40px] flex items-center relative rounded-xl bg-zinc-100 z-10">
                            <span className="flex items-center pl-[12px] transition-all duration-500">
                                <SearchIcon fill="none" stroke="currentColor" width={24} height={24}/>
                            </span>
                            <input type="text" name={name} id={id} placeholder={placeholder} className="px-[8px] pt-[7px] pb-[9px] w-full h-full outline-none bg-zinc-100 rounded-r-full" value={value} onChange={onChange}/>
                        </label>
                    </label>
                </div>
            </div>
        </section>
    );
};

export default SmallSearchInput;