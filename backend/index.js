const express = require('express')
const cors = require('cors')
const stripe = require('stripe')('sk_test_...');
const { v4: uuidv4 } = require('uuid');
const app = express()
const port = 4000

uuidv4();

//middle wares
app.use(express.json())
app.use(cors())

// routes
app.get('/', (req, res) => res.send('Hello World!'))

//listen
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))