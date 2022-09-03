import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text,setText]=useState('');
  const [isError,setIsError]=useState(false);
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world2';
  // console.log(secondValue);
  

  return <>
  {/* {firstValue}
  {secondValue} */}
  <h1>{text || 'dhruv shah'}</h1>
  <button className='btn' onClick={()=>setIsError(!isError)}>toggle error</button>
  {text  &&  <h1>Hello World</h1>}
  {isError  &&  <h1>Error Showing....</h1>}
  {isError ? <p>there is an error...</p> : <div>
    <h2>there is no error</h2>
  </div> }
  </>
};

export default ShortCircuit;
