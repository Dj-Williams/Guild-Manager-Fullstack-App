const express = require('express')
const app = express()
const routes = require('./routes/index')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + '/client/build/'));

app.get('/', (req, res) => {
    res.sendFile('/client/build/index.html')
})

app.use('/', routes)


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Express is actually listening on PORT: ${PORT} You're doing great!`)
})