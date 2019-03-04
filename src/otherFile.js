import React, { Component } from "react";


class OtherComponent extends Component {

  state = {value:'newer and cleaner'}

  // constructor(props) {
  //   super(props);
  //   this.state = {value:'old and confusing'}
  //   //this.sayHello = this.sayHello.bind(this)
  // }

  // sayHello() {
  //   console.log('hello',this)
  // }

  sayHello = () => {
    console.log('hello', this)
  }
  render() {

    return (
      <div className="otherComponent">
        <h1 onClick={this.sayHello}> Other stuff </h1>
      </div>
    );
  }

}

export default OtherComponent;
