import React from "react";
import ReactDOM from "react-dom";


//CSS
import './index.css';


// Setup vars
const books = [{
  img: 'https://images-eu.ssl-images-amazon.com/images/I/51MVWaLLR7L._AC_SX184_.jpg',
  title: 'random title',
  author: 'Sheela Tomy, Jayasree Kalathil'
},
{
  img: 'https://images-eu.ssl-images-amazon.com/images/I/51n+AbmGcFL._AC_SX184_.jpg',
  title: 'House of Sky and Breath (Crescent City)House of Sky and Breath',
  author: 'Sarah J. Maas'
},
{
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

        const {img,title,author}=book;
        return (
          <Book book={book}></Book>

        );
      })
      }
    </section>
  );
}

//props structuring
const Book = (props) => {
  const {img,title,author,children}=props.book;
  return (
    <article className="book">
      <img
        src={img}
        alt=""
      />
      {children}
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};



ReactDOM.render(<BookList />, document.getElementById("root"));
