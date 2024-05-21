"use client"

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const useVideoScaffold = ({ autoPlay, videoProps, setGlobalMute }) => {
    const router = useRouter();

    const videoRef = useRef(null);
    const playerRef = useRef(null);

    const [isPlaying, setIsPlaying] = useState(autoPlay);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [seeking, setSeeking] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsPlaying(true);
                    } else {
                        setIsPlaying(false);
                    }
                });
            },
            {
                threshold: 0.5
            }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);

    const handleSetIsPlaying = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setIsPlaying(prev => !prev);
    };

    const handleSetGlobalMute = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setGlobalMute(prev => !prev);
    };

    const handleProgress = (state) => {
        if (!seeking) {
            setProgress(state.playedSeconds);
        }
    };

    const handleDuration = (duration) => {
        setDuration(duration);
    };

    const handleSeekMouseDown = () => {
        setSeeking(true);
    };

    const handleSeekMouseUp = (event) => {
        const newTime = (event.target.value / 100) * duration;
        setSeeking(false);
        if (playerRef.current) {
            playerRef.current.seekTo(newTime, 'seconds');
        }
        setProgress(newTime);
    };

    const handleSeekChange = (event) => {
        const newTime = (event.target.value / 100) * duration;

        return setProgress(newTime);
    };

    const handleNavigation = () => {
        return router.push(`/video/?video=${videoProps._id}&&progress=${progress}`)
    }

    return { videoRef, playerRef, isPlaying, progress, duration, seeking, handleSetIsPlaying, handleSetGlobalMute, handleProgress, handleDuration, handleSeekMouseDown, handleSeekMouseUp, handleSeekChange, handleNavigation };
}

export default useVideoScaffold;