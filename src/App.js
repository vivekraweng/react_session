//css with out module

// import React from 'react';
// import './App.css';
// function App() {
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

// import React, {useState} from 'react';
// import { Hello } from './components/HelloName';

// function App() {
//   const [name, setName] = useState('');

//   const nameValue = (data) => {
//     setName(data)
//   }

//   return (
//     <>
//       <Hello name={name} />
//       <input type='button' value='click me' onClick={() => nameValue('vivek')} />
//     </>
//   )
// }

// export default App;

//Second combine of props and state

import React, {useState} from 'react';
import { HtmlElement } from './components/HtmlElement';

function App() {
  const [value, setValue ] = useState(0);

  const inc = () => {
    setValue(value + 1)
  }

  return (
    <>
      <HtmlElement 
        type='text' 
        value={value} 
        style={{color:'red', padding: '10px', border: '1px solid #ccc', borderRadius: '1px'}}
        className='color_name' 
      /> 
      <br/>
      <HtmlElement type='button' value = 'click me' onClick={inc}  />
    </>
  );
}

export default App;
