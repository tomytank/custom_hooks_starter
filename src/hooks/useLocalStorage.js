import {useState} from 'react';

export const useLocalStorage = key => {
    const [value, setValue] = useState(window.localStorage.getItem(key));

    // resets values on local storage and state to zero
    const setStateAndLocalStorage = newValue => { // combining localstorage and state setting together
        setValue(newValue); //setting state value
        window.localStorage.setItem(key, newValue) //setting localstorage value
    };
    const handleValueChanges = e => {// provides webpage independent data persistance
        setValue(e.target.value);//sets 'real time' state value
        window.localStorage.setItem(key, JSON.stringify(e.target.value));//sets 'real time' localstorage value
    };

    



    // const onlyStringValue = value => {
    //     // if(value === )
    //     try {
    //         JSON.parse(value);
    //         catch (e) {
    //             return JSON.stringify(value);
    //         }
    //         return JSON.parse(value);
    //     }

    // }
    console.log("value is ",value);
    const parseValue = (value ? JSON.parse(value) : null)

    return [ parseValue , setStateAndLocalStorage, handleValueChanges];
};

