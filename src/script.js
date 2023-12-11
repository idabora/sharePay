
// const vidElem= document.getElementById('vidId');

// const qrScanner = new QrScanner(
//     videoElem,
//     result => console.log('decoded qr code:', result),
//     { /* your options or returnDetailedScanResult: true if you're not specifying any other options */ },
// );
// qrScanner.start();

const qrcode = require('qrcode');

qrcode.toDataURL('img/png',{type:'terminal'},(err,url)=>{
    console.log(url);
})