"use client";

import { useEmojiHandler } from "@/hooks";
import { useCallback, useEffect, useState, useRef } from "react";

const useContentEditable = (maximumInputText = Infinity) => {
    const inputRef = useRef(null);

    const [inputText, setInputText] = useState("");
    const [allowSubmit, setAllowSubmit] = useState(false);

    const handleInputTextChange = useCallback(() => {
        const newText = inputRef.current.textContent;

        if (newText.length <= maximumInputText) {
            setInputText(newText);
            setAllowSubmit(newText.trim().length > 0);
        } else {
            inputRef.current.textContent = inputText;
            setAllowSubmit(inputText.trim().length > 0);
        }
    }, [inputText, maximumInputText]);

    const handleAddEmoji = useEmojiHandler(inputRef, setInputText, setAllowSubmit);

    useEffect(() => {
        const element = inputRef.current;
        if (element) {
            element.addEventListener("input", handleInputTextChange);
            return () => {
                element.removeEventListener("input", handleInputTextChange);
            };
        }
    }, [handleInputTextChange]);

    const handlePaste = (event) => {
        event.preventDefault();
        const text = (event.clipboardData || window.clipboardData).getData("text/plain");
        const currentText = inputRef.current.textContent;
        const newText = currentText + text;

        if (newText.length <= maximumInputText) {
            document.execCommand("insertText", false, text);
        } else {
            const allowedLength = maximumInputText - currentText.length;
            if (allowedLength > 0) {
                const truncatedText = text.slice(0, allowedLength);
                document.execCommand("insertText", false, truncatedText);
            }
        }
    };

    useEffect(() => {
        const element = inputRef.current;
        if (element) {
            element.addEventListener("paste", handlePaste);
            return () => {
                element.removeEventListener("paste", handlePaste);
            };
        }
    }, [handlePaste, maximumInputText]);

    return { inputRef, inputText, setInputText, setAllowSubmit, allowSubmit, handleAddEmoji, handleInputTextChange };
}

export default useContentEditable;
