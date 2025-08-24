const connectToMongo = require('./db');
const express = require('express')
const dotenv = require('dotenv');
dotenv.config();
connectToMongo();
const app = express()
const PORT = process.env.PORT || 5000;
var cors = require('cors')

app.use(cors())

app.use(express.json())

// Available Routes
app.get('/', (req, res)=> res.send("API Working"))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(PORT, () => {
  console.log(`NoteCrate backend listening on port ${PORT}`)
})
