let battlesamount = 0;
Cases = CasesData;



document.addEventListener("DOMContentLoaded", function () {
    //localStorage.setItem("battlesamount", 0)
    removeoldbattles();
    getbattlesamount();
    createbotbattles();
});

function getbattlesamount(){
    battlesamount = localStorage.getItem("battlesamount");
    console.log (battlesamount);
}

function storebattlesamount(){
    localStorage.setItem("battlesamount", battlesamount);
}

function storebattle(i, botbattletostore){
    let caseBattleString = JSON.stringify(botbattletostore);
    localStorage.setItem("caseBattle"+i, caseBattleString);
    console.log("battle Stored");
}


function removeoldbattles(){
    for (let i = 1; i<11 ; i++){
        localStorage.setItem("caseBattle"+i , "none");
    }
}




function createbotbattles(){

    battlesrander = Math.floor(Math.random() * 4 + 4);
    console.log("Battlesrander ====== "+battlesrander);

    for (let i = 1; i < battlesrander ; i++){
        createbotbattle(i);
    }

    joinableandactivebattlesinfo(battlesrander);
}

function shuffleArray(array) {
    // Diese Funktion mischt ein Array zufällig
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function battleplayersmodernd() {
    let rander = Math.floor(Math.random() * 4 + 1);
    if (rander == 1){
        return "1v1";
    }
    else if (rander == 2){
        return "1v1v1";
    }
    else if (rander == 3){
        return "1v1v1v1";
    }
    else if (rander == 4){
        return "2v2";
    }
}

function battleplaymodernd(){
    let rander = Math.floor(Math.random() * 3 + 1);
    if (rander == 1){
        return "normal";
    }
    else if (rander == 2){
        return "group";
    }
    else if (rander == 3){
        return "terminal";
    }
}

function battlecrazyornotrnd(battleplaymode){
    if (battleplaymode !== "group"){
        let rander = Math.floor(Math.random() * 2 + 1);
        if (rander == 1){
            return "most";
        }
        else if (rander == 2){
            return "crazy";
        }
    }
    else {
        return "most";
    }
}

function battlecasearraycombiner(battlecases) {
    let caseCounts = {};

    // Zähle die Anzahl der Vorkommen jedes Werts in battlecases
    for (let casetype of battlecases) {
        let casetypeValue = casetype; // Der Wert des casetype
        if (caseCounts[casetypeValue]) {
            caseCounts[casetypeValue]++;
        } else {
            caseCounts[casetypeValue] = 1;
        }
    }

    // Erstelle das Array mit der gewünschten Struktur [[x, y], [x, y]]
    let resultArray = Object.entries(caseCounts).map(([key, value]) => [parseInt(key), value]);

    return resultArray;
}

function createbotbattle(i) {
    let battlerounds = Math.floor(Math.random() * 10 + 1);
    let battlecasetypesamount = Math.floor(Math.random() * battlerounds + 1);
    let battlecasetypes = [];

    while (battlecasetypes.length < battlecasetypesamount) {
        let casetypernd = Math.floor(Math.random() * 10);
        let casetype = Cases[casetypernd][4];
        if (!battlecasetypes.includes(casetype)) {
            battlecasetypes.push(casetype);
        }
    }

    console.log("battlerounds = " + battlerounds);
    console.log("battlecasetypesamount = " + battlecasetypesamount);
    console.log("battlecasetypes = " + battlecasetypes);

    let battlecases = [];

    // Mische die Reihenfolge der battlecasetypes zufällig
    shuffleArray(battlecasetypes);

    for (let round = 0; round < battlerounds; round++) {
        let casetypeIndex = round % battlecasetypes.length;
        let casetype = battlecasetypes[casetypeIndex];

        // Finde den Index des vorherigen casetype desselben Werts
        let previousIndex = battlecases.lastIndexOf(casetype);

        // Füge den casetype hinter dem vorherigen casetype ein oder am Anfang, falls es keinen vorherigen gibt
        if (previousIndex === -1) {
            battlecases.unshift(casetype);
        } else {
            battlecases.splice(previousIndex + 1, 0, casetype);
        }
    }

    console.log("battlecases = " + battlecases);

    let botbattlecost = 0;
    for (let y = 0; y < battlecases.length; y++) {
       botbattlecost+= Cases[battlecases[y]][1];
    }
    

    let battleplayersmode = battleplayersmodernd();
    
    let battleplaymode = battleplaymodernd();

    let battlecrazyornot = battlecrazyornotrnd(battleplaymode);

    let battlecasearray = battlecasearraycombiner(battlecases);

    console.log("battlecasearray = " +battlecasearray);

    let botbattle = [true, parseFloat(botbattlecost.toFixed(2)), battlerounds, battleplayersmode, battleplaymode, battlecrazyornot, battlecasearray, false, i]
    console.log (botbattle);

    localStorage.setItem("caseBattle"+i, botbattle);

    storebattle(i, botbattle);
}




function joinableandactivebattlesinfo(battlesrander){
    let activebattlestext = document.getElementById("active-Battle-Info");
    let joinabletext = document.getElementById("joinable-Battle-Info");

    if (localStorage.getItem("caseBattle0") == "none"){
        activebattlestext.innerHTML = battlesrander-1 + " Active battles";
        joinabletext.innerHTML = battlesrander-1 +" Joinable battles";    
    }
    else {
        activebattlestext.innerHTML = battlesrander + " Active battles";
        joinabletext.innerHTML = battlesrander +" Joinable battles";
    }
}