"use client"

import { useEffect } from "react";

const useResetInput = (inputRef, inputText, setInputText, setAllowSubmit, submitStatus, setSubmitStatus, setSelectedImages) => {
    useEffect(() => {
        const resetInput = () => {
            setInputText("");
            setAllowSubmit(false);
            setSubmitStatus(false);
            setSelectedImages();

            if (inputRef.current) {
                inputRef.current.innerText = "";
            }
        };

        if (submitStatus) {
            resetInput();
        }
    }, [submitStatus, setInputText, setAllowSubmit, setSubmitStatus, inputRef]);
};

export default useResetInput;
