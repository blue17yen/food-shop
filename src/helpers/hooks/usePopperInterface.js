import { useState, useCallback } from "react";

export const usePopperInterface = () => {
    const [popperReference, setPopperReference] = useState(null);
    const [popperIsOpen, setPopperIsOpen] = useState(false);
    const openPopper = useCallback((newReference) => {
        setPopperReference(newReference);
        setPopperIsOpen(true);
    }, []);
    const closePopper = useCallback(() => {
        setPopperIsOpen(false);
        setPopperReference(null);
    }, []);
    const popperInterface = {
        reference: popperReference,
        isOpen: popperIsOpen,
        openPopper: openPopper,
        closePopper: closePopper,
    };

    return popperInterface;
}