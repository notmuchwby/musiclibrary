const express = require('express')
const router = require('./routes/router')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', router)

app.listen(8800, async () => {
    
    console.log(`the server has started on port 8800`)    
})