import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class LifeCycle extends Component {

  constructor(props) {
    console.log('constructor')
    super(props);
    this.state = {
      firstName: 'Will',
    };
  }

  static getDerivedStateFromProps(props, state) {
    // console.log('getDerivedStateFromProps', state);
    //   if (props.value !== state.value) {
    //     return {
    //       value: props.value,
    //       ...
    //     };
    //   }
    // return null;
  }

  shouldComponentUpdate() {
    console.log('should Component Update')
    return false;
  }

  componentDidMount() {
    console.log('component did mount')

    // setTimeout(()=>{
    //   this.setState ({
    //     firstName: 'James'
    //   });
    // },2000)
  }

  getSnapshotBeforeUpdate() {
    console.log('get Snapshot Before Update')
  }

  componentDidUpdate() {
    console.log('component did update');
    console.log(this.state.firstName);
  }

  componentWillUnmount() {
    console.log('component Will Unmount');
  }

  fun = async () => {
    await this.setState ({
      firstName: 'James'
    })
    console.log(this.state.firstName);
  }

  render () {
    console.log('render');
    return (
      <>
        <h1 style={{textAlign: 'center'}} >Life Cycle Page</h1>
        <h2>{this.state.firstName ? this.state.firstName : 'Loading ....'}</h2>
        <button onClick={this.fun} >Go to UPDATING phase</button>
        <ul>
          <li>
            <Link to="/BtnClass">Btn class</Link>
          </li>
        </ul>
      </>
    )
  }

}

export { LifeCycle }