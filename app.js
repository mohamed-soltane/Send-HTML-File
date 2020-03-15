const express = require('express')

const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'statics')))

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.listen(3000, () => console.log('server listen on port 3000'))