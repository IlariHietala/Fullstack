const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

const port = 3001

app.get("/",(req,res) => {
    res.status(200).json({message: "Node server is running on port " + port})
})

app.listen(port,() => {
    //console.log("Server is running on port" + port)
    console.log(`Server is running on port ${port}`)
})

