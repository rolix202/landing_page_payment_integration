import React from 'react';
import '../App.css';


const Ticket = () => {
    return (
        <div className="ticket-page" id='tickets'>
            <div className="ticket-page-again">
                <div className="custom-shape-divider-top-1722684012">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
                    </svg>
                </div>
                <div className="custom-shape-divider-bottom-1722684326">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
                    </svg>
                </div>
                <div className="ticket-header containe">
                    <h1>Calabar Festival of Ideas 2024</h1>
                    <p className="early-bird-notice"> Get Early Bird Tickets - 50% off</p>
                    <p className="countdown">⏳ Early bird prices end on <span className='text-emphasis'>August 10th, 2024</span> . Don't miss out!</p>
                </div>

                <div className="container">
                    <div className="ticket-grid">
                        {/* Regular Ticket */}
                        <div className="ticket-card regular-ticket">
                            <div className="card-content">
                                <h2 className='text-center'><i className="fas fa-user pe-2"></i>Regular</h2>
                                <div className="price-section">
                                    <span className="old-price">₦3,000</span>
                                    <span className="current-price">₦1,500</span>
                                </div>
                                <p className='text-center'>Basic conference experience for individuals.</p>
                                <ul>
                                    <li><i className="fas fa-chair"></i> Regular seating</li>
                                    <li><i className="fas fa-door-open"></i> Access to all sessions</li>
                                    <li><i className="fas fa-book"></i> Event brochure</li>
                                </ul>
                            </div>
                            <a href='/regular-ticket' className="btn btn-danger regular-btn">Get Regular Ticket</a>
                        </div>

                        {/* VIP Ticket */}
                        <div className="ticket-card vip-ticket">
                            <div className="card-content">
                                <h2 className='text-center'> <i className="fas fa-crown pe-2"></i> VIP</h2>
                                <div className="price-section">
                                    <span className="old-price">₦15,000</span>
                                    <span className="current-price">₦10,000</span>
                                </div>
                                <p className='text-center'>Ideal for solopreneurs, creators, freelancers and digital workers.</p>
                                <ul>
                                    <li><i className="fas fa-crown"></i> VIP seating</li>
                                    <li><i className="fas fa-network-wired"></i> Access to VIP lounge</li>
                                    <li><i className="fas fa-coffee"></i> VIP refreshments</li>
                                    <li><i className="fas fa-percent"></i> Discounts on products</li>
                                    <li><i className="fas fa-gift"></i> VIP gifts</li>
                                    <li><i className="fas fa-book"></i> Free book "Welcome to Tech"</li>
                                </ul>
                            </div>
                            <a href='/vip-ticket' className="btn btn-primary vip-btn">Get VIP Ticket</a>
                        </div>

                        {/* Executive Ticket */}
                        <div className="ticket-card executive-ticket">
                            <div className="card-content">
                                <h2 className='text-center'><i className="fas fa-briefcase pe-2"></i>Executive</h2>
                                <div className="price-section">
                                    <span className="old-price">₦40,000</span>
                                    <span className="current-price">₦20,000</span>
                                </div>
                                <p className='text-center'>Best for teams, youth groups, startups and founders.</p>
                                <ul>
                                    <li><i className="fas fa-check"></i> All VIP benefits</li>
                                    <li><i className="fas fa-users"></i> 3 regular tickets</li>
                                    <li><i className="fas fa-store"></i> Exhibition booths</li>
                                    <li><i className="fas fa-chalkboard-teacher"></i> Startup masterclass</li>
                                    <li><i className="fas fa-lightbulb"></i> Pitching opportunity</li>
                                    <li><i className="fas fa-bullhorn"></i> Product showcase</li>
                                    <li><i className="fas fa-book"></i> Access to 4 books</li>
                                </ul>
                            </div>
                            <a href='/executive-ticket' className="btn btn-danger executive-btn">Get Executive Ticket</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ticket;
