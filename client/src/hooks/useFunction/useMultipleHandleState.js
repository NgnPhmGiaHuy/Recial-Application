"use client"

import { useState } from "react";

const useMultipleHandleState = (initialStateFunctions) => {
    const [stateFunctions, setStateFunctions] = useState(initialStateFunctions);

    return stateFunctions;
}

export default useMultipleHandleState;