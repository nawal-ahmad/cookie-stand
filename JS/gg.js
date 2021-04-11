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
console.log(paris.randomCusPerHour);
console.log(paris.cookiesPurchasedPerHour);

let bodyTag4 = document.getElementById('body-main');
let heading4 = document.createElement('h2');
bodyTag4.appendChild(heading4);
heading4.textContent = 'paris';

let ul4 =document.createElement('ul');
bodyTag4.appendChild(ul4);

let li4=null;
let ttotal4=0;
for(let i =6 ; i <12 ; i++){
  li4 = document.createElement('li');
  ul4.appendChild(li4);
  li4.textContent = `${i}am: ${paris.cookiesPurchasedPerHour[i]} cookies`;
  ttotal4=ttotal4+paris.cookiesPurchasedPerHour[i];
}
for (let i = 1; i < 7; i++) {
  li4 = document.createElement('li');
  ul4.appendChild(li4);
  li4.textContent = `${i}pm: ${paris.cookiesPurchasedPerHour[i]} cookies`;
  ttotal4=ttotal4+paris.cookiesPurchasedPerHour[i];
}
li4 = document.createElement('li');
ul4.appendChild(li4);
li4.textContent = `Total: ${ttotal4} cookies`;