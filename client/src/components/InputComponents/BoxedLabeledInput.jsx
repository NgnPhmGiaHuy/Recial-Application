import PropTypes from "prop-types";

import { InformationCircleIcon } from "@/components";

const BoxedLabeledInput = ({ label, name, value, onChange, required, textarea, inputStyle, labelStyle, containerStyle, errorStyle }) => {
    return (
        <div style={{ padding: "12px 16px", ...containerStyle }} className="flex flex-col items-stretch relative">
            <label htmlFor={name} className="flex flex-row border border-solid border-zinc-300 rounded-xl" style={labelStyle}>
                <div className="flex flex-shrink grow relative">
                    <div className="w-full h-full flex flex-row items-stretch justify-between absolute">
                        <div style={{ padding: "8px 8px 0 8px" }}>
                            <span className="block text-[13px] text-zinc-500 text-left font-normal break-words relative leading-5">
                                <span className="overflow-hidden relative">
                                    {label}
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className="mt-[16px] px-[8px] pt-[12px] pb-[8px] flex flex-row flex-shrink grow items-stretch overflow-hidden">
                        <div className="w-full flex items-center z-20">
                            { textarea ? (
                                <textarea name={name} value={value} onChange={onChange} autoCapitalize="sentences" spellCheck={false} dir="auto" className="w-full min-h-[70px] no-scrollbar resize-none appearance-none outline-none" style={inputStyle}/>
                            ) : (
                                <input type="text" name={name} value={value} onChange={onChange} required={required} spellCheck={false} className="w-full text-[17px] text-black text-left font-normal outline-none relative leading-5" style={inputStyle}/>
                            ) }
                        </div>
                    </div>
                </div>
            </label>
            { !value && required && (
                <div className="mt-[4px] w-full flex flex-row items-center text-red-500 relative" style={errorStyle}>
                    <div className="w-[16px] h-[16px] mr-[4px]">
                        <div className="w-full h-full flex items-center justify-center overflow-hidden relative">
                            <InformationCircleIcon fill="none" stroke="currentColor" width={16} height={16} />
                        </div>
                    </div>
                    <div className="w-full h-full flex flex-row items-center relative">
                        <span className="text-[14px] text-left font-normal break-words relative leading-5">
                            <span className="overflow-hidden relative">
                                { label.replace("*", "") } is a required field
                            </span>
                        </span>
                    </div>
                </div>
            ) }
        </div>
    );
};

BoxedLabeledInput.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    required: PropTypes.bool,
    textarea: PropTypes.bool,
    inputStyle: PropTypes.object,
    labelStyle: PropTypes.object,
    containerStyle: PropTypes.object,
    errorStyle: PropTypes.object,
};

BoxedLabeledInput.defaultProps = {
    required: false,
    textarea: false,
    inputStyle: {},
    labelStyle: {},
    containerStyle: {},
    errorStyle: {},
};

export default BoxedLabeledInput;