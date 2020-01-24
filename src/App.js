//css with out module

// import React, {useEffect, useState} from 'react';
// import './App.css';
// function App() {

//   useEffect(()=>{
//     console.log('Hellow world')
//   },[])

//   return (
//     <>
//       <h1 className='color_red'>Hello World</h1>
//       <input type='text' value='Hello world' />
//     </>
//   )
// }
// export default App;

//css with modal

// import React from 'react';
// import styles from './App.module.css';
// function App() {
//   return (
//     <div>
//       <h1 className={styles.color_red}>Hello World</h1>
//       <input type='text' defaultValue='Hello world' />
//     </div>
//   )
// }
// export default App;

//inline class

// import React from 'react';
// function App() {
//   return (
//     <div>
//       <h1 style={{color: 'red'}}>Hello World</h1>
//       <input type='text' defaultValue='Hello world' />
//     </div>
//   )
// }
// export default App;

//state

// import React, {useState} from 'react';

// function App() {

//   const [name, setName] = useState('Vivek');

//   return <h1>{name}</h1>
// }

// export default App;

//props

// import React from 'react';
// import { Hello } from './components/HelloName';

// function App() {
//   return (
//     <Hello name='World' />
//   )
// }

// export default App;

//state

// import React, {useState, useEffect} from 'react';
// import { Hello } from './components/HelloName';

// function App() {
//   const [name, setName] = useState(0);
//   const [name2, setName2] = useState(0);

//   useEffect(()=>{
//     setName(name + 1 )
//   },[name2])

//   return (
//     <>
//       <Hello name={name} />
//       <input type='button' value='click me'/>
//     </>
//   )
// }

// export default App;

// //Second combine of props and state

// import React, {useState} from 'react';
// import { HtmlElement } from './components/HtmlElement';

// function App() {
//   const [value, setValue ] = useState(0);

//   const inc = () => {
//     setValue(value + 1)
//   }

//   return (
//     <>
//       <HtmlElement 
        
//         value={value} 
//         style={{color:'red', padding: '10px', border: '1px solid #ccc', borderRadius: '1px'}}
//         className='color_name' 
//       /> 
//       <br/>
//       <HtmlElement type='button' value = 'click me' onClick={inc}  />
//     </>
//   );
// }

// export default App;





// import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     fub
//     return (
//       <div>This is my component.</div>
//     );
//   }
// }

// export default App;

// import React from 'react';
// import './App.css';
// function App() {

//   const fun = () => {
//     return (
//       <>
//       <h1 className='color_red'>Hello World</h1>
//       <input type='text' value='Hello world' />
//       </>
//     )
//   }

//   return (
//     <>
//     <h1 className='color_red'>Hello World</h1>
//     {fun}
//     </>
//   )
// }
// export default App;


// forms 

// import React, {useState} from 'react';

// function App() {
//   const [formData, SetFormData ] = useState({firstname:'', lastname:'', email:''});
//   const [show, setShow] = useState(false);

//   const submit = () => {
//     if(!show)
//     setShow(true);
//     return (
//       <>
//         <h2>{formData.firstname}</h2>
//         <h2>{formData.lastname}</h2>
//       </>
//     )
//   }

//   const onChangeFunction = (e) => {
//     const { name, value } = e.target;
//     SetFormData({ ...formData, [name]: value}); 
//   }

//   return (
//     <>
//     <form>
//       <input 
//         type='text' 
//         name='firstname'
//         value={formData.firstname}
//         onChange={onChangeFunction} 
//       />
//       <br/>
//       <input 
//         type='text' 
//         name='lastname'
//         value= {formData.lastname}
//         onChange={onChangeFunction} 
//       />
//       <br/>
//       <input 
//         type='text' 
//         name='email'
//         value= {formData.email}
//         onChange={onChangeFunction} 
//       />
//       <br/>
//       <input type='button' onClick={submit} value = 'click me'  />
//     </form>
//     {
//       show &&
//       submit()
//     }
//     </>
//   );
// }

// export default App;


import React from 'react';
import { Button } from './components/Button'; 
function App() {
  return <Button>Click</Button>
}
export default App;

