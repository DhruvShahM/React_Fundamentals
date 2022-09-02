import React from "react";
import ReactDOM from "react-dom";


//CSS
import './index.css';


// Setup vars
const author='Sheela Tomy, Jayasree Kalathil';
const title='Valli A NovelValli A NovelValli A Novel';
const img='https://images-eu.ssl-images-amazon.com/images/I/51MVWaLLR7L._AC_SX184_.jpg';

function BookList() {
  return (
    <section className='booklist'>
      <Book/>
      <Book/>
      <Book/>

    </section>
  );
}


const Book = () => {
  return (
    <article className="book">
      <img
        src={img}
        alt=""
      />
      <h4>{author.toUpperCase()}</h4>
      <h1>{title}</h1>
      {/* <p>{let x=6}</p> */}
      <p>{6+6}</p>
    </article>
  );
};



ReactDOM.render(<BookList />, document.getElementById("root"));
