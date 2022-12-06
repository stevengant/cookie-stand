'use strict';

// function randomCust(min, max) {
//   // got from MDN docs
//   return Math.floor(Math.random() * (min - max + 1) + min);
// }

// followed along in code review in class 7
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


// DOM window
let storeSection = document.getElementById('stores');

let Seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieBought: 6.3,
  cookiesBought: [],
  total: 0,
  custPerHr: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookesSales: function() {
    for(let i = 0; i < hours.length; i++) {
      let cookiesNeeded = this.custPerHr() * this.avgCookieBought();
      this.cookiesBought.push(cookiesNeeded);
      this.total = this.total + cookiesNeeded;
      // this.total += cookiesNeeded;
    }
  },
  render: function() {
    this.cookeSales();
    let ulElem = document.createElement('ul');
    storeSection.appendChild(ulElem);
  }
};