import React from 'react'

const Book = ({img,title,author,children}) => {
  //attribute, eventhandler
  // onClick, onMouseOver
  const clickHandler=(event)=>{
    console.log(event);
    console.log(event.target);

    alert('hello world');
  };

  const complexExample=(author)=>{
    console.log(author);
  }
  
  return (
    <article className="book" onMouseOver={()=>{
      console.log(title);
    }}>
      <img
        src={img}
        alt=""
      />
      {children}
      <h1 onClick={()=>console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>reference example</button>
      <button type="button" onClick={()=> complexExample(author)}>More Complex Example</button>

    </article>
  );
};

export default Book
