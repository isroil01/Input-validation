import useInput from '../hooks/use-input';


const SimpleInput = (props) => {

 const {reset,valueIsValid: enterNameIsValid,value: enterName, hasError: nameInputHasError, valueChangeHandeler: nameChangeHandeler, InputBlurHandeler: nameInputBlur} = useInput(value => value.trim() !== '');

let formIsValid = false;

  if(enterNameIsValid){
    formIsValid = true;
  }
 

  const onSubmitHandeler = (e) =>{
    e.preventDefault();


    if(!enterNameIsValid){
      return;
    }

    reset()
  }

 
  const nameInputClass = nameInputHasError? 'form-control invalid' : 'form-control '

  return (
    <form onSubmit={onSubmitHandeler}>
      <div className={nameInputClass}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name'  onChange={nameChangeHandeler} onBlur={nameInputBlur} value={enterName} />
        {nameInputHasError && <p className='error-text'>Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
