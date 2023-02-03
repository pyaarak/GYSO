import React, { useEffect } from 'react'
import '../Stylesheets/Aboutus.scss'
import Banner_right1 from '../assets/boximg1.jpg'
import Banner_right2 from '../assets/boximg2.jpg'
import Banner_right3 from '../assets/boximg3.jpg'

export default function Aboutus() {

  useEffect(() => {
    // const square = document.querySelector('.inner_card');
    // square.classList.remove('square-transition1');

    // const observer = new IntersectionObserver(entries => {
    //   entries.forEach(entry => {
    //     if (entry.isIntersecting) {
    //       square.classList.add('square-transition1');
    //       return;
    //     }

    //     square.classList.remove('square-transition1');
    //   });
    // });

    // observer.observe(document.querySelector('.inner_card'));

    // const square1 = document.querySelector('.inner_card1');
    // square.classList.remove('square-transition2');

    // const observer1 = new IntersectionObserver(entries => {
    //   entries.forEach(entry => {
    //     if (entry.isIntersecting) {
    //       square1.classList.add('square-transition2');
    //       return;
    //     }

    //     square1.classList.remove('square-transition2');
    //   });
    // });

    // observer1.observe(document.querySelector('.inner_card1'));

  })
  return (
    <div className='About_wrapper'>
      <div className='About_inner_wrapper'>
        <div className='row'>
          <div className='col-lg-5'>
            <div className="inner_img"></div>
          </div>
          <div className='col-lg-7 inner_content'>
            <div className='card inner_body_card'>
              <div className='card-body'>
                <h2>About KAE Learning</h2>
                <div className='card inner_card square-transition1'>
                  <div className='card-body'>
                    <p>Welcome to KAE Learning. We are experts in technical and non-technical
                      skill training for students. The trainings are offered by <b className='bold'>experienced
                        corporate professionals and expert placement trainers.</b> KAE Learning has
                      designed different comprehensive courses in Aptitude, Soft Skills,
                      Communication Skills, and IT Skills training which enhances the professional
                      outlook of students. Our training will help students to bridge the gap
                      between campus and placement. With KAE Learning, students can crack
                      campus interviews and outshine their expectations.</p>
                    <p>We have different play-way approaches to make our offline and online
                      training interactive, simplified, and significant. Also, we have scheduled
                      MCQ/Programming tests for practice.</p>
                  </div>
                </div>
                {/* <div className='card inner_card1 square-transition2'>
                  <div className='card-body'>
                    <p>We have different play way approaches to make our online trainings
                      interactive, simplified, and significant. Also, we have scheduled
                      MCQ/Programming tests for practice.</p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
