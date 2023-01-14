import React from 'react'
import '../Stylesheets/Footer.scss'
import fb from '../assets/fb.png'
import insta from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import Logo from '../assets/Logo_Gyso_origin.png'

export default function Footer() {
    return (
        <>
            <div className='footer_wrapper'>
                <div className='footer_wrapper_inner container-xl'>
                    <div className='row'>
                       <div className='col-lg-4'>
                        <img src={Logo} className="logo_img"></img>
                        <h4>About Gyso</h4>
                        <p>We're passionate about teaching people how to do better oppertunity for their own presence</p>
                       </div>
                       <div className='col-md-1'></div>
                       <div className='col-lg-4 content'>
                        <h4>Contact</h4>
                        <p><a href='mailto:reachgyso@gmail.com'>reachgyso@gmail.com</a></p>
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
                <p>Copyright © 2023 GYSO - All rights reserved</p>
            </div>
        </>
    )
}
