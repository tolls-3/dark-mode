import useLocalStorage from "./useLocalStorage";
import { useEffect } from 'react'

export default function useDarkMode(key) {
  const [inputValue, setInputValue] = useLocalStorage(key)

  useEffect(()=>{
    if (inputValue){
        document.querySelector('body').classList.add('dark-mode')
    }else{
        document.querySelector('body').classList.remove('dark-mode')
    }
  },[inputValue])

  return [inputValue, setInputValue]
}



































// import { useLocalStorage } from "./useLocalStorage";
// import { useEffect } from "react";

// export const useDarkMode = key => {
//   const [inputValue, setInputValue] = useLocalStorage(key);

//   useEffect(() => {
//     if (inputValue === true) {
//       document.querySelector("body").classList.add("dark-mode");
//     } else {
//       document.querySelector("body").classList.remove("dark-mode");
//     }
//   }, [inputValue]);

// //   const onInputChange = evt => {
// //     setInputValue(evt.target.value);
// //   };
//   return [inputValue, setInputValue];
// };
