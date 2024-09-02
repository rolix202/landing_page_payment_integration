import React from 'react'
import footer_logo from "../assets/SECURE-PAYMENT-LOGO.jpg"
import calabar from "../assets/calabar-2024.png"

const Foot = () => {
    return (
        <div className='footer bg-dark pt-5'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 foot_desc">
                        <div className='foot_logo'>
                            <img src={footer_logo} alt=""/>
                        </div>
                        <p className='text-white pt-4'>Don’t wait – get your early bird ticket now and join us in Calabar for an unforgettable experience.</p>
                        <p className='text-white'>The future is yours to shape!</p>
                        <div className="button">
                            <a href='#tickets' className='btn btn-danger'>Grab Your Ticket Now!</a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="foot_details text-white">
                            <h3>Contact Us</h3>
                            <p className='text-emphasis fst-italic lead'>For more information, reach out to:</p>
                            <p className='pt-4'>(+234) 903 352 8556 <br /> (+234) 813 654 9901 </p>

                            <div className='foot-img-wrapper'>
                               <img src={calabar} alt="" className='pt-5 pb-5 foot-img' /> 
                            </div>
                            
                        </div>
                    </div>
                    <div className='footer-copyright'>
                        <p className='text-center text-white pt-3'>Copyright © 2024 · Ideasfest Africa Limited</p>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Foot