import React from 'react'
import './Section6.css'
import product from './product.png'
import front from './front.png'
import back from './back.png'

function Section6() {
  return (
    <div className='section6'>
      <div className='row1'>
        <header className='header4'>Future-proof Skills</header>
        <button className='row1-btn'>Show All</button>
      </div>
      <div className='row2'>
        <button className='btn-all'>All Program</button>
        <button className='btn-design'>UI/UX Design</button>
        <button className='btn-product'>Product Management</button>
        <button className='btn-branding'>Branding Design </button>
        <button className='btn-mobile'>Mobile Development</button>
        <button className='btn-web'>Web Development</button>
      </div>
      <div className='row3'>
        <div className='card'>
            <img src={product} alt='Product' className='product' />
            <p className='card-date'>1 - 28 July 2022</p>
            <h3 className='card-head'>Product Management Basic - Course</h3>
            <p className='card-body'>Product Management Masterclass, you will learn with Sarah Johnson - Head 
                of Product Customer Platform Gojek Indonesia.</p>
            <div className='card-price'>
                <p className='price'>$ 380</p>
                <button className='card-show'>Show All</button>
            </div>
        </div>
        <div className='card'>
            <img src={front} alt='Front' className='front' />
            <p className='card-date'>1 - 28 July 2022</p>
            <h3 className='card-head'>Front End Developer - Basic</h3>
            <p className='card-body'>Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. Sed eget magna enim fermentum porttitor.</p>
            <div className='card-price'>
                <p className='price'>$ 380</p>
                <button className='card-show'>Show All</button>
            </div>
        </div>
        <div className='card'>
            <img src={back} alt='Back' className='back' />
            <p className='card-date'>1 - 28 July 2022</p>
            <h3 className='card-head'>Back End Developer - Basic</h3>
            <p className='card-body'>Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. Sed eget magna enim fermentum porttitor.</p>
            <div className='card-price'>
                <p className='price'>$ 380</p>
                <button className='card-show'>Show All</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Section6
