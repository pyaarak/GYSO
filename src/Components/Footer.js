import React from 'react'
import '../Stylesheets/Footer.scss'
import fb from '../assets/fb.png'
import insta from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import Logo from '../assets/Logo_KAE-removebg-preview.png'

export default function Footer() {
    return (
        <>
            <div className='footer_wrapper'>
                <div className='footer_wrapper_inner container-xl'>
                    <div className='row'>
                       <div className='col-lg-4'>
                        <img src={Logo} className="logo_img"></img>
                        <h4>About KAE</h4>
                        <p>We are experts in technical and non-technical skill training for students</p>
                       </div>
                       <div className='col-md-1'></div>
                       <div className='col-lg-4 content'>
                        <h4>Contact</h4>
                        <p><a href='mailto:learningkae@gmail.com'>learningkae@gmail.com</a></p>
                        <p><a href='tel:6369664224'>6369664224</a></p>
                       </div>
                       <div className='col-lg-3 content'>
                        <h4>Social Media</h4>
                        <p>For news & updates follow us</p>
                        <span><img src={fb}></img></span><span><img src={insta}></img></span><span><img src={linkedin}></img></span>
                       </div>
                    </div>
                </div>
            </div>
            <div className='footer_wrapper_bottom'>
                <p>Copyright © 2023 KAE - All rights reserved</p>
            </div>
        </>
    )
}
