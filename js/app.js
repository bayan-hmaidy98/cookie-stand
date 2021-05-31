function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let timeArr = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12am: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '];
let globVar = document.getElementById('shop1')

let ranVar;


//First Shop: Seattle
const Seattle = {
    shopLocation: 'Seattle',
    min: 23,
    max: 65,
    avg: 6.3,

    total:0,
    hourRan:[],
    hourArr:[],
    total:0,
    updatingRandomCust: function () {
        for (let i = 0; i<timeArr.length; i++) {
           this.hourRan.push(randomValue(this.min,this.max))

    updatingTheNum: function () {
        for (let i = 0; i < 14; i++) {
            ranVar = randomValue(this.min, this.max);

            this.hourArr[i] = ranVar * Math.ceil(this.avg);
            total += this.hourArr[i];

        }
    },

    calculatingCookiesNum: function(){
for (let i=0; i<this.hourRan.length; i++)
{
    this.hourArr.push(this.hourRan[i]*(Math.ceil(this.avg)));
    this.total+= this.hourArr[i]
}
console.log(this.hourRan)
console.log(this.hourArr);
console.log(this.total);
    },
    render: function () {
        let articleEl = document.createElement('article');
        globVar.appendChild(articleEl);

        let h2El = document.createElement('h2')
        articleEl.appendChild(h2El);
        h2El.textContent = this.shopLocation;

        let unOrder = document.createElement('ul');
        articleEl.appendChild(unOrder);

        let ilEl = null;
        for (let i = 0; i < 14; i++) {
            ilEl = document.createElement('li');
            unOrder.appendChild(ilEl);
          ilEl.textContent = `${timeArr[i]}  ${this.hourArr[i]}`;
        }
        let h4El = document.createElement('h4');
        articleEl.appendChild(h4El);
        h4El.textContent = 'Total: ' + this.total;
    },
}

Seattle.updatingRandomCust();
Seattle.calculatingCookiesNum();
Seattle.render();


// Second Shop: Tokyo
const Tokyo = {
    shopLocation: 'Tokyo',

    min: 3,
    max: 24,
    avg: 1.2,
    total:0,
    hourRan:[],
    hourArr:[],
    total:0,
    updatingRandomCust: function () {
        for (let i = 0; i<timeArr.length; i++) {
           this.hourRan.push(randomValue(this.min,this.max))
        }
    },

    calculatingCookiesNum: function(){
for (let i=0; i<this.hourRan.length; i++)
{
    this.hourArr.push(this.hourRan[i]*(Math.ceil(this.avg)));
    this.total+= this.hourArr[i]
}
console.log(this.hourRan)
console.log(this.hourArr);
console.log(this.total);

    updatingTheNum: function () {
        for (let i = 0; i < 14; i++) {
            ranVar = randomValue(this.min, this.max);


    },
    render: function () {
        let articleEl = document.createElement('article');
        globVar.appendChild(articleEl);

        let h2El = document.createElement('h2')
        articleEl.appendChild(h2El);
        h2El.textContent = this.shopLocation;

        let unOrder = document.createElement('ul');
        articleEl.appendChild(unOrder);

        let ilEl = null;
        for (let i = 0; i < 14; i++) {
            ilEl = document.createElement('li');
            unOrder.appendChild(ilEl);

          ilEl.textContent = `${timeArr[i]}  ${this.hourArr[i]}`;
        }
        let h4El = document.createElement('h4');
        articleEl.appendChild(h4El);
        h4El.textContent = 'Total: ' + this.total;

    },
}

Tokyo.updatingRandomCust();
Tokyo.calculatingCookiesNum();
Tokyo.render();


//Third Shop: Dubai
const Dubai = {
    shopLocation: 'Dubai',

    min: 11,
    max: 38,
    avg: 3.7,
    total:0,
    hourRan:[],
    hourArr:[],
    total:0,
    updatingRandomCust: function () {
        for (let i = 0; i<timeArr.length; i++) {
           this.hourRan.push(randomValue(this.min,this.max))
        }
    },

    calculatingCookiesNum: function(){
for (let i=0; i<this.hourRan.length; i++)
{
    this.hourArr.push(this.hourRan[i]*(Math.ceil(this.avg)));
    this.total+= this.hourArr[i]
}
console.log(this.hourRan)
console.log(this.hourArr);
console.log(this.total);

    updatingTheNum: function () {
        for (let i = 0; i < 14; i++) {
            ranVar = randomValue(this.min, this.max);


    },
    render: function () {
        let articleEl = document.createElement('article');
        globVar.appendChild(articleEl);

        let h2El = document.createElement('h2')
        articleEl.appendChild(h2El);
        h2El.textContent = this.shopLocation;

        let unOrder = document.createElement('ul');
        articleEl.appendChild(unOrder);

        let ilEl = null;
        for (let i = 0; i < 14; i++) {
            ilEl = document.createElement('li');
            unOrder.appendChild(ilEl);

          ilEl.textContent = `${timeArr[i]}  ${this.hourArr[i]}`;
        }
        let h4El = document.createElement('h4');
        articleEl.appendChild(h4El);
        h4El.textContent = 'Total: ' + this.total;

    },
}

Dubai.updatingRandomCust();
Dubai.calculatingCookiesNum();
Dubai.render();


// Forth Shop: Paris
const Paris = {
    shopLocation: 'Paris',

    min: 20,
    max: 38,
    avg: 2.3,
    total:0,
    hourRan:[],
    hourArr:[],
    total:0,
    updatingRandomCust: function () {
        for (let i = 0; i<timeArr.length; i++) {
           this.hourRan.push(randomValue(this.min,this.max))
        }
    },

    calculatingCookiesNum: function(){
for (let i=0; i<this.hourRan.length; i++)
{
    this.hourArr.push(this.hourRan[i]*(Math.ceil(this.avg)));
    this.total+= this.hourArr[i]
}
console.log(this.hourRan)
console.log(this.hourArr);
console.log(this.total);

    updatingTheNum: function () {
        for (let i = 0; i < 14; i++) {
            ranVar = randomValue(this.min, this.max);


        console.log(total4);

    },
    render: function () {
        let articleEl = document.createElement('article');
        globVar.appendChild(articleEl);

        let h2El = document.createElement('h2')
        articleEl.appendChild(h2El);
        h2El.textContent = this.shopLocation;

        let unOrder = document.createElement('ul');
        articleEl.appendChild(unOrder);

        let ilEl = null;
        for (let i = 0; i < 14; i++) {
            ilEl = document.createElement('li');
            unOrder.appendChild(ilEl);

          ilEl.textContent = `${timeArr[i]}  ${this.hourArr[i]}`;

        }
        let h4El = document.createElement('h4');
        articleEl.appendChild(h4El);
        h4El.textContent = 'Total: ' + this.total;
    },
}

Paris.updatingRandomCust();
Paris.calculatingCookiesNum();
Paris.render();

// Fifth Shop: Lima 
const Lima = {
    shopLocation: 'Lima',

    min: 2,
    max: 16,
    avg: 4.6,
    total:0,
    hourRan:[],
    hourArr:[],
    total:0,
    updatingRandomCust: function () {
        for (let i = 0; i<timeArr.length; i++) {
           this.hourRan.push(randomValue(this.min,this.max))
        }
    },

    calculatingCookiesNum: function(){
for (let i=0; i<this.hourRan.length; i++)
{
    this.hourArr.push(this.hourRan[i]*(Math.ceil(this.avg)));
    this.total+= this.hourArr[i]
}
console.log(this.hourRan)
console.log(this.hourArr);
console.log(this.total);

    updatingTheNum: function () {
        for (let i = 0; i < 14; i++) {
            ranVar = randomValue(this.min, this.max);


    },
    render: function () {
        let articleEl = document.createElement('article');
        globVar.appendChild(articleEl);

        let h2El = document.createElement('h2')
        articleEl.appendChild(h2El);
        h2El.textContent = this.shopLocation;

        let unOrder = document.createElement('ul');
        articleEl.appendChild(unOrder);

        let ilEl = null;
        for (let i = 0; i < 14; i++) {
            ilEl = document.createElement('li');
            unOrder.appendChild(ilEl);

          ilEl.textContent = `${timeArr[i]}  ${this.hourArr[i]}`;
        }
        let h4El = document.createElement('h4');
        articleEl.appendChild(h4El);
        h4El.textContent = 'Total: ' + this.total;

    },
}

Lima.updatingRandomCust();
Lima.calculatingCookiesNum();
Lima.render();
