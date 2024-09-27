import PropTypes from "prop-types";

const ToggleActionButton = ({ showToggle, handleToggleAction, icons, style, hoverStyle}) => {
    const defaultStyle = {
        minHeight: "12px",
        marginLeft: "8px",
        padding: "6px 16px",
        display: "flex",
        alignItems: "center",
        backgroundColor: "white",
        justifyContent: "center",
        borderRadius: "6px",
        cursor: "pointer",
        outline: "1px solid #71717a",
        position: "relative",
        transition: "all 0.3s ease",
        ...style
    };

    const defaultHoverStyle = {
        outline: "2px solid #000",
        backgroundColor: "#e4e4e7",
        ...hoverStyle
    };

    return (
        <div style={defaultStyle} onClick={handleToggleAction}
            onMouseOver={(e) => Object.assign(e.currentTarget.style, defaultHoverStyle)}
            onMouseOut={(e) => Object.assign(e.currentTarget.style, defaultStyle)}>
            <div className="flex-center gap-1 select-none text-black">
                { showToggle ? icons.toggleOn : icons.toggleOff }
            </div>
        </div>
    );
};

ToggleActionButton.propTypes = {
    showToggle: PropTypes.bool.isRequired,
    handleToggleAction: PropTypes.func.isRequired,
    icons: PropTypes.shape({
        toggleOn: PropTypes.node.isRequired,
        toggleOff: PropTypes.node.isRequired
    }).isRequired,
    style: PropTypes.object,
    hoverStyle: PropTypes.object
};

ToggleActionButton.defaultProps = {
    style: {},
    hoverStyle: {}
};

export default ToggleActionButton;