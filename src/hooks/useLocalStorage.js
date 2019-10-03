import { useState } from 'react';

export default function useLocalStorage(key, initialValue){
  const [storedValue, setStoredValue] = useState(()=>{
      const item = window.localStorage.getItem(key);
      if (item){
          return JSON.parse(item)
      }else{
          return initialValue
      }
  })

  function setValue(value){
      window.localStorage.setItem(key, JSON.stringify(value));
      setStoredValue(value);
  }

  return [storedValue, setValue]
}
