import PropTypes from "prop-types";

const SecondaryActionButton = ({ handleToggleAction, icon, label, style, hoverStyle }) => {
    const defaultStyle = {
        minWidth: "135px",
        minHeight: "12px",
        marginLeft: "8px",
        padding: "6px 16px",
        display: "flex",
        flexGrow: 1,
        borderRadius: "8px",
        backgroundColor: "white",
        cursor: "pointer",
        color: "#166534",
        outline: "1px solid #166534",
        transition: "all 0.3s ease",
        ...style
    };

    const defaultHoverStyle = {
        outline: "2px solid #166534",
        backgroundColor: "#ecfccb",
        ...hoverStyle
    };

    return (
        <div style={defaultStyle} onClick={handleToggleAction}
            onMouseOver={(e) => Object.assign(e.currentTarget.style, defaultHoverStyle)}
            onMouseOut={(e) => Object.assign(e.currentTarget.style, defaultStyle)}>
            <div className="flex-center select-none gap-1">
                { icon }
                <span className="block text-[16px] text-center font-semibold break-words leading-5">
                    {label}
                </span>
            </div>
        </div>
    );
};

SecondaryActionButton.propTypes = {
    handleToggleAction: PropTypes.func.isRequired,
    icon: PropTypes.node.isRequired,
    label: PropTypes.string.isRequired,
    style: PropTypes.object,
    hoverStyle: PropTypes.object
};

SecondaryActionButton.defaultProps = {
    style: {},
    hoverStyle: {}
};

export default SecondaryActionButton;