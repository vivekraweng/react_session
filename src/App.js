//css with out module

// import React, {useEffect, useState} from 'react';
// import './App.css';
// function App() {

//   const [name, setName ] =useState(false);

//   useEffect(()=>{
//     console.log('Hellow world')
//   },[name])

//   const fun = () => {
//     console.log('hiiiiiiiiiiiiii');
//     setName(true);
//   }
//   return (
//     <>
//       <h1 className='color_red'>{name}</h1>
//       <input type='text' value='Hello world' />
//       <button onClick={()=>setName(true)} >click</button>
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


// import React from 'react';
// import { Button } from './components/Button';
// import styles from './App.module.css'; 
// function App() {
//   return (
//     <>
//       {/* default */}
//       <Button>Click</Button>

//       {/* colors */}
//       <br/>
//       <br/>
//       <Button color='green'>Click</Button>
//       <Button className={styles.color_red} color='warning'>Click</Button>
//       <Button color='success'>Click</Button>

//       {/* size */}
//       <br/>
//       <br/>
//       <Button color='danger' size='big'>Click</Button>
//       <Button color='warning' size='normal'>Click</Button>
//       <Button color='success' size='small'>Click</Button>

//       {/* radius */}
//       <br/>
//       <br/>
//       <Button radius='yes' >Click</Button>

//       {/* radius */}
//       <br/>
//       <br/>
//       <Button link >Click</Button>    
//     </>
//   )
// }
// export default App;

// <==================================================== Class component =================================================>

// simple component

// import React , {Component} from 'react';
// class App extends Component {
//   render() {
//     return ( 
//       <h1>Hello world</h1> 
//     );
//   }
// }

// export default App;

// With state

// import React , {Component} from 'react';
// class App extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       firstName: 'Ram',
//       lastName: 'Prashad',
//       email: 'Ram@gmail.com',
//     };
//   }

//   render() {
//     return ( 
//     <h1>Hello {this.state.firstName} {this.state.lastName}</h1> 
//     );
//   }
// }

// export default App;

// set state 

// import React , {Component} from 'react';
// class App extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       firstName: '',
//       lastName: '',
//       email: '',
//       num: []
//     };
//   }

//  fun = () => {
//     this.setState({
//       firstName: 'Ram',
//       lastName: 'prashad',
//       email: 'ram@gmail.com',
//       num:['1']
//     })
//   }

//   fun1 = () => {
//     this.setState({
//       num: [...this.state.num, '2']
//     })
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.fun} >Click me to set state</button>
//         <button onClick={this.fun1} >Click to add</button>
//         {
//           this.state.firstName &&
//           this.state.lastName &&
//           this.state.email &&
//           this.state.num &&
//           <div>
//             <h1>First name:- {this.state.firstName} {this.state.lastName}</h1>
//             <h1>Last name:- {this.state.lastName}</h1>
//             <h1>First name:- {this.state.email}</h1>
//             <h1>Num:- {this.state.num}</h1>
//           </div>
//         }
//       </div> 
//     );
//   }
// }

// export default App;

import React, { useState, useMemo } from 'react';
import { Switch, Route, withRouter } from 'react-router';
import { LifeCycle } from './containers/LifeCycle';
import BtnClass from './containers/BtnClass';
import { HomePage } from './containers/Home';
import { UseRef } from './containers/UseRef';
import { Form } from './containers/Form';
import { ContextHookHome } from './containers/contextHook/home';
import { ContextHookAbout } from './containers/contextHook/about';
import { UserContext, loginContext } from './userContext';

const App = () => {
  const [value, setValue] = useState('Hello from contetext hook');
  const [loginValue, setLoginValue] = useState('Hello from login context hook');
  const providedValue = useMemo(()=>([value, setValue]),[value, setValue]);
  const providedLogonValue = useMemo(()=>([loginValue, setLoginValue]),[loginValue, setLoginValue]);
  return (
    <Switch>
      <UserContext.Provider value={providedValue}>
        <loginContext.Provider value={providedLogonValue}>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/LifeCycle" component={LifeCycle} />
          <Route exact path="/BtnClass" component={BtnClass} />
          <Route exact path="/UseRef" component={UseRef} />
          <Route exact path="/Form" component={Form} />
          <Route exact path="/contextHook/home" component={ContextHookHome} />
          <Route exact path="/contextHook/about" component={ContextHookAbout} />
        </loginContext.Provider>
      </UserContext.Provider>
    </Switch>
  ) 
};

export default withRouter((App));
