
window.onload = () => {
    const videoElem = document.getElementById('vidId');

    if (videoElem) {
        const qrScanner = new QrScanner(videoElem, result => {
            // This callback function is called when a QR code is successfully scanned
            console.log('QR code scanned:', result);
            if(result?.data){
                let a=JSON.stringify(result.data);
                let index=a.indexOf('&');
                let upiId=a.slice(14,index);
                let userName=a.slice(index+4,a.lastIndexOf('&'));
                console.log(upiId);
                console.log(userName)
                qrScanner.stop();
            }
            // You can handle the scanned QR code result as needed
        }, {
            // returnDetailedScanResult: true,
            onDecodeError:  (error) => {
                console.error('QR code scan error:', error);
                // Handle the error as needed
            },
            prefferdCamera: 'User',
            highlightScanRegion: true,
            maxScansPerSecond:3
            // calculateScanRegion: 20
        });

        console.log(qrScanner.start());

    }
};
