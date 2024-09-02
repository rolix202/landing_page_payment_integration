import React from 'react';

const Header = () => {
  return (
    <div className='bg-dark text-white d-none d-lg-block'>
      <div className="container head_content d-flex justify-content-between align-items-center flex-wrap text-white py-2">
        <div className="quote">
          <span className='fst-italic'>Ignite your future at the Calabar festival of IDEAS 2024.</span>
        </div>
        <div className="location">
          <small className='fs-6'> <span>August 24th 2024</span> | The Big Tent, Calabar</small>
        </div>
        <div className="call_to_action">
          <a href='#tickets' className='btn btn-danger button'>Secure Your Spot Now!</a>
        </div>
      </div> 
    </div>
  );
  
}

export default Header;
