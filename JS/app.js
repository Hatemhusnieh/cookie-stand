'use strict';

const Seattle = {
  Name : 'Pat’s Salmon Cookies',
  Location : 'Seattle',
  MinCust : 23,
  MaxCust : 65,
  AvgCookieSale : 6.3,
  CustPerHour : 0,
  OpretaingHours: [6,7,8,9,10,11,12,1,2,3,4,5,6,7],
  dSales: [],
  randomCustPerHour : function(Min,Max)
  {
    Min = this.MinCust;
    Max = this.MaxCust;
    this.CustPerHour = Math.floor(Math.random() * (Max - Min) + Min);
    return this.CustPerHour;
  } ,
  sales : function()
  {
    let dailySales = [];
    this.Total = 0;
    for(let i=0; i<this.OpretaingHours.length; i++)
    {
      this.randomCustPerHour();
      // console.log(this.CustPerHour);
      dailySales[i] = Math.round(this.CustPerHour * this.AvgCookieSale);
      this.Total+=dailySales[i];
    }
    // console.log(Total);
    return this.dSales= dailySales;
  },
  dispalySales: function(){
    const container = document.getElementById('body');
    const elChart = document.createElement('ul');
    elChart.textContent = `${this.Location} Sales this Day: `;
    container.appendChild(elChart);
    for(let i=0; i<this.OpretaingHours.length; i++)
    {
      const elDay = document.createElement('li');
      elChart.appendChild(elDay);
      elDay.textContent = `${this.OpretaingHours[i]}am: ${this.dSales[i]} cookies
      `;
    }
    const elTotal = document.createElement('li');
    elChart.appendChild(elTotal);
    elTotal.textContent = `Total cookies sold: ${this.Total}`;
  }
};
Seattle.sales();
Seattle.dispalySales();



const Tokyo = {
  Name : 'Pat’s Salmon Cookies',
  Location : 'Tokyo',
  MinCust : 3,
  MaxCust : 24,
  AvgCookieSale : 1.2,
  CustPerHour : 0,
  OpretaingHours: [6,7,8,9,10,11,12,1,2,3,4,5,6,7],
  dSales: [],
  randomCustPerHour : function(Min,Max)
  {
    Min = this.MinCust;
    Max = this.MaxCust;
    this.CustPerHour = Math.floor(Math.random() * (Max - Min) + Min);
    return this.CustPerHour;
  } ,
  sales : function()
  {
    let dailySales = [];
    this.Total = 0;
    for(let i=0; i<this.OpretaingHours.length; i++)
    {
      this.randomCustPerHour();
      // console.log(this.CustPerHour);
      dailySales[i] = Math.round(this.CustPerHour * this.AvgCookieSale);
      this.Total+=dailySales[i];
    }
    // console.log(dailySales);
    return this.dSales= dailySales;
  },
  dispalySales: function(){
    const container = document.getElementById('body');
    const elChart = document.createElement('ul');
    elChart.textContent = `${this.Location} Sales this Day: `;
    container.appendChild(elChart);
    for(let i=0; i<this.OpretaingHours.length; i++)
    {
      const elDay = document.createElement('li');
      elChart.appendChild(elDay);
      elDay.textContent = `${this.OpretaingHours[i]}am: ${this.dSales[i]} cookies`;
    }
    const elTotal = document.createElement('li');
    elChart.appendChild(elTotal);
    elTotal.textContent = `Total cookies sold: ${this.Total}`;
  }
};
Tokyo.sales();
Tokyo.dispalySales();


const Dubai = {
  Name : 'Pat’s Salmon Cookies',
  Location : 'Dubai',
  MinCust : 11,
  MaxCust : 38,
  AvgCookieSale : 3.7,
  CustPerHour : 0,
  OpretaingHours: [6,7,8,9,10,11,12,1,2,3,4,5,6,7],
  dSales: [],
  randomCustPerHour : function(Min,Max)
  {
    Min = this.MinCust;
    Max = this.MaxCust;
    this.CustPerHour = Math.floor(Math.random() * (Max - Min) + Min);
    return this.CustPerHour;
  } ,
  sales : function()
  {
    let dailySales = [];
    this.Total = 0;
    for(let i=0; i<this.OpretaingHours.length; i++)
    {
      this.randomCustPerHour();
      // console.log(this.CustPerHour);
      dailySales[i] = Math.round(this.CustPerHour * this.AvgCookieSale);
      this.Total+=dailySales[i];
    }
    // console.log(dailySales);
    return this.dSales= dailySales;
  },
  dispalySales: function(){
    const container = document.getElementById('body');
    const elChart = document.createElement('ul');
    elChart.textContent = `${this.Location} Sales this Day: `;
    container.appendChild(elChart);
    for(let i=0; i<this.OpretaingHours.length; i++)
    {
      const elDay = document.createElement('li');
      elChart.appendChild(elDay);
      elDay.textContent = `${this.OpretaingHours[i]}am: ${this.dSales[i]} cookies
      `;
    }
    const elTotal = document.createElement('li');
    elChart.appendChild(elTotal);
    elTotal.textContent = `Total cookies sold: ${this.Total}`;
  }
};
Dubai.sales();
Dubai.dispalySales();


const Paris = {
  Name : 'Pat’s Salmon Cookies',
  Location : 'Paris',
  MinCust : 20,
  MaxCust : 38,
  AvgCookieSale : 2.3,
  CustPerHour : 0,
  OpretaingHours: [6,7,8,9,10,11,12,1,2,3,4,5,6,7],
  dSales: [],
  randomCustPerHour : function(Min,Max)
  {
    Min = this.MinCust;
    Max = this.MaxCust;
    this.CustPerHour = Math.floor(Math.random() * (Max - Min) + Min);
    return this.CustPerHour;
  } ,
  sales : function()
  {
    let dailySales = [];
    this.Total = 0;
    for(let i=0; i<this.OpretaingHours.length; i++)
    {
      this.randomCustPerHour();
      // console.log(this.CustPerHour);
      dailySales[i] = Math.round(this.CustPerHour * this.AvgCookieSale);
      this.Total+=dailySales[i];
    }
    // console.log(dailySales);
    return this.dSales= dailySales;
  },
  dispalySales: function(){
    const container = document.getElementById('body');
    const elChart = document.createElement('ul');
    elChart.textContent = `${this.Location} Sales this Day: `;
    container.appendChild(elChart);
    for(let i=0; i<this.OpretaingHours.length; i++)
    {
      const elDay = document.createElement('li');
      elChart.appendChild(elDay);
      elDay.textContent = `${this.OpretaingHours[i]}am: ${this.dSales[i]} cookies
      `;
    }
    const elTotal = document.createElement('li');
    elChart.appendChild(elTotal);
    elTotal.textContent = `Total cookies sold: ${this.Total}`;
  }
};
Paris.sales();
Paris.dispalySales();



const Lima = {
  Name : 'Pat’s Salmon Cookies',
  Location : 'Lima',
  MinCust : 2,
  MaxCust : 16,
  AvgCookieSale : 4.6,
  CustPerHour : 0,
  OpretaingHours: [6,7,8,9,10,11,12,1,2,3,4,5,6,7],
  dSales: [],
  randomCustPerHour : function(Min,Max)
  {
    Min = this.MinCust;
    Max = this.MaxCust;
    this.CustPerHour = Math.floor(Math.random() * (Max - Min) + Min);
    return this.CustPerHour;
  } ,
  sales : function()
  {
    let dailySales = [];
    this.Total = 0;
    for(let i=0; i<this.OpretaingHours.length; i++)
    {
      this.randomCustPerHour();
      // console.log(this.CustPerHour);
      dailySales[i] = Math.round(this.CustPerHour * this.AvgCookieSale);
      this.Total+=dailySales[i];
    }
    // console.log(dailySales);
    return this.dSales= dailySales;
  },
  dispalySales: function(){
    const container = document.getElementById('body');
    const elChart = document.createElement('ul');
    elChart.textContent = `${this.Location} Sales this Day: `;
    container.appendChild(elChart);
    for(let i=0; i<this.OpretaingHours.length; i++)
    {
      const elDay = document.createElement('li');
      elChart.appendChild(elDay);
      elDay.textContent = `${this.OpretaingHours[i]}am: ${this.dSales[i]} cookies
      `;
    }
    const elTotal = document.createElement('li');
    elChart.appendChild(elTotal);
    elTotal.textContent = `Total cookies sold: ${this.Total}`;
  }
};
Lima.sales();
Lima.dispalySales();
