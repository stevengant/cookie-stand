'use strict';

// created operation hours variable
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let cookieTable = document.getElementById('stores');

let storeForm = document.getElementById('addStore');

storeForm.addEventListener('submit',addNewStore);


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


  for (let i = 0; i < hours.length; i++) {
    th = document.createElement('th');
    th.textContent = hours[i];
    thead.appendChild(th);

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

let grandTotal = 0;
function tableFooter() {
  let table = document.getElementById('cookieTable');
  let tr = document.createElement('tr');
  let td = document.createElement('td');
  td.textContent = 'totals';
  tr.appendChild(td);
  for(let i = 0; i < hours.length; i++) {
    let totalHours = 0;
    for(let j = 0; j < Store.length; j++) {
      totalHours = totalHours + Store[j].cookiesSold[i]
      grandTotal = grandTotal + Store[j].cookiesSold[i]
    }
     let td = document.createElement('td');
     td.textContent = totalHours;
     tr.appendChild(td);
  };
  let grandTotCell = document.createElement('td');
  grandTotCell.textContent = grandTotal;
  tr.appendChild(grandTotCell);
  table.appendChild(tr);

}

tableFooter();

function addNewStore(event) {

  event.preventDefault();
  if (!event.target.newCity.value || !event.target.minCust.value || !event.target.maxCust || !event.target.avgCookies); 

  let newStoreName = event.target.newCity.value;
  let addMinCustomers = parseInt(event.target.minCust.value);
  let addMaxCustomers = parseInt(event.target.maxCust.value);
  let addAvgSale = parseInt(event.target.avgCookies.value);

  event.target.newCity.value = null;
  event.target.minCust.value = null;
  event.target.maxCust.value = null;
  event.target.avgCookies.value = null;
  new Store(newStoreName,addMinCustomers,addMaxCustomers,addAvgSale);

}