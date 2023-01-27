const { retutnTrip } = require("./returnTrip")
const { startingTrip } = require("./startingTrip")


const defaultFunction = (e, card_details, price_details, station_details, first_trip) => {
    if (first_trip.indexOf(e[1]) != -1) {
        retutnTrip(e, card_details, price_details, station_details, first_trip)
    } else {
        startingTrip(e, card_details, price_details, station_details, first_trip)
    }
}


const startFunction = (inputLines, card_details, price_details, station_details, first_trip) => {
    inputLines.forEach((e) => {
        if (e[0] == "BALANCE") {
            card_details[e[1]] = e[2]
        } else if (e[0] == "CHECK_IN") {
            defaultFunction(e, card_details, price_details, station_details, first_trip)
        }
        else if (e[0] == "PRINT_SUMMARY") {
            printMethod(station_details)
        }
    })
}

const printMethod = (total) => {
    for (let key in total) {
        let sortable = total[key]['passenger_details']
        let entries = Object.entries(sortable);
        let sorted = entries.sort((a, b) => {
            if (a[1] > b[1]) return -1
            else if (a[1] < b[1]) return 1
            else {
                if (a[0] > b[0]) return 1
                else if (a[0] < b[0]) return -1
            }
        });
        console.log("TOTAL_COLLECTION", key, total[key]['total'], total[key]['discount'])
        console.log("PASSENGER_TYPE_SUMMARY")
        sorted.forEach((e) => {
            console.log(e[0], e[1])
        })
    }
}

module.exports = { startFunction, printMethod }