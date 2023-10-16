import React from 'react';
import FAQs from './Components/FAQS/FAQSLIST';
import PasswordManger from './Components/PasswordManger';

const faqsList = [
  {
    id: 1,
    questionText: 'What is React?',
    answerText: 'React is a JavaScript library for building user interfaces.',
  },
  {
    id: 2,
    questionText: 'How do I install React?',
    answerText: 'You can install React using npm or yarn.',
  },
  {
    id: 3,
    questionText: 'Is React a framework?',
    answerText: 'No, React is not a framework, it is a library for building UI components.',
  },
  {
    id: 4,
    questionText: 'What are props in React?',
    answerText: 'Props are a way to pass data from parent to child components in React.',
  },
];

function App() {
  return (
    <div className="App">
      <FAQs faqsList={faqsList} />
      <PasswordManger/>
      
    </div>
  );
}

export default App;