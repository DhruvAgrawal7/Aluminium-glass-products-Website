import { Container, Nav, NavLink, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './header.css';
import { useNavigate } from 'react-router-dom';
import { faFacebook, faInstagram,  faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import logo from '../../assets/logo.png'


const Header = () => {

    const navigate = useNavigate();
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
    const phoneNumber1 = '+91 9416678227';
    const phoneNumber2 = '+91 9416097608';
    return (
        <div id='nav-wrap' className='text-dark'>
            <div id="upper-nav">
                <div className='upper-nav-div' id='upper-nav-div1'>
                    <a href="https://www.facebook.com/profile.php?id=61558574335764" ><FontAwesomeIcon icon={faFacebook} color='grey' className='nav-icon'/></a> 
                    <a href="https://api.whatsapp.com/message/2WS24XSNENJAO1?autoload=1&app_absent=0"><FontAwesomeIcon icon={faWhatsapp} color='grey' className='nav-icon'/></a> 
                    <a href="https://www.instagram.com/aluminiumglassexpert.com05/"><FontAwesomeIcon icon={faInstagram} color='grey' className='nav-icon'/></a>
                </div>
                <div className='upper-nav-div' id='upper-nav-div2'>
                    <span><FontAwesomeIcon icon={faClock} color='grey' className='nav-icon'/>Mon to Sat 10:00 am to 6:30 pm</span>
                    
                    <span onClick={() => handlePhoneClick(phoneNumber1)}><FontAwesomeIcon icon={faPhone} color='grey' className='nav-icon'/>{phoneNumber1}</span>
                    <span onClick={() => handlePhoneClick(phoneNumber2)}>{phoneNumber2}</span>
                    <span><FontAwesomeIcon icon={faEnvelope} color='grey' className='nav-icon'/>Vishalsamadiyajangir@gmail.com</span>
                </div>
                <div>

                </div>
            </div>
            <Navbar expand="md" id="navbar">
                <Container>
                    <Navbar.Brand>
                        <img src={logo} alt="logo" id='logo' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='mx-auto'>
                            <NavLink className='nav_item' onClick={() => {
                                navigate('/');
                            }} href="#home">Home</NavLink>
                            <NavLink className='nav_item' onClick={() => {
                                navigate('/');
                            }} href="#about-wrap">About</NavLink>
                            <NavLink className='nav_item' onClick={() => {
                                navigate('/');
                            }} href="#product-wrapper">Products</NavLink>
                            <NavLink className='nav_item' onClick={() => {
                                navigate('/');
                            }} href="#work-wrapper">Our Works</NavLink>
                            <NavLink className='nav_item' onClick={() => {
                                navigate('/');
                            }} href="#contact">Contact Us</NavLink>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}


export default Header;
