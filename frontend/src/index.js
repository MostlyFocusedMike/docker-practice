// fetch needs to be loaded on the backend
const fetch = require('node-fetch')

const express = require('express')
const app = express()

const template = function(query) {
    return (`
        <h1>Hello there</h1>
        <p>If you are using backend servers, you can gain access to other containers by using their
        service name, in this case, we can talk to the backend service with 'http://backend:8000'</p>
        <p> Here are the results of that fetch</p>
        <p>variable: ${query.variable}</p>
    `)
}

app.get('/', function(req, res) {
    fetch('http://backend:8000')
        .then(q =>  q.json())
        .then(q => {
            res.send(template(q))
        })
        .catch(console.log)
})

app.listen(8000)
