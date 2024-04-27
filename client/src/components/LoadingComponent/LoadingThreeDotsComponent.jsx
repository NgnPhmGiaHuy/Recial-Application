const LoadingThreeDotsComponent = () => {
    return (
        <div>
            <div className="flex items-center justify-center space-x-2">
                <div className="w-3 h-3 rounded-full animate-pulse bg-lime-500"></div>
                <div className="w-3 h-3 rounded-full animate-pulse bg-lime-500"></div>
                <div className="w-3 h-3 rounded-full animate-pulse bg-lime-500"></div>
            </div>
        </div>
    );
};

export default LoadingThreeDotsComponent;