// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

let mealId = 0
class Meal {
  constructor(title, price) {
    this.id = ++mealId
    this.title = title
    this.price = price
    store.meals.push(this)
  }

  deliveries() {

  }
  customers() {

  }
}

let neighborhoodId = 0
class Neighborhood {
  constructor(name) {
    this.id = ++neighborhoodId
    this.name = name
    store.neighborhoods.push(this)
  }

  deliveries() {
    return store.deliveries.filter(delivery => {
      return dilvery.neighborhoodId === this.id
    })
  }
  customers() {

  }
}

let customerId = 0
class Customer {
  constructor(name, neighborhoodId) {
    this.id = ++customerId
    this.name = name
    this.neighborhoodId = neighborhoodId
    store.customers.push(this)
  }

  deliveries() {

  }
  customers() {

  }
}

let deliveryId = 0
class Delivery {
  constructor(mealId, neighborhoodId, customerId) {
    this.id = ++deliveryId
    this.mealId = mealId
    this.neighborhoodId = neighborhoodId
    this.customerId = customerId
    store.deliveries.push(this)
  }

  meal() {

  }

  customer() {

  }

  neighborhood() {

  }

}
