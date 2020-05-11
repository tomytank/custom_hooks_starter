import {useState} from 'react';

export const useLocalStorage = key => {
    const [value, setValue] = useState(window.localStorage.getItem(key));

    const setStateAndLocalStorage = newValue => { // combining localstorage and state setting together
        setValue(newValue); //setting state value
        window.localStorage.setItem(key, newValue) //setting localstorage value
    };
    const handleValueChanges = e => {// 
        // console.log("I'm handlveValueChanges function in useLocalStorage")
    window.localStorage.setItem(key, e.target.value);
    setValue(e.target.value);
    };


    return [value, setStateAndLocalStorage, handleValueChanges];
};

