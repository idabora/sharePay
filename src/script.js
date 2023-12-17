// const { JSDOM } = require('jsdom');
// import QrScanner from 'path/to/qr-scanner.min.js'; // if using plain es6 import
// import QrScanner from 'qr-scanner'; // if installed via package and bundling with a module bundler like webpack or rollup
// const jsdom = new JSDOM('<!DOCTYPE html><html><body><div id="vidId"></div></body></html>');
// const window = jsdom.window;
// const document = window.document;

window.onload = () => {
    const videoElem = document.getElementById('vidId');

    if (videoElem) {
        const qrScanner = new QrScanner(videoElem, result => {
            // This callback function is called when a QR code is successfully scanned
            console.log('QR code scanned:', result);
            returnDetailedScanResult: true
            // You can handle the scanned QR code result as needed
        });

        // Start the camera
        qrScanner.start();
    }
};
// window.addEventListener("load", (event) => {
//     console.log("Loading Done........");
//     const videoElem = document.getElementById('vidId');
//     console.log(videoElem.textContent); 
//  });