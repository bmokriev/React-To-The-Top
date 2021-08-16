import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail 
        author="Sam" 
        timeAgo="Today at 13:44" 
        comment="Nice post!" 
        img={faker.image.avatar()}/>
      <CommentDetail 
        author="Alex" 
        timeAgo="Today at 14:24" 
        comment="Great topic!" 
        img={faker.image.avatar()}/>
      <CommentDetail 
        author="Tony" 
        timeAgo="Today at 14:45" 
        comment="Amazing content!" 
        img={faker.image.avatar()}/>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);

