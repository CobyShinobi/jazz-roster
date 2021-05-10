const express = require("express")
const app = express()
const cors = require("cors")
const PORT = 1337

app.use(cors())

let players = {
    "jordan clarkson": {
        "firstName": "Jordan",
        "lastName": "Clarkson",
        "number": 00,
        "position": "Guard"
    },
    "donovan mitchell": {
        "firstName": "Donovan",
        "lastName": "Mitchell",
        "number": 45,
        "position": "Guard"
    },
    "unknown": {
        "firstName": "unknown",
        "lastName": "unknown",
        "number": "unknown",
        "position": "unknown"
    }
}

app.get("/", (request, response) => {
    response.sendFile(__dirname + "/index.html")
})

app.get("/api/players/:playerName", (request, response) => {
    const playerName = request.params.playerName.toLowerCase()
    if(players[playerName]) {
        response.json(players[playerName])
    } else {
        response.json(players["unknown"])
    }
})

app.listen(PORT, () => {
    console.log(`Server is up on ${PORT}`)
})