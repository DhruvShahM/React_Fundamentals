import React from "react"
import ReactDOM from 'react-dom'


// Nested Components, React tools

function Greeting() {
  return (
    <div>
      <h1>Hello world</h1>
      <Person/>
      {/* <p>this is my message</p> */}
      <Message/>
    </div>
  );
}


// const Person=()=>{
//   return <h2>John doe</h2>
// }

const Person=()=> <h2>John doe</h2>
const Message=()=>{
  return <p>This is my message</p>
}


ReactDOM.render(<Greeting/>,document.getElementById('root'));