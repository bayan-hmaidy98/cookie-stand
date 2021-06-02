function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let timeArr = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let globVar = document.getElementById('SalmonCookies')
let dataCollected = [];
let table = document.getElementById('table')

function Location(shopLocation, min, max, avg) {
    this.shopLocation = shopLocation;
    this.min = min;
    this.max = max;
    this.avg = avg;
    dataCollected.push(this);
    this.total = 0;
    this.hourArr = [];
    this.hourRan = [];
   
}

Location.prototype.randomNumbOfCust = function () {
   // console.log(randomValue(6,13))
   for ( let i=0; i<timeArr.length; i++){
    this.hourRan.push(randomValue(this.min, this.max));}
    console.log(this.hourRan);
   }


Location.prototype.calculatingCookiesNum = function () {
    for ( let i=0; i<timeArr.length; i++){
    this.hourArr.push(this.hourRan[i]*(Math.ceil(this.avg)));
    this.total = this.total + this.hourArr[i];}
    console.log(this.hourArr)
}

//console.log(this.hourRan);

let articleEl = document.createElement('article');
globVar.appendChild(articleEl);
articleEl.appendChild(table);


function getFirstRow(){
let firstRow = document.createElement('tr');
table.appendChild(firstRow);
let emptyCell = document.createElement('th');
firstRow.appendChild(emptyCell);

for (let i = 0; i < timeArr.length; i++) {
    let th = document.createElement('th');
    firstRow.appendChild(th)    
    th.textContent = timeArr[i];}

    let totalLoc = document.createElement('th');
    firstRow.appendChild(totalLoc)
    totalLoc.textContent = 'Daily Total';
}
getFirstRow();
Location.prototype.render = function () {
   
    let secondRow = document.createElement('tr')
    table.appendChild(secondRow)
    let locationName = document.createElement('th')
    locationName.textContent = this.shopLocation 
    secondRow.appendChild(locationName)
    for (let i=0; i<timeArr.length; i++)
    {
        let td = document.createElement('td')
        secondRow.appendChild(td)
        console.log(this.hourArr[i])
        td.textContent = this.hourArr[i]
    }
    let dailyTotal = document.createElement ('td')
    secondRow.appendChild(dailyTotal)
    dailyTotal.textContent = this.total
    }


    
function footerRow(){
   let lastRow = document.createElement('tr')
    table.appendChild(lastRow)
    let sumOfTotal = document.createElement('th')
    lastRow.appendChild(sumOfTotal)
    sumOfTotal.textContent = 'Totals';
    let allTotal=0;
    let altTot = 0;

    for (let i=0; i<timeArr.length; i++) 
    {let sumTot = 0;
        for( let j=0; j<dataCollected.length; j++){
            sumTot+= dataCollected[j].hourArr[i]
         altTot= sumTot;
            console.log(sumTot)
        }
        let dataTotal = document.createElement(('td'));
        lastRow.appendChild(dataTotal);
        dataTotal.textContent = sumTot;
    
}
let lastCell = document.createElement('td')
    lastRow.appendChild(lastCell)
    
    for (let i=0; i<timeArr.length; i++) {
        allTotal+= altTot
    lastCell.textContent = allTotal
    }

}

let seattle = new Location('Seattle', 23, 65, 6.3)
let tokyo = new Location('Tokyo', 3, 24, 1.2)
let dubai = new Location('Dubai', 11, 38, 3.7)
let paris = new Location('Paris', 20, 38, 2.3)
let lima = new Location('Lima', 2, 16, 4.6)
console.log(seattle.hourRan)

for (let i=0; i<dataCollected.length; i++){
    dataCollected[i].randomNumbOfCust();
    dataCollected[i].calculatingCookiesNum();
    dataCollected[i].render();
}
footerRow();