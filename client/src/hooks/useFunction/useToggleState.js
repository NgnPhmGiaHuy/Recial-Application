"use client"

import { useCallback, useState } from "react";

const useToggleState = (initialState) => {
    const [state, setState] = useState(initialState);

    const toggleState = useCallback(() => {
        return setState((prevState) => !prevState);
    }, []);

    return [state, setState, toggleState];
};

export default useToggleState;