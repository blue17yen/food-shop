import { useEffect } from 'react';


export const usePopperOnClickOutside = (ref, handler) => {
    useEffect(() => {
        // popper use state, but no use ref
        // => ref dont have CURRENT property
        const listener = (event) => {
            const target = event.target;
            const contains = ref?.contains(target);

            if (!ref || contains) {
                return;
            }

            handler(event);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, handler]);
};
