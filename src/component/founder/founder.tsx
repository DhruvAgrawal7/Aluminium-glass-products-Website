import React from 'react';
import './founder.css';
import sudhir from '../../assets/sudhir.jpg';
import harkesh from '../../assets/harkesh.png';
import vishal from '../../assets/vishal.png';
import { Card, CardBody, CardImg } from 'react-bootstrap';

const founders = [
    { name: "Sudhir Jangir", src: sudhir, phone: '+91 9416097608' },
    { name: "Harkesh Jangir", src: harkesh, phone: '+91 9416678227' },
    { name: "Vishal Jangir", src: vishal, phone: '+91 9509355567' }
];

const Founder = () => {
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
        
        <div>
            <h2 className='title'>Founder</h2>
            <div className="founder-container">
                {founders.map((founder, index) => (
                    <Card key={index} className="founder-card">
                        <CardImg variant="top" src={founder.src} className="founder-img" />
                        <CardBody className="founder-body">
                            <h5 className="founder-name">{founder.name}</h5>
                            <p className="founder-phone">Phone: <a href="#contact" onClick={() => handlePhoneClick(founder.phone)}>{founder.phone}</a></p>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Founder;
