
import React from 'react';

import aqskill from '../assets/aqskill-logo.png';
import mercans from '../assets/mercans.png';
import starthub from '../assets/starthub-clients-hiiti-feeds-1.png';
import tropics from "../assets/tropicdreams.png";
import zeenom from "../assets/zeenom.png";


const listOfPartners = [
  { name: zeenom },
  { name: tropics },
  { name: mercans },
  { name: aqskill },
  { name: starthub },
];

const Items = (props) => {
  return (
    // <div className="d-flex flex-wrap justify-content-between align-items-center">

    //   {props.listOfPartners.map((each, index) => (
    //     <div className="partner-item" key={index}>
    //       <img src={each.name} alt={`Partner ${index}`} className="img-fluid partner_img" />
    //     </div>
    //   ))}
    // </div>

    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2 d-flex  justify-content-center w-75 mx-auto partners-container'>
      {props.listOfPartners.map((each, index) => (
        <div className="col partner-items d-flex justify-content-center" key={index}>
          <img src={each.name} alt={`Partner ${index}`} className="img-fluid partner_img" />
        </div>
      ))}
    </div>
  );
}


const Partners = () => {
  return (
    <div className='partners_wrapper'>
      <h1 className="text-center my-5">Our Partners</h1>
      <Items listOfPartners={listOfPartners} />
    </div>
  );
}

export default Partners;
