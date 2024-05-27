import React from 'react';
import './landing.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import back from '../../assets/background.png'
const Landing = () => {
  const tl = useGSAP(() => {
    return gsap.timeline({ defaults: { ease: "power3.out" } })
      .from("#tag1", { duration: 1, opacity: 0, y: 50 }, "-=0.5") // Stagger by 0.5s
      .to("#tag1", { duration: 1, opacity: 1, y: 0 })
      .from("#tag2", { duration: 1, opacity: 0, y: 75 }, "-=0.5")
      .to("#tag2", { duration: 1, opacity: 1, y: 0 })
      .from("h1", { duration: 1, opacity: 0, scale: 0.9 })
      .to("h1", { duration: 1, opacity: 1, scale: 1 })
      .from("h3", { duration: 1, opacity: 0, y: -50 })
      .to("h3", { duration: 1, opacity: 1, y: 0 });
  });

  return (
    <div id="landing">
      <div className='content'>
        <img src={back} alt="" id='land_img' />
      </div>
      <div className="content" id='land_content'>
        <h2 id="tag1">"काम कस्टमर अनुसार"</h2>
        <h2 id="tag2">"दाम काम अनुसार"</h2>
        <h1>Welcome to <i>Vishwkarma Glass and Aluminium</i> Works</h1>
        <h3>Discover amazing aluminium and glass products.</h3>
      </div>
    </div>
  );
};

export default Landing;
