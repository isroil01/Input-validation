import  { useState } from 'react';



const useInput = (validateValue) =>{
    const [enterValue,setEnterValue] = useState('');
    const [IsTouched,setIsTouched] = useState(false);

    const valueIsValid = validateValue(enterValue);
    const hasError = !valueIsValid && IsTouched;

    const valueChangeHandeler = (e) =>{
        setEnterValue(e.target.value);
      };

    const InputBlurHandeler = () =>{
        setIsTouched(true)
      }
    
    const reset = () =>{
        setEnterValue('');
        setIsTouched(false);
    }

    return {
        value: enterValue, hasError,valueChangeHandeler,InputBlurHandeler,valueIsValid,reset
    }
};

export default useInput;