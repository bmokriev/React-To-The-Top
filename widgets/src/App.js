import Accordion from './components/Accordion';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript library',
  },
  {
    title: 'Why use React?',
    content: 'React works and is simple. People like React.',
  },
  {
    title: 'How do you use React?',
    content: 'React works by creating components.',
  },
];

    <div>
      <Accordion items={items} />
    </div>
