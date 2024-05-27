import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import './footer.css';

const Footer = () => {
    const emailAddress = "Vishalsamadiyajangir@gmail.com";
    const phoneNumber1 = '9416678227';
    const phoneNumber2 = '9416097608';

    const handlePhoneClick = (phoneNumber: string) => {
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        if (isMobile) {
            window.location.href = `tel:${phoneNumber}`;
        } else {
            navigator.clipboard.writeText(phoneNumber)
                .then(() => {
                    alert('Phone number copied to clipboard');
                })
                .catch((error) => {
                    console.error('Failed to copy:', error);
                });
        }
    };

    return (
        <footer className="footer">
            <div>
                <Card className="footer-card">
                    <Card.Body className='foot-card-body'>
                        <div style={{ width: '50%' }}>
                            <h4>Contact Information:</h4>
                            <ul className="contact-list">
                                <li>
                                    <FontAwesomeIcon icon={faEnvelope} color='white' style={{ marginRight: '5px' }} />
                                    Email: <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faPhone} color='white' style={{ marginRight: '5px' }} />
                                    Contact: <a href="#contact" onClick={() => handlePhoneClick(phoneNumber1)}>{phoneNumber1}</a>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faPhone} color='white' style={{ marginRight: '5px' }} />
                                    Contact: <a href="#contact" onClick={() => handlePhoneClick(phoneNumber2)}>{phoneNumber2}</a>
                                </li>
                            </ul>
                        </div>
                        <div style={{ width: '50%' }}>
                            <h4>Visit Us:</h4>
                            <ul>
                                <li>
                                    <FontAwesomeIcon icon={faLocationDot} color='grey' style={{ marginRight: '5px' }} />
                                    Address 1: <a href="https://www.google.com/maps/place/5JVC%2BGX,+Rewari,+Haryana+123401/@28.1938125,76.6224375,17z/data=!3m1!4b1!4m5!3m4!1s0x390d4f469cba92a5:0xb6853e869bb96ee8!8m2!3d28.1938125!4d76.6224375?entry=ttu">Konsiwas Road, Near Leo Chawk, Rewari, Haryana</a>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faLocationDot} color='grey' style={{ marginRight: '5px' }} />
                                    Address 2: <a href="https://www.google.com/maps/place/2QFJ%2BH9,+Joria,+Rajasthan+301702/@28.023988,76.781013,17.18z/data=!4m5!3m4!1s0x3972b52a588838bd:0xc7b8f34cc54764b9!8m2!3d28.0239375!4d76.7809375?entry=ttu">Vpo joria Kotkasim Alwar,Rajasthan</a>
                                </li>
                            </ul>
                        </div>
                    </Card.Body>
                </Card>
            </div>

            <p className="footer-text">Copyright Vishwkarma Aluminium and Glass work 2024 &copy; All rights reserved.</p>
        </footer>

    );
};

export default Footer;

