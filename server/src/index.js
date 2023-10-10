const ws = require('ws')
const mysql = require('mysql2')
require('dotenv').config()

const wsServer = new ws.Server({
    port: process.env.SERVER_PORT,
}, () => console.log(`Server started on port: ${process.env.SERVER_PORT}`))

const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
})

connection.query("SELECT * FROM `message` WHERE `roomID` = 1", function(err, rows, fields) {
    return rows
})

wsServer.on('connection', function connection(ws) {
    ws.on('message', function (message) {
        message = JSON.parse(message)
        switch (message.event) {
            case 'message':
                console.log(message)
                broadcastMessage(message)
                break
            case 'connection':
                broadcastMessage(message)
                break
            case 'getMessagesInRoom':
                
                break
        }
    })
    ws.send('User connected successful!')
})

// const message = {
//     event: 'message/connection',
//     id: 123,
//     date: '21.01.2021',
//     username: 'mastervlados',
//     message: 'Hell Done!'
// }

function broadcastMessage(message) {
    wsServer.clients.forEach(client => {
        client.send(JSON.stringify(message))
    })
}