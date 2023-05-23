const express = require('express')
const app = express()

const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
  res.send('hello node api')
})


app.listen(port, () => {
  console.log('Node API app is runnning on port 3000')
})