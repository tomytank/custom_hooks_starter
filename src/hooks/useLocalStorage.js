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
//         if(key === "") {
//             window.localStorage.clear();
//         };

//     const clear = () => {
//         window.localStorage.clear();
//     }

//   }

    return [value, setStateAndLocalStorage, handleValueChanges];
};


// import { useState } from "react";

// export const useLocalStorage = key => {
//   const [value, setValue] = useState(window.localStorage.getItem(key));

//   const handleChanges = e => {
//     setStateAndLocalStorage(e.target.value);
//   };

//   const setStateAndLocalStorage = newValue => {
//     setValue(newValue); // updates React State
//     window.localStorage.setItem(key, newValue); // updates local storage
//   };

//   return [value, setStateAndLocalStorage, handleChanges];
// };
