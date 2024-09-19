import React from "react";
import "../App.css";

const tickets_detials = [
    {
        type: "regular-ticket",
        name: "Regular",
        nameIcon: "fa-user",
        old_price: "₦3,000",
        current_price: "₦1,500",
        description: "Basic conference experience for individuals.",
        benefits: [
            { icon: "fa-chair", text: "Regular seating" },
            { icon: "fa-door-open", text: "Access to all sessions" },
            { icon: "fa-book", text: "Event brochure" },
        ],
        buttonText: "Get Regular Ticket",
        buttonLink: "/regular-ticket",
        buttonClass: "btn-danger regular-btn",
    },
    {
        type: "vip-ticket",
        name: "VIP",
        nameIcon: "fa-crown",
        old_price: "₦15,000",
        current_price: "₦10,000",
        description:
            "Ideal for solopreneurs, creators, freelancers and digital workers.",
        benefits: [
            { icon: "fa-crown", text: "VIP seating" },
            { icon: "fa-network-wired", text: "Access to VIP lounge" },
            { icon: "fa-coffee", text: "VIP refreshments" },
            { icon: "fa-percent", text: "Discounts on products" },
            { icon: "fa-gift", text: "VIP gifts" },
            { icon: "fa-book", text: "Free book 'Welcome to Tech'" },
        ],
        buttonText: "Get VIP Ticket",
        buttonLink: "/vip-ticket",
        buttonClass: "btn-primary vip-btn",
    },
    {
        type: "executive-ticket",
        name: "Executive",
        nameIcon: "fa-briefcase",
        old_price: "₦40,000",
        current_price: "₦20,000",
        description: "Best for teams, youth groups, startups and founders.",
        benefits: [
            { icon: "fa-check", text: "All VIP benefits" },
            { icon: "fa-users", text: "3 regular tickets" },
            { icon: "fa-store", text: "Exhibition booths" },
            { icon: "fa-chalkboard-teacher", text: "Startup masterclass" },
            { icon: "fa-lightbulb", text: "Pitching opportunity" },
            { icon: "fa-bullhorn", text: "Product showcase" },
            { icon: "fa-book", text: "Access to 4 books" },
        ],
        buttonText: "Get Executive Ticket",
        buttonLink: "/executive-ticket",
        buttonClass: "btn-danger executive-btn",
    },
];

const TicketComponent = ({ type, name, nameIcon, old_price, current_price, description, benefits, buttonText, buttonLink, buttonClass }) => {
    return (
        <div className={"ticket-card " + type}>
            <div className="card-content">
                <h2 className="text-center">
                    <i className={nameIcon + " fas pe-2"}></i>{name}
                </h2>
                <div className="price-section">
                    <span className="old-price">{old_price} </span>
                    <span className="current-price">{current_price} </span>
                </div>
                <p className="text-center">
                    {description}
                </p>
                <ul>
                    {benefits.map((item, index) => {
                        return (
                            <li key={index}>
                                <i className={"fas " + item.icon}></i>{item.text}
                            </li>
                        )
                    })}
                </ul>
            </div>
            <a href={buttonLink} className={"btn " + buttonClass}>
                {buttonText}
            </a>
        </div>
    );
};

const Ticket = () => {
    return (
        <div className="ticket-page" id="tickets">
            <div className="ticket-page-again">
                <div className="custom-shape-divider-top-1722684012">
                    <svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
                            className="shape-fill"
                        ></path>
                    </svg>
                </div>
                <div className="custom-shape-divider-bottom-1722684326">
                    <svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
                            className="shape-fill"
                        ></path>
                    </svg>
                </div>
                <div className="ticket-header containe">
                    <h1>Calabar Festival of Ideas 2024</h1>
                    <p className="early-bird-notice"> Get Early Bird Tickets - 50% off</p>
                    <p className="countdown">
                        ⏳ Early bird prices end on{" "}
                        <span className="text-emphasis">August 10th, 2024</span> . Don't
                        miss out!
                    </p>
                </div>

                <div className="container">
                    <div className="ticket-grid">
                        {tickets_detials.map((ticket_info, index) => {
                            return (
                                <TicketComponent
                                    key={index}
                                    type={ticket_info.type}
                                    name={ticket_info.name}
                                    nameIcon={ticket_info.nameIcon}
                                    old_price={ticket_info.old_price}
                                    current_price={ticket_info.current_price}
                                    description={ticket_info.description}
                                    benefits={ticket_info.benefits}
                                    buttonText={ticket_info.buttonText}
                                    buttonLink={ticket_info.buttonLink}
                                    buttonClass={ticket_info.buttonClass}
                                />
                            )
                        })}
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ticket;
