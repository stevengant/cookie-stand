'use strict';

// created operation hours variable
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let cookieTable = document.getElementById('stores');

// constructor for all Stores
function Store(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.cookiesSold = [];
  this.total = 0;
  this.getRandCust = function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min); 
  };
  this.getRandomCookPerHour = function () {

    return Math.round(this.getRandCust() * this.avg); // generate a single average day
  };
  this.soldArr = function () {
    for (let i = 0; i < hours.length; i++) {
      this.cookiesSold.push(this.getRandomCookPerHour()); // assign a random daily average
    }
  };
  this.totalCookSales = function () {
    this.soldArr();
    for (let i = 0; i < this.cookiesSold.length; i++) {
      this.total += this.cookiesSold[i]; // total cookies sold per store
    }
  };

  this.render();
}

Store.prototype.render = function () {
  this.totalCookSales();
  let tr = document.createElement('tr');
  let td = document.createElement('td');
  td.textContent = this.name;
  tr.appendChild(td);

  for (let i = 0; i < this.cookiesSold.length; i++) {
    let td = document.createElement('td');
    td.textContent = this.cookiesSold[i];
    tr.appendChild(td);
    // this.hourTotals += this.cookiesSold[i];
  }
  td = document.createElement('td');
  td.textContent = this.total;
  tr.appendChild(td);
  cookieTable.appendChild(tr);

};


function opHours() {
  let thead = document.createElement('thead');
  let tr = document.createElement('tr');
  thead.appendChild(tr);
  let th = document.createElement('th');
  thead.appendChild(th);
  // td.textContent = this.name;
  // thead.appendChild(th);

  for (let i = 0; i < hours.length; i++) {
    th = document.createElement('th');
    th.textContent = hours[i];
    thead.appendChild(th);
    // this.hourTotals += this.cookiesSold[i];
  }
  th = document.createElement('th');
  th.textContent = 'Total';
  thead.appendChild(th);
  cookieTable.appendChild(thead);
}

opHours();


new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 2.3);
new Store('Lima', 2, 16, 4.6);


// Followed along with code review in class 7 -- OBJECT LITERALS
// let seattle = {
//   name: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgCookieBought: 6.3,
//   cookiesBought: [],
//   total: 0,
//   custPerHr: function(){
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   cookieSales: function(){
//     for(let i = 0; i < hours.length; i++) {
//       let cookiesNeeded = this.custPerHr() * this.avgCookieBought;
//       this.cookiesBought.push(cookiesNeeded);
//       this.total = this.total + cookiesNeeded;
//     }
//   },
//   render: function() {
//     this.cookieSales();

//     let ulElem = document.createElement('ul');
//     ulElem.textContent = `Cookies sold per hour at ${this.name}`;
//     storeSection.appendChild(ulElem);

//     for(let i = 0; i < hours.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.textContent = `${hours[i]}: ${this.cookiesBought[i]} cookies`;
//       storeSection.appendChild(liElem);
//     }
    
//   }
// };


// seattle.render();

// let tokyo = {
//   name: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avgCookieBought: 1.2,
//   cookiesBought: [],
//   total: 0,
//   custPerHr: function(){
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   cookieSales: function(){
//     for(let i = 0; i < hours.length; i++) {
//       let cookiesNeeded = this.custPerHr() * this.avgCookieBought;
//       this.cookiesBought.push(cookiesNeeded);
//       this.total = this.total + cookiesNeeded;
//     }
//   },
//   render: function() {
//     this.cookieSales();

//     let ulElem = document.createElement('ul');
//     ulElem.textContent = `Cookies sold per hour at ${this.name}`;
//     storeSection.appendChild(ulElem);

//     for(let i = 0; i < hours.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.textContent = `${hours[i]}: ${this.cookiesBought[i]} cookies`;
//       storeSection.appendChild(liElem);
//     }
    
//   }
// };


// tokyo.render();

// let Dubai = {
//   name: 'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   avgCookieBought: 3.7,
//   cookiesBought: [],
//   total: 0,
//   custPerHr: function(){
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   cookieSales: function(){
//     for(let i = 0; i < hours.length; i++) {
//       let cookiesNeeded = this.custPerHr() * this.avgCookieBought;
//       this.cookiesBought.push(cookiesNeeded);
//       this.total = this.total + cookiesNeeded;
//     }
//   },
//   render: function() {
//     this.cookieSales();

//     let ulElem = document.createElement('ul');
//     ulElem.textContent = `Cookies sold per hour at ${this.name}`;
//     storeSection.appendChild(ulElem);

//     for(let i = 0; i < hours.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.textContent = `${hours[i]}: ${this.cookiesBought[i]} cookies`;
//       storeSection.appendChild(liElem);
//     }
    
//   }
// };


// Dubai.render();

// let paris = {
//   name: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   avgCookieBought: 2.3,
//   cookiesBought: [],
//   total: 0,
//   custPerHr: function(){
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   cookieSales: function(){
//     for(let i = 0; i < hours.length; i++) {
//       let cookiesNeeded = this.custPerHr() * this.avgCookieBought;
//       this.cookiesBought.push(cookiesNeeded);
//       this.total = this.total + cookiesNeeded;
//     }
//   },
//   render: function() {
//     this.cookieSales();

//     let ulElem = document.createElement('ul');
//     ulElem.textContent = `Cookies sold per hour at ${this.name}`;
//     storeSection.appendChild(ulElem);

//     for(let i = 0; i < hours.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.textContent = `${hours[i]}: ${this.cookiesBought[i]} cookies`;
//       storeSection.appendChild(liElem);
//     }
    
//   }
// };


// paris.render();

// let lima = {
//   name: 'Lima',
//   minCust: 2,
//   maxCust: 16,
//   avgCookieBought: 4.6,
//   cookiesBought: [],
//   total: 0,
//   custPerHr: function(){
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   cookieSales: function(){
//     for(let i = 0; i < hours.length; i++) {
//       let cookiesNeeded = this.custPerHr() * this.avgCookieBought;
//       this.cookiesBought.push(cookiesNeeded);
//       this.total = this.total + cookiesNeeded;
//     }
//   },
//   render: function() {
//     this.cookieSales();

//     let ulElem = document.createElement('ul');
//     ulElem.textContent = `Cookies sold per hour at ${this.name}`;
//     storeSection.appendChild(ulElem);

//     for(let i = 0; i < hours.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.textContent = `${hours[i]}: ${this.cookiesBought[i]} cookies`;
//       storeSection.appendChild(liElem);
//     }
    
//   }
// };


// lima.render();
