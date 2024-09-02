import React, { useEffect, useState } from 'react'


const RegularInfo = () => {


    const [price, setPrice] = useState('-')
    const [ticketType, setTicketType] = useState('Regular')
    const paths = window.location.pathname;

    useEffect(() => {
        const ticketInfo = {
            "/regular-ticket": { price: "1,500", type: "Regular" },
            "/vip-ticket": { price: "10,000", type: "VIP" },
            "/executive-ticket": { price: "20,000", type: "Executive" },
        }

        const priceDetails = ticketInfo[paths] || { price: "-", type: "Unknown" }

        setPrice(priceDetails.price)
        setTicketType(priceDetails.type)
    }, [paths])

    return (
        <div className="r_info_wrapper">
            <div className="w-75 mx-auto p-5">
                <div className="row pt-5">
                    <div className="col-md-6 d-flex align-items-center">
                        <h2 className='fw-medium'>Reserve your Ticket NOW!</h2>
                    </div>
                    <div className="col-md-6 ">
                        <p className='lead fs-1 fw-bolder text-end'>&#8358;{price} </p>
                    </div>
                </div>

                <div className="form-input d-flex justify-content-center">
                    <form className="row g-3 pt-5 w-100">
                        <div className="col-md-6">
                            <label htmlFor="first-name" className="form-label">First Name</label>
                            <input type="text" className="form-control" id="first-name" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="last-name" className="form-label">Last Name</label>
                            <input type="text" className="form-control" id="last-name" />
                        </div>
                        <div className="col-12">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" />
                        </div>
                        <div className="col-12">
                            <label htmlFor="ticket-type" className="form-label">Ticket Type</label>
                            <input type="text" className="form-control fst-italic" id="ticket-type" value={ticketType} disabled />
                        </div>

                        <div className="col-12">
                            <button type="submit" className="btn btn-danger">Reserve NOW!</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RegularInfo