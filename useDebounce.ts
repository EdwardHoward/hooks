import { useState, useEffect } from 'react';

function useDebounce(value, delay){
   const [debouncedValue, setDebouncedValue] = useState(value);

   useEffect(() => {
      const timeout = setTimeout(() => {
         setDebouncedValue(value);
      }, delay);

      return () => {
         clearTimeout(timeout);
      }
   }, [value]);

   return debouncedValue;
}

export default useDebounce;
