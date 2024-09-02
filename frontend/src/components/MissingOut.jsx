import React from 'react'
import businessmen from "../assets/businessmen.png"
import { BenefitsItem } from './Benefits';



const missing_out_list = [
    {
      icon: 'fas fa-book',
      title: 'Invaluable Knowledge',
      desc: 'Missing insights that could transform your career or startup.',
    },
    {
      icon: 'fas fa-users',
      title: 'Networking Opportunities',
      desc: 'Losing the chance to meet potential partners, investors, and mentors.',
    },
    {
      icon: 'fas fa-star',
      title: 'Exclusive Content',
      desc: 'Not gaining access to special sessions, VIP lounges, and masterclasses.',
    },
    {
      icon: 'fas fa-lightbulb',
      title: 'Cutting-Edge Innovations',
      desc: 'Missing the latest products and solutions in the market.',
    },
    {
      icon: 'fas fa-rocket',
      title: 'Startup Support',
      desc: 'Not participating in pitch competitions that could fund your idea.',
    },
  ];

const MissingOut = () => {
    return (
        <div className='missing_out_wrapper'>
            <div className="container">
                <div className="why">
                    <h1 className="text-center mb-4">Imagine Missing Out On:</h1>
                </div>
                <div className="row pt-5">
                    <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
                        <div className="business_wrapper">
                            <img src={businessmen} alt="" className='business_img'/>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="row row-cols-1 g-4 bene_lists">
                            {missing_out_list.map((list, index) => (
                                <BenefitsItem key={index} benefit={list} /> 
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MissingOut