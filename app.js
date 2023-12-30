const express = require('express');
const app = express();
// const scriptFile=require('./src/script')
const path = require('path');
const qrScanner = require('qr-scanner');
const staticpath = path.join(__dirname, './src')
app.use(express.static(staticpath));
app.use(express.json());
app.use('/scripts', express.static(path.join(__dirname, 'node_modules')));
// app.use(express.static(staticpath, { 'Content-Type': 'application/javascript' }));



let PORT = process.env.PORT || 2023;


app.get('/', (req, res) => {
    console.log(staticpath);
    res.sendFile(path.join(__dirname, '/src/index.html'));
});

app.post('/dothat', (req, res) => {
    try{

        console.log("do that");
        console.log(req.body)
    //     const videoInfo = req.body;
        
    res.send('DO THATs')
}catch(err){
    console.log("*****ERROR*****");
    console.log(err)
}
})

app.listen(PORT, () => {
    console.log(`Server Listening on port http://localhost:${PORT}`)
})

