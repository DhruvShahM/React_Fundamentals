import React from "react"
import ReactDOM from 'react-dom'

//stateless functional component
//always return JSX

// function Greeting(){
//   return (
//     <div>
//     <h1>Hello</h1>
//     </div>
//   );
// }


// JSX Rules 
// return single element 
// div / section / article or Fragment 
// use camelCase for html attribute 
// className insread of class 
// close every element 
// formatting 
function Greeting() {
  return (
    <section>
      {/* <div> */}
    <article>
    {/* <React.Fragment> */}
        <h1>Hello</h1>
        <ul>
          <li>
            <a href="#">Hello World</a>
          </li>
          <img src="" alt="" />
          <input type="text" />
        </ul>
        </article>
      {/* </div> */}
      <div>
        
      </div>
    {/* </React.Fragment> */}
    </section>
  );
}

// const Greeting=()=>{
//   return React.createElement('h1',{},React.createElement('h2',{},'Hello h2'))
// }

ReactDOM.render(<Greeting/>,document.getElementById('root'));
// export 