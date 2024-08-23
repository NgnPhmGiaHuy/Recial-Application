import PropTypes from 'prop-types';

import { ChevronDownIcon } from "@/components";

const SelectInput = ({ label, name, value, onChange, options, style, hoverStyle }) => {
    const defaultStyle = {
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        backgroundColor: "white",
        border: "1px solid #d4d4d4",
        borderRadius: "12px",
        position: "relative",
        ...style,
    };

    const defaultHoverStyle = {
        border: "1px solid #a1a1a1",
        ...hoverStyle,
    };

    return (
        <div style={defaultStyle} onMouseOver={(e) => Object.assign(e.currentTarget.style, defaultHoverStyle)} onMouseOut={(e) => Object.assign(e.currentTarget.style, defaultStyle)}>
            <label htmlFor={name} className="px-2 pt-2 absolute">
                <span className="text-sm text-gray-500">{label}</span>
            </label>
            <select name={name} value={value} onChange={onChange} className="mt-4 px-2 pt-3 pb-2 text-lg text-black rounded-xl cursor-pointer appearance-none outline-none leading-5">
                <option disabled value="" className="bg-white">
                    Select {label}
                </option>
                {options.map((option) => (
                    <option key={option.value || option} value={option.value || option}>
                        {option.label || option}
                    </option>
                ))}
            </select>
            <div className="w-6 h-6 mt-[-12px] top-1/2 right-3 absolute">
                <div className="w-full h-full flex items-center justify-center">
                    <ChevronDownIcon fill="none" stroke="currentColor" />
                </div>
            </div>
        </div>
    );
};

SelectInput.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.shape({
                value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
                label: PropTypes.string.isRequired,
            }),
            PropTypes.string,
            PropTypes.number,
        ])
    ).isRequired,
    style: PropTypes.object,
    hoverStyle: PropTypes.object,
};

SelectInput.defaultProps = {
    style: {},
    hoverStyle: {},
};

export default SelectInput;