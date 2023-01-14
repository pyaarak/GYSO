import React, { useEffect } from 'react'
import '../Stylesheets/Home.scss'
import Logo from '../assets/1.jpg'
// import Logo1 from '../assets/5.jpg'
import Logo2 from '../assets/6.jpg'
import Logo3 from '../assets/4.jpg'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Home() {

    useEffect(() => {
        setTimeout(() => {
            const square = document.querySelector('.inner_content');
            square.classList.add('square-transition');

            setTimeout(() => {
                const square1 = document.querySelector('.logo1');
                square1.classList.add('square-transition1');
            }, 100)

            setTimeout(() => {
                const square2 = document.querySelector('.logo2');
                square2.classList.add('square-transition1');
            }, 200)

            setTimeout(() => {
                const square3 = document.querySelector('.logo3');
                square3.classList.add('square-transition1');
            }, 300)
        }, 500)

        // setTimeout(()=>{
        //     const observer = new IntersectionObserver(entries => {
        //         entries.forEach(entry => {
        //             if (entry.isIntersecting) {
        //                 square.classList.add('square-transition');
        //                 return;
        //             }

        //             square.classList.remove('square-transition');
        //         });
        //     });

        //     observer.observe(document.querySelector('.inner_content'));
        // },200)
    }, [])

    return (
        <div className={`Home_wrapper`}>
            <div className={`Home_inner_wrapper`}>
                <div className='Navbar'><Navbar></Navbar></div>
                <div className='row inner_row'>
                    <div className='col-md-7 inner_content'>
                        <p className='Logo_header'>GYSO</p>
                        <p className='Logo_header_sub'>Skill Training Academy</p>
                        <p className='instruction'>Join GYSO, engross in our training</p>
                        <p className='instruction'>&</p>
                        <p className='instruction'>enhance the path to reach your dream career!</p>
                    </div>
                    <div className='col-md-5'>
                        <div className='inner_img_container'>
                            <img src={Logo3} className={`Img_logo logo1`}></img>
                            <img src={Logo} className={`Img_logo logo2`}></img>
                            <img src={Logo2} className={`Img_logo logo3`}></img>
                            {/* <img src={Logo1} className={`Img_logo`}></img> */}
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
