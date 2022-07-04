const exp = require('constants')
const express = require('express')
const path = require('path')
const text_convert = require('./app')
const app = express()


app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, 'public/view/index.html'))
})

app.post('/text', (req, res)=>{
    const text = req.body
    let data = text_convert(text.text);
    res.json({data})
})


const port = 3001
app.listen(port, ()=>{
    console.log(`server is connected on http//localhost:${port}\ `);
})
