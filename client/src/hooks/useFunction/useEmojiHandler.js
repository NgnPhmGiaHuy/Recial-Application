"use client"

import { useCallback } from "react";

const useEmojiHandler = (inputRef, setInputText, setAllowSubmit) => {
    const handleAddEmoji = useCallback((emoji) => {
        const emojiText = emoji.native;

        const selection = window.getSelection();
        if (!selection.rangeCount) return;

        const range = selection.getRangeAt(0);

        const emojiNode = document.createTextNode(emojiText);

        range.deleteContents();
        range.insertNode(emojiNode);

        const endRange = document.createRange();
        endRange.setStart(inputRef.current, inputRef.current.childNodes.length);
        endRange.collapse(true);
        selection.removeAllRanges();
        selection.addRange(endRange);

        setInputText(inputRef.current.textContent);
        setAllowSubmit(inputRef.current.textContent.trim().length > 0);
    }, [inputRef, setInputText, setAllowSubmit]);

    return handleAddEmoji;
};

export default useEmojiHandler;
