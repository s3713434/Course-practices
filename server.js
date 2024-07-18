const express = require('express')
const cors = require('cors')
const connectDB = require('./db')
const routes = require('./routes/route')
const app = express()

const port = 8000
connectDB()

app.use(
  cors({
    // 只能访问到5173端口否则报错cors问题
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  })
)
app.use(express.json())

app.use('/api', routes)

app.listen(port, () => {
  console.log(`Sever running on port ${port}`)
})
