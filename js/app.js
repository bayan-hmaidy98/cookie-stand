function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let globVar = document.getElementById('shop1')
<<<<<<< HEAD
let ranVar;

=======
let hourRan = 1;
let ranVar;
let total = 0;
let hourRan2 = 1;
let total2 = 0;
let hourRan3 = 1;
let total3 = 0;
let hourRan4 = 1;
let total4 = 0;
let hourRan5 = 1;
let total5 = 0;
>>>>>>> ddcd85f8331711df24fbc834682d314211031cd0
//First Shop: Seattle



const Seattle = {
    shopLocation: 'Seattle',
    max: 23,
    min: 65,
    avg: 6.3,
    timeArr: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12am: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '],
    hourArr: [],
<<<<<<< HEAD
    total:0,
    hourRan:1,
=======
>>>>>>> ddcd85f8331711df24fbc834682d314211031cd0
    updatingTheNum: function () {
        for (let i = 0; i < 14; i++) {
            ranVar = randomValue(this.min, this.max);

            this.hourArr[i] = ranVar * Math.ceil(this.avg);
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

Seattle.updatingTheNum();
Seattle.render();

// Second shop: Tokyo
const Tokyo = {
    shopLocation: 'Tokyo',
    max: 3,
    min: 24,
    avg2: 1.2,
<<<<<<< HEAD
    total:0,
    hourRan:1,
    timeArr: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12am: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '],
    hourArr: [],
=======
    timeArr: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12am: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '],
    hourArr2: [],
>>>>>>> ddcd85f8331711df24fbc834682d314211031cd0
    updatingTheNum: function () {
        for (let i = 0; i < 14; i++) {
            ranVar = randomValue(this.min, this.max);

<<<<<<< HEAD
            this.hourArr[i] = ranVar * Math.ceil(this.avg2);
            total += this.hourArr[i];
        }
        console.log(this.hourArr);
        console.log(total);
=======
            this.hourArr2[i] = ranVar * Math.ceil(this.avg2);
            total2 += this.hourArr2[i];
        }
        console.log(this.hourArr2);
        console.log(total2);
>>>>>>> ddcd85f8331711df24fbc834682d314211031cd0
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
<<<<<<< HEAD
            ilEl.textContent = this.timeArr[i] + this.hourArr[i];
        }
        let h4El = document.createElement('h4');
        articleEl.appendChild(h4El);
        h4El.textContent = 'Total: ' + total;
=======
            ilEl.textContent = this.timeArr[i] + this.hourArr2[i];
        }
        let h4El = document.createElement('h4');
        articleEl.appendChild(h4El);
        h4El.textContent = 'Total: ' + total2;
>>>>>>> ddcd85f8331711df24fbc834682d314211031cd0
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
<<<<<<< HEAD
    total:0,
    hourRan:1,
    timeArr: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12am: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '],
    hourArr: [],
=======
    timeArr: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12am: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '],
    hourArr3: [],
>>>>>>> ddcd85f8331711df24fbc834682d314211031cd0
    updatingTheNum: function () {
        for (let i = 0; i < 14; i++) {
            ranVar = randomValue(this.min, this.max);

<<<<<<< HEAD
            this.hourArr[i] = ranVar * Math.ceil(this.avg2);
            total += this.hourArr[i];
        }
        console.log(this.hourArr);
        console.log(total);
=======
            this.hourArr3[i] = ranVar * Math.ceil(this.avg2);
            total3 += this.hourArr3[i];
        }
        console.log(this.hourArr3);
        console.log(total3);
>>>>>>> ddcd85f8331711df24fbc834682d314211031cd0
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
<<<<<<< HEAD
            ilEl.textContent = this.timeArr[i] + this.hourArr[i];
        }
        let h4El = document.createElement('h4');
        articleEl.appendChild(h4El);
        h4El.textContent = 'Total: ' + total;
=======
            ilEl.textContent = this.timeArr[i] + this.hourArr3[i];
        }
        let h4El = document.createElement('h4');
        articleEl.appendChild(h4El);
        h4El.textContent = 'Total: ' + total3;
>>>>>>> ddcd85f8331711df24fbc834682d314211031cd0
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
<<<<<<< HEAD
    total:0,
    hourRan:1,
    timeArr: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12am: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '],
    hourArr: [],
=======
    timeArr: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12am: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '],
    hourArr4: [],
>>>>>>> ddcd85f8331711df24fbc834682d314211031cd0
    updatingTheNum: function () {
        for (let i = 0; i < 14; i++) {
            ranVar = randomValue(this.min, this.max);

<<<<<<< HEAD
            this.hourArr[i] = ranVar * Math.ceil(this.avg2);
            total4 += this.hourArr[i];
        }
        console.log(this.hourArr);
=======
            this.hourArr4[i] = ranVar * Math.ceil(this.avg2);
            total4 += this.hourArr4[i];
        }
        console.log(this.hourArr4);
>>>>>>> ddcd85f8331711df24fbc834682d314211031cd0
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
<<<<<<< HEAD
            ilEl.textContent = this.timeArr[i] + this.hourArr[i];
=======
            ilEl.textContent = this.timeArr[i] + this.hourArr4[i];
>>>>>>> ddcd85f8331711df24fbc834682d314211031cd0
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
<<<<<<< HEAD
    total:0,
    hourRan:1,
    timeArr: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12am: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '],
    hourArr: [],
=======
    timeArr: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12am: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '],
    hourArr5: [],
>>>>>>> ddcd85f8331711df24fbc834682d314211031cd0
    updatingTheNum: function () {
        for (let i = 0; i < 14; i++) {
            ranVar = randomValue(this.min, this.max);

<<<<<<< HEAD
            this.hourArr[i] = ranVar * Math.ceil(this.avg2);
            total += this.hourArr[i];
        }
        console.log(this.hourArr);
        console.log(total);
=======
            this.hourArr5[i] = ranVar * Math.ceil(this.avg2);
            total5 += this.hourArr5[i];
        }
        console.log(this.hourArr5);
        console.log(total5);
>>>>>>> ddcd85f8331711df24fbc834682d314211031cd0
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
<<<<<<< HEAD
            ilEl.textContent = this.timeArr[i] + this.hourArr[i];
        }
        let h4El = document.createElement('h4');
        articleEl.appendChild(h4El);
        h4El.textContent = 'Total: ' + total;
=======
            ilEl.textContent = this.timeArr[i] + this.hourArr5[i];
        }
        let h4El = document.createElement('h4');
        articleEl.appendChild(h4El);
        h4El.textContent = 'Total: ' + total5;
>>>>>>> ddcd85f8331711df24fbc834682d314211031cd0
    },
}

Lima.updatingTheNum();
Lima.render();

