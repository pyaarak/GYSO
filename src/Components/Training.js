import React, { useEffect, useState } from 'react'
import '../Stylesheets/Training.scss'
import Logo from '../assets/Logo_Gyso_origin.png'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Training() {

    const items = [
        {
            icon: "Intensive Placement Training Program",
            copy: `32 hours
            8hrs * 4 Saturdays`
        }, {
            icon: "Exclusive Aptitude Training Program",
            copy: `24 hours
            8hrs * 3 Saturdays`
        }, {
            icon: "Communication & Soft Skill Training Program",
            copy: `24 hours
            8hrs * 3 Saturdays`
        }, {
            icon: "Exclusive Soft Skill Training Program",
            copy: `16 hours
            8hrs * 2 Saturdays`
        }, {
            icon: "Intensive Communication Skill Program",
            copy: `16 hours
            8hrs * 2 Saturdays`
        }, {
            icon: "Java Technical Training Program",
            copy: `24 hours
            8hrs * 3 Saturdays`
        },
        {
            icon: "a2z Placement Training Program",
            copy: `56 hours
            8hrs * 7Saturdays`
        },
        {
            icon: "MBA HR Skill Specific Training Program",
            copy: `24 hours
            8hrs * 3 Saturdays`
        },
        {
            icon: "MBA Sales and Marketing Skill Specific Program",
            copy: `24 hours
            8hrs * 3 Saturdays`
        }
    ];

    const items1 = [
        {
            icon: `<ul><li>Aptitude - Numerical
            Ability, Logical and Reasoning, Non-Verbal &
            Verbal Ability.</li><li>Soft Skill & Interview tips.</li><li>Communication Skill needed for interview.</li></ul>`,
            copy: `Intensive Placement Training Program`
        }, {
            icon: `<ul><li>Aptitude - Numerical
            Ability, Logical and
            Reasoning, Non-Verbal
            &Verbal Ability.</li>
        <li>Soft Skill, Communication
            Skill and Interview tips.</li>
        <li>Java basics & coding skills.</li></ul>`,
            copy: `a2z Placement
            Training Program`
        }, {
            icon: `<ul><li>HR skills- Communication,
            LSWR skills, Scheduling,
            Managing Priorities,
            Analytical Skills, Conflict
            Resolution, Team work,
            Recruitment Process,
            Presentation and Reporting
            skills.</li></ul>`,
            copy: `MBA HR Skill
            Specific Training
            Program`
        }, {
            icon: `<ul><li>Sales & Marketing Skills -
            Communication Skills, Sales
            Skills & 3Ps,
            Demonstration, Influencing
            & Relationship Skills,
            Follow up & Reporting,
            Presentation Skills,e-mail
            drafting and so on.</li></ul>`,
            copy: `MBA Sales and
            Marketing Skill
            Specific Program`
        }, {
            icon: `<ul><li>Aptitude - Numerical
            Ability, Logical and
            Reasoning, Non-Verbal
            &Verbal Ability.</li>
        <li>Interview preparation tips.</li></ul>`,
            copy: `Exclusive
            Aptitude Training
            Program`
        }, {
            icon: `<ul><li>Soft Skills - SelfIntroduction, Interview
            Etiquette, Resume Building
            Body Language & so on.</li>
        <li>Communication Skill -
            Effective & Conversational
            English, e-mail drafting,
            Basic Grammar and so on.</li></ul>`,
            copy: `Communication &
            Soft Skill
            Training Program`
        },
        {
            icon: `<ul><li>Java - Fundamentals</li>
            <li>Core Java Concepts</li>
            <li>Coding objectives</li>
            <li>Programming logics</li>
            <li>Programming based
                questions.</li></ul>`,
            copy: `Java Technical
            Training Program`
        },
        {
            icon: `<ul><li>Soft Skills - SelfIntroduction, Interview
            Etiquette, Resume
            Building, Time
            Management,Moral values,
            Body Language, Self
            motivation mantra's and so
            on.</li></ul>`,
            copy: `Exclusive Soft
            Skill Training
            Program`
        },
        {
            icon: `<ul><li>Communication Skill -
            Effective & Conversational
            English, e-mail drafting,
            Basic Grammar,
            Presentation,Public
            Speaking, HR HR
            Interview Questions,
            LSRW skills & so on.</li></ul>`,
            copy: `Intensive
            Communication
            Skill Program`
        }
    ];

    const [moveClass, setMoveClass] = useState('');
    const [moveClass1, setMoveClass1] = useState('');
    const [carouselItems, setCarouselItems] = useState(items);
    const [carouselItems1, setCarouselItems1] = useState(items1);

    const Card = (props) => {
        return (
            <div className="card tenure_card">
                <div className='card-header'><img src={Logo} className="footer_logo_img"></img></div>
                <div class="card-body">{props.icon}</div>
                <div className='card-footer'>{props.copy}</div>
            </div>
        )
    }

    const Card1 = (props) => {
        return (
            <div className="card training_inner_card">
                <div className='card-header'><p>{props.copy}</p></div>
                <div className="card-body" dangerouslySetInnerHTML={{ __html: props.icon }}></div>
                <div className='card-footer'><img src={Logo} className="footer_logo_img"></img></div>
            </div>
        )
    }

    useEffect(() => {
        document.documentElement.style.setProperty('--num', carouselItems.length);
    }, [carouselItems])

    useEffect(() => {
        document.documentElement.style.setProperty('--num', carouselItems1.length);
    }, [carouselItems1])

    const handleAnimationEnd = () => {
        if (moveClass === 'prev') {
            shiftNext([...carouselItems]);
        } else if (moveClass === 'next') {
            shiftPrev([...carouselItems]);
        }
        setMoveClass('')
    }

    const handleAnimationEnd1 = () => {
        if (moveClass1 === 'prev') {
            shiftNext1([...carouselItems1]);
        } else if (moveClass1 === 'next') {
            shiftPrev1([...carouselItems1]);
        }
        setMoveClass1('')
    }

    const shiftPrev = (copy) => {
        let lastcard = copy.pop();
        copy.splice(0, 0, lastcard);
        setCarouselItems(copy);
    }

    const shiftPrev1 = (copy) => {
        let lastcard = copy.pop();
        copy.splice(0, 0, lastcard);
        setCarouselItems1(copy);
    }

    const shiftNext = (copy) => {
        let firstcard = copy.shift();
        copy.splice(copy.length, 0, firstcard);
        setCarouselItems(copy);
    }

    const shiftNext1 = (copy) => {
        let firstcard = copy.shift();
        copy.splice(copy.length, 0, firstcard);
        setCarouselItems1(copy);
    }
    return (
        <div className='Training_wrapper'>
            {/* <canvas id="demo-canvas"></canvas> */}
            <h1>Trainings Programs of GYSO</h1>
            <div className='Training_inner_wrapper container-xxxl'>
                {/* <div className='row'>
                    <div className='col-lg-3 col-md-4 col-sm-6 training_inner_card'>
                        <div className='card'>
                            <div className='card-body'>
                                <ul>
                                    <li>Aptitude - Numerical
                                        Ability, Logical and Reasoning, Non-Verbal &
                                        Verbal Ability.</li>
                                    <li>Soft Skill & Interview
                                        tips.</li>
                                    <li>Communication Skill needed
                                        for interview.</li>
                                </ul>
                            </div>
                            <div className='card-footer'>
                                <p>Intensive
                                    Placement
                                    Training Program</p>
                                <img src={Logo} className="footer_logo_img"></img>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 training_inner_card'>
                        <div className='card'>
                            <div className='card-body'>
                                <ul>
                                    <li>Aptitude - Numerical
                                        Ability, Logical and
                                        Reasoning, Non-Verbal
                                        &Verbal Ability.</li>
                                    <li>Soft Skill, Communication
                                        Skill and Interview tips.</li>
                                    <li>Java basics & coding skills.</li>
                                </ul>
                            </div>
                            <div className='card-footer'>
                                <p>a2z Placement
                                    Training Program</p>
                                <img src={Logo} className="footer_logo_img"></img>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 training_inner_card'>
                        <div className='card'>
                            <div className='card-body'>
                                <ul>
                                    <li>HR skills- Communication,
                                        LSWR skills, Scheduling,
                                        Managing Priorities,
                                        Analytical Skills, Conflict
                                        Resolution, Team work,
                                        Recruitment Process,
                                        Presentation and Reporting
                                        skills.</li>
                                </ul>
                            </div>
                            <div className='card-footer'>
                                <p>MBA HR Skill
                                    Specific Training
                                    Program</p>
                                <img src={Logo} className="footer_logo_img"></img>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 training_inner_card'>
                        <div className='card'>
                            <div className='card-body'>
                                <ul>
                                    <li>Sales & Marketing Skills -
                                        Communication Skills, Sales
                                        Skills & 3Ps,
                                        Demonstration, Influencing
                                        & Relationship Skills,
                                        Follow up & Reporting,
                                        Presentation Skills,e-mail
                                        drafting and so on.</li>
                                </ul>
                            </div>
                            <div className='card-footer'>
                                <p>MBA Sales and
                                    Marketing Skill
                                    Specific Program</p>
                                <img src={Logo} className="footer_logo_img"></img>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 training_inner_card'>
                        <div className='card'>
                            <div className='card-body'>
                                <ul>
                                    <li>Aptitude - Numerical
                                        Ability, Logical and
                                        Reasoning, Non-Verbal
                                        &Verbal Ability.</li>
                                    <li>Interview preparation tips.</li>
                                </ul>
                            </div>
                            <div className='card-footer'>
                                <p>Exclusive
                                    Aptitude Training
                                    Program</p>
                                <img src={Logo} className="footer_logo_img"></img>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 training_inner_card'>
                        <div className='card'>
                            <div className='card-body'>
                                <ul>
                                    <li>Soft Skills - SelfIntroduction, Interview
                                        Etiquette, Resume Building
                                        Body Language & so on.</li>
                                    <li>Communication Skill -
                                        Effective & Conversational
                                        English, e-mail drafting,
                                        Basic Grammar and so on.</li>
                                </ul>
                            </div>
                            <div className='card-footer'>
                                <p>Communication &
                                    Soft Skill
                                    Training Program</p>
                                <img src={Logo} className="footer_logo_img"></img>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 training_inner_card'>
                        <div className='card'>
                            <div className='card-body'>
                                <ul>
                                    <li>Java - Fundamentals</li>
                                    <li>Core Java Concepts</li>
                                    <li>Coding objectives</li>
                                    <li>Programming logics</li>
                                    <li>Programming based
                                        questions.</li>
                                </ul>
                            </div>
                            <div className='card-footer'>
                                <p>Java Technical
                                    Training Program</p>
                                <img src={Logo} className="footer_logo_img"></img>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 training_inner_card'>
                        <div className='card'>
                            <div className='card-body'>
                                <ul>
                                    <li>Soft Skills - SelfIntroduction, Interview
                                        Etiquette, Resume
                                        Building, Time
                                        Management,Moral values,
                                        Body Language, Self
                                        motivation mantra's and so
                                        on.</li>
                                </ul>
                            </div>
                            <div className='card-footer'>
                                <p>Exclusive Soft
                                    Skill Training
                                    Program</p>
                                <img src={Logo} className="footer_logo_img"></img>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 training_inner_card'>
                        <div className='card'>
                            <div className='card-body'>
                                <ul>
                                    <li>Communication Skill -
                                        Effective & Conversational
                                        English, e-mail drafting,
                                        Basic Grammar,
                                        Presentation,Public
                                        Speaking, HR HR
                                        Interview Questions,
                                        LSRW skills & so on.</li>
                                </ul>
                            </div>
                            <div className='card-footer'>
                                <p>Intensive
                                    Communication
                                    Skill Program</p>
                                <img src={Logo} className="footer_logo_img"></img>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="carouselwrapper module-wrapper">
                    <div className="ui">
                        <button onClick={() => setMoveClass1('next')} className="prev">
                            <span className="material-icons"><ArrowBackIosNewIcon></ArrowBackIosNewIcon></span>
                        </button>
                        <button onClick={() => setMoveClass1('prev')} className="next">
                            <span className="material-icons"><ArrowForwardIosIcon></ArrowForwardIosIcon></span>
                        </button>
                    </div>
                    <div onAnimationEnd={handleAnimationEnd1} className={`${moveClass1} carousel`}>
                        {carouselItems1.map((t, index) =>
                            <Card1 key={t.copy + index} icon={t.icon} copy={t.copy} />
                        )}
                    </div>
                </div>
            </div>
            <div className='Training_section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <p><b>1.</b> A training program is offered by GYSO to the institutions only when the
                                participant strength is 25 & above.</p>
                        </div>
                        <div className='col-md-6'>
                            <p><b>2.</b> The training will be Interactive, Play way and instructive.</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>
                            <p><b>3.</b> At the end of our training, the participants will be given online MCQ
                                assessments, coding questions and a mock HR interview session for practice.</p>
                        </div>
                        <div className='col-md-6'>
                            <p><b>4.</b> After the training, the participants can utilize our Every Saturday Online
                                Assessments (ESA) and note for resume preparation, self-introduction, tips
                                for interview preparation, GD topics and e-mail drafting up to 6months
                                through our GYSO’s online classroom.</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>
                            <p><b>5.</b> The participants will be given certification for the trainings at the end of the
                                session.</p>
                        </div>
                        <div className='col-md-6'>
                            <p><b>6.</b> Active Participants of our training sessions will be boosted and encouraged
                                with awards and rewards.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Tenure_program'>
                <div className='Tenure_inner_container'>
                    <div><h1>Tenure of Program</h1></div>
                    <div className="carouselwrapper module-wrapper">
                        <div className="ui">
                            <button onClick={() => setMoveClass('next')} className="prev">
                                <span className="material-icons"><ArrowBackIosNewIcon></ArrowBackIosNewIcon></span>
                            </button>
                            <button onClick={() => setMoveClass('prev')} className="next">
                                <span className="material-icons"><ArrowForwardIosIcon></ArrowForwardIosIcon></span>
                            </button>
                        </div>
                        <div onAnimationEnd={handleAnimationEnd} className={`${moveClass} carousel`}>
                            {carouselItems.map((t, index) =>
                                <Card key={t.copy + index} icon={t.icon} copy={t.copy} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
