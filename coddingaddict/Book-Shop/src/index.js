 import React from "react";
import ReactDom from "react-dom";

import "./index.css";

function Booklist() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
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
    <article className='book'>
      <Image></Image>
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src='https://images-na.ssl-images-amazon.com/images/I/91pR9wKJ3zL._AC_UL200_SR200,200_.jpg'
    alt='book cover'
  />
);
const Title = () => (
  <h1>
    Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones
  </h1>
);
const Author = () => <h4>James Clear</h4>;

ReactDom.render(<Booklist />, document.getElementById("root"));
