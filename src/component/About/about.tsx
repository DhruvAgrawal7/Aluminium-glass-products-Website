// about.tsx
import React from 'react';
import { Card, CardBody, CardHeader } from 'react-bootstrap';
import './about.css';
interface AboutCardProps {
    title: string;
    description: string;
}

const About = () => {
    return (
        <div id="about-wrap">
            <h2 className='title'>About Us</h2>

            <p id='about-des'>Welcome to VISHAVKARMA GLASS AND ALUMINIUM WORKS your one-stop destination for top-quality glass, aluminum, and interior improvement services. With over 20 years of dedicated experience, we specialize in enhancing spaces through exquisite <strong>FALSE CEILINGS, MODERN KITCHEN, ALMIRAH, PVC PANEL, GLASS INSTALLATION, and DURABLES STEEL,CNC RAILINGS,ACP WORKS and UPVC RAILINGS.</strong> Our commitment to excellence and customer satisfaction drives every project we undertake, ensuring a seamless blend of functionality and aesthetics. Trust us to transform your vision into reality with our reliable and professional services.</p>
            
            <div className="card-container">
                <AboutCard
                    title="Architectural Glazing"
                    description="Elevate your spaces with our cutting-edge solutions."
                />
                <AboutCard
                    title="Aluminum Fabrication"
                    description="Fabricate durable and aesthetically pleasing aluminum structures."
                />
                <AboutCard
                    title="Glass Installation"
                    description="Enhance ambiance with flawless glass installations."
                />
                <AboutCard
                    title="Sustainability"
                    description="Commitment to eco-friendly materials and practices."
                />
                <AboutCard
                    title='PVC Paneling Solutions'
                    description='Elevate your space with durable PVC paneling solutions today.'
                />
                <AboutCard
                    title=' Stylish Furniture'
                    description="Explore our stylish and functional furniture collection designed to elevate every corner of your home."
                />
            </div>
        </div>
    );
};

const AboutCard: React.FC<AboutCardProps> = ({ title, description }) => {
    return (
        <Card className="about-card">
            <CardHeader className="abt-card-header">{title}</CardHeader>
            <CardBody>{description}</CardBody>
        </Card>
    );
};

export default About;
