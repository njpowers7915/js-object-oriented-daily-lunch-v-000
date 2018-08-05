// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

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
    return store.meals.find(meal => {
      return meal.id = this.mealId
    })
  }

  customer() {
    return store.customers.find(customer => {
      return customer.id = this.customerId
    })
  }

  neighborhood() {
    return store.neighborhoods.find(neighborhood => {
      return neighborhood.id = this.neighborhoodId
    })
  }

}

let mealId = 0
class Meal {
  constructor(title, price) {
    this.id = ++mealId
    this.title = title
    this.price = price
    store.meals.push(this)
  }

  deliveries() {
    return store.deliveries.filter(delivery => {
      return delivery.mealId === this.id
    })
  }
  customers() {
    let mealCustomers = this.deliveries().map(delivery => {
      return delivery.customer();
    })
    return Array.from(new Set(mealCustomers))
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
      return delivery.neighborhoodId === this.id
    })
  }
  customers() {
    return this.deliveries().map(delivery => {
      return delivery.customer();
    })
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
    return store.deliveries.filter(delivery => {
      return delivery.customerId === this.id
    })
  }

  meals() {
    let customerDeliveries = this.deliveries()
    let customerMeals = []
    customerDeliveries.forEach(function(delivery) {
      customerMeals.push(delivery.meal());
    })
    return customerMeals;
  }
}
