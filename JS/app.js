'use strict';

const seattle = {
  min:23,
  max:65,
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
seattle.cusAvg(seattle.min,seattle.max);
console.log(seattle.randomCusPerHour);
console.log(seattle.cookiesPurchasedPerHour);

let bodyTag1 = document.getElementById('body-main');
let heading1 = document.createElement('h2');
bodyTag1.appendChild(heading1);
heading1.textContent = 'Seattle';

let ul1 =document.createElement('ul');
bodyTag1.appendChild(ul1);

let li1=null;
let total1=0;
for(let i =6 ; i <12 ; i++){
  li1 = document.createElement('li');
  ul1.appendChild(li1);
  li1.textContent = `${i}am: ${seattle.cookiesPurchasedPerHour[i]} cookies`;
  total1=total1+seattle.cookiesPurchasedPerHour[i];
}
for (let i = 1; i < 7; i++) {
  li1 = document.createElement('li');
  ul1.appendChild(li1);
  li1.textContent = `${i}pm: ${seattle.cookiesPurchasedPerHour[i]} cookies`;
  total1=total1+seattle.cookiesPurchasedPerHour[i];
}
li1 = document.createElement('li');
ul1.appendChild(li1);
li1.textContent = `Total: ${total1} cookies`;



const tokyo = {
  min:3,
  max:24,
  avgCookies:1.2,
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
tokyo.cusAvg(tokyo.min,tokyo.max);
console.log(tokyo.randomCusPerHour);
console.log(tokyo.cookiesPurchasedPerHour);

let bodyTag2 = document.getElementById('body-main');
let heading2 = document.createElement('h2');
bodyTag2.appendChild(heading2);
heading2.textContent = 'tokyo';

let ul2 =document.createElement('ul');
bodyTag2.appendChild(ul2);

let li2=null;
let total2=0;
for(let i =6 ; i <12 ; i++){
  li2 = document.createElement('li');
  ul2.appendChild(li2);
  li2.textContent = `${i}am: ${tokyo.cookiesPurchasedPerHour[i]} cookies`;
  total2=total2+tokyo.cookiesPurchasedPerHour[i];
}
for (let i = 1; i < 7; i++) {
  li2 = document.createElement('li');
  ul2.appendChild(li2);
  li2.textContent = `${i}pm: ${tokyo.cookiesPurchasedPerHour[i]} cookies`;
  total2=total2+tokyo.cookiesPurchasedPerHour[i];
}
li2 = document.createElement('li');
ul2.appendChild(li2);
li2.textContent = `Total: ${total2} cookies`;


const dubai = {
  min:11,
  max:38,
  avgCookies:3.7,
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
dubai.cusAvg(dubai.min,dubai.max);
console.log(dubai.randomCusPerHour);
console.log(dubai.cookiesPurchasedPerHour);

let bodyTag3 = document.getElementById('body-main');
let heading3 = document.createElement('h2');
bodyTag3.appendChild(heading3);
heading3.textContent = 'dubai';

let ul3 =document.createElement('ul');
bodyTag3.appendChild(ul3);

let li3=null;
let total3=0;
for(let i =6 ; i <12 ; i++){
  li3 = document.createElement('li');
  ul3.appendChild(li3);
  li3.textContent = `${i}am: ${dubai.cookiesPurchasedPerHour[i]} cookies`;
  total3=total3+dubai.cookiesPurchasedPerHour[i];
}
for (let i = 1; i < 7; i++) {
  li3 = document.createElement('li');
  ul3.appendChild(li3);
  li3.textContent = `${i}pm: ${dubai.cookiesPurchasedPerHour[i]} cookies`;
  total3=total3+dubai.cookiesPurchasedPerHour[i];
}
li3 = document.createElement('li');
ul3.appendChild(li3);
li3.textContent = `Total: ${total3} cookies`;