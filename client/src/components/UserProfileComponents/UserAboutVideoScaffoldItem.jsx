"use client"

import { useRef, useState, useEffect } from 'react';

const UserAboutVideoScaffoldItem = ({ userProps }) => {
    const videoRef = useRef(null);
    const [totalDuration, setTotalDuration] = useState(0);
    const [updatedAtText, setUpdatedAtText] = useState('');

    useEffect(() => {
        const video = videoRef.current;

        const updateDuration = () => {
            setTotalDuration(video.duration);
        };

        if (video) {
            video.addEventListener('durationchange', updateDuration);

            return () => {
                video.removeEventListener('durationchange', updateDuration);
            };
        }
    }, []);

    useEffect(() => {
        const calculateTimeDifference = (date) => {
            const currentDate = new Date();
            const updatedDate = new Date(date);
            const timeDifference = currentDate.getTime() - updatedDate.getTime();
            const secondsDifference = Math.floor(timeDifference / 1000);

            let text = '';
            if (secondsDifference < 60) {
                text = `${secondsDifference} seconds ago`;
            } else if (secondsDifference < 3600) {
                text = `${Math.floor(secondsDifference / 60)} minutes ago`;
            } else if (secondsDifference < 86400) {
                text = `${Math.floor(secondsDifference / 3600)} hours ago`;
            } else if (secondsDifference < 259200) {
                text = `${Math.floor(secondsDifference / 86400)} days ago`;
            } else if (secondsDifference < 2592000) {
                text = `${Math.floor(secondsDifference / 86400 / 30)} months ago`;
            } else {
                text = `${Math.floor(secondsDifference / 86400 / 365)} years ago`;
            }

            return text;
        };

        const formattedTime = calculateTimeDifference(userProps.updated_at);
        setUpdatedAtText(formattedTime);
    }, [userProps.updated_at]);

    const handleHover = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const handleHoverOut = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div className="max-w-[280px] min-w-[280px] p-[4px] grow basis-0 overflow-hidden relative">
            <div className="m-[-6px] pt-[16px] flex flex-row flex-wrap items-stretch justify-between relative">
                <div className="p-[6px] flex flex-col flex-shrink grow basis-[calc(100%/3)] relative">
                    <div className="mb-[8px]">
                        <a href="">
                            <div className="border border-solid border-zinc-200 rounded-md overflow-hidden relative" onMouseEnter={handleHover} onMouseLeave={handleHoverOut}>
                                <div className="w-full h-0 pt-[100%] relative">
                                    <div className="top-0 right-0 bottom-0 left-0 flex flex-col absolute">
                                        <div className="w-full h-full top-0 right-0 bottom-0 left-0 absolute">
                                            <video ref={videoRef} className="absolute h-full w-full object-cover" controls loop>
                                                <source src={userProps.video_url} type="video/mp4"/>
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>
                                    </div>
                                    <div className="px-[6px] py-[3px] top-[8px] right-[8px] rounded-md pointer-events-none bg-black/25 drop-shadow-md absolute">
                                        <span className="block text-[15px] text-white text-left font-semibold break-words relative leading-5">
                                            {formatTime(totalDuration)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="flex flex-row items-center justify-between relative">
                        <div className="flex flex-col relative">
                            <div className="my-[8px]">
                                <a href="">
                                    <span className="block text-[15px] text-black text-left font-medium break-words relative leading-5">
                                        <span className="overflow-hidden text-ellipsis line-clamp-1 relative">
                                            {userProps.video_title}
                                        </span>
                                    </span>
                                </a>
                            </div>
                            <div >
                                <div className="h-[16px] flex items-center gap-2 relative">
                                    <div className="flex items-center after:w-[2px] after:h-[2px] after:rounded-full after:bg-zinc-500 after:ml-2">
                                        <span className="block text-[13px] text-zinc-500 font-normal break-words relative leading-4">
                                            <span className="overflow-hidden relative">
                                                {updatedAtText}
                                            </span>
                                        </span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="block text-[13px] text-zinc-500 font-normal break-words relative leading-4">
                                            <span className="overflow-hidden relative">
                                                {userProps.views_count} views
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserAboutVideoScaffoldItem;

