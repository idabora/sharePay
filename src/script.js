// // client.js
// function doThat() {
//     // Access the video element
//     let videoElem = document.getElementById('vidId');

//     // Your logic to interact with the video element goes here
//     console.log('Accessed video element:', videoElem);
//     const videoInfo = {
//         id: videoElem.id
//         // Add any other relevant information you need
//     };
//     // Make an AJAX request to the server
//     const xhr = new XMLHttpRequest();
//     xhr.open('POST', '/dothat',true);
//     xhr.setRequestHeader('Content-Type', 'application/json');

//     xhr.onreadystatechange = function () {
//         console.log(xhr.readyState);
//     };
//     console.log("here");
//     // videoElem=`<video id=${videoInfo.id}>vid</video>`;
//     // videoElem="hes"
//     // console.log("here");
//     xhr.send(JSON.stringify(videoInfo));
// }



window.onload = () => {
    const videoElem = document.getElementById('vidId');
    let userName;
    let upiId;
    if (videoElem) {
        const qrScanner = new QrScanner(videoElem, result => {
            // This callback function is called when a QR code is successfully scanned
            console.log('QR code scanned:', result);
            if (result?.data) {
                // let data=JSON.stringify(result.data)
                let data=result.data
                let payeeAdd = data.indexOf('pa=');
                let payeeName = data.indexOf('pn=');
                let andInd = data.indexOf('&');
                userInd = (data.length > data.lastIndexOf('&')+1) ? data.lastIndexOf('&'):data.length-1;
                console.log("--",userInd);
                upiId = data.slice(payeeAdd + 3, andInd);

                userName = data.slice(payeeName + 3, userInd);
                console.log("upi-",upiId);
                console.log(payeeName,userInd);
                console.log("usernmae-",userName);
                qrScanner.stop();
            }
            // You can handle the scanned QR code result as needed
        }, {
            // returnDetailedScanResult: true,
            onDecodeError: (error) => {
                console.error('QR code scan error:', error);
                // Handle the error as needed
            },
            prefferdCamera: 'User',
            highlightScanRegion: true,
            maxScansPerSecond: 3
            // calculateScanRegion: 20
        });

        qrScanner.start();

    }

    const xhr = new XMLHttpRequest();

    xhr.open("POST", '/dothat', true);

    xhr.onreadystatechange = () => {
        console.log(xhr.status);
        console.log(xhr.readyState);
    }
    let userObj = {
        userName,
        upiId
    }
    xhr.send(JSON.stringify(userObj))

};
