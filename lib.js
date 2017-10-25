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
        total: x.items.reduce((acc, x) => (typeof acc == "string") ? (listings.find(y => y.name === acc).price + listings.find(y => y.name === x).price) : (acc + listings.find(y => y.name === x).price))
      }
    })
  }
module.exports = {
  listing,
  cart,
  calculateTotals
}
