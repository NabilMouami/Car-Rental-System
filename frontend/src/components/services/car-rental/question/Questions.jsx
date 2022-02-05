import React, { useState } from 'react';
import data from './data-question';
import SingleQuestion from './Question';
import './style.css';
function Questions() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className='contnr'>
        <h3>questions and answers about login</h3>
        <section className='info'>
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default Questions;