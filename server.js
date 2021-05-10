const express = require("express")
const app = express()
const cors = require("cors")
const PORT = 1337

app.use(cors())

let players = {
    "udoka azubuike": {
        "firstName": "Udoka",
        "lastName": "Azubuike",
        "number": 20,
        "position": "Center-Forward"
    },
    "bojan bogdanovic": {
        "firstName": "Bojan",
        "lastName": "Bogdanovich",
        "number": 44,
        "position": "Forward"
    },
    "jarrell brantley": {
        "firstName": "Jarrell",
        "lastName": "Brantley",
        "number": 5,
        "position": "Forward"
    },
    "jordan clarkson": {
        "firstName": "Jordan",
        "lastName": "Clarkson",
        "number": 00,
        "position": "Guard"
    },
    "mike conley": {
        "firstName": "Mike",
        "lastName": "Conley",
        "number": 10,
        "position": "Guard"
    },
    "derrick favors": {
        "firstName": "Derrick",
        "lastName": "Favors",
        "number": 15,
        "position": "Forward"
    },
    "trent forrest": {
        "firstName": "Trent",
        "lastName": "Forrest",
        "number": 3,
        "position": "Guard"
    },
    "rudy gobert": {
        "firstName": "Rudy",
        "lastName": "Gobert",
        "number": 27,
        "position": "Center"
    },
    "elijah hughes": {
        "firstName": "Elijah",
        "lastName": "Hughes",
        "number": 33,
        "position": "Guard"
    },
    "ersan ilyasova": {
        "firstName": "Ersan",
        "lastName": "Ilyasova",
        "number": 77,
        "position": "Forward"
    },
    "joe ingles": {
        "firstName": "Joe",
        "lastName": "Ingles",
        "number": 2,
        "position": "Forward-Guard"
    },
    "donovan mitchell": {
        "firstName": "Donovan",
        "lastName": "Mitchell",
        "number": 45,
        "position": "Guard"
    },
    "juwan morgan": {
        "firstName": "Juwan",
        "lastName": "Morgan",
        "number": 16,
        "position": "Forward"
    },
    "georges niang": {
        "firstName": "Georges",
        "lastName": "Niang",
        "number": 31,
        "position": "Forward"
    },
    "royce o'neale": {
        "firstName": "Royce",
        "lastName": "O'Neale",
        "number": 23,
        "position": "Forward"
    },
    "miye oni": {
        "firstName": "miye",
        "lastName": "oni",
        "number": 81,
        "position": "Guard-Forward"
    },
    "matt thomas": {
        "firstName": "Matt",
        "lastName": "Thomas",
        "number": 21,
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

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is up on ${PORT}`)
})