const express = require('express')

const app = express();

app.get('/', (req, res)=>{
    console.log(req)
    res.send('Hii')
})

app.listen(3000, ()=>{
    console.log('I am running')
})