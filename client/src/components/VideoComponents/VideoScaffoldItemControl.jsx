import { PauseIcon, PlayIcon, SpeakerWaveIcon, SpeakerXMarkIcon } from "@/components";

const VideoScaffoldItemControl = ({ duration, progress, isPlaying, isMuted, handleSetIsMute, handleSetIsPlaying, handleSeekChange, handleSeekMouseUp, handleSeekMouseDown }) => {
    return (
        <div>
            <div className="w-full h-full top-0 flex flex-col group absolute">
                <div className="top-0 right-0 bottom-0 left-0 cursor-pointer flex items-end justify-end absolute">
                    <div className="top-0 right-0 bottom-0 left-0 flex flex-col justify-between cursor-pointer absolute bg-gradient-to-r from-opacity-35 via-transparent to-opacity-35">
                        <div className="mt-[8px] mx-[8px] flex flex-col flex-shrink-0 grow-0 items-end justify-start overflow-visible bg-transparent static">
                            <div className="w-[32px] h-[32px] flex flex-row flex-shrink-0 items-center justify-center basis-auto text-white bg-black/25 select-none cursor-pointer rounded-full overflow-hidden relative hover:bg-black/10" onClick={handleSetIsMute}>
                                { isMuted ? (
                                    <SpeakerXMarkIcon fill="currentColor" stroke="currentColor" strokeWidth={1} width={20} height={20} />
                                ) : (
                                    <SpeakerWaveIcon fill="currentColor" stroke="currentColor" strokeWidth={1} width={20} height={20} />
                                ) }
                            </div>
                        </div>
                    </div>
                    <div className={`p-[16px] top-[calc(50%-36px)] left-[calc(50%-36px)] rounded-full bg-black/50 ${isPlaying ? "opacity-0" : "opacity-100"} transform-none absolute transition-all`}>
                        <div className="p-[8px] flex items-center justify-center bg-transparent cursor-pointer relative">
                            <div className="flex flex-col items-center justify-center text-white">
                                <PlayIcon fill="currentColor" stroke="currentColor" width={32} height={32} />
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 py-2 z-50 opacity-0 bg-zinc-700/20 rounded-xl group-hover:opacity-100 duration-300">
                        <div className="flex flex-row items-center justify-between relative">
                            <div onClick={handleSetIsPlaying}>
                                <div className="w-[24px] h-[24px] mr-[12px] flex items-center justify-center text-white relative">
                                    { isPlaying ? (
                                        <PauseIcon fill="none" stroke="currentColor" strokeWidth={3} />
                                    ) : (
                                        <PlayIcon fill="currentColor" stroke="currentColor" />
                                    ) }
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