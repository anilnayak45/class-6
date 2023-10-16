import React, { useState, useEffect } from 'react';
import './index.css';

const FAQs = ({ faqsList }) => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

 
  useEffect(() => {

  }, [expandedFAQ]);

  const toggleFAQ = (id) => {
    if (expandedFAQ === id) {
      setExpandedFAQ(null);
    } else {
      setExpandedFAQ(id);
    }
  };

  return (
    <div className='bg-container'>
      <h1>FAQs</h1>
    <div className="faqs-container">
      {faqsList.map((faq) => (
        <div key={faq.id} className="faq-item">
          <div className='faq-QA'>
          <div
            className="faq-question "
            onClick={() => toggleFAQ(faq.id)}
          >
           
            {faq.questionText}
            <img className='img'
              src ={ 
                expandedFAQ === faq.id
                  ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
              }
              alt={
                expandedFAQ === faq.id
                  ? 'minus'
                  : 'plus'
              }
            />
          </div>
              <hr></hr>
          {expandedFAQ === faq.id && (
          
            <div className="faq-answer">{faq.answerText}</div> 
            
          )}
       
        </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default FAQs;
