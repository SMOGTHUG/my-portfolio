import React from 'react'
import './footer.css';
import Socials from '../../images/Socials.png'

const Footer = () => {
  return (
    <div className='footer-parent'>
        <div>
            <h4>contacts</h4>
            <p>I'm currently looking to join a cross-functional team that values improving people's lives <br/>through accessible design. or have a project in mind? Let's connect.</p>

        </div>
        <div>
            <p>ogunleyeabiolasmog@gmail.com</p>
            <img src={Socials}  alt="unsplashage" />
        </div>
    </div>
  )
}

export default Footer