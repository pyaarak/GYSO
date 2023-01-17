import React, { useEffect } from 'react'
import '../Stylesheets/Highlights.scss'
import Banner_right1 from '../assets/Aboutus1.jpg'
import Banner_right2 from '../assets/Aboutus2.jpg'
import Banner_right3 from '../assets/Aboutus3.jpg'

export default function Highlights() {

  useEffect(() => {
    const square = document.querySelector('.Highlight_inner_card');
    square.classList.remove('square-transition1');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          square.classList.add('square-transition1');
          return;
        }

        square.classList.remove('square-transition1');
      });
    });

    observer.observe(document.querySelector('.Highlight_inner_card'));

    const square1 = document.querySelector('.Highlight_inner_card1');
    square.classList.remove('square-transition2');

    const observer1 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          square1.classList.add('square-transition2');
          return;
        }

        square1.classList.remove('square-transition2');
      });
    });

    observer1.observe(document.querySelector('.Highlight_inner_card1'));

  })
  return (
    <div className='Highlights_wrapper'>
      <div className='Highlights_inner_wrapper'>
        <div className='Mission_wrapper'>
          <div className='Mission_Gyso'>
            <h2>Mission of GYSO</h2>
            <p>To sow students with the thought “Be educated, be agitated, be organized, be confident,
              never give up” and facilitate them to reach their dream career.</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-7 inner_content'>
            <div className='card inner_body_card'>
              <div className='card-body'>
                <h2>Highlights of GYSO</h2>
                <div className='card Highlight_inner_card square-transition1'>
                  <div className='card-body'>
                    <p>GYSO gives an awareness to students about the competitive exams,
                      hackathons and other activities related to placements to students during the
                      training.</p>
                    <p>The participants will be given certifications for the trainings at the end of
                      the session. Active Participants of our training sessions will be boosted and
                      encouraged with awards and rewards.</p>
                  </div>
                </div>
                <div className='card Highlight_inner_card1 square-transition2'>
                  <div className='card-body'>
                    <p>We offer free online trainings to students from very financial low background
                      through “Guide Students Right” program operated by GYSO team.</p>
                    <p>GYSO offers long run support for students.</p>
                    <p>Trainings are offered by corporate people and expert placement trainers.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-5'>
            <div className="inner_img"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
