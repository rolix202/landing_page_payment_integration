import express from "express";
import logger from "morgan";
import https from "https";
import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config()
const app = express()

app.use(logger("dev"))


app.post("/initialize-payment", async (req, res) => {
    // const params = JSON.stringify({
    //     "email": "swiftcoder147@gmail.com",
    //     "amount": "50000"
    // })

    // const options = {
    //     hostname: 'api.paystack.co',
    //     port: 443,
    //     path: '/transaction/initialize',
    //     method: 'POST',
    //     headers: {
    //         Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
    //         'Content-Type': 'application/json'
    //     }
    // }

    // const paystackReq = https.request(options, resPaystack => {
    //     let data = ''

    //     resPaystack.on('data', (chunk) => {
    //         data += chunk
    //     })

    //     resPaystack.on('end', () => {
    //         console.log(JSON.parse(data));
    //     })
    // })
    // paystackReq.on('error', error => {
    //     console.log(error);
    // })

    // paystackReq.write(params)
    // paystackReq.end()

    try {
        const paystackRes = await axios.post('https://api.paystack.co/transaction/initialize', {
            "email": "swiftcoder147@gmail.com",
            "amount": "500000000",
            metadata: {
                "custom_fields": [
                    {
                        "display_name": "Name",
                        "variable_name": "Name",
                        "value": "Roland Oodo"
                    },
                    {
                        "display_name": "Phone Number",
                        "variable_name": "Phone Number",
                        "value": "09033528556"
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

        res.json(paystackRes.data);

    } catch (error) {
        console.log(error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Payment initialization failed' });
    }
})


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`);
})