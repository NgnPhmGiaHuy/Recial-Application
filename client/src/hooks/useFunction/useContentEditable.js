"use client"

import { useCallback, useEffect, useState, useRef } from "react";

import { useEmojiHandler } from "@/hooks";

const useContentEditable = () => {
    const inputRef = useRef(null);

    const [inputText, setInputText] = useState("");
    const [allowSubmit, setAllowSubmit] = useState(false);

    const handleInputTextChange = useCallback(() => {
        const newText = inputRef.current.textContent;
        setInputText(newText);
        setAllowSubmit(newText.trim().length > 0);
    }, []);

    const handleAddEmoji = useEmojiHandler(inputRef, setInputText, setAllowSubmit);

    useEffect(() => {
        const element = inputRef.current;
        if (element) {
            element.addEventListener('input', handleInputTextChange);
            return () => {
                element.removeEventListener('input', handleInputTextChange);
            };
        }
    }, [handleInputTextChange]);

    const handlePaste = (event) => {
        event.preventDefault();
        const text = (event.originalEvent || event).clipboardData.getData('text/plain');
        document.execCommand("insertText", false, text);
    };

    useEffect(() => {
        const element = inputRef.current;
        if (element) {
            element.addEventListener('paste', handlePaste);
            return () => {
                element.removeEventListener('paste', handlePaste);
            };
        }
    }, []);

    return { inputRef, inputText, setInputText, setAllowSubmit, allowSubmit, handleAddEmoji, handleInputTextChange };
}

export default useContentEditable;
