import React, { useState, useRef } from 'react'
import '../Stylesheets/Contactus.scss'
import validator from 'validator';
import Swal from 'sweetalert2';
import emailjs from "@emailjs/browser";
import Logo from '../assets/Logo_Gyso_origin.png'

export default function Contactus() {
  const [Formvalue, setFieldform] = useState({ Name: "", Email: "", Phone: "", Message: "" })
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [messageError, setMessageError] = useState('');
  const form = useRef();


  const HandleChnage = (e) => {
    setFieldform({
      ...Formvalue,
      [e.target.name]: e.target.value
    })
  }

  const validateName = (e) => {
    var user_name = e.target.value;
    const { name, value } = e.target;
    setFieldform({
      ...Formvalue,
      [name]: value,
    });
    if (validator.isEmpty(user_name.trim())) {
      setNameError('*Name cannot be empty!');
    } else {
      setNameError('');
    }
  };

  const validatePhone = (e) => {
    var user_phone = e.target.value;
    const { name, value } = e.target;
    setFieldform({
      ...Formvalue,
      [name]: value,
    });
    if (validator.isEmpty(user_phone)) {
      setPhoneError("*Phone Number Cannot be empty!");
    }
    else if (validator.isMobilePhone(user_phone) && validator.isLength(e.target.value, { min: 10, max: 11 })) {
      setPhoneError("");
    } else {
      setPhoneError('*Enter Valid Phone Number!');
    }
  };

  const validateEmail = (e) => {
    var user_email = e.target.value;
    const { name, value } = e.target;
    setFieldform({
      ...Formvalue,
      [name]: value,
    });
    if (validator.isEmpty(user_email)) {
      setEmailError("*Email Cannot be empty!");
    }
    else if (validator.isEmail(user_email)) {
      setEmailError('');
    } else {
      setEmailError('*Enter valid Email!');
    }
  };


  const validateMessage = (e) => {
    var message = e.target.value;
    const { name, value } = e.target;
    setFieldform({
      ...Formvalue,
      [name]: value,
    });
    if (validator.isEmpty(message)) {
      setMessageError("*Message Cannot be empty!");
    }
    else {
      setMessageError('');
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (Formvalue.Name == '') {
      setNameError('*Name cannot be empty!');
    }
    if (Formvalue.Email == '') {
      setEmailError('*Email cannot be empty!');
    }
    if (Formvalue.Phone == '') {
      setPhoneError('*Phone cannot be empty!');
    }
    if (Formvalue.Message == '') {
      setMessageError('*Message cannot be empty!');
      const div1 = document.getElementById("Message")
      div1.setAttribute('value', 'Not Available')
    }

    console.log(e.target)

    if (Formvalue.Name != '' && Formvalue.Email != '' && Formvalue.Phone != '' || Formvalue.Message != '') {

      var showLoading = function () {
        Swal.fire({
          html: 'Sending...',
          showConfirmButton: false,
          allowOutsideClick: false,
          willOpen: () => {
            Swal.showLoading()
          },

          willClose: () => {
            Swal.hideLoading()
          }
        })
      }

      showLoading();

      var emailform={
        Name:"Aak",
        Phone:"923353578",
        Email:"Elsevar",
        Messgae:"Report"
      }


      emailjs
        .sendForm(
          "service_n6l5l07",
          "template_xjdcnhi",
          e.target,
          "0iEf51wVKSSwbIOOW"
        )
        .then(
          (result) => {
            console.log(e.target)
            console.log(result.text);
            console.log("message sent");

            Swal.fire({
              // icon: 'success',
              // title: 'Message Sent Successfully',
              text: 'Thank you for providing your details, we will get in touch shortly!',

            })
            setFieldform({ Name: "", Email: "", Phone: "", Message: "" })
            
          },
          function (error) {
            console.log(error.text, "form error");

            Swal.fire({
              // icon: 'error',
              // title: 'Message not sent',
              showLoaderOnConfirm: true,
              text: 'Oops!, Something went wrong... Please contact on gyso@gmail.com',

            })
          }
        );

        setFieldform({ Name: "", Email: "", Phone: "", Message: "" })
    }



  };

  return (
    <div className='Contactus_wrapper'>
      <div id="Service" className='Contactus_inner_wrapper container-xl'>
        <div className='row'>
          <div className='col-md-4'>
            <h1>Contact</h1>
            <img src={Logo}></img>
          </div>
          <form className='col-md-8' ref={form} onSubmit={e=>sendEmail(e)}>
            <div className='row'>
              <div className='col-md-6'>
                <input type="text" placeholder='Enter the Name' value={Formvalue.Name} name={`Name`} onChange={e => validateName(e)}></input>
                <p className={`FormErrors ${nameError != '' ? 'show' : 'hide'}`}>
                  {nameError}
                </p>
              </div>
              <div className='col-md-6'>
                <input type="text" placeholder='Enter the Email' value={Formvalue.Email} name={`Email`} onChange={e => validateEmail(e)}></input>
                <p className={`FormErrors ${emailError != '' ? 'show' : 'hide'}`}>
                  {emailError}
                </p>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6'>
                <input type="text" placeholder='Enter the Phone' value={Formvalue.Phone} name={`Phone`} onChange={e => validatePhone(e)}></input>
                <p className={`FormErrors ${phoneError != '' ? 'show' : 'hide'}`}>
                  {phoneError}</p>
              </div>
              <div className='col-md-6'>
                <input type="text" placeholder='Enter the Message' value={Formvalue.Message} name={`Message`} onChange={e => validateMessage(e)}></input>
                <p className={`FormErrors`}></p>
              </div>
            </div>
            <div className="row">
              <div className='col-md-5 openingtitle1'>
                <button className="InputBox2" type="submit" value="Submit" onSubmit={sendEmail} >Submit </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
