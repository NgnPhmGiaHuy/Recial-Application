const VideoScaffoldItemControl = ({ duration, progress, isPlaying, isMuted, handleSetIsMute, handleSetIsPlaying, handleSeekChange, handleSeekMouseUp, handleSeekMouseDown }) => {
    return (
        <div>
            <div className="w-full h-full top-0 flex flex-col group absolute">
                <div className="top-0 right-0 bottom-0 left-0 cursor-pointer flex items-end justify-end absolute">
                    <div className="top-0 right-0 bottom-0 left-0 flex flex-col justify-between cursor-pointer absolute bg-gradient-to-r from-opacity-35 via-transparent to-opacity-35">
                        <div className="mt-[8px] mx-[8px] flex flex-col flex-shrink-0 grow-0 items-end justify-start overflow-visible bg-transparent static">
                            <div className="w-[32px] h-[32px] flex flex-row flex-shrink-0 items-center justify-center basis-auto text-white bg-black/25 select-none cursor-pointer rounded-full overflow-hidden relative hover:bg-black/10" onClick={handleSetIsMute}>
                                { isMuted ? (
                                    <i>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
                                             strokeWidth={1} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z"/>
                                        </svg>
                                    </i>
                                ) : (
                                    <i>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                             className="w-5 h-5">
                                            <path
                                                d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z"/>
                                            <path
                                                d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z"/>
                                        </svg>
                                    </i>
                                ) }
                            </div>
                        </div>
                    </div>
                    <div className={`p-[16px] top-[calc(50%-36px)] left-[calc(50%-36px)] rounded-full bg-black/50 ${isPlaying ? "opacity-0" : "opacity-100"} transform-none absolute transition-all`}>
                        <div className="p-[8px] flex items-center justify-center bg-transparent cursor-pointer relative">
                            <div className="flex flex-col items-center justify-center text-white">
                                <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"/>
                                    </svg>
                                </i>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 py-2 z-50 opacity-0 bg-zinc-700/20 rounded-xl group-hover:opacity-100 duration-300">
                        <div className="flex flex-row items-center justify-between relative">
                            <div onClick={handleSetIsPlaying}>
                                <div
                                    className="w-[24px] h-[24px] mr-[12px] flex items-center justify-center text-white relative">
                                    <i>
                                        {isPlaying ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M15.75 5.25v13.5m-7.5-13.5v13.5"/>
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                 viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                                 className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"/>
                                            </svg>
                                        )}
                                    </i>
                                </div>
                            </div>
                            <input type="range" min="0" max="100" value={duration ? (progress / duration) * 100 : 0}
                                   onMouseDown={handleSeekMouseDown} onMouseUp={handleSeekMouseUp}
                                   onChange={handleSeekChange} className="w-full h-[12px]"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoScaffoldItemControl;