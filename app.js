const express= require('express');
const app=express();
const qrcode = require('qrcode');


let PORT = process.env.PORT || 2023;

app.get('/',async(req,res)=>{
    console.log("Server started");
    const upiDetails = 'upi://pay?pa=example@upi&pn=John%20Doe&mc=1234&tid=123456&tr=123456789&tn=Payment%20for%20goods&cu=INR';

    // Generate QR code
    const qrCode = await qrcode.toDataURL(upiDetails);
    // res.send("DONE");
    res.send(`<img src="${qrCode}" alt="UPI QR Code">`);

})

app.listen(PORT,()=>{
    console.log(`Server Listening on port http://localhost:${PORT}`)
})

