const express = require('express')

const app = express();

app.get('/', (req, res)=>{
    console.log(req)
    res.send('Hii')
})

app.listen(8080, ()=>{
    console.log('I am running')
})