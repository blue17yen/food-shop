import React, { createContext } from "react";

// components
import { PopperDropDown } from "../blocks/DropDown/PopperDropDown";

// hooks
import { usePopperInterface } from './../../helpers/hooks/usePopperInterface';




export const ToolsContext = createContext(null)

export const Tools = ({children}) => {
    const popperInterface = usePopperInterface();


    const toolsContextValue = {
        popperInterface: popperInterface,
    };

    return (
        <ToolsContext.Provider value={toolsContextValue}>
            {children}
            <PopperDropDown />
        </ToolsContext.Provider>
    );
}

