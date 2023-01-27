const {totalUpdate,discountUpdate,passengerDetailsUpdate} = require("./utils")
//Methods for return Trip
const retutnTrip = (e, card_details, price_details, total, first_trip) => {
    if (card_details[e[1]] >= (price_details[e[2]] / 2)) {
        returnPriceNotRequired(e, card_details, price_details, total, first_trip)
    } else {
        returnPriceRequired(e, card_details, price_details, total, first_trip)
    }
}

//Method when metro-card balance is less than to the required balance to travel in a train in the return trip
const returnPriceRequired = (e, card_details, price_details, total, first_trip) => {
    const recharge = (price_details[e[2]] / 2) - card_details[e[1]]
    const tax = recharge * 0.02
    totalUpdate(e, total, price_details[e[2]]/2, tax)
    discountUpdate(e,total,price_details)
    passengerDetailsUpdate(e,total)
    card_details[e[1]] = 0
    first_trip.splice(first_trip.indexOf(e[1]), 1)
}


//Method when metro-card balance is heigher than to the required balance to travel in a train in the return trip
const returnPriceNotRequired = (e, card_details, price_details, total, first_trip) => {
    totalUpdate(e, total, price_details[e[2]]/2)
    discountUpdate(e,total,price_details)
    passengerDetailsUpdate(e,total)
    card_details[e[1]] = card_details[e[1]] - (price_details[e[2]] / 2)
    first_trip.splice(first_trip.indexOf(e[1]), 1)
}

module.exports = { retutnTrip }