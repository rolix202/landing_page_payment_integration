import React, { useEffect, useState, useMemo } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'


const RegularInfo = () => {

    const [paymentInfo, setPaymentInfo] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone_no: ""
    })
    const [price, setPrice] = useState('-')
    const [ticketType, setTicketType] = useState('Regular')
    const [loader, setLoader] = useState(false)
    const paths = window.location.pathname;
    const base_url = window.location.origin

    const backendEndpoint = import.meta.env.VITE_BACKEND_ENDPOINT;
    
    const ticketInfo = useMemo(() => ({
        "/regular-ticket": { price: "1,500", type: "Regular" },
        "/vip-ticket": { price: "10,000", type: "VIP" },
        "/executive-ticket": { price: "20,000", type: "Executive" },
    }), [])

    useEffect(() => {
        const priceDetails = ticketInfo[paths] || { price: "-", type: "Unknown" }

        setPrice(priceDetails.price)
        setTicketType(priceDetails.type)
    }, [paths])

    const handleFormInput = (e) => {
        const { name, value } = e.target

        setPaymentInfo((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!paymentInfo.first_name || !paymentInfo.last_name || !paymentInfo.email || !ticketType || !paymentInfo.phone_no) {
            // alert("Please fill in all required fields.");
            toast.error("Please fill in all required fields.")
            return;
        }

        const ticketInfo = {
            first_name: paymentInfo.first_name,
            last_name: paymentInfo.last_name,
            email: paymentInfo.email,
            phone_no: paymentInfo.phone_no,
            ticket_type: ticketType,
            base_url: base_url
        }

        try {
            setLoader(true)
            const response = await axios.post(`${backendEndpoint}/initialize-payment`, ticketInfo);

            if (response.data.data && response.data.data.authorization_url) {
                window.location.href = response.data.data.authorization_url
                setLoader(false)
            }
            else {
                toast.error("Payment initialization failed")
            }

        } catch (error) {
            console.log(error);

            if (error.response && error.response.data && error.response.data.error) {
                const errorMessage = error.response.data.error

                if (Array.isArray(errorMessage)) {
                    errorMessage.forEach((err) => toast.error(err))
                }
                else {
                    toast.error(errorMessage)
                }
            } else {
                toast.error("An error occurred. Please try again.")
            }
        } finally {
            setLoader(false)
        }
    }


    return (
        <div className="r_info_wrapper">
            <div className="payment_form w-75 mx-auto p-5">
                <div className="row pt-5">
                    <div className="col-12 col-md-8 d-flex align-items-center reserve_ticket">
                        <h2 className='fw-medium'>Reserve your Ticket NOW!</h2>
                    </div>
                    <div className="col-12 col-md-4">
                        <p className='lead fs-1 fw-bolder text-end price_ticket'>&#8358;{price} </p>
                    </div>
                </div>

                <div className="form-input d-flex justify-content-center">
                    <form method="post" className="row g-3 pt-5 w-100" onSubmit={handleSubmit}>
                        <div className="col-md-6">
                            <label htmlFor="first-name" className="form-label">First Name</label>
                            <input type="text" className="form-control" id="first-name" name="first_name" onChange={handleFormInput} value={paymentInfo.first_name} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="last-name" className="form-label">Last Name</label>
                            <input type="text" className="form-control" id="last-name" name="last_name" onChange={handleFormInput} value={paymentInfo.last_name} />
                        </div>
                        <div className="col-md-8">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" name="email" onChange={handleFormInput} value={paymentInfo.email} />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="phone_no" className="form-label">Phone No.</label>
                            <input type="text" className="form-control" id="phone_no" name="phone_no" onChange={handleFormInput} value={paymentInfo.phone_no} />
                        </div>
                        <div className="col-12">
                            <label htmlFor="ticket-type" className="form-label">Ticket Type</label>
                            <input type="text" className="form-control fst-italic" id="ticket-type" name="ticket_type" value={ticketType} disabled />
                        </div>

                        <div className="col-12">
                            <button type="submit" className="btn btn-danger" disabled={loader} aria-disabled={loader}>
                                {loader ? (
                                        <div>
                                            <span className="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                                            <span role="status" className='fst-italic'>Submitting ...</span>
                                        </div>
                                ) : "Reserve NOW!"}
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default RegularInfo
