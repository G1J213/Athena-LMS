import React from 'react'
import './Section8.css'
import plan1_check from './plan1-check.png'
import plan1_cross from './plan1-cross.png'
import plan2_check from './plan2-check.png'
import plan2_cross from './plan2-cross.png'

function Section8() {
  return (
    <div className='section8'>
      <header className='header6'>Get awesome for your daily needs 
      Our Pricing Plan</header>  
      <div className='plans'>
        <div className='plan1'>
            <h3 className='plan-head'>Freebie</h3>
            <p className='plan-body'>Amet minim mollit non deserunt ullamco est sit aliqua dolor.</p>
            <div className='plan-price'>
                <p className='plan-num'>$0</p><p className='plan-month'> / Month</p>
            </div>
            <button className='plan-btn'>Get Started Now</button>
            <div className='plan-list'>
                <div className='plan-list-check'>
                    <img src={plan1_check} alt='Plan1_check' className='plan1-check' />
                    Lorem Ipsum Dolor
                </div>  
                <div className='plan-list-check'>
                    <img src={plan1_check} alt='Plan1_check' className='plan1-check' />
                    Amet minim moliit non
                </div>   
                <div className='plan-list-cross'>
                    <img src={plan1_cross} alt='Plan1_cross' className='plan1-cross' />
                    Lorem Ipsum Dolor
                </div>   
                <div className='plan-list-cross'>
                    <img src={plan1_cross} alt='Plan1_cross' className='plan1-cross' />
                    Lorem Ipsum Dolor
                </div>    
                <div className='plan-list-cross'>
                    <img src={plan1_cross} alt='Plan1_cross' className='plan1-cross' />
                    Lorem Ipsum Dolor
                </div>     
            </div> 
        </div>
        <div className='plan1'>
            <h3 className='plan-head'>Professional</h3>
            <p className='plan-body'>Amet minim mollit non deserunt ullamco est sit aliqua dolor.</p>
            <div className='plan-price'>
                <p className='plan-num'>$25</p><p className='plan-month'> / Month</p>
            </div>
            <button className='plan-btn'>Get Started Now</button>
            <div className='plan-list'>
                <div className='plan-list-check'>
                    <img src={plan1_check} alt='Plan2_check' className='plan2-check' />
                    Lorem Ipsum Dolor
                </div>  
                <div className='plan-list-check'>
                    <img src={plan1_check} alt='Plan2_check' className='plan2-check' />
                    Lorem Ipsum Dolor
                </div>  
                <div className='plan-list-check'>
                    <img src={plan1_check} alt='Plan2_check' className='plan2-check' />
                    Lorem Ipsum Dolor
                </div>  
                <div className='plan-list-check'>
                    <img src={plan1_check} alt='Plan2_check' className='plan2-check' />
                    Unlimited Plan
                </div>  
                <div className='plan-list-cross'>
                    <img src={plan1_cross} alt='Plan2_cross' className='plan2-cross' />
                    Instant Access to our design system
                </div>  
            </div>
        </div>
        <div className='plan1'>
            <h3 className='plan-head'>Enterprise</h3>
            <p className='plan-body'>Amet minim mollit non deserunt ullamco est sit aliqua dolor.</p>
            <div className='plan-price'>
                <p className='plan-num'>$100</p><p className='plan-month'> / Month</p>
            </div>
            <button className='plan-btn'>Get Started Now</button>
            <div className='plan-list'>
                <div className='plan-list-check'>
                    <img src={plan1_check} alt='Plan1_check' className='plan1-check' />
                    Lorem Ipsum Dolor
                </div>  
                <div className='plan-list-check'>
                    <img src={plan1_check} alt='Plan1_check' className='plan1-check' />
                    Lorem Ipsum Dolor
                </div>  
                <div className='plan-list-check'>
                    <img src={plan1_check} alt='Plan1_check' className='plan1-check' />
                    Lorem Ipsum Dolor
                </div>  
                <div className='plan-list-check'>
                    <img src={plan1_check} alt='Plan1_check' className='plan1-check' />
                    Lorem Ipsum Dolor
                </div>  
                <div className='plan-list-check'>
                    <img src={plan1_check} alt='Plan1_check' className='plan1-check' />
                    Lorem Ipsum Dolor
                </div>  
            </div> 
        </div>
      </div>
    </div>
  )
}

export default Section8
