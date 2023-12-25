const express = require('express');
const app = express();
// const scriptFile=require('./src/script')
const path = require('path');
const qrScanner = require('qr-scanner');
const staticpath = path.join(__dirname, './src')
app.use(express.static(staticpath));
app.use(express.json())

let PORT = process.env.PORT || 2023;


app.get('/', (req, res) => {
    console.log(staticpath);
    res.sendFile(path.join(__dirname, './src/index.html'));
});

app.post('/dothat', (req, res) => {
    try{

        console.log("do that");
        console.log(req.body)
    //     const videoInfo = req.body;
        
    //     let videoTag=`<html><head></head><body><video id=${videoInfo.id} ></video></body></html>`;
    //     const QrScanner = new qrScanner(videoTag, result => {
    //     // This callback function is called when a QR code is successfully scanned
    //     console.log('QR code scanned:', result);
    //     if (result?.data) {
    //         let a = JSON.stringify(result.data);
    //         let index = a.indexOf('&');
    //         let upiId = a.slice(14, index);
    //         let userName = a.slice(index + 4, a.lastIndexOf('&'));
    //         console.log(upiId);
    //         console.log(userName)
    //         QrScanner.stop();
    //     }
    //     // You can handle the scanned QR code result as needed
    // }, {
    //     // returnDetailedScanResult: true,
    //     onDecodeError: (error) => {
    //         console.error('QR code scan error:', error);
    //         // Handle the error as needed
    //     },
    //     prefferdCamera: 'User',
    //     highlightScanRegion: true,
    //     maxScansPerSecond: 3
    //     // calculateScanRegion: 20
    // });
    res.send('DO THATs')
}catch(err){
    console.log(err)
}
})

app.listen(PORT, () => {
    console.log(`Server Listening on port http://localhost:${PORT}`)
})

