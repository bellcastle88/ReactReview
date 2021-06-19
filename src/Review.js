import React, { useState } from 'react';
import people from './data';
// npm install react-icons --save : React아이콘 사용하기
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  // people변수에 index설정
  const { name, job, image, text } = people[index];

  // review 목록을 벗어날때 error가 나지 않도록
  const checkNumber = (number) => {
    if (number > people.length -1) {
      return 0;
    }
    if (number < 0) {
      return people.length -1;
    }
    return number;
  };

  // 다음 riview 불러오기
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index +1;
      return checkNumber(newIndex);
    });
  };

  // 이전 riview 불러오기
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index -1;
      return checkNumber(newIndex);
    });
  };

  // ramdom 목록 불러오기
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if(randomNumber === index){
      randomNumber = index +1 
    }
    setIndex(checkNumber(randomNumber))
  };

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          {/* React Icon 사용하기 */}
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      {/* p.job : shortCut */}
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      {/* 이전/다음 버튼 추가 */}
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      {/* Random버튼 추가 */}
      <button className="random-btn" onClick={randomPerson}>suprise me</button>
    </article>
  );
};

export default Review;
