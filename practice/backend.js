const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express();
app.use(express.static('styles'))
app.use(express.urlencoded({extended:false}))

app.get('/', (req, res) =>{
    const indexPath = path.join(__dirname, 'ejs', 'index.html')
    res.sendFile(indexPath)
})
app.post('/store-user-inputs', function(req, res){
    const allRequest = req.body;
    const allRequestpath = path.join(__dirname, 'ejs', 'input.json')
    const readData = fs.readFileSync(allRequestpath)
    const parsedData = JSON.parse(allRequest)
    allRequestpath.push(allRequest)
    fs.writeFileSync(allRequestpath, JSON.stringify(parsedData))
})

app.listen(1000)


