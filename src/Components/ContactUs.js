import React from 'react'

import { useState } from 'react'

import './ContactUs.css'

function Offers() {
    const [fname, setfname] = useState('');
    const [emailAdd, setemailAdd] = useState('');
    const [phNo, setphNo] = useState('');
    const [details, setdetails] = useState('');

    const formSubmitHandler = (event) => {
        alert("Your form is successfully submitted!!")

        setfname('');
        setemailAdd('');
        setphNo('');
        setdetails('');
    }

    return (
        <div>

            <h2 className='contactUs-div'>Contact - Us </h2>

            <p className='formpara'>We appreciate your feedback! Please tell us
                <br /> how is your experience on our website by
                <br />  filling out this Form.</p>
            <br />

            <p className='fname'>Full Name:</p>
            <input type='text' id='fname' name='fname' size="54" className='fullNameInput' onChange={event => setfname(event.target.value)} value={fname}></input>
            <br />
            <p className='fname'>Email Address:</p>
            <input type='text' id='emailAdd' name='emailAdd' size="54" className='fullNameInput' onChange={event => setemailAdd(event.target.value)} value={emailAdd}></input>
            <br />
            <p className='fname'>Phone Number:</p>
            <input type='text' id='phNo' name='phNo' size="54" className='fullNameInput' onChange={event => setphNo(event.target.value)} value={phNo}></input>
            <br />
            <p className='fname'>Details:</p>
            <textarea type='text' id='details' name='details' rows='5' cols='51' className='fullNameInput' onChange={event => setdetails(event.target.value)} value={details}></textarea>
            <br />
            <br />
            <button className='sendForm' onClick={formSubmitHandler}><b>Send Form</b></button>
            <br />
            <br />
            <br />
            <div className='flex-container-contactUs'>
                <div className='contact-h1'><h1 >Contact Us:</h1>
                    <p>Email: contact@artsywish.com </p>
                    <a href='#'> <i class="fa fa-whatsapp" aria-hidden="true"></i></a> 9347214523</div>
                <div className='registeredOfc-h1'><h1 >Registered Office: </h1>
                    <p >iCommerce Solutions <br /> 0-2004, Supertech Ecociti, <br />Hyderabad.</p></div>
            </div>

        </div>
    )
}

export default Offers
