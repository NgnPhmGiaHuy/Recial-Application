import PropTypes from "prop-types";

const PrimaryActionButton = ({ handleClick, icon, label, style, hoverStyle }) => {
    const defaultStyle = {
        minWidth: "135px",
        minHeight: "12px",
        marginLeft: "8px",
        padding: "6px 16px",
        display: "flex",
        flexGrow: 1,
        borderRadius: "8px",
        cursor: "pointer",
        outline: "1px solid #84cc16",
        backgroundColor: "#84cc16",
        transition: "all 0.3s ease",
        ...style
    };

    const defaultHoverStyle = {
        outline: "2px solid #166534",
        backgroundColor: "#65a30d",
        ...hoverStyle
    };

    return (
        <div style={defaultStyle} onClick={handleClick}
            onMouseOver={(e) => Object.assign(e.currentTarget.style, defaultHoverStyle)}
            onMouseOut={(e) => Object.assign(e.currentTarget.style, defaultStyle)}>
            <div className="w-full flex-center gap-1 select-none text-white">
                { icon }
                <span className="block text-[16px] text-center font-semibold break-words leading-5">
                    {label}
                </span>
            </div>
        </div>
    );
};

PrimaryActionButton.propTypes = {
    handleClick: PropTypes.func.isRequired,
    icon: PropTypes.node.isRequired,
    label: PropTypes.string.isRequired,
    style: PropTypes.object,
    hoverStyle: PropTypes.object
};

PrimaryActionButton.defaultProps = {
    style: {},
    hoverStyle: {}
};

export default PrimaryActionButton;