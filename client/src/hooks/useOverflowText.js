import {useCallback, useEffect, useRef, useState} from "react";


const useOverflowText = (depends) => {
    const textRef = useRef(null);
    const [showMoreText, setShowMoreText] = useState(false);
    const [isOverflowing, setIsOverflowing] = useState(false);

    const handleShowMoreText = useCallback(() => {
        setShowMoreText((prevShowMoreText) => !prevShowMoreText);
    }, []);

    useEffect(() => {
        if (textRef.current) {
            const { clientHeight, scrollHeight } = textRef.current;
            setIsOverflowing(scrollHeight > clientHeight);
        }
    }, [depends]);

    return {textRef, showMoreText, isOverflowing, handleShowMoreText};
}

export default useOverflowText;