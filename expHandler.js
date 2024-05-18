let userlevel = 0;
let userwager = 0.00;
let userdeposit = 0.00;
let userwithdraw = 0.00;
let userprofit = 0.00;

document.addEventListener("DOMContentLoaded", function () {
    console.log("expDom");
    getleveldata();
  });


function getleveldata(){
    userlevel = parseFloat(localStorage.getItem('userlevel'));
    userwager = parseFloat(localStorage.getItem('userwager'));
}

function storelevel(){
    localStorage.setItem('userlevel', userlevel);
}

function storewager(){
    localStorage.setItem('userwager', userwager);
}



function calculatewagergoal(){
    userlevel = calculatelevel();
    let neededamount = 10;
    for (let i = 0; i<userlevel ; i++) {
        neededamount = neededamount * 1.05;
    }
    return neededamount;
}

function currentlevelprogress(){
    let wagergoal = calculatewagergoal();
    let oldgoal = calculatesum() - wagergoal;
    let howmuch = userwager - oldgoal;
    let levelprogress = howmuch / wagergoal;
    return levelprogress;
}

function calculatelevel(){;
    let neededamount = 10;
    let i = 0;
    for (let neededamountsum = 10; neededamountsum<=userwager; neededamountsum += neededamount) {
        neededamount = neededamount * 1.05;
        i += 1;
    }
    return i;
}

function calculatesum(){;
    let neededamount = 10;
    let i = 0;
    for (let neededamountsum = 10; neededamountsum<=userwager; neededamountsum += neededamount) {
        neededamount = neededamount * 1.05;
        i = neededamountsum + neededamount;
    }
    return i;
}