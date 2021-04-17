'use strict';




// Cookies Purchased Per Hour + daily location Total and toal per hour in all branches
Branch.prototype.calCookiesPerHour = function () {
  let total=0;
  for (let i = 0; i < hours.length; i++) {
    this.cookiesPurchasedByHour.push(Math.ceil(this.randomCusPerHour[i] * this.avgCookies));
    this.total=this.total+this.cookiesPurchasedByHour[i];
    console.log(total);
  }
};


/// Table Header
let headerRow = function(){
  let tableRow = document.createElement('tr');
  table.appendChild(tableRow);
  let emptyCell = document.createElement('th');
  tableRow.appendChild(emptyCell);
  emptyCell.textContent='';

  for (let i = 0 ; i < hours.length ; i++){
    let hourLabel = document.createElement('th');
    tableRow.appendChild(hourLabel);
    hourLabel.textContent = hours[i];
  }
  let totalLabel = document.createElement('th');
  tableRow.appendChild(totalLabel);
  totalLabel.textContent='Daily Location Total';
};

  }
  let dailyTotal=document.createElement('th');
  contentRow.appendChild(dailyTotal);
  dailyTotal.textContent=this.total;
};

for (let i=0; i<objectsArr.length;i++){
  objectsArr[i].calCustomerPerHour();
  objectsArr[i].calCookiesPerHour();
  objectsArr[i].render();
}

//Table footer
function tableFooter (){
  let totalRow = document.createElement('tr');
  table.appendChild(totalRow);
  let footerLabel = document.createElement('th');
  totalRow.appendChild(footerLabel);
  footerLabel.textContent = 'Total';
  let sum=0;
  let megaTotal=0;
  for (let i = 0 ; i < hours.length ; i++){
    sum=Seattle.cookiesPurchasedByHour[i]+Tokyo.cookiesPurchasedByHour[i]+Dubai.cookiesPurchasedByHour[i]+Paris.cookiesPurchasedByHour[i]+Lima.cookiesPurchasedByHour[i];
    megaTotal=megaTotal+sum;
    let footerCell = document.createElement('td');
    totalRow.appendChild(footerCell);
    footerCell.textContent = sum;
  }
  let totalSum=document.createElement('th');
  totalRow.appendChild(totalSum);
  totalSum.textContent=megaTotal;
}

tableFooter();