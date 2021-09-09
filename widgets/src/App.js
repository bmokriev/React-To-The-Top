import React, { useState } from 'react';

// import Accordion from './components/Accordion';
// import Search from './components/Search';
// import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

// const items = [
//   {
//     title: 'What is React?',
//     content: 'React is a front end javascript library',
//   },
//   {
//     title: 'Why use React?',
//     content: 'React works and is simple. People like React.',
//   },
//   {
//     title: 'How do you use React?',
//     content: 'React works by creating components.',
//   },
// ];

const options = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'The Color Blue',
    value: 'blue',
  },
];

const App = () => {
  return (
    <div>
      <Translate />
    </div>
  );
};

export default App;
