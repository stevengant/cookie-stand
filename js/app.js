'use strict';

let hours = ['6am', '7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm'];

let storeSection = document.getElementById('stores');

// Followed along with code review in class 7
let seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieBought: 6.3,
  cookiesBought: [],
  total: 0,
  custPerHr: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookieSales: function(){
    for(let i = 0; i < hours.length; i++) {
      let cookiesNeeded = this.custPerHr() * this.avgCookieBought;
      this.cookiesBought.push(cookiesNeeded);
      this.total = this.total + cookiesNeeded;
    }
  },
  render: function() {
    this.cookieSales();
    let ulElem = document.createElement('ul');

    storeSection.appendChild(ulElem);
  }
};


seattle.render();

let tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookieBought: 1.2,
  cookiesBought: [],
  total: 0,
  custPerHr: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookieSales: function(){
    for(let i = 0; i < hours.length; i++) {
      let cookiesNeeded = this.custPerHr() * this.avgCookieBought;
      this.cookiesBought.push(cookiesNeeded);
      this.total = this.total + cookiesNeeded;
    }
  },
  render: function() {
    this.cookieSales();
    let ulElem = document.createElement('ul');

    storeSection.appendChild(ulElem);
  }
};


tokyo.render();

let Dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookieBought: 3.7,
  cookiesBought: [],
  total: 0,
  custPerHr: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookieSales: function(){
    for(let i = 0; i < hours.length; i++) {
      let cookiesNeeded = this.custPerHr() * this.avgCookieBought;
      this.cookiesBought.push(cookiesNeeded);
      this.total = this.total + cookiesNeeded;
    }
  },
  render: function() {
    this.cookieSales();
    let ulElem = document.createElement('ul');

    storeSection.appendChild(ulElem);
  }
};


Dubai.render();

let paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookieBought: 2.3,
  cookiesBought: [],
  total: 0,
  custPerHr: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookieSales: function(){
    for(let i = 0; i < hours.length; i++) {
      let cookiesNeeded = this.custPerHr() * this.avgCookieBought;
      this.cookiesBought.push(cookiesNeeded);
      this.total = this.total + cookiesNeeded;
    }
  },
  render: function() {
    this.cookieSales();
    let ulElem = document.createElement('ul');

    storeSection.appendChild(ulElem);
  }
};


paris.render();

let lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookieBought: 4.6,
  cookiesBought: [],
  total: 0,
  custPerHr: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookieSales: function(){
    for(let i = 0; i < hours.length; i++) {
      let cookiesNeeded = this.custPerHr() * this.avgCookieBought;
      this.cookiesBought.push(cookiesNeeded);
      this.total = this.total + cookiesNeeded;
    }
  },
  render: function() {
    this.cookieSales();
    let ulElem = document.createElement('ul');

    storeSection.appendChild(ulElem);
  }
};


lima.render();
