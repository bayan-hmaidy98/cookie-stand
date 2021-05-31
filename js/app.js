function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let timeArr = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12am: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '];
let globVar = document.getElementById('SalmonCookies')

let ranVar;
let dataCollected = [];
let total =0;
let hourRan = [];
let hourArr = [];
let table = document.getElementById('table')
function Location(shopLocation, min, max, avg)
{
    this.shopLocation = shopLocation;
    this.min = min;
    this.max = max;
    this.avg = avg;
    dataCollected.push[this];
}
Location.prototype.randomNumbOfCust = function (){

        this.hourRan = randomValue(this.min,this.max)
     }


Location.prototype.calculatingCookiesNum = function(){
    
    this.hourArr = this.hourRan * (Math.ceil(this.avg));
   total+= this.hourArr;
}


Location.prototype.render = function() {
    let articleEl = document.createElement('article');
        globVar.appendChild(articleEl);
        articleEl.appendChild(table);
        
        let firstRow = document.createElement('tr');
        table.appendChild(firstRow);
        for (let i=0; i<timeArr.length; i++){       
        let th = document.createElement('th');
        firstRow.appendChild(th);
        th.textContent[i] = timeArr[i];
        }
        for (let i=0; i<5; i++){
            let secondRow = document.createElement('tr');
            table.appendChild(secondRow);
            for (let i=0; i<timeArr.length; i++){       
                let td = document.createElement('td');
                secondRow.appendChild(td);
                td.textContent[i] = this.hourArr[i];
                }
            let totalRow = document.createElement('tr')
            table.appendChild(totalRow);
            let td = document.createElement('td');
            td.textContent = this.total
            }
        }

       let seattle = new Location('Seattle', 23, 65, 6.3)
       let tokyo = new Location('Tokyo', 3, 24, 1.2)
       let dubai = new Location('Dubai', 11, 38, 3.7)
       let paris = new Location('Paris', 20, 38, 2.3)
       let lima = new Location('Lima', 2, 16, 4.6)
seattle.randomNumbOfCust();
seattle.calculatingCookiesNum();
seattle.render();

tokyo.randomNumbOfCust();
tokyo.calculatingCookiesNum();
tokyo.render();

dubai.randomNumbOfCust();
dubai.calculatingCookiesNum();
dubai.render();

paris.randomNumbOfCust();
paris.calculatingCookiesNum();
paris.render();

lima.randomNumbOfCust();
lima.calculatingCookiesNum();
lima.render();

    
for (let i=0; i<timeArr.length; i++)
{
    dataCollected[i].randomNumbOfCust();
    dataCollected[i].calculatingCookiesNum();
}
        