"use client"

import { useRef, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";

import { useClickOutside, useToggleState } from "@/hooks";

const useMessageScaffold = () => {
    const buttonRef = useRef(null);
    const deleteRef = useRef(null);
    const deleteScaffoldRef = useRef(null);

    const [showButton, setShowButton] = useState(false);
    const [showDelete, setShowDelete, handleShowDelete] = useToggleState(false);
    const [showDeleteScaffold, setShowDeleteScaffold, handleShowDeleteScaffold] = useToggleState(false);

    const conservationProps = useSelector((state) => state.message.conversation, shallowEqual);

    useClickOutside(deleteRef, showDelete, handleShowDelete);
    useClickOutside(deleteScaffoldRef, showDeleteScaffold, handleShowDeleteScaffold);

    return { buttonRef, deleteRef, deleteScaffoldRef, showButton, setShowButton, showDelete, handleShowDelete, showDeleteScaffold, handleShowDeleteScaffold, conservationProps };
}

export default useMessageScaffold;