
// let upiId;
// window.onload = () => {

//     const videoElem = document.getElementById('vidId');
//     let userName;
//     // let upiId;
//     if (videoElem) {
//         const qrScanner = new QrScanner(videoElem, result => {
//             // This callback function is called when a QR code is successfully scanned
//             console.log('QR code scanned:', result);
//             if (result?.data) {
//                 // let data=JSON.stringify(result.data)
//                 let data = result.data
//                 let payeeAdd = data.indexOf('pa=');
//                 // let payeeName = data.indexOf('pn=');
//                 let andInd = data.indexOf('&');
//                 // userInd = (data.length > data.lastIndexOf('&')+1) ? data.lastIndexOf('&'):data.length-1;
//                 // console.log("--",userInd);
//                 upiId = data.slice(payeeAdd + 3, andInd);

//                 // userName = data.slice(payeeName + 3, userInd);
//                 console.log("upi-", upiId);
//                 // console.log(payeeName,userInd);
//                 // console.log("usernmae-",userName);
//                 qrScanner.stop();
//             }
//             // You can handle the scanned QR code result as needed
//         }, {
//             // returnDetailedScanResult: true,
//             onDecodeError: (error) => {
//                 console.error('QR code scan error:', error);
//                 // Handle the error as needed
//             },
//             prefferdCamera: 'User',
//             highlightScanRegion: true,
//             maxScansPerSecond: 3
//             // calculateScanRegion: 20
//         });

//         qrScanner.start();

//     }
// };

// function dothat() {

//     const xhr = new XMLHttpRequest();

//     xhr.open("POST", '/dothat', true);

//     xhr.onreadystatechange = () => {
//         console.log(xhr.status);
//         console.log(xhr.readyState);
//     }

//     xhr.send(upiId)

// }
// window.dothat=dothat;





let upiId; // Declare upiId in a global scope

window.onload = () => {
    const videoElem = document.getElementById('vidId');

    if (videoElem) {
        const qrScanner = new QrScanner(videoElem, result => {
            if (result?.data) {
                upiId = extractUpiId(result.data);
                console.log(upiId)
                qrScanner.stop();
            }
        }, {
            // returnDetailedScanResult: true,
            onDecodeError: (error) => {
                console.error('QR code scan error:', error);
                // Handle the error as needed
            },
            prefferdCamera: 'User',
            highlightScanRegion: true,
            maxScansPerSecond: 3,
            // calculateScanRegion: 20
        });

        qrScanner.start();
    }
};

function dothat() {
    console.log("======>>>>>",upiId)
    const xhr = new XMLHttpRequest();
    
    xhr.open("POST", '/dothat', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = () => {
        console.log(xhr.status);
        console.log(xhr.readyState);
    }
    console.log(JSON.stringify(upiId),upiId)
    let obj={};
    obj['upiId']=upiId;
    console.log(obj);
    xhr.send(JSON.stringify(obj));
}

// Extract UPI ID logic (you can modify this based on your actual data extraction logic)
function extractUpiId(data) {
    const payeeAdd = data.indexOf('pa=');
    const andInd = data.indexOf('&');
    return data.slice(payeeAdd + 3, andInd);
}

// Ensure dothat() is accessible globally
window.dothat = dothat;
