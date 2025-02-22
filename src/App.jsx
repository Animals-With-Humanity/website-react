import React, { useState, useEffect } from 'react';
import './assets/style.css';

import logoImg from './assets/images/logonew.png';
import wingsImg from './assets/images/AWH-wings.png';
import page3leftImg from './assets/images/page3left.png';
import icon1 from './assets/images/icon1.png';
import icon2 from './assets/images/icon2.png';
import icon3 from './assets/images/icon3.png';
import icon4 from './assets/images/icon4.png';
import icon5 from './assets/images/icon5.png';
import icon6 from './assets/images/icon6.png';
import footerImg from './assets/images/image.png';
import girlImg from './assets/images/page1bg.png';

function App() {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleHelpClick = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSfBZtAQrTGXh57hlVIhP-wfLfKZY4WaX4LCqRie0vNlp8mHDg/viewform",
      "_blank",
      "noopener noreferrer"
    );
  };

  const handleDonateClick = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSfBZtAQrTGXh57hlVIhP-wfLfKZY4WaX4LCqRie0vNlp8mHDg/viewform",
      "_blank",
      "noopener noreferrer"
    );
  };

  return (
    <div id="main">
      {/* Header: Top-Left Menu and Top-Right Logo */}
      <header className="hero-header">
        <div className="top-left-menu">
          <div className="menu-icon" onClick={() => setShowMenu(!showMenu)}>
            <span>•</span>
            <span>•</span>
            <span>•</span>
            {showMenu && (
              <ul className="dropdown">
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#join">Join</a></li>
              </ul>
            )}
          </div>
          <button className="donate-button" onClick={handleDonateClick}>
            Donate
          </button>
        </div>
        <div className="logo-container">
          <img src={logoImg} alt="Animals With Humanity Logo" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            It’s time we be <br />
            KIND to all KINDS.
          </h1>
          <p>The world belongs to all, and it’s time we learn to co-exist!</p>
          <button className="help-button" onClick={handleHelpClick}>
            How can you help?
          </button>
        </div>
        <div className="hero-image-container">
          <img
            src={girlImg}
            alt="Girl holding a dog"
            className="hero-image"
          />
        </div>
      </section>

      {/* --- Remaining Sections (unchanged) --- */}
      <div id="page2">
        <div id="blur">
          <div className="about-us-section">
            <div className="about-left-section">
              <h1 className="about-us-title">About <br />us</h1>
              <p className="about-info-box">
                Our VISION is - <br /> "दयालुः भवतु, सर्वविधाय।" <br /> (Be kind to every kind)
                <br /> & our MISSION is to create a world, where Animals & Humans can co-exist peacefully.
              </p>
            </div>
            <p className="about-right-description">
              Team Animals With Humanity is a registered Non-governmental organization dedicated to rescuing, fostering, and rehoming the abandoned, sick, and injured animals around us. We also take care of their necessities like food, vaccination, sterilization and aware people about it.
              <br /><br />
              We began our journey in 2019 to rescue helpless street animals and today we’re an All﻿ India Registered NGO with 100+ like minded people all over Bhopal.
            </p>
          </div>
        </div>
      </div>

      <div id="page30">
        <div>
          <h1>Our Wings</h1>
          <a href="https://paltu.awhbharat.org">
            <img src={wingsImg} alt="Our Wings" />
          </a>
        </div>
      </div>

      <div id="page31">
        <div id="page3left">
          <h1>Shop for us</h1>
          <br />
          <img src={page3leftImg} alt="Shop for us" />
        </div>
        <div id="page3right">
          <h4>It can reduce our expenses upto</h4>
          <h5>20%</h5>
          <h3>
            If you shop for us it will help us <br />
            reduce our expenses and we can use them in <br />
            rescue bills more.
          </h3>
          <br />
          <a href="#">
            <h2>Amazon wishlist</h2>
          </a>
        </div>
      </div>

      <div id="page3">
        <div id="page3mid">
          <h3>RESCUES <br /><span>4050+</span></h3>
          <h3>ADOPTIONS<br /><span>360+</span></h3>
          <h3>VACCINATIONS<br /><span>1700+</span></h3>
          <h3>STERILISATIONS<br /><span>1500+</span></h3>
        </div>

        <div id="page3curve">
          <h1>our work</h1>

          <div className="box" id="box1">
            <div className="curve" id="curve1">
              <div className="ctop">
                <img src={icon1} alt="Legal" />
                <h2>Legal</h2>
              </div>
              <h3>We address and help in cases of animal cruelty through legal means.</h3>
            </div>
            <div className="curve" id="curve2">
              <div className="ctop">
                <img src={icon2} alt="Animal Rescue" />
                <h2>Animal Rescue</h2>
              </div>
              <h3>We intervene to rescue animals in distress that are living on the streets.</h3>
            </div>
            <div className="curve" id="curve3">
              <div className="ctop">
                <img src={icon3} alt="Fostering and Adoption" />
                <h2>Fostering and Adoption</h2>
              </div>
              <h3>We offer a temporary shelter for distressed animals during their recovery period and work towards securing permanent homes for them.</h3>
            </div>
          </div>

          <div className="box" id="box2">
            <div className="curve" id="curve4">
              <div className="ctop">
                <img src={icon4} alt="Vaccination" />
                <h2>Vaccination</h2>
              </div>
              <h3>We provide free rabies vaccination and vaccinations for other diseases at affordable cost in companion animals.</h3>
            </div>
            <div className="curve" id="curve5">
              <div className="ctop">
                <img src={icon5} alt="Awareness & Bonding" />
                <h2>Awareness & Bonding</h2>
              </div>
              <h3>We arrange public awareness programs to promote understanding of the coexistence challenges between humans and animals, focusing on their welfare.</h3>
            </div>
            <div className="curve" id="curve6">
              <div className="ctop">
                <img id="icon6" src={icon6} alt="Sterilisation" />
                <h2>Sterilisation</h2>
              </div>
              <h3>We collaborate with local administrative bodies to facilitate the sterilization of community dogs and cats.</h3>
            </div>
          </div>
        </div>

        <div id="page3bot">
          <h4>Events and</h4>
          <p>
            We host diverse events and campaigns to engage with those unfamiliar with our cause. These initiatives aid in raising awareness, especially among young minds,
          </p>
        </div>
      </div>

      <div id="camp">
        <h4>campaigns</h4>
        <p>
          seeking homes for our animals, and fostering a harmonious coexistence. Additionally, it serves as an enjoyable method to unite like-minded individuals.
        </p>
      </div>

      <div id="page4">
        <div id="fot">
          <img src={footerImg} alt="Footer" />
        </div>
        <div id="page4bot">
          <h1><i>It's time to question - "Are you a Hoooman"?</i></h1>
          <div id="line"></div>
          <div id="social">
            <a href="https://www.facebook.com/animalswithhumanity/" target="_blank" rel="noopener noreferrer"><i className="ri-facebook-fill"></i></a>
            <a href="https://twitter.com/TeamAWH" target="_blank" rel="noopener noreferrer"><i className="ri-twitter-fill"></i></a>
            <a href="https://www.instagram.com/animalswithhumanity_/" target="_blank" rel="noopener noreferrer"><i className="ri-instagram-line"></i></a>
            <a href="mailto:animalswithhumaity@gmail.com"><i className="ri-mail-fill"></i></a>
            <a href="https://wa.me/7067322053" target="_blank" rel="noopener noreferrer"><i className="ri-whatsapp-line"></i></a>
          </div>
          <h3>12A 80G registered , ISO certified , E-anudan , CSR Registered</h3>
          <h3>
            Curious about how your contributions make a difference? <a href="./statement.pdf" target="_blank" rel="noopener noreferrer">Click here</a> to explore our financial statement and see the impact we create together!
          </h3>
        </div>
      </div>
    </div>
  );
}

export default App;
