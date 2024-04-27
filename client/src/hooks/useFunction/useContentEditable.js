"use client"

import { useCallback, useEffect, useState, useRef } from "react";

const useContentEditable = () => {
    const inputContentEditableRef = useRef(null);

    const [inputText, setInputText] = useState("");
    const [allowSubmit, setAllowSubmit] = useState(false);

    const handleInputTextChange = useCallback(() => {
        const newText = inputContentEditableRef.current.innerText;
        setInputText(newText);
        setAllowSubmit(newText.trim().length > 0);
    }, []);

    useEffect(() => {
        const range = document.createRange();
        const selection = window.getSelection();
        range.selectNodeContents(inputContentEditableRef.current);
        range.collapse(false);
        selection.removeAllRanges();
        selection.addRange(range);
    }, [inputText]);

    const handlePaste = (event) => {
        event.preventDefault();
        const text = (event.originalEvent || event).clipboardData.getData('text/plain');
        document.execCommand("insertText", false, text);
    };

    useEffect(() => {
        const element = inputContentEditableRef.current;
        if (element) {
            element.addEventListener('paste', handlePaste);
            return () => {
                element.removeEventListener('paste', handlePaste);
            };
        }
    }, []);

    return { inputContentEditableRef, inputText, setInputText, setAllowSubmit, allowSubmit, handleInputTextChange };
}

export default useContentEditable;
