const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.get('/subham', (req, res) => {
  res.sendFile(path.join(__dirname,'/page.html'));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})