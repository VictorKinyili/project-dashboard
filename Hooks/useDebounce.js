import {useState, useEffect} from "react";

// useDebounce is used to delay a function until a user stops changing a value

function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

// debouncedValue-value that gets updated after the user stops typing for the specific delay
    
    useEffect (
        ()=> {
            const timer = setTimeout(()=> {setDebouncedValue(value);}
       , delay );

       return () => {
        clearTimeout (timer);
                    }; 
              },

       [value, delay] // dependency array-tells react to run useEffect again if there are changes

   );
    return debouncedValue;

}

export default useDebounce;