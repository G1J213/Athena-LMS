import React from 'react'
import './Section2.css'
import athena from './athena.png'
import aws from './aws.png'
import azure from './azure.png'
import clmp from './clmp.png'
import google_cloud from './google_cloud.png'
import software1 from './software1.png'

function Section2() {
  return (
    <div className='section2'>
      <div className='part1'>
      <img src={aws} alt="AWS" className='aws'/>
      <img src={google_cloud} alt="Google_Cloud" className='google_cloud'/>
      <img src={azure} alt="Azure" className='azure'/>
      </div>
      <div className='part2'>
      <img src={software1} alt="Software1" className='software1'/>
      <img src={athena} alt="Athena" className='athena'/>
      <img src={clmp} alt="Athena" className='clmp'/>
      </div>
    </div>
  )
}

export default Section2
