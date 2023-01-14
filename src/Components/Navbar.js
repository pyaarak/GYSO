import React, { useEffect, useState } from 'react'
import '../Stylesheets/Navbar.scss'
import Logo from '../assets/Logo_Gyso_origin.png'
import ClearIcon from '@mui/icons-material/Clear';
import DehazeOutlinedIcon from '@mui/icons-material/DehazeOutlined';

export default function Navbar() {

    const [Mobilewidth, setMobilewidth] = useState(false);
    const [Viewbox, setView] = useState(false);

    const handlechange = () => {
        if (window.innerWidth < 450) {
            setMobilewidth(true)
        }
        else {
            setMobilewidth(false)
        }
    }

    const sethandleview = () => {
        setView(!Viewbox)
    }

    useEffect(() => {
        handlechange()
    }, [])

    window.addEventListener("resize", handlechange)
    return (
        <>
            <div className={`Navbar_wrapper`}>
                <div className={`Navbar_inner_wrapper`}>
                    <img className='Img_logo1' src={Logo}></img>
                    {!Mobilewidth &&
                        <div className={`contactus`}><span>ABOUT US</span><span>CONTACT</span></div>
                    }

                    {Mobilewidth &&
                        <div className={`contactus`}><i onClick={e => sethandleview()}><DehazeOutlinedIcon></DehazeOutlinedIcon></i></div>
                    }
                </div>
            </div>
            {Viewbox &&
                <div className='blackdash_board'>
                    <div className='inner_blackdash_board'>
                        <div><i onClick={e => sethandleview()}><ClearIcon></ClearIcon></i></div>
                        <ul>
                            <li>About us</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            }
        </>
    )
}
