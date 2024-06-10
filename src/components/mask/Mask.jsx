import React from 'react'
import './mask.css';
import Screenshot from '../../images/Screenshot.png'
import Portfolio1 from '../../images/Portfolio1.png'
import Portfolio from '../../images/Portfolio.png'
import Portfolio2 from '../../images/Portfolio2.png'

const Mask = () => {
  return (
    <div>
        <div className='mask-container'>
            <div className='mask-img'><img src={Portfolio1} width={400}  alt="unsplashage" /></div>
            <div><img src={Screenshot} width={400}  alt="unsplashage" /></div>
        </div>
        <div className='mask-container'>
            <div><img src={Portfolio} width={400}  alt="unsplashage" /></div>
            <div className='mask-imgin'><img src={Portfolio2} width={400}  alt="unsplashage" /></div>
        </div>
    </div>
  )
}

export default Mask