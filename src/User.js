import React from "react";

let style = {
    color:'green',
    fontSize:'24px'
}

function User(props) {

  return <h2 style={{color:props.color}} >Hello, {props.firstName.toUpperCase()}!</h2>;
}

export default User;