const LoadingAnimatedEllipsis = () => {
    return (
        <div>
            <div className="flex flex-row items-center py-24 mx-auto justify-center">
                <div className="mr-3 text-green-600 font-mono font-semibold text-lg sm:text-xl">Loading</div>
                <div className="loader-dots block relative w-20 h-5 ">
                    <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500"></div>
                </div>
            </div>
        </div>
    );
};

export default LoadingAnimatedEllipsis;