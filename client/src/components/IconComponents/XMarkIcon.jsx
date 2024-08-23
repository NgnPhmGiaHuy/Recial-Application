const XMarkIcon = ({ width = 24, height = 24, fill = "currentColor", stroke = "none", strokeWidth = 1.5 }) => {
    return (
        <i>
            <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" stroke={stroke}
                 strokeWidth={strokeWidth} width={width} height={height}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
            </svg>
        </i>
    );
};

export default XMarkIcon;