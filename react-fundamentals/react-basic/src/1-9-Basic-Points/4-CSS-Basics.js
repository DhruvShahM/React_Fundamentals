import React from "react";
import ReactDOM from "react-dom";


//CSS
import './index.css';


// Nested Components, React tools

function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />

    </section>
  );  
}

const Book = () => {
  return (
    <article className="book">
      <Image></Image>
      <Title/>
      <Author/>
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-eu.ssl-images-amazon.com/images/I/51MVWaLLR7L._AC_SX184_.jpg"
    alt=""
  />
);

const Title = () => <h1>Valli A NovelValli A NovelValli A Novel</h1>;

const Author = () => <h4>Sheela Tomy, Jayasree Kalathil</h4>;

ReactDOM.render(<BookList />, document.getElementById("root"));
