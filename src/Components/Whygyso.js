import React from 'react'
import '../Stylesheets/Whygyso.scss'

export default function Whygyso() {
  return (
    <div className='whole_wrapper'>
      <h1>Why Gyso ?</h1>
      <div className='whygyso_wrapper'>
        {/* <h1>Why GYSO?</h1> */}
        <div className='whygyso_inner_wrapper'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='card inner_card'>
                <div className='card-body'><p>We include the students undertaking our trainings in our
                  online classroom upto 6months.</p></div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6'>
                <div className='card inner_card'>
                  <div className='card-body'>
                    <p>We offer GD current topics, resume
                      prep and interview prep tips once in
                      a while through the online classroom
                      to all the students after the
                      training.</p>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='card inner_card'>
                  <div className='card-body'>
                    <p>Students can reach usthrough our
                      online classroom chat or
                      @reachgyso for doubt clarifications
                      even after the training session.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6'>
                <div className='card inner_card'>
                  <div className='card-body'>
                    <p>We refresh the topics once in a
                      while in our online classroom upto
                      6months.</p>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='card inner_card'>
                  <div className='card-body'>
                    <p>We provide free assessment option
                      for students upto 6months after the
                      training.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
