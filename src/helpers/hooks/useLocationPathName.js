import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";

export function useLocationPathName() {
    const {  pathname } = useLocation();
    const [categoryName, setCategoryName] = useState();
    
    useEffect(() => {
        const name = pathname.split("/")[2];
        setCategoryName(name)
    }, [pathname])

    return categoryName;
}

