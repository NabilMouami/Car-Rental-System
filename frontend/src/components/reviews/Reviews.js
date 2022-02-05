import React from 'react';
import Review from './Review';
import './Review.css'
function Reviews() {
  return (
    <main>
      <section className='Container'>
        <div className='title'>
          <h2>our reviews</h2>
          <div className='underline'></div>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default Reviews;