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


let bodyTag1 = document.getElementById('body-main');
let heading1 = document.createElement('h2');
bodyTag1.appendChild(heading1);
heading1.textContent = 'Seattle';

let ul1 =document.createElement('ul');
bodyTag1.appendChild(ul1);

let li1=null;
let total1=0;
for(let i =6 ; i <13 ; i++){
  li1 = document.createElement('li');
  ul1.appendChild(li1);
  li1.textContent = `${i}am: ${seattle.cookiesPurchasedPerHour[i]} cookies`;
  total1=total1+seattle.cookiesPurchasedPerHour[i];
}
for (let i = 1; i <8 ; i++) {
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


let bodyTag2 = document.getElementById('body-main');
let heading2 = document.createElement('h2');
bodyTag2.appendChild(heading2);
heading2.textContent = 'Tokyo';

let ul2 =document.createElement('ul');
bodyTag2.appendChild(ul2);

let li2=null;
let total2=0;
for(let i =6 ; i <13 ; i++){
  li2 = document.createElement('li');
  ul2.appendChild(li2);
  li2.textContent = `${i}am: ${tokyo.cookiesPurchasedPerHour[i]} cookies`;
  total2=total2+tokyo.cookiesPurchasedPerHour[i];
}
for (let i = 1; i <8 ; i++) {
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


let bodyTag3 = document.getElementById('body-main');
let heading3 = document.createElement('h2');
bodyTag3.appendChild(heading3);
heading3.textContent = 'Dubai';

let ul3 =document.createElement('ul');
bodyTag3.appendChild(ul3);

let li3=null;
let total3=0;
for(let i =6 ; i <13 ; i++){
  li3 = document.createElement('li');
  ul3.appendChild(li3);
  li3.textContent = `${i}am: ${dubai.cookiesPurchasedPerHour[i]} cookies`;
  total3=total3+dubai.cookiesPurchasedPerHour[i];
}
for (let i = 1; i <8 ; i++) {
  li3 = document.createElement('li');
  ul3.appendChild(li3);
  li3.textContent = `${i}pm: ${dubai.cookiesPurchasedPerHour[i]} cookies`;
  total3=total3+dubai.cookiesPurchasedPerHour[i];
}
li3 = document.createElement('li');
ul3.appendChild(li3);
li3.textContent = `Total: ${total3} cookies`;


const paris = {
  min:20,
  max:38,
  avgCookies:2.3,
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
paris.cusAvg(paris.min,paris.max);


let bodyTag4 = document.getElementById('body-main');
let heading4 = document.createElement('h2');
bodyTag4.appendChild(heading4);
heading4.textContent = 'Paris';

let ul4 =document.createElement('ul');
bodyTag4.appendChild(ul4);

let li4=null;
let total4=0;
for(let i =6 ; i <13 ; i++){
  li4 = document.createElement('li');
  ul4.appendChild(li4);
  li4.textContent = `${i}am: ${paris.cookiesPurchasedPerHour[i]} cookies`;
  total4=total4+paris.cookiesPurchasedPerHour[i];
}
for (let i = 1; i <8 ; i++) {
  li4 = document.createElement('li');
  ul4.appendChild(li4);
  li4.textContent = `${i}pm: ${paris.cookiesPurchasedPerHour[i]} cookies`;
  total4=total4+paris.cookiesPurchasedPerHour[i];
}
li4 = document.createElement('li');
ul4.appendChild(li4);
li4.textContent = `Total: ${total4} cookies`;

const lima = {
  min:20,
  max:38,
  avgCookies:2.3,
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
lima.cusAvg(lima.min,lima.max);


let bodyTag5 = document.getElementById('body-main');
let heading5 = document.createElement('h2');
bodyTag5.appendChild(heading5);
heading5.textContent = 'Lima';

let ul5 =document.createElement('ul');
bodyTag5.appendChild(ul5);

let li5=null;
let total5=0;
for(let i =6 ; i <13 ; i++){
  li5 = document.createElement('li');
  ul5.appendChild(li5);
  li5.textContent = `${i}am: ${lima.cookiesPurchasedPerHour[i]} cookies`;
  total5=total5+lima.cookiesPurchasedPerHour[i];
}
for (let i = 1; i <8 ; i++) {
  li5 = document.createElement('li');
  ul5.appendChild(li5);
  li5.textContent = `${i}pm: ${lima.cookiesPurchasedPerHour[i]} cookies`;
  total5=total5+lima.cookiesPurchasedPerHour[i];
}
li5 = document.createElement('li');
ul5.appendChild(li5);
li5.textContent = `Total: ${total5} cookies`;