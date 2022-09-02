import React from "react";
import ReactDOM from "react-dom";


//CSS
import './index.css';

//books data import from the different files
import {books} from  './10-Import_Export_Statements/books';

// import Book from  './10-Import_Export_Statements/Book';

// renaming the imported file
import SpecificBook from  './10-Import_Export_Statements/Book';


// testing file and getting the values from the files
import {greeting} from './10-Import_Export_Statements/testing/testing';



function BookList() {
  console.log(greeting);
  return (
    <section className='booklist'>
      {books.map((book) => {
        const {id}=book;
        return (
          <SpecificBook key={id} {...book}></SpecificBook>

        );
      })
      }
    </section>
  );
}





ReactDOM.render(<BookList />, document.getElementById("root"));
