const fs = require("fs")
const { startFunction, printMethod } = require("./intialMethod")
const filename = process.argv[2]


const updateInputLines = (inputLines) => {
    for (let i = 0; i < inputLines.length; i++) {
        inputLines[i] = inputLines[i].trim().split(" ")
    }
}


fs.readFile(filename, "utf8", (err, data) => {
    if (err) throw err
    var inputLines = data.toString().split("\n")
    // Add your code here to process input commands
    let card_details = {}
    let station_details = { CENTRAL: { total: 0, discount: 0, passenger_details: {} }, AIRPORT: { total: 0, discount: 0, passenger_details: {} } }
    let first_trip = []
    const price_details = {
        ADULT: 200,
        SENIOR_CITIZEN: 100,
        KID: 50
    }

    const updatedData = updateInputLines(inputLines)
    startFunction(inputLines, card_details, price_details, station_details, first_trip)

})

