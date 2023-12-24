"use client"

import { useCallback, useEffect, useState, useRef } from "react";

const useContentEditable = () => {
    const inputContentEditableRef = useRef(null);

    const [inputText, setCreatePostInputText] = useState("");
    const [allowSubmit, setCreatePostAllowSubmit] = useState(false);

    const handleInputTextChange = useCallback(() => {
        setCreatePostInputText(inputContentEditableRef.current.innerText);
        setCreatePostAllowSubmit(inputContentEditableRef.current.innerText.trim().length > 0);
    }, []);

    useEffect(() => {
        const range = document.createRange();
        const selection = window.getSelection();
        range.selectNodeContents(inputContentEditableRef.current);
        range.collapse(false);
        selection.removeAllRanges();
        selection.addRange(range);
    }, [inputText]);

    return { inputContentEditableRef, inputText, setCreatePostInputText, setCreatePostAllowSubmit, allowSubmit, handleInputTextChange };
}

export default useContentEditable;