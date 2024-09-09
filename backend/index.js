import express, { json } from "express";
import logger from "morgan";
import https from "https";
import axios from "axios";
import cors from "cors";
import { body, validationResult } from "express-validator";
import * as dotenv from "dotenv";
dotenv.config()
const app = express()

app.use(logger("dev"))
app.use(cors())
app.use(express.json())


const ticket_info = {
    regular: 1500,
    vip: 10000,
    executive: 20000
}

app.post("/initialize-payment", [
    body("first_name").notEmpty().withMessage("First name is required!").escape().trim(),
    body("last_name").notEmpty().withMessage("Last name is required!").escape().trim(),
    body("email").notEmpty().withMessage("Email is required!").isEmail().withMessage("Not a valid email address!") .trim(),
    body("phone_no").notEmpty().withMessage("Phone number is required!").matches(/^(\+234|0)[789]\d{9}$/).withMessage("Invalid phone number").trim().escape(),
    body("ticket_type").notEmpty().withMessage("Ticket type is required!").escape().trim().toLowerCase(),
], async (req, res) => {

    const errors = validationResult(req)

    if (!errors.isEmpty()){
        const errorMessaage = errors.array().map((err) => err.msg)

        return res.status(400).json({
            error: errorMessaage
        })
    }

    const { first_name, last_name, email, phone_no, ticket_type, base_url } = req.body

    if(!ticket_info[ticket_type]){
        return res.status(400).json({ error: "Invalid ticket type."})
    }

    const amount = ticket_info[ticket_type] * 100;

    
    try {
        const paystackRes = await axios.post('https://api.paystack.co/transaction/initialize', {
            "email": email,
            "amount": amount,
            callback_url: `${base_url}/verify-payment`,
            metadata: {
                "custom_fields": [
                    {
                        "display_name": "First Name",
                        "variable_name": "first_name",
                        "value": first_name
                    },
                    {
                        "display_name": "Last Name",
                        "variable_name": "last_name",
                        "value": last_name
                    },
                    {
                        "display_name": "Phone Number",
                        "variable_name": "phone",
                        "value": phone_no
                    }
                ]
            }
        },
            {
                headers: {
                    Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
                    'Content-Type': 'application/json'
                }
            }
        )
        // console.log("Paystack Response Data:", paystackRes.data);

        res.status(200).json(paystackRes.data);

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Payment initialization failed." });
    }
})

app.get("/verify-payment", async (req, res) => {
    const { reference } = req.query
    
    if (!reference){
        return res.status(404).json({error: "Invalid Payment ID"})
    }

    try {
        const response = await axios.get(`https://api.paystack.co/transaction/verify/${reference}`, {
            headers: {
                Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
                'Content-Type': 'application/json'
            }
        })

        const responseStatus = response.data?.data.status
        if (responseStatus === "success"){
            res.status(200).json({
                message: "Payment comfirmed!"
            })
        } else {
            res.status(400).json("Payment confrimation failed. Try again!")
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'Payment verification failed' });
    }
})


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`);
})