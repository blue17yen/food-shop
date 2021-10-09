import React, { createContext } from "react";

// components
import { PopperWrapper } from "./PopperWrapper";

// hooks
import { usePopperInterface } from 'helpers/hooks/usePopperInterface';

// CONTEXT
export const ToolsContext = createContext(null)

export const Tools = ({children}) => {
    const popperInterface = usePopperInterface();
    const toolsContextValue = {
        popperInterface: popperInterface,
    };

    return (
        <ToolsContext.Provider value={toolsContextValue}>
            {children}
            <PopperWrapper />
        </ToolsContext.Provider>
    );
}

