import React from 'react';
import pointingMan from '../assets/pointingg.png';

const benefitsList = [
  {
    icon: 'fas fa-chalkboard-teacher',
    title: 'Learn from Industry Leaders',
    desc: 'Hear from top thinkers and gain insights that can take your ideas to the next level.',
  },
  {
    icon: 'fas fa-lightbulb',
    title: 'Enhance Your Skills',
    desc: 'Participate in masterclasses and workshops designed to boost your creativity and expertise.',
  },
  {
    icon: 'fas fa-bullhorn',
    title: 'Showcase Your Ideas',
    desc: 'Enter pitch competitions and get your big ideas noticed.',
  },
  {
    icon: 'fas fa-search',
    title: 'Discover Innovations',
    desc: 'Explore the latest trends and products at our exhibitions.',
  },
  {
    icon: 'fas fa-users',
    title: 'Network with Peers',
    desc: 'Connect with like-minded individuals and potential collaborators.',
  },
];

export const BenefitsItem = ({ benefit }) => (
  <div className="col">
    <div className="card benefit-card mb-3">
      <div className="card-body d-flex align-items-center">
        <div className="icon-container me-3">
          <i className={benefit.icon}></i>
        </div>
        <div>
          <h5 className="card-title">{benefit.title}</h5>
          <p className="card-text">{benefit.desc}</p>
        </div>
      </div>
    </div>
  </div>
);


const Benefits = () => {
  return (
    <div className="benefits-wrapper">
      <div className="custom-shape-divider-top-1722683176">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
      <div className="container benefits-wrapper-again">
        <div className="row align-items-center mb-5">
          <div className="col-md-4">
            <div className="benefit-content">
              <h3 className="text-emphasis">
                Are you a young entrepreneur, creator, or tech enthusiast?
              </h3>
              <p>
                Looking to <span className='text-emphasis'>break free</span>  from the ordinary? Are you ready to build
                <span className="text-emphasis"> global solutions </span>
                that change the world?
              </p>
            </div>
          </div>
          <div className="col-md-3 text-center">
            <img
              src={pointingMan}
              alt="Pointing Man"
              className="man-image img-fluid"
            />
          </div>
          <div className="col-md-5">
            <div className="solution">
              <h3>
                Join over <span className="text-emphasis">1000 young startup founders</span>, creatives, and tech enthusiasts on August 24th at <span className="text-emphasis">The Big Tent, Calabar</span>, for a day filled with inspiration, innovation, and networking.
              </h3>
            </div>
          </div>
        </div>

        <div className="why">
          <h1 className="text-center mb-4">Why You Can’t Afford to Miss This:</h1>
          <div className="row row-cols-1 row-cols-md-2 g-4 pt-5">
            {benefitsList.map((benefit, index) => (
              <BenefitsItem key={index} benefit={benefit} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;

