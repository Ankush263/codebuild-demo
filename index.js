const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.status(200).json({ status: 'success', data: 'Hello Ankush' });
})

app.get('/test', (req, res) => {
    res.status(200).json({ status: 'success', data: 'Testing...' })
})

app.listen(8000, () => {
    console.log(`You are listening to the port 8000`)
})

