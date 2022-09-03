import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarsons';
const MultipleReturns = () => {
  const [isLoading,setLoading]=useState(true);
  const [isError,setIsError]=useState(false);
  const [user,setUser]=useState('deafult user');

  useEffect(()=>{
    fetch(url).
    then((resp)=>
    {
      if(resp.status>=200 && resp.status<=299)
      resp.json()
      else{
        setLoading(false);
        setIsError(true);
        throw new Error(resp.statusText);  
      }
    }).
    then((user)=>{
      const {login}=user;
      setUser(login);
      setLoading(false);
    }).
    catch((err)=>{console.log(err);});
  },[]);

  if(isLoading){
    return <h2>loading....</h2>;
  }

  if(isError){
    return <h2>Error....</h2>
  }

  return <h2>{user}</h2>
};

export default MultipleReturns;
