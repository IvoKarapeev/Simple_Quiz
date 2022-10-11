import { useState } from "react";

const useLocalStorige = (key,defaultValue) => {

    const [value,setValue] = useState(() => {
        
        const storigeData = localStorage.getItem('key');

        if (storigeData) {
            return JSON.parse(storigeData);
        } else {
            return defaultValue;
        }

    })

    const setLocalStorige = (newValue) => {
        localStorage.setItem(key,newValue);
        
        setValue(newValue);
    };

    return [
        value,
        setLocalStorige
    ];
    
};

export default useLocalStorige;