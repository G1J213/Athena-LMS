import React from 'react'
import './Section3.css'
import subject1 from './subject1.png'
import subject2 from './subject2.png'
import subject3 from './subject3.png'
import stars from './stars.png'
import arrow from './arrow.png'

function Section3() {
  return (
    <div className='section3'>
      <div className='item1'>
        <header className='item1-header'>Lorem Ipsum Dolor</header>
        <p className='item1-body'>Sed ut perspiciatis unde omnis iste</p>
        <div className='item1-show'>
            <p>Show More</p>
            <img src={arrow} alt="Arrow" className='arrow'/>
        </div>
      </div>
      <div className='div_mobile'>
        <div className='subject1'>
          <img src={subject1} alt="Subject1" className='subject_1'/>
          <header className='subject-header'>Subject1</header>
          <p className='subject-body'>Lorem Ipsum</p>
          <img src={stars} alt="Stars" className='stars'/>
        </div>
        <div className='subject2'>
          <img src={subject2} alt="Subject2" className='subject_2'/>
          <header className='subject-header'>Subject2</header>
          <p className='subject-body'>Lorem Ipsum</p>
          <img src={stars} alt="Stars" className='stars'/>
        </div>
      </div>
      <div className='subject3'>
        <img src={subject3} alt="Subject3" className='subject_3'/>
        <header className='subject-header'>Subject3</header>
        <p className='subject-body'>Lorem Ipsum</p>
        <img src={stars} alt="Stars" className='stars'/>
      </div>
    </div>
  )
}

export default Section3
