const {totalUpdate,passengerDetailsUpdate} = require("./utils")

//Methods of starting Trip
const startingTrip = (e, card_details, price_details, total, first_trip) => {
    if (card_details[e[1]] >= (price_details[e[2]])) {
        startingPriceNotRequired(e, card_details, price_details, total, first_trip)
    } else {
        startingPriceRequired(e, card_details, price_details, total, first_trip)
    }
}

//Method when metr-card balance is less than to the required balance to travel in a train in the starting trip
const startingPriceRequired = (e, card_details, price_details, total, first_trip) => {
    const recharge = (price_details[e[2]]) - card_details[e[1]]
    const tax = recharge * 0.02
    totalUpdate(e, total, price_details[e[2]], tax)
    passengerDetailsUpdate(e,total)
    card_details[e[1]] = 0
    first_trip.push(e[1])
}


//Method when metr-card balance is heigher than to the required balance to travel in a train in the starting trip
const startingPriceNotRequired = (e, card_details, price_details, total, first_trip) => {
    totalUpdate(e, total, price_details[e[2]])
    passengerDetailsUpdate(e,total)
    card_details[e[1]] = card_details[e[1]] - (price_details[e[2]])
    first_trip.push(e[1])
}

module.exports = { startingTrip }