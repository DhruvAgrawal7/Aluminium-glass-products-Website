import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardImg, CardTitle } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faStar } from '@fortawesome/free-solid-svg-icons';
import slide1 from '../../assets/contact/slide1-removebg-preview.png'
import slide2 from '../../assets/contact/slide2.png'
import slide3 from '../../assets/contact/slide3-removebg-preview.png'
import './contact.css';
import { faStarHalfStroke } from '@fortawesome/free-regular-svg-icons';
const items = [
    { src: slide1, description: "Vishwakarma Aluminium company bahut achhi hai. Unka kaam tez aur quality bhi badhiya hai. Har step mein madad milti hai aur customer satisfaction unka pehla dhyan hai. Sabko yahan se aluminium ki zarurat puri karani chahiye.", name: 'Naksh Singh' },
    { src: slide2, description: "Vishwakarma Aluminium company ka kaam bahut accha hai aur professionals kaam karte hain. Waqt par kaam pura hota hai aur budget mein hi rehta hai. Communication bhi badiya hai. Agar dubara kaam ho toh zaroor yahan se hi karenge.", name: 'Rajveer Rathore' },
    { src: slide3, description: "Aluminium products ki quality aur mazbooti mein Vishwakarma Aluminium company number ek hai. Unka kaam karigarana hai aur har cheez mein unka experience dikhta hai. Pricing bhi thik hai aur jo product milta hai woh expectations se bhi achha hota hai. Yeh company bahut bharosemand hai.", name: 'Naman Negi' },
];


const Contact = () => {

    const [currIndex, setCurrIndex] = useState(0);
    let index = 0;
    const goToPrev = () => {
        index = (currIndex - 1 + items.length) % items.length;
        setCurrIndex(index);
    }

    const goTonext = () => {
        index = (currIndex + 1) % items.length;
        setCurrIndex(index);
    }

    useEffect(() => {
        setTimeout(() => {
            goTonext();
        }, 5000)
    })

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const handleChange = (e :any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleMailTo = () => {
        const { firstName, lastName, email, phone, service, message } = formData;
        const mailtoLink = `mailto:Vishalsamadiyajangir@gmail.com?subject=New Contact Form Submission&body=First Name: ${firstName}%0D%0ALast Name: ${lastName}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0AService: ${service}%0D%0AMessage: ${message}`;
        window.location.href = mailtoLink;
    };
    return (
        <div id='contact'>

            <div id='contact-content'>
                <div>
                    <button className="slider-btn prev" onClick={goToPrev}><FontAwesomeIcon icon={faAngleLeft} color='white' /></button>
                    <Card className="contact-card">
                        <CardTitle className='mx-auto'>
                            Customer Opinion
                        </CardTitle>
                        <span id='cont-icons'>
                            <FontAwesomeIcon icon={faStar} color='yellow' />
                            <FontAwesomeIcon icon={faStar} color='yellow' />
                            <FontAwesomeIcon icon={faStar} color='yellow' />
                            <FontAwesomeIcon icon={faStar} color='yellow' />
                            <FontAwesomeIcon icon={faStarHalfStroke} color='yellow' />
                        </span>
                        <CardBody>
                            {items[currIndex].description}
                        </CardBody>
                        <div className='cont-card-img-div'>
                            <CardImg src={items[currIndex].src} className='cont-card-img'>
                            </CardImg>
                            <h3>
                                {items[currIndex].name}
                            </h3>
                        </div>
                    </Card>
                    <button className="slider-btn next" onClick={goTonext}><FontAwesomeIcon icon={faAngleRight} color='white' /></button>
                </div>
                <div>
                    <Card className="contact-card">
                        <CardTitle className='mx-auto'>
                            Connect With Us
                        </CardTitle>

                        <div>
                            <div className="frm-bx mb-4 col-lg-6 col-md-6">
                                <label htmlFor='firstName' className="form-label">First Name</label>
                                <input type="text" name="firstName" className="form-control" placeholder="Enter First Name" onChange={handleChange} required />
                            </div>
                            <div className="frm-bx mb-4 col-lg-6 col-md-6">
                                <label htmlFor='lastName' className="form-label">Last Name</label>
                                <input type="text" name="lastName" className="form-control" placeholder="Enter Last Name" onChange={handleChange} required />
                            </div>
                            <div className="frm-bx mb-4 col-lg-12">
                                <label htmlFor="email" className='form-label'>Email</label>
                                <input type="email" name="email" className='form-control' placeholder='Enter Your Email' onChange={handleChange} required />
                            </div>
                            <div className="frm-bx mb-4 col-lg-12">
                                <label htmlFor="phone" className='form-label'>Phone no</label>
                                <input type="tel" name="phone" className='form-control' placeholder='Enter Phone No' onChange={handleChange} required />
                            </div>
                            <div className="frm-bx mb-4 col-lg-12">
                                <label htmlFor='service' className="form-label">Service</label>
                                <select name="service" className="form-select" onChange={handleChange} required>
                                    <option disabled>Select Service</option>
                                    <option>Aluminium Work</option>
                                    <option>Glass Work</option>
                                    <option>False Ceiling</option>
                                    <option>Wallpaper</option>
                                    <option>Others</option>
                                </select>
                            </div>
                            <div className="frm-bx mb-4 col-lg-12">
                                <label htmlFor='message' className="form-label">Message</label>
                                <textarea name="message" className="form-control" placeholder="Enter Message" onChange={handleChange} required />
                            </div>
                            <div className="btn-pink" id="btn-top" onClick={handleMailTo}>Submit</div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Contact;

