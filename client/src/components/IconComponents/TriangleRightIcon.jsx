const TriangleRightIcon = ({ width = 24, height = 24, fill = "currentColor", stroke = "none", strokeWidth = 1.5 }) => {
    return (
        <i>
            <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" stroke={stroke}
                 strokeWidth={strokeWidth} width={width} height={height}>
                <path
                    d="M9 9H6M9 12H4M9 15H6M12.9825 7.61408L20 12L12.9825 16.3859C12.6108 16.6183 12.1412 16.2938 12.2272 15.8639L13 12L12.2272 8.13613C12.1412 7.70625 12.6108 7.38173 12.9825 7.61408Z"/>
            </svg>
        </i>
    );
};

export default TriangleRightIcon;