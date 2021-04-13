'use strict';

// const seattle = {
//   Country: 'Seattle',
//   min:23,
//   max:65,
//   avgCookies:6.3,
//   randomCusPerHour:[],
//   cookiesPurchasedPerHour:[],
//   cusAvg:function(min,max){
//     for (let i = 0; i < 14; i++) {
//       let cal=(Math.floor(Math.random() * (max - min + 1) + min));
//       let cookiesvalue=Math.floor(cal*this.avgCookies);
//       this.randomCusPerHour.push(cal);
//       this.cookiesPurchasedPerHour.push(cookiesvalue);
//     }
//   },
//   render: function name() {

//     let bodyTag1 = document.getElementById('body-main');
//     let heading1 = document.createElement('h2');
//     bodyTag1.appendChild(heading1);
//     heading1.textContent = 'Seattle';

//     let ul1 =document.createElement('ul');
//     bodyTag1.appendChild(ul1);

//     let li1=null;
//     let total1=0;
//     for(let i =6 ; i <13 ; i++){
//       li1 = document.createElement('li');
//       ul1.appendChild(li1);
//       li1.textContent = `${i}am: ${seattle.cookiesPurchasedPerHour[i]} cookies`;
//       total1=total1+seattle.cookiesPurchasedPerHour[i];
//     }
//     for (let i = 1; i <8 ; i++) {
//       li1 = document.createElement('li');
//       ul1.appendChild(li1);
//       li1.textContent = `${i}pm: ${seattle.cookiesPurchasedPerHour[i]} cookies`;
//       total1=total1+seattle.cookiesPurchasedPerHour[i];
//     }
//     li1 = document.createElement('li');
//     ul1.appendChild(li1);
//     li1.textContent = `Total: ${total1} cookies`;
//   }
// };
// seattle.cusAvg(seattle.min,seattle.max);
// seattle.render();


// const tokyo = {
//   min:3,
//   max:24,
//   avgCookies:1.2,
//   randomCusPerHour:[],
//   cookiesPurchasedPerHour:[],
//   cusAvg:function(min,max){
//     for (let i = 0; i < 14; i++) {
//       let cal=(Math.floor(Math.random() * (max - min + 1) + min));
//       let cookiesvalue=Math.floor(cal*this.avgCookies);
//       this.randomCusPerHour.push(cal);
//       this.cookiesPurchasedPerHour.push(cookiesvalue);
//     }
//   },
//   render:function(){
//     let bodyTag2 = document.getElementById('body-main');
//     let heading2 = document.createElement('h2');
//     bodyTag2.appendChild(heading2);
//     heading2.textContent = 'Tokyo';

//     let ul2 =document.createElement('ul');
//     bodyTag2.appendChild(ul2);

//     let li2=null;
//     let total2=0;
//     for(let i =6 ; i <13 ; i++){
//       li2 = document.createElement('li');
//       ul2.appendChild(li2);
//       li2.textContent = `${i}am: ${tokyo.cookiesPurchasedPerHour[i]} cookies`;
//       total2=total2+tokyo.cookiesPurchasedPerHour[i];
//     }
//     for (let i = 1; i <8 ; i++) {
//       li2 = document.createElement('li');
//       ul2.appendChild(li2);
//       li2.textContent = `${i}pm: ${tokyo.cookiesPurchasedPerHour[i]} cookies`;
//       total2=total2+tokyo.cookiesPurchasedPerHour[i];
//     }
//     li2 = document.createElement('li');
//     ul2.appendChild(li2);
//     li2.textContent = `Total: ${total2} cookies`;


//   }
// };
// tokyo.cusAvg(tokyo.min,tokyo.max);
// tokyo.render();



// const dubai = {
//   min:11,
//   max:38,
//   avgCookies:3.7,
//   randomCusPerHour:[],
//   cookiesPurchasedPerHour:[],
//   cusAvg:function(min,max){
//     for (let i = 0; i < 14; i++) {
//       let cal=(Math.floor(Math.random() * (max - min + 1) + min));
//       let cookiesvalue=Math.floor(cal*this.avgCookies);
//       this.randomCusPerHour.push(cal);
//       this.cookiesPurchasedPerHour.push(cookiesvalue);
//     }
//   },
//   render: function(){
//     let bodyTag3 = document.getElementById('body-main');
//     let heading3 = document.createElement('h2');
//     bodyTag3.appendChild(heading3);
//     heading3.textContent = 'Dubai';

//     let ul3 =document.createElement('ul');
//     bodyTag3.appendChild(ul3);

//     let li3=null;
//     let total3=0;
//     for(let i =6 ; i <13 ; i++){
//       li3 = document.createElement('li');
//       ul3.appendChild(li3);
//       li3.textContent = `${i}am: ${dubai.cookiesPurchasedPerHour[i]} cookies`;
//       total3=total3+dubai.cookiesPurchasedPerHour[i];
//     }
//     for (let i = 1; i <8 ; i++) {
//       li3 = document.createElement('li');
//       ul3.appendChild(li3);
//       li3.textContent = `${i}pm: ${dubai.cookiesPurchasedPerHour[i]} cookies`;
//       total3=total3+dubai.cookiesPurchasedPerHour[i];
//     }
//     li3 = document.createElement('li');
//     ul3.appendChild(li3);
//     li3.textContent = `Total: ${total3} cookies`;
//   }
// };
// dubai.cusAvg(dubai.min,dubai.max);
// dubai.render();



// const paris = {
//   min:20,
//   max:38,
//   avgCookies:2.3,
//   randomCusPerHour:[],
//   cookiesPurchasedPerHour:[],
//   cusAvg:function(min,max){
//     for (let i = 0; i < 14; i++) {
//       let cal=(Math.floor(Math.random() * (max - min + 1) + min));
//       let cookiesvalue=Math.floor(cal*this.avgCookies);
//       this.randomCusPerHour.push(cal);
//       this.cookiesPurchasedPerHour.push(cookiesvalue);
//     }
//   },
//   render: function(){
//     let bodyTag4 = document.getElementById('body-main');
//     let heading4 = document.createElement('h2');
//     bodyTag4.appendChild(heading4);
//     heading4.textContent = 'Paris';

//     let ul4 =document.createElement('ul');
//     bodyTag4.appendChild(ul4);

//     let li4=null;
//     let total4=0;
//     for(let i =6 ; i <13 ; i++){
//       li4 = document.createElement('li');
//       ul4.appendChild(li4);
//       li4.textContent = `${i}am: ${paris.cookiesPurchasedPerHour[i]} cookies`;
//       total4=total4+paris.cookiesPurchasedPerHour[i];
//     }
//     for (let i = 1; i <8 ; i++) {
//       li4 = document.createElement('li');
//       ul4.appendChild(li4);
//       li4.textContent = `${i}pm: ${paris.cookiesPurchasedPerHour[i]} cookies`;
//       total4=total4+paris.cookiesPurchasedPerHour[i];
//     }
//     li4 = document.createElement('li');
//     ul4.appendChild(li4);
//     li4.textContent = `Total: ${total4} cookies`;
//   }
// };
// paris.cusAvg(paris.min,paris.max);
// paris.render();



// const lima = {
//   min:2,
//   max:16,
//   avgCookies:4.6,
//   randomCusPerHour:[],
//   cookiesPurchasedPerHour:[],
//   cusAvg:function(min,max){
//     for (let i = 0; i < 14; i++) {
//       let cal=(Math.floor(Math.random() * (max - min + 1) + min));
//       let cookiesvalue=Math.floor(cal*this.avgCookies);
//       this.randomCusPerHour.push(cal);
//       this.cookiesPurchasedPerHour.push(cookiesvalue);
//     }
//   },
//   render:function(){
//     let bodyTag5 = document.getElementById('body-main');
//     let heading5 = document.createElement('h2');
//     bodyTag5.appendChild(heading5);
//     heading5.textContent = 'Lima';

//     let ul5 =document.createElement('ul');
//     bodyTag5.appendChild(ul5);

//     let li5=null;
//     let total5=0;
//     for(let i =6 ; i <13 ; i++){
//       li5 = document.createElement('li');
//       ul5.appendChild(li5);
//       li5.textContent = `${i}am: ${lima.cookiesPurchasedPerHour[i]} cookies`;
//       total5=total5+lima.cookiesPurchasedPerHour[i];
//     }
//     for (let i = 1; i <8 ; i++) {
//       li5 = document.createElement('li');
//       ul5.appendChild(li5);
//       li5.textContent = `${i}pm: ${lima.cookiesPurchasedPerHour[i]} cookies`;
//       total5=total5+lima.cookiesPurchasedPerHour[i];
//     }
//     li5 = document.createElement('li');
//     ul5.appendChild(li5);
//     li5.textContent = `Total: ${total5} cookies`;

//   }
// };
// lima.cusAvg(lima.min,lima.max);
// lima.render();




let hours = ['6:00am ',' 7:00am ',' 8:00am ',' 9:00am ',' 10:00am ',' 11:00am ',' 12:00pm ',' 1:00pm ',' 2:00pm ',' 3:00pm ',' 4:00pm ',' 5:00pm ',' 6:00pm ',' 7:00pm '];
let objectsArr=[];

let perHourTotal=[0,0,0,0,0,0,0,0,0,0,0,0,0,0];
//For Table
let bodyTag = document.getElementById('body-main');
let table = document.createElement('table');
bodyTag.appendChild(table);

//Random Value
function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

//Customer Per Hour
Branch.prototype.calCustomerPerHour = function () {
  for (let i = 0; i < hours.length; i++) {
    this.randomCusPerHour.push(random(this.minCus, this.maxCus));
  }
};


// Cookies Purchased Per Hour + daily location Total and toal per hour in all branches
Branch.prototype.calCookiesPerHour = function () {
  let perHourTotal=[];
  let totalPerHour=[];
  let totalPerLocation=[];

  for (let i = 0; i < hours.length; i++) {
    this.cookiesPurchasedByHour.push(Math.ceil(this.randomCusPerHour[i] * this.avgCookies));
    totalPerLocation[i]=totalPerLocation[i]+this.cookiesPurchasedByHour[i],
    totalPerHour=totalPerHour+this.cookiesPurchasedByHour[i];
  }
  this.totalPerHour.push(perHourTotal);
  return this.cookiesPurchasedByHour;
};




function Branch(location, minCus, maxCus, avgCookies) {
  this.location = location;
  this.minCus = minCus;
  this.maxCus = maxCus;
  this.avgCookies = avgCookies;
  this.randomCusPerHour = [];
  this.cookiesPurchasedByHour = [];
  this.branchTotal=null;
  this.perHourTotal=[];
  objectsArr.push(this);
}

let Seattle = new Branch('Seattle', 23, 65, 6.3);
let Tokyo = new Branch('Tokyo', 3, 24, 1.2);
let Dubai = new Branch('Dubai', 11, 38, 3.7);
let Paris = new Branch('Paris', 20, 38, 2.3);
let Lima = new Branch('Lima', 2, 16, 4.6);


/// Table Header
let headerRow = function(){
  let tableRow = document.createElement('tr');
  table.appendChild(tableRow);
  let emptyCell = document.createElement('th');
  tableRow.appendChild(emptyCell);
  emptyCell.textContent = '';

  for (let i = 0 ; i < hours.length ; i++){
    let hourLabel = document.createElement('th');
    tableRow.appendChild(hourLabel);
    hourLabel.textContent = hours[i];
  }
  let totalLabel = document.createElement('th');
  tableRow.appendChild(totalLabel);
  totalLabel.textContent='Daily Location Total';
};

headerRow();


// Table Content
Branch.prototype.render = function(){

  let contentRow = document.createElement('tr');
  table.appendChild(contentRow);
  let locationBranch = document.createElement('td');
  contentRow.appendChild(locationBranch);
  locationBranch.textContent= this.location;

  for(let i =0; i<=hours.length ; i++){
    let contentCell = document.createElement('td');
    contentRow.appendChild(contentCell);
    contentCell.textContent= this.cookiesPurchasedByHour[i];
  }
};

Seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();


//Table footer
function tableFooter (){
  let totalRow = document.createElement('tr');
  table.appendChild(totalRow);
  let footerLabel = document.createElement('td');
  totalRow.appendChild(footerLabel);
  footerLabel.textContent = 'Total Per Hour';

  for (let i = 0 ; i < hours.length ; i++){
    let footerCell = document.createElement('td');
    totalRow.appendChild(footerCell);
    footerCell.textContent = perHourTotal[i];
  }
}
tableFooter();
