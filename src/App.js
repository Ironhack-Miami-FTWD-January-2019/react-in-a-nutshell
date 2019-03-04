import React, { Component } from "react";
import "./App.css";
import OtherComponent from "./otherFile.js"
import User from "./User"
import DynamicList from "./DynamicList"
//Whatever JS YOU WATN
import ReactPlayer from "react-player";
import { listItems, MoviesList } from './ListDemo';



class App extends Component {
  state = { 
        loggedIn:false,
        color: 'blue'
      }

  whatIsThis = () => {
    console.log("this is ",this)
    this.setState({
      loggedIn:!this.state.loggedIn,
      color: "#"+((1<<24)*Math.random()|0).toString(16)
    })
  }
  showUser = () => {
    if(this.state.loggedIn){
      return (
        <div>
        <ReactPlayer url="https://vimeo.com/channels/top/22439234" />
        <User color={this.state.color} firstName="Guillermo" />
        </div>
      )
    } else {
      return 'not logged in'
    }
  }

  render() {

    return (
      <div className="App">
        <h1> Hello Ironhackers! </h1>
        <ul>
          <MoviesList />
        </ul>
        <ul>{ listItems }</ul>

        <button onClick={this.whatIsThis}>What is this???</button>
        {this.showUser()}


        <h2>Dynamic List</h2>
        <DynamicList />
      </div>
    );
  }

}

export default App;

// import React, { Component } from "react";
// import "./App.css";
// import otherComponents from "O"

// //Whatever JS YOU WATN


// class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { 
  //     "older of way of doing this":true,
  //     "loggedIn":false
  //   }
  //   this.whatIsThis = this.whatIsThis.bind(this)
  // }


//     sayHello = () => {
//         alert('hello')
//     }
//     render() {
//         const formatName = (user) => {
//             console.log('the user is',user)
//           return `${user.firstName} ${user.lastName}, ${user.avatarUrl}`;
//         }


//         const user = {
//             firstName: 'Harper',
//             lastName: 'Perez',
//             avatarUrl:'https://previews.123rf.com/images/macrovector/macrovector1605/macrovector160500601/56987892-hand-drawn-poster-of-business-wolf-in-suit-portrait-on-blue-background-fashion-vector-illustration.jpg'
//           };

//           const displayAvartar = (user) => {
//               console.log('is display avatar working', user)
//             if(user.avatarUrl){
//               return <img src={user.avatarUrl} />
//             } else {
//               return <img src='https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png' width='300' height='300'/>
//             }
//           }

//         const element = (
//             <h2>
//               Hello, guys!! {formatName(user)}
//             </h2>
//           );



//         return (
//           <div className="App">
//             <h1> Hello Ironhackers! </h1>
//             {element}
//             {displayAvartar(user)}
//             {weirdThnkgYoullneverDo}
//           </div>
//         );
//       }

// }

// export default App;