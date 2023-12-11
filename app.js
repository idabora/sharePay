const express= require('express');
const app=express();
const qrcode = require('qrcode');


let PORT = process.env.PORT || 2023;

app.get('/',async(req,res)=>{
    console.log("Server started");
    const upiDetails = 'upi://pay?pa=8193045263@paytm&pn=Anurodh%20Kumar&mc=1234&tid=123456&tr=123456789&tn=Payment%20for%20goods&cu=INR';

    // // Generate QR code
    // console.log(upiDetails);
    // const qrCode = await qrcode.toDataURL(upiDetails);
    // // res.send("DONE");
    // res.send(`<img src="${qrCode}" alt="UPI QR Code">`);
    const size=5;
    qrcode.toString(upiDetails,{type:'terminal',scale:size},(err,url)=>{
        console.log(url);
        // res.send(`<img src="${url}" alt="UPI QR Code">`);
    });
    const qrCode= qrcode.toDataURL(upiDetails,(err,url)=>{
        // console.log(url);
        res.send(`<img src="${url}" alt="UPI QR Code">`);

    });


})

app.listen(PORT,()=>{
    console.log(`Server Listening on port http://localhost:${PORT}`)
})

