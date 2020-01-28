import React, { Component } from 'react';
import { Button } from '../../components/ButtonClass';
import styles from './BtnClass.module.scss';
 
class BtnClass extends Component {
  render () {
    return (
      <>
        {/* default */}
        <Button>Click</Button>
  
        {/* colors */}
        <br/>
        <br/>
        <Button color='green'>Click</Button>
        <Button className={styles.color_red} color='warning'>Click</Button>
        <Button color='success'>Click</Button>
  
        {/* size */}
        <br/>
        <br/>
        <Button color='danger' size='big'>Click</Button>
        <Button color='warning' size='normal'>Click</Button>
        <Button color='success' size='small'>Click</Button>
  
        {/* radius */}
        <br/>
        <br/>
        <Button radius='yes' >Click</Button>
  
        {/* radius */}
        <br/>
        <br/>
        <Button link >Click</Button>    
      </>
    )
  }
}
export default BtnClass;