import React, { useEffect, useState } from 'react'
import axios from 'axios'

const VerifyPayment = () => {

  const [status, setStatus] = useState("Verifying ...")

  useEffect(() => {
    const verifyPayment = async () => {
      const urlParam = new URLSearchParams(window.location.search)

      const reference = urlParam.get("reference")

      if (reference) {
        try {
          const response = await axios.get(`http://localhost:5000/verify-payment?reference=${reference}`)
          setStatus(response.data.message)
        } catch (error) {
          console.log(error);
          setStatus("Payment verification failed. Please try again.")
        }
      } else {
        setStatus("No payment reference found.")
      }
    }

    verifyPayment()
  }, [])

  return (
    <div className='d-flex justify-content-center align-items-center text-center min-vh-100'>
      <div className="status-wrapper">
        <h1>{status} </h1>
      <p className='text-success fst-italic'>A receipt has been sent to your mailbox.</p>
      </div>
      
    </div>
  )
}

export default VerifyPayment