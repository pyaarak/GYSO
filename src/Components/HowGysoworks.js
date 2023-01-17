import React from 'react'
import '../Stylesheets/HowGysoworks.scss'

export default function HowGysoworks() {
    return (
        <div className='HowGyso_wrapper'>
            <div className='Howgyso_inner'>
                <div className='HowGyso_header'><h1>How GYSO Works ?</h1><p>GYSO plans for offline trainings based on prior participant requests.</p></div>
                <div className='HowGyso_inner_wrapper'>
                    <div className='Howgyso_inner'>
                        <div className='row'>
                            <div className='col-md-4'>
                                <div className='card inner_card1'>
                                    <div className='card-body'>
                                        <p>We operate
                                            only on
                                            Saturdays</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='card inner_card2'>
                                    <div className='card-body'>
                                        <p>We operate
                                            Online</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='card inner_card3'>
                                    <div className='card-body'>
                                        <p>We are
                                            affordable &
                                            effective</p>
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
