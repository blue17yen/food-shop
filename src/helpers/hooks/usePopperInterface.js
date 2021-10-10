import { useState, useCallback } from "react";

export const usePopperInterface = () => {
    const [popperState, setPopperState] = useState({
        popperReference: null,
        popperIsOpen: false,
        popperVariant: null,
        popperItemsList: null,
        popperValue: null,
        popperCallback: null,
    });

    const openPopper = useCallback(
        ({ newReference, variant, content, value, callback }) => {
            setPopperState((prev) => ({
                popperReference: newReference,
                popperIsOpen: true,
                popperVariant: variant,
                popperItemsList: content,
                popperValue: value,
                popperCallback: callback,
            }));
        },
        []
    );
    const closePopper = useCallback(() => {
        setPopperState((prev) => ({
            popperReference: null,
            popperIsOpen: false,
            popperVariant: null,
            popperItemsList: null,
            popperValue: null,
            popperCallback: null,
        }));
    }, []);
    const popperInterface = {
        reference: popperState.popperReference,
        isOpen: popperState.popperIsOpen,
        variant: popperState.popperVariant,
        itemsList: popperState.popperItemsList,
        value: popperState.popperValue,
        callback: popperState.popperCallback,
        openPopper: openPopper,
        closePopper: closePopper,
    };

    return popperInterface;
}