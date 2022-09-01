import React from "react";
import ReactDOM from "react-dom";


//CSS
import './index.css';


// Setup vars
const firstBook = {
  img: 'https://images-eu.ssl-images-amazon.com/images/I/51MVWaLLR7L._AC_SX184_.jpg',
  title: 'random title',
  author: 'Sheela Tomy, Jayasree Kalathil'
};

const secondBook = {
  img: 'https://images-eu.ssl-images-amazon.com/images/I/51n+AbmGcFL._AC_SX184_.jpg',
  title: 'House of Sky and Breath (Crescent City)House of Sky and Breath',
  author: 'Sarah J. Maas'
};
// const author='Sheela Tomy, Jayasree Kalathil';
// const title='Valli A NovelValli A NovelValli A Novel';
// const img='https://images-eu.ssl-images-amazon.com/images/I/51MVWaLLR7L._AC_SX184_.jpg';

function BookList() {
  return (
    // <section className='booklist'>
    //   <Book job="developer"/>
    //   <Book title="random title" number={22}/>
    //   <Book/>

    // </section>
    <section className='booklist'>
      <Book img={firstBook.img} title={firstBook.title} author={firstBook.author} />
      <Book img={secondBook.img} title={secondBook.title} author={secondBook.author} />

    </section>
  );
}


const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img
        src={props.img}
        alt=""
      />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};



ReactDOM.render(<BookList />, document.getElementById("root"));
