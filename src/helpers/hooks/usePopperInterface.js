import { useState, useRef, useCallback } from "react";

export const usePopperInterface = () => {
    const [popperReference, setPopperReference] = useState(null);
    const [popperIsOpen, setPopperIsOpen] = useState(false);
    const [popperVariant, setPopperVariant] = useState(null);
    const [popperItemsList, setPopperItemsList] = useState(null);
    const [popperValue, setPopperValue] = useState(null);
    const popperCallback = useRef(null);

    const openPopper = useCallback(
        ({ newReference, variant, content, value, callback }) => {
            if (newReference !== popperReference) {
                setPopperReference(newReference);
            }
            setPopperVariant(variant);
            setPopperItemsList(content);
            setPopperValue(value);
            popperCallback.current = callback;
            setPopperIsOpen(true);
        },
        []
    );
    const closePopper = useCallback(() => {
        setPopperIsOpen(false);
        setPopperVariant(null);
        setPopperItemsList(null);
        setPopperValue(null);
        popperCallback.current = null;
        setPopperReference(null);
    }, []);
    const popperInterface = {
        reference: popperReference,
        isOpen: popperIsOpen,
        variant: popperVariant,
        itemsList: popperItemsList,
        value: popperValue,
        callback: popperCallback.current,
        openPopper: openPopper,
        closePopper: closePopper,
    };

    console.table([{popperReference,
        popperIsOpen,
        popperVariant,
        popperItemsList,
        popperValue,
        'callback': (popperCallback.current)}])

    return popperInterface;
}