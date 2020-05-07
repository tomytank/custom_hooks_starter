import {useState} from 'react';

export const useLocalStorage = key => {
    const [value, setValue] = useState(
        window.localStorage.getItem(key)
        );
    const handleValueChanges = e => {
        // console.log("I'm handlveValueChanges function in useLocalStorage")
    window.localStorage.setItem(key, e.target.value);  
    setValue(e.target.value);
    };

    const setStateAndLocalStorage = newValue => {
        setValue(newValue);
        window.localStorage.setItem(key, newValue)

    };
    return [value, setStateAndLocalStorage, handleValueChanges];
};

