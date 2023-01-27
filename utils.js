const totalUpdate = (e, total, price_details, tax) => {
    tax == undefined ? total[e[3]]['total'] = total[e[3]]['total'] + price_details : total[e[3]]['total'] = total[e[3]]['total'] + price_details + tax
    return tax
}

const discountUpdate = (e, total, price_details) => {
    const discount = price_details[e[2]] / 2
    total[e[3]]['discount'] = total[e[3]]['discount'] + discount
}
const passengerDetailsUpdate = (e, total) => {
    total[e[3]]['passenger_details'][e[2]] == undefined ? total[e[3]]['passenger_details'][e[2]] = 1 : total[e[3]]['passenger_details'][e[2]]++
}

module.exports = { totalUpdate, discountUpdate, passengerDetailsUpdate }