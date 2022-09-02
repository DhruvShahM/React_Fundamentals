import React from "react";
import ReactDOM from "react-dom";


//CSS
import './index.css';


// Setup vars
const books = [
  {
    id:1,
    img: 'https://images-eu.ssl-images-amazon.com/images/I/51MVWaLLR7L._AC_SX184_.jpg',
    title: 'random title',
    author: 'Sheela Tomy, Jayasree Kalathil'
  },
  {
    id:2,
    img: 'https://images-eu.ssl-images-amazon.com/images/I/51n+AbmGcFL._AC_SX184_.jpg',
    title: 'House of Sky and Breath (Crescent City)House of Sky and Breath',
    author: 'Sarah J. Maas'
  },
  {
    id:3,
    img: 'https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UY327_FMwebp_QL65_.jpg',
    title: 'The Psychology of Money',
    author: 'Morgan Housel '
  }
];
// const author='Sheela Tomy, Jayasree Kalathil';
// const title='Valli A NovelValli A NovelValli A Novel';
// const img='https://images-eu.ssl-images-amazon.com/images/I/51MVWaLLR7L._AC_SX184_.jpg';
const names = ['dhruv', 'shah', 'deep'];



function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        const {id}=book;
        // Key Prop And Spread Operator 
        return (
          <Book key={id} {...book}></Book>

        );
      })
      }
    </section>
  );
}

//props structuring
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



ReactDOM.render(<BookList />, document.getElementById("root"));
