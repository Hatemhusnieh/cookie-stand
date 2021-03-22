'use strict';
// defining shared operationg hours
const opretaingHours = [6,7,8,9,10,11,12,1,2,3,4,5,6,7];
// createing Constructor Function:
function PatShop(name,location,minimumCustomers,maximumCutomers,averageSales){
  // creating properties for Object
  this.Name = name;
  this.Location = location;
  this.MinCust = minimumCustomers;
  this.MaxCust = maximumCutomers;
  this.AvgCookieSale = averageSales;
}

// Creating a variable that will hold the hourly total
let totals = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
// Creating a variable that will hold the total sales of all locations
let totalOSold = 0;
// Creating a variable that will hold the total sales of all Locations totals
let locationTotals=0;

// Creating a Table
const container2 = document.getElementsByClassName('salesPage')[0];
const elElement = document.createElement('div');
elElement.setAttribute('class','salesTable');
container2.appendChild(elElement);
const elTable = document.createElement('table');
elElement.appendChild(elTable);
const elRow1 = document.createElement('tr');
elRow1.setAttribute('id','row1');
elTable.appendChild(elRow1);
const elTh1 = document.createElement('th');
elTh1.textContent = ' ';
elRow1.appendChild(elTh1);
for(let i=0; i<opretaingHours.length; i++){
  const elTh = document.createElement('th');
  if (i<6) {
    elTh.textContent = `${opretaingHours[i]} am`;
  } else {
    elTh.textContent = `${opretaingHours[i]} pm`;
  }
  elRow1.appendChild(elTh);
}
const elTdTotal = document.createElement('th');
elTdTotal.textContent = 'Total sold';
elRow1.appendChild(elTdTotal);


// Attatching Functions to Object
// Creating Random Customer per/hour
PatShop.prototype.randomCustPerHour = function(Min,Max){
  Min = this.MinCust;
  Max = this.MaxCust;
  this.CustPerHour = Math.floor(Math.random() * (Max - Min) + Min);
  return this.CustPerHour;
};

// Creating and attatching a function that generates an array hat represeant the sales per day
PatShop.prototype.sales = function(){
  let dailySales = [];
  this.total = 0;
  for(let i=0; i<opretaingHours.length; i++)
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
PatShop.prototype.dispalySales = function(){
  // const container = document.getElementById('body');
  // const elChart = document.createElement('ul');
  // elChart.setAttribute('class','highLight');
  // elChart.textContent = `${this.Location} Sales this Day: `;
  // container.appendChild(elChart);
  // // rendering a full list of cookies and when it were sold
  // for(let i=0; i<opretaingHours.length; i++)
  // {
  //   const elDay = document.createElement('li');
  //   elDay.setAttribute('class','standard');
  //   elChart.appendChild(elDay);
  //   if (i<6) {
  //     elDay.textContent = `${opretaingHours[i]} am: ${this.dailySales[i]} cookies`;
  //   } else {
  //     elDay.textContent = `${opretaingHours[i]} pm: ${this.dailySales[i]} cookies`;
  //   }
  // }
  // const elTotal = document.createElement('li');
  // elChart.appendChild(elTotal);
  // elTotal.textContent = `Total cookies sold: ${this.Total}`;

  // adding a table
  const elRow = document.createElement('tr');
  elRow.setAttribute('id',`${this.Location}`);
  elTable.appendChild(elRow);
  const elTh = document.createElement('th');
  elTh.textContent = this.Location;
  elRow.appendChild(elTh);
  let locTotal = 0;
  for(let i=0; i<opretaingHours.length; i++){
    const elTd = document.createElement('td');
    elTd.textContent = this.dailySales[i];
    elRow.appendChild(elTd);
    // calculating Location Totals
    locTotal+=this.dailySales[i];
    totals[i]+=this.dailySales[i];
    locationTotals+=totals[i];
  }
  totalOSold+=locTotal;
  const elTotal = document.createElement('td');
  elTotal.textContent = locTotal;
  elRow.appendChild(elTotal);
};
// Programm ENDS !!!!!!



// creating Seattle object
const seattle = new PatShop('Pat’s Salmon Cookies','Seattle',23,65,6.3);
// diplaying Seattle data
seattle.sales();
seattle.dispalySales();

// creating Tokyo object
const tokyo = new PatShop('Pat’s Salmon Cookies','Tokyo',3,24,1.2);
// diplaying Tokyo data
tokyo.sales();
tokyo.dispalySales();

// creating Dubai object
const dubai = new PatShop('Pat’s Salmon Cookies','Dubai',11,38,3.7);
// diplaying Dubai data
dubai.sales();
dubai.dispalySales();

// creating Paris object
const paris = new PatShop('Pat’s Salmon Cookies','Paris',11,38,3.7);
// diplaying Paris data
paris.sales();
paris.dispalySales();

// creating Lima object
const lima = new PatShop('Pat’s Salmon Cookies','Lima',11,38,3.7);
// diplaying Lima data
lima.sales();
lima.dispalySales();

// creating location totals
const elTdHourly = document.createElement('tr');
elTable.appendChild(elTdHourly);
const elTdHourlyTotals = document.createElement('th');
elTdHourlyTotals.textContent = 'Location Totals';
elTdHourly.appendChild(elTdHourlyTotals);
for(let i=0; i<14; i++){
  const elTdHourlyValue = document.createElement('th');
  elTdHourlyValue.textContent = totals[i];
  elTdHourly.appendChild(elTdHourlyValue);
}
const elTotalOfTotals = document.createElement('th');
elTotalOfTotals.textContent = totalOSold+locationTotals;
elTdHourly.appendChild(elTotalOfTotals);


// const elTrow2 = document.createElement('tr')
// elTrow2.setAttribute('id','row2');
// elTable.appendChild(elTrow2);
// const elTh2 = document.createElement('th');
// elTh2.textContent = 'Seattle';
// elTrow2.appendChild(elTh2);
// let sea= seattle.sales();
// let seaTotal=0;
// for(let i=0; i<sea.length; i++){
//   const elTd = document.createElement('td');
//   elTd.textContent = sea[i];
//   seaTotal+=sea[i];
// elTrow2.appendChild(elTd);
// }

// const elTrow3 = document.createElement('tr');
// elTrow3.setAttribute('id','row3');
// elTable.appendChild(elTrow3);
// const elTh3 = document.createElement('th');
// elTh3.textContent = 'Tokyo';
// elTrow3.appendChild(elTh3);
// let tok= tokyo.sales();
// let tokTotal=0;
// for(let i=0; i<sea.length; i++){
//   const elTd = document.createElement('td');
//   elTd.textContent = tok[i];
//   tokTotal+=tok[i];
//   elTrow3.appendChild(elTd);
// }

// const elTrow4 = document.createElement('tr');
// elTrow4.setAttribute('id','row4');
// elTable.appendChild(elTrow4);
// const elTh4 = document.createElement('th');
// elTh4.textContent = 'Dubai';
// elTrow4.appendChild(elTh4);
// let dub= dubai.sales();
// let dubTotal=0;
// for(let i=0; i<dub.length; i++){
//   const elTd = document.createElement('td');
//   elTd.textContent = dub[i];
//   dubTotal+=dub[i];
//   elTrow4.appendChild(elTd);
// }

// const elTrow5 = document.createElement('tr');
// elTrow5.setAttribute('id','row5');
// elTable.appendChild(elTrow5);
// const elTh5 = document.createElement('th');
// elTh5.textContent = 'Paris';
// elTrow5.appendChild(elTh5);
// let par= paris.sales();
// let parTotal=0;
// for(let i=0; i<par.length; i++){
//   const elTd = document.createElement('td');
//   elTd.textContent = par[i];
//   parTotal+=par[i];
//   elTrow5.appendChild(elTd);
// }

// const elTrow6 = document.createElement('tr');
// elTrow6.setAttribute('id','row6');
// elTable.appendChild(elTrow6);
// const elTh6 = document.createElement('th');
// elTh6.textContent = 'Lima';
// elTrow6.appendChild(elTh6);
// let lim= lima.sales();
// let limTotal=0;
// for(let i=0; i<lim.length; i++){
//   const elTd = document.createElement('td');
//   elTd.textContent = lim[i];
//   limTotal+=lim[i];
//   elTrow6.appendChild(elTd);
// }

// const elTrow7 = document.createElement('tr');
// elTrow7.setAttribute('id','row7');
// elTable.appendChild(elTrow7);
// const elTh7 = document.createElement('th');
// elTh7.textContent = 'Total';
// elTrow7.appendChild(elTh7);
// let hourlyTotal=[seaTotal,tokTotal,dubTotal,parTotal,limTotal];
// for(let i=0; i<5; i++){
//   for(let j=0; j<14; j++)
