'use strict';

const seattle = {
  minCud:23,
  maxCus:65,
  avgCookies:6.3,
  randomCusPerHour:[],
  cookiesPurchasedPerHour:[],
  cusAvg:function(min,max){
    for (let i = 0; i < 14; i++) {
      let cal=(Math.floor(Math.random() * (max - min + 1) + min));
      let cookiesAmount=Math.floor(cal*this.avgCookies);
      this.randomCusPerHour.push(cal);
      this.cookiesPurchasedPerHour.push(cookiesAmount);
    }
  }
};
seattle.cusAvg(23,65);
console.log(seattle.randomCusPerHour);
console.log(seattle.cookiesPurchasedPerHour);

let bodyTag = document.getElementById('body-main');
let h2 = document.createElement('h2');
bodyTag.appendChild(h2);
h2.textContent = 'Seattle';

let ul =document.createElement('ul');
bodyTag.appendChild(ul);

let li=null;
for(let i =6 ; i <12 ; i++){
  li = document.createElement('li');
  ul.appendChild(li);
  li.textContent = `${i+5}am: ${seattle.cookiesPurchasedPerHour[i]} cookies`;
}
for (let i = 1; i < 7; i++) {
  li = document.createElement('li');
  ul.appendChild(li);
  li.textContent = `${i}pm: ${seattle.cookiesPurchasedPerHour[i]} cookies`;
}