import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail 
          author="Sam" 
          timeAgo="Today at 13:44" 
          comment="Nice post!" 
          img={faker.image.avatar()}/>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail 
          author="Alex" 
          timeAgo="Today at 14:24" 
          comment="Great topic!" 
          img={faker.image.avatar()}/>
      </ApprovalCard>
      
      <ApprovalCard>
        <CommentDetail 
          author="Tony" 
          timeAgo="Today at 14:45" 
          comment="Amazing content!" 
          img={faker.image.avatar()}/>
      </ApprovalCard>
      
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);

