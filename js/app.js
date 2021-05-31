function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let timeArr = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12am: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '];
let globVar = document.getElementById('shop1')
let total =0;
//First Shop: Seattle
const Seattle = {
    shopLocation: 'Seattle',
    max: 3,
    min: 24,
    avg2: 1.2,
    total:0,
    hourRan:1,
    hourArr: [],
    updatingTheNum: function () {
        for (let i = 0; i < 14; i++) {
            ranVar = randomValue(this.min, this.max);

            this.hourArr[i] = Math.ceil(ranVar * (this.avg));
            total+= this.hourArr[i];
        }
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
            ilEl.textContent = this.timeArr[i] + this.hourArr[i];
        }
        let h4El = document.createElement('h4');
        articleEl.appendChild(h4El);
        h4El.textContent = 'Total: ' + total;
    },
}

Seattle.updatingTheNum();
Seattle.render();

// Second shop: Tokyo
const Tokyo = {
    shopLocation: 'Tokyo',
    max: 3,
    min: 24,
    avg2: 1.2,
    total:0,
    hourRan:1,
    timeArr: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12am: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '],
    hourArr: [],
    updatingTheNum: function () {
        for (let i = 0; i < 14; i++) {
            ranVar = randomValue(this.min, this.max);

            this.hourArr[i] = ranVar * Math.ceil(this.avg2);
            total += this.hourArr[i];
        }
        console.log(this.hourArr);
        console.log(total);
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
            ilEl.textContent = this.timeArr[i] + this.hourArr[i];
        }
        let h4El = document.createElement('h4');
        articleEl.appendChild(h4El);
        h4El.textContent = 'Total: ' + total;
    },
}

Tokyo.updatingTheNum();
Tokyo.render();

// Third Shop: 
const Dubai = {
    shopLocation: 'Dubai',
    max: 11,
    min: 38,
    avg2: 3.7,
    total:0,
    hourRan:1,
    timeArr: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12am: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '],
    hourArr: [],
    updatingTheNum: function () {
        for (let i = 0; i < 14; i++) {
            ranVar = randomValue(this.min, this.max);

            this.hourArr[i] = ranVar * Math.ceil(this.avg2);
            total += this.hourArr[i];
        }
        console.log(this.hourArr);
        console.log(total);
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
            ilEl.textContent = this.timeArr[i] + this.hourArr[i];
        }
        let h4El = document.createElement('h4');
        articleEl.appendChild(h4El);
        h4El.textContent = 'Total: ' + total;
    },
}

Dubai.updatingTheNum();
Dubai.render();

// Forth Shop: Priso
const Paris = {
    shopLocation: 'Paris',
    max: 20,
    min: 38,
    avg2: 2.3,
    total:0,
    hourRan:1,
    timeArr: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12am: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '],
    hourArr: [],
    updatingTheNum: function () {
        for (let i = 0; i < 14; i++) {
            ranVar = randomValue(this.min, this.max);

            this.hourArr[i] = ranVar * Math.ceil(this.avg2);
            total4 += this.hourArr[i];
        }
        console.log(this.hourArr);
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
            ilEl.textContent = this.timeArr[i] + this.hourArr[i];
        }
        let h4El = document.createElement('h4');
        articleEl.appendChild(h4El);
        h4El.textContent = 'Total: ' + total4;
    },
}

Paris.updatingTheNum();
Paris.render();

// Fifth Shop
const Lima = {
    shopLocation: 'Lima',
    max: 2,
    min: 16,
    avg2: 4.6,
    total:0,
    hourRan:1,
    timeArr: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12am: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '],
    hourArr: [],
    updatingTheNum: function () {
        for (let i = 0; i < 14; i++) {
            ranVar = randomValue(this.min, this.max);

            this.hourArr[i] = ranVar * Math.ceil(this.avg2);
            total += this.hourArr[i];
        }
        console.log(this.hourArr);
        console.log(total);
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
            ilEl.textContent = this.timeArr[i] + this.hourArr[i];
        }
        let h4El = document.createElement('h4');
        articleEl.appendChild(h4El);
        h4El.textContent = 'Total: ' + total;
    },
}

Lima.updatingTheNum();
Lima.render();

