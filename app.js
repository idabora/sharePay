const express= require('express');
const app=express();

let PORT = process.env.PORT || 2023;

app.get('/',(req,res)=>{
    console.log("Server started");
    res.send("DONE");
})

app.listen(PORT,()=>{
    console.log(`Server Listening on port http://localhost:${PORT}`)
})

