'use strict';
// defining shared operating hours
const operatingHours = [6,7,8,9,10,11,12,1,2,3,4,5,6,7,8];
// creating a variable to hold new object that user add
let newLocationSales = [];
// create variable to define newLocationSales index
let index=0;
// creating Constructor Function:
function PatShop(name,location,minimumCustomers,maximumCustomers,averageSales){
  // creating properties for Object
  this.Name = name;
  this.Location = location;
  this.MinCust = minimumCustomers;
  this.MaxCust = maximumCustomers;
  this.AvgCookieSale = averageSales;
}

// Creating a variable that will hold the hourly total
let totals = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
// Creating a variable that will hold the total sales of all locations
let totalOSold = 0;
// defining tables constants as global variables
let elTable;
// Creating a Table
function table(){
  const container2 = document.getElementsByClassName('salesPage')[0];
  const elElement = document.createElement('div');
  elElement.setAttribute('class','salesTable');
  container2.appendChild(elElement);
  elTable = document.createElement('table');
  elElement.appendChild(elTable);
  const elRow1 = document.createElement('tr');
  elRow1.setAttribute('id','row1');
  elTable.appendChild(elRow1);
  const elTh1 = document.createElement('th');
  elTh1.textContent = ' ';
  elRow1.appendChild(elTh1);
  for(let i=0; i<operatingHours.length; i++){
    const elTh = document.createElement('th');
    if (i<6) {
      elTh.textContent = `${operatingHours[i]}:00 am`;
    } else {
      elTh.textContent = `${operatingHours[i]}:00 pm`;
    }
    elRow1.appendChild(elTh);
  }
  const elTdTotal = document.createElement('th');
  elTdTotal.textContent = 'Total sold';
  elRow1.appendChild(elTdTotal);
}
table();
// Attaching Functions to Object
// Creating Random Customer per/hour
PatShop.prototype.randomCustPerHour = function(Min,Max){
  Min = this.MinCust;
  Max = this.MaxCust;
  this.CustPerHour = Math.round(Math.random() * (Max - Min) + Min);
  return this.CustPerHour;
};

// Creating and attaching a function that generates an array hat represent the sales per day
PatShop.prototype.sales = function(){
  let dailySales = [];
  this.total = 0;
  for(let i=0; i<operatingHours.length; i++)
  {
    this.randomCustPerHour();
    // console.log(this.CustPerHour);
    dailySales[i] = Math.round(this.CustPerHour * this.AvgCookieSale);
    this.total+=dailySales[i];
  }
  // console.log(Total);
  return this.dailySales= dailySales;
};

// Rendering elements on the site
PatShop.prototype.displaySales = function(){
  // adding on the table
  const elRow = document.createElement('tr');
  elRow.setAttribute('id',`${this.Location}`);
  elTable.appendChild(elRow);
  const elTh = document.createElement('th');
  elTh.textContent = this.Location;
  elRow.appendChild(elTh);
  let locTotal = 0;
  for(let i=0; i<operatingHours.length; i++){
    const elTd = document.createElement('td');
    elTd.textContent = this.dailySales[i];
    elRow.appendChild(elTd);
    // calculating Location Totals
    locTotal+=this.dailySales[i];
    totals[i]+=this.dailySales[i];
  }
  totalOSold+=locTotal;
  const elTotal = document.createElement('td');
  elTotal.textContent = locTotal;
  elRow.appendChild(elTotal);
};
// Programme ENDS !!!!!!



// creating Seattle object
const seattle = new PatShop('Pat’s Salmon Cookies','Seattle',23,65,6.3);
// displaying Seattle data
seattle.sales();
seattle.displaySales();

// creating Tokyo object
const tokyo = new PatShop('Pat’s Salmon Cookies','Tokyo',3,24,1.2);
// displaying Tokyo data
tokyo.sales();
tokyo.displaySales();

// creating Dubai object
const dubai = new PatShop('Pat’s Salmon Cookies','Dubai',11,38,3.7);
// displaying Dubai data
dubai.sales();
dubai.displaySales();

// creating Paris object
const paris = new PatShop('Pat’s Salmon Cookies','Paris',11,38,3.7);
// displaying Paris data
paris.sales();
paris.displaySales();

// creating Lima object
const lima = new PatShop('Pat’s Salmon Cookies','Lima',11,38,3.7);
// displaying Lima data
lima.sales();
lima.displaySales();

// creating footer function and location totals
function footerTable(){
  const elTdHourly = document.createElement('tr');
  elTdHourly.setAttribute('id','tableFooter');
  elTable.appendChild(elTdHourly);
  const elTdHourlyTotals = document.createElement('th');
  elTdHourlyTotals.textContent = 'Location Totals';
  elTdHourly.appendChild(elTdHourlyTotals);
  for(let i=0; i<operatingHours.length; i++){
    const elTdHourlyValue = document.createElement('th');
    elTdHourlyValue.textContent = totals[i];
    elTdHourly.appendChild(elTdHourlyValue);
  }
  const elTotalOfTotals = document.createElement('th');
  elTotalOfTotals.textContent = totalOSold;
  elTdHourly.appendChild(elTotalOfTotals);
}
footerTable();

// processing user data and inputting the result on the browser
let salesForm = document.getElementById('salesForm');
salesForm.addEventListener('submit',createSales);
// Crating a function to process user data
function createSales(event){
  event.preventDefault();
  // assigning variables for each user inputs
  let location = event.target.location.value;
  let miniCust =Number(event.target.miniCust.value);
  let MaxCust = Number(event.target.maxCust.value);
  let averageSales = Number(event.target.averageSales.value);
  // pushing user input on newLocationSales array
  newLocationSales.push(new PatShop('Pat’s Salmon Cookies',location,miniCust,MaxCust,averageSales));
  newLocationSales[index].sales();
  newLocationSales[index].displaySales();
  // deleting the last row when add is pressed
  if (newLocationSales) {
    let remove = document.getElementById('tableFooter');
    let container0 = remove.parentNode;
    container0.removeChild(remove);
  }
  index += 1;
  // displaying the last row again
  footerTable();
  salesForm.reset('');
}
