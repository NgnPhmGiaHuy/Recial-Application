const ChevronUpIcon = ({ width = 24, height = 24, fill = "currentColor", stroke = "none", strokeWidth = 1.5 }) => {
    return (
        <i>
            <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" stroke={stroke}
                 strokeWidth={strokeWidth} width={width} height={height}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5"/>
            </svg>
        </i>
    );
};

export default ChevronUpIcon;