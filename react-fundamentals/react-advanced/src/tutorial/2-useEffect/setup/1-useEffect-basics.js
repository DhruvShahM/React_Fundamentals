import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  //it will call the depend on the value changes 
  useEffect(() => {
    if (value >= 1) {
      document.title = `New messages(${value})`;
    }
    console.log('call useEffect');
    
  },[value]);

  // here empty [] bracket indicates intital render
  useEffect(()=>{
    console.log('intital render');
  },[])

  console.log('render component');
  return <>
    <h1>{value}</h1>
    <button className='btn' onClick={() => setValue(value + 1)}>Click me</button>
  </>;
};

export default UseEffectBasics;
