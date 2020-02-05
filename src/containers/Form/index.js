import React, {useState} from 'react';

export const Form = () => {
  const [formData, SetFormData ] = useState({firstname:'', lastname:'', email:''});
  const [show, setShow] = useState(false);

  const submit = () => {
    if(!show)
    setShow(true);
    return (
      <>
        <h2>{formData.firstname}</h2>
        <h2>{formData.lastname}</h2>
      </>
    )
  }

  const onChangeFunction = (e) => {
    const { name, value } = e.target;
    SetFormData({ ...formData, [name]: value}); 
  }

  return (
    <>
    <form>
      <input 
        type='text' 
        name='firstname'
        value={formData.firstname}
        onChange={onChangeFunction} 
      />
      <br/>
      <input 
        type='text' 
        name='lastname'
        value= {formData.lastname}
        onChange={onChangeFunction} 
      />
      <br/>
      <input 
        type='text' 
        name='email'
        value= {formData.email}
        onChange={onChangeFunction} 
      />
      <br/>
      <input type='button' onClick={submit} value = 'click me'  />
    </form>
    {
      show &&
      submit()
    }
    </>
  );
}
