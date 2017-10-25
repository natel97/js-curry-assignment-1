'use strict'

const listing =
  (name, price) => ({
    name,
    price
  })

const cart =
  (customer, ...items) => ({
    customer,
    items
  })

const listedPrice =
  listing =>
  name =>
  name === listing.name ?
  listing.price :
  0

/**
 * transform carts into an array of { customer, total }
 */
const calculateTotals =
  listings => carts => {
    return carts.map(x => {
      return {
        customer: x.customer,
        total: x.items.reduce((acc, x) => acc + listings.find(y => y.name === x).price, 0)
      }
    })
  }
module.exports = {
  listing,
  cart,
  calculateTotals
}
