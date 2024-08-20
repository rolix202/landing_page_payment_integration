// import React from 'react';

// const Ticket = () => {
//     return (
//         <div class="ticket-page mb-5 p-5">
//             <div className="ticket_h container">
//                 <div className="ticket_h_head">
//                     <h1>Calabar Festival of Ideas 2024</h1>
//                     <p> Limited Early Bird Tickets – Get Yours Before They’re Gone!</p>
//                     <p class="early-bird-end-date"><i class="fas fa-clock"></i> Early bird prices end on August 10th, 2024. Act
//                         now to save up to 50%!
//                     </p>
//                 </div>

//                 <div class="container text-center">
//                     <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2 g-lg-3">
//                         <div class="col">
//                             <div class="tickets-container p-3">
//                                 <div className="card ticket-card h-100">
//                                     <div className="card-head">
//                                         <h2 className='card-title'><i class="fas fa-user"></i> Regular</h2>
//                                         <p class="price card-text">
//                                             <i class="fas fa-tag"></i>
//                                             <span class="old-price"> ₦3,000</span>
//                                             <span class="current-price"> ₦1,500</span>
//                                         </p>
//                                         <p className='card-text'>For individuals who want a basic conference experience.</p>
//                                     </div>
//                                     <div className="card-body">
//                                         <ul>
//                                             <li><i class="fas fa-chair"></i> Regular seating</li>
//                                             <li><i class="fas fa-door-open"></i> Access to all sessions</li>
//                                             <li><i class="fas fa-book"></i> Event brochure</li>
//                                         </ul>
//                                     </div>

//                                     <button class="btn btn-success reg_btn"><i class="fas fa-ticket-alt pe-2"></i>
//                                         Buy Regular Ticket</button>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="col">
//                             <div class="tickets-container p-3">
//                                 <div className="card ticket-card">
//                                     <div className="card-head">
//                                         <h2 className='card-title'><i class="fas fa-crown"></i> VIP</h2>
//                                         <p class="price card-text">
//                                             <i class="fas fa-tag"></i>
//                                             <span class="old-price"> ₦15,000</span>
//                                             <span class="current-price"> ₦10,000</span>
//                                         </p>
//                                         <p className='card-text'>For individuals who want a basic conference experience.</p>
//                                     </div>
//                                     <div className="card-body">
//                                         <ul>
//                                             <li><i class="fas fa-chair"></i> VIP seating</li>
//                                             <li><i class="fas fa-network-wired"></i> Access to VIP lounge and networking area</li>
//                                             <li><i class="fas fa-coffee"></i> VIP refreshments and sessions</li>
//                                             <li><i class="fas fa-percent"></i> Exclusive discounts on exhibited products</li>
//                                             <li><i class="fas fa-gift"></i> VIP gift items</li>
//                                             <li><i class="fas fa-book"></i> Free copy of Kingsley 'Et Abang's book "Welcome to Tech"</li>
//                                         </ul>
//                                     </div>

//                                     <button class="btn btn-danger vip_btn"><i class="fas fa-ticket-alt pe-2"></i>
//                                     Buy VIP Ticket</button>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="col">
//                             <div class="tickets-container p-3">
//                                 <div className="card ticket-card h-100">
//                                     <div className="card-head">
//                                         <h2 className='card-title'><i class="fas fa-briefcase"></i> Executive/Team</h2>
//                                         <p class="price card-text">
//                                             <i class="fas fa-tag"></i>
//                                             <span class="old-price"> ₦40,000</span>
//                                             <span class="current-price"> ₦20,000</span>
//                                         </p>
//                                         <p className='card-text'>For individuals who want a basic conference experience.</p>
//                                     </div>
//                                     <div className="card-body">
//                                     <ul>
//                     <li><i class="fas fa-check"></i> Everything in VIP plus:</li>
//                     <li><i class="fas fa-users"></i> 3 regular tickets</li>
//                     <li><i class="fas fa-store"></i> Exhibition booths</li>
//                     <li><i class="fas fa-chalkboard-teacher"></i> Special startup funding masterclass</li>
//                     <li><i class="fas fa-lightbulb"></i> Pitching opportunity</li>
//                     <li><i class="fas fa-bullhorn"></i> Product launch/showcase</li>
//                     <li><i class="fas fa-book"></i> Free access to 4 of Kingsley 'Et Abang’s books</li>
//                 </ul>
//                                     </div>

//                                     <button class="btn btn-primary exec_btn"><i class="fas fa-ticket-alt pe-2"></i>
//                                     Buy Executive Ticket</button>
//                                 </div>
//                             </div>
//                         </div>

//                     </div>
//                 </div>

//             </div>



//         </div>



//     );
// };

// export default Ticket;



import React from 'react';
import '../App.css'; // Assuming custom styles are in App.css

const Ticket = () => {
    return (
        <div className="ticket-page">
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

                <div className="container text-center">
                    <div className="ticket-grid">
                        {/* Regular Ticket */}
                        <div className="ticket-card regular-ticket">
                            <div className="card-content">
                                <h2><i className="fas fa-user pe-2"></i>Regular</h2>
                                <div className="price-section">
                                    <span className="old-price">₦3,000</span>
                                    <span className="current-price">₦1,500</span>
                                </div>
                                <p>Basic conference experience for individuals.</p>
                                <ul>
                                    <li><i className="fas fa-chair"></i> Regular seating</li>
                                    <li><i className="fas fa-door-open"></i> Access to all sessions</li>
                                    <li><i className="fas fa-book"></i> Event brochure</li>
                                </ul>
                            </div>
                            <button className="btn btn-danger regular-btn">Get Regular Ticket</button>
                        </div>

                        {/* VIP Ticket */}
                        <div className="ticket-card vip-ticket">
                            <div className="card-content">
                                <h2> <i className="fas fa-crown pe-2"></i> VIP</h2>
                                <div className="price-section">
                                    <span className="old-price">₦15,000</span>
                                    <span className="current-price">₦10,000</span>
                                </div>
                                <p>Ideal for solopreneurs, creators, freelancers and digital workers.</p>
                                <ul>
                                    <li><i className="fas fa-crown"></i> VIP seating</li>
                                    <li><i className="fas fa-network-wired"></i> Access to VIP lounge</li>
                                    <li><i className="fas fa-coffee"></i> VIP refreshments</li>
                                    <li><i className="fas fa-percent"></i> Discounts on products</li>
                                    <li><i className="fas fa-gift"></i> VIP gifts</li>
                                    <li><i className="fas fa-book"></i> Free book "Welcome to Tech"</li>
                                </ul>
                            </div>
                            <button className="btn btn-primary vip-btn">Get VIP Ticket</button>
                        </div>

                        {/* Executive Ticket */}
                        <div className="ticket-card executive-ticket">
                            <div className="card-content">
                                <h2><i className="fas fa-briefcase pe-2"></i>Executive</h2>
                                <div className="price-section">
                                    <span className="old-price">₦40,000</span>
                                    <span className="current-price">₦20,000</span>
                                </div>
                                <p>Best for teams, youth groups, startups and founders.</p>
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
                            <button className="btn btn-danger executive-btn">Get Executive Ticket</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ticket;
