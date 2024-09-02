import React from 'react';
import HeroImage from '../assets/hero.jpg';
import heroLogo from '../assets/calabar-festival.png';
import heroPeopleImg from '../assets/calabar.jpg';

const Hero = () => {
  const bg = {
    backgroundImage: `url(${HeroImage})`,
    backgroundSize: "cover",
    height: "100%",
    width: "100%", 
    position: "relative",
    display: "flex",
    alignItems: "center",
  };

  return (
    <div className="hero_wrapper mb-5">
      <div className="overlay"></div>
      <div style={bg}>
        <div className="hero_content w-100">
          <div className="container pt-5">
            <div className="row">
              <div className="col-lg-7 p-4 medium">
                <span className='hero_title_span'>Break Free, Build the Future:</span>
                <h2>Calabar Festival of Ideas.</h2>
                <div className="img-festival pt-4">
                  <img src={heroLogo} alt="Calabar festival ideas 2024" className='small_logo'/>
                </div>
                <p className='pt-5'><a href='#tickets' className='btn btn-danger btn-lg spot'>Secure your spot NOW!</a></p>
                <p className='fst-italic pt-1 limited_offer'>Limited seats available. Don't miss out!</p>
              </div>
              <div className="col-lg-5 d-none d-lg-block d-flex align-items-center">
                <div className="hero_img_wrappr">
                  <img src={heroPeopleImg} alt="" className='hero_people_image rounded' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
