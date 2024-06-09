const LoadingThreeDotsComponent = ({ backgroundColor = "rgba(132,204,22,1)" }) => {
    return (
        <div>
            <div className="flex items-center justify-center space-x-2">
                <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: backgroundColor }}></div>
                <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: backgroundColor }}></div>
                <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: backgroundColor }}></div>
            </div>
        </div>
    );
};

export default LoadingThreeDotsComponent;