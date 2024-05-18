let Battle1 = "none";
let Cases = CasesData;
let currentCaseInfos = [];
let battleusers = 0;
let battlewinner = 0;
let issomeone = [[true],[false],[false],[false]];
let createdby = "user";
let userlocation = 0;
let items = null;
let currentCase = 0;
let currentCaseType = 0;
let currentDrop = 0;
let currentRound = 1;
var winner = [];
let counts = [];
let activeItemIndex = -1;
let spinneraxis = "y";
let notfirstspin = false;
let battlebalances = [0.00,0.00,0.00,0.00];
let battlebalancesvisual = [0.00,0.00,0.00,0.00];
let battlewinners = [[],[],[],[]];
let lastdrops = [0,0,0,0];
let Divver = false;
let PointersThere = false;
let previewcasesspinner = 0;
let battlenumber = 0;




document.addEventListener("DOMContentLoaded", function () {
    getbalance();
    balanceonload();
    getbattlenumber();
    getBattle();
    getbattleusers();
    createBattleRows();
    getbattleInfos();
    whatcase(Battle1[6][0][0]);
    divMaker(0);
    previewcasespinnerupdate();
    updatecurrentcaseinfos();
    //createpointer();
  });






function getbalance() {
    if (localStorage.getItem("balance") === null) {
      balance = 250;
      storebalance();
    }
    else {
     balance = parseFloat(localStorage.getItem("balance")); 
    }
  }
  
  function storebalance(){
    localStorage.setItem("balance", balance);
  }
  
  /*
  function balancefield() {
    let balanceinput = document.createElement("input");
    balanceinput.placeholder = "New Balance";
    balanceinput.id = "balance-input";
    balanceinput.type = "number";
    balanceinput.min = "0";
    balanceinput.max = "100000";
    balanceinput.className = "balanceinput";
  
    let balanceinputbutton = document.createElement("button");
    balanceinputbutton.id = "balance-input-button";
    balanceinputbutton.className = "balanceinputbutton";
      let balanceinputbuttontext = document.createTextNode("Change");
      balanceinputbutton.appendChild(balanceinputbuttontext);
  
    document.getElementById("balance-input-container").appendChild(balanceinput);
    document.getElementById("balance-input-container").appendChild(balanceinputbutton);    
    document.getElementById("balance-input-button").onclick = function() {
  
      let balanceValue = document.getElementById("balance-input").value;
    
      if ( balanceValue >= 0 && balanceValue <= 100000 ){
      balance = balanceValue;
      document.getElementById("balanceamount").innerHTML = balance + "€";
      storebalance();
      document.getElementById("balance-input-container").innerHTML = "";
      }
      else {
        console.log("Balance must be between 0 and 100000");
      }

      
    } 
  
  }
  
  
  document.getElementById("b_balance").onclick = function() {
    if (document.getElementById("balance-input-container").innerHTML === "") {
      balancefield();
    } else {
      console.log("Cant have more than one input");
    }
  };*/

  function balanceonload() {
    document.getElementById("balanceamount").innerHTML = balance.toFixed(2);
  }

function getbattlenumber(){
  battlenumber = localStorage.getItem("battlenumber");
}



  function getBattle(){
    BattleRetrieved = localStorage.getItem("caseBattle"+battlenumber);
    console.log("BattleRetrieved:", BattleRetrieved);
  
    try {
      Battle1 = JSON.parse(BattleRetrieved);
    } catch (error) {
      console.error("Fehler beim Parsen des JSON-Strings:", error);
      return;
    }
  
    console.log("Battle1:", Battle1);
  
    Battle1 = recreateArray(Battle1);
  
    console.log("Battle1 wiederhergestellt:", Battle1);
  
  }
  
  function recreateArray(array) {
    const subArray = array[6];
    
    const nestedSubArray = [];
    for (let i = 0; i < subArray.length; i++) {
      nestedSubArray.push(subArray[i]);
    }
    
    array[6] = nestedSubArray;
    return array;
  }


  function storebattle(){
    let caseBattleString = JSON.stringify(Battle1);
    localStorage.setItem("caseBattle"+battlenumber, caseBattleString);
    console.log("battle Stored");
}

function storebattleuser(){
  let caseBattleString = JSON.stringify(Battle1);
  localStorage.setItem("caseBattle0", caseBattleString);
  console.log("battle Stored");
}


function removebattlefromlocalstorage(){
  localStorage.setItem("caseBattle"+battlenumber, "none");
  console.log("battle removed");
}

  function getbattleInfos(){
    let battlecosts =  0.00;
    battlecosts += Battle1[1];
    document.getElementById("battle-cost-price").innerHTML = battlecosts.toFixed(2);

    document.getElementById("runbattleplayermode").innerHTML = Battle1[3];

    if (Battle1[5] == "crazy" && Battle1[4] !== "normal"){
      document.getElementById("runbattlemode").innerHTML = Battle1[5] +" "+Battle1[4];
      document.getElementById("runbattlemode").className = "runbattlemode"+Battle1[4];  
    }
    else if (Battle1[5] == "crazy" && Battle1[4] == "normal"){
      document.getElementById("runbattlemode").innerHTML = Battle1[5];
      document.getElementById("runbattlemode").className = "runbattlemode"+Battle1[5];
    }
    else {
      document.getElementById("runbattlemode").innerHTML = Battle1[4];
      document.getElementById("runbattlemode").className = "runbattlemode"+Battle1[4];  
    }
   

    let roundcontainer = document.getElementById("roundcontainer");
    
    let roundcontainerfirsttext = document.createTextNode("Round ");
    roundcontainer.appendChild(roundcontainerfirsttext);

    let roundcontainercurrentRound = document.createElement("span");
    roundcontainercurrentRound.className = "roundcontainerRound";
    roundcontainercurrentRound.id = "roundcontainercurrentRound";
    roundcontainercurrentRound.innerHTML = "1";
    roundcontainer.appendChild(roundcontainercurrentRound);

    let roundcontainersecondText = document.createTextNode(" of ");
    roundcontainer.appendChild(roundcontainersecondText);

    let roundcontainermaxRound = document.createElement("span");
    roundcontainermaxRound.className = "roundcontainerRound";
    roundcontainermaxRound.innerHTML = Battle1[2];
    roundcontainer.appendChild(roundcontainermaxRound);

    generatebattlecases();
    activatebattlepreviewcase();
  }

function generatebattlecases(){
  let runbattlecasescontainer = document.getElementById("runbattlecasescontainer");

  let currentCaseTypeVis = 0;
  let currentCaseVis = 0;

  for (let z = 0; z <Battle1[2]; z++) {
    console.log("Durchgang: " +z);

    if (Battle1[6][currentCaseTypeVis][1] === currentCaseVis) {
      currentCaseTypeVis+=1;
      console.log("TypeVis changed to : " +currentCaseTypeVis);
      currentCaseVis = 1;
      console.log("CaseVis changed to : " +currentCaseVis);

    }
    else {
    currentCaseVis+=1;
    console.log("CaseVis changed byElse to : " +currentCaseVis);   
    
    }

    createbattlecasepreviewcase(currentCaseTypeVis,z,runbattlecasescontainer);
  }


}

function createbattlecasepreviewcase(currentCaseTypeVis,z,runbattlecasescontainer){
  let runbattlecase = document.createElement("div");
  runbattlecase.className = "runbattlecase";
  runbattlecase.id = "runbattlecase-"+z;
  runbattlecasescontainer.appendChild(runbattlecase);

  let runbattlecaseimagecontainer = document.createElement("div");
  runbattlecaseimagecontainer.className = "runbattlecaseimagecontainer";
  runbattlecase.appendChild(runbattlecaseimagecontainer);

  let runbattlecaseimage = document.createElement("img");
  runbattlecaseimage.setAttribute("alt", CasesData[Battle1[6][currentCaseTypeVis][0]][0]);
  runbattlecaseimage.setAttribute("src",  CasesData[Battle1[6][currentCaseTypeVis][0]][2]);
  runbattlecaseimage.setAttribute("decoding", "async");
  runbattlecaseimage.setAttribute("loading", "lazy");
  runbattlecaseimage.setAttribute("position", "absolute"); 
  runbattlecaseimage.setAttribute("width", "100");
  runbattlecaseimage.setAttribute("height", "100");
  runbattlecaseimage.setAttribute("inset", "0px");
  runbattlecaseimage.style.color = "transparent";
  runbattlecaseimage.className = "runbattlecaseimage";
  runbattlecaseimagecontainer.appendChild(runbattlecaseimage);
}


function activatebattlepreviewcase(){
  document.getElementById("runbattlecase-"+(currentRound-1)).className = "runbattlecaseactive";
  if (currentRound > 1){
    document.getElementById("runbattlecase-"+(currentRound-2)).className = "runbattlecase";
  }
}


function updatecurrentcaseinfos(){
 // document.getElementById("runbattlecaseinfosname").innerHTML = CasesData[Battle1[6][currentCaseType][0]][0];
 // document.getElementById("runbattlecaseinfospricetext").innerHTML = CasesData[Battle1[6][currentCaseType][0]][1];
 document.getElementById("runbattlecaseinfosname").innerHTML = currentCaseInfos[0];
 document.getElementById("runbattlecaseinfospricetext").innerHTML = currentCaseInfos[1];     
}




function getbattleusers(){
    if (Battle1[3] === "1v1"){
        battleusers = 2;
    }
    else if (Battle1[3] === "1v1v1"){
        battleusers = 3;
    }
    else {
        battleusers = 4;
    }
    console.log(battleusers + "battleusers");
}


function createBattleRows(){
    for (let i = 0; i <battleusers; i++){
        createBattleRow(i);
    }
}

function createBattleRow(i){
    let actualbattle = document.getElementById("actual-battle");

    let actualbattlecontainer = document.createElement("div");
    actualbattlecontainer.className = "actualbattlecontainer"
    actualbattle.appendChild(actualbattlecontainer);

    let userinfocontainer = document.createElement("div");
    userinfocontainer.id = "userinfocontainer-"+i;
    userinfocontainer.className = "userinfocontainer";
    actualbattlecontainer.appendChild(userinfocontainer);

    let userinfo = document.createElement("div");
    userinfo.className = "userinfo";
    userinfo.id = "userinfo-"+i;
    userinfocontainer.appendChild(userinfo);

    if (Battle1[7] && i == 0){
      userinfocreate(i,userinfo,userinfocontainer);
    }
    else if (!Battle1[7] && i == 0){
      botuserinfocreate(0);
    }
    else {
      createnouserbutton(i,userinfocontainer);
    }
    
    let actualbattlespinner = document.createElement("div");
    actualbattlespinner.className = "actualbattlespinner";
    actualbattlespinner.id = "actualbattlespinner-"+i;
    actualbattlecontainer.appendChild(actualbattlespinner);

    let actualbattleorientationer = document.createElement("div");
    actualbattleorientationer.setAttribute("orientation", "vertical");
    actualbattleorientationer.className = "actualbattleorientationer";
    actualbattlespinner.appendChild(actualbattleorientationer);

    let actualbattlespinnercontainer = document.createElement("div");
    actualbattlespinnercontainer.className = "actualbattlespinnercontainer";
    actualbattlespinnercontainer.id = "actualbattlespinnercontainer-"+i;
    actualbattlespinner.appendChild(actualbattlespinnercontainer);

    

    let actualbattlespinnerinner = document.createElement("div");
    actualbattlespinnerinner.className = "actualbattlespinnerinner";
    actualbattlespinnerinner.id = "actualbattlespinnerinner-"+i;
    actualbattlespinnerinner.style.transform = "translateY(-10.75%)";
    actualbattlespinnerinner.style.transition = "transform 0s ease 0s";
    actualbattlespinnercontainer.appendChild(actualbattlespinnerinner);

    let actualbattledropscontainer = document.createElement("div");
    actualbattledropscontainer.className = "actualbattledropscontainer drops";
    actualbattledropscontainer.setAttribute("style", "grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr)); grid-auto-rows: 5.5rem;");
    actualbattledropscontainer.setAttribute("grid-auto-rows", "5.5rem");
    actualbattlecontainer.appendChild(actualbattledropscontainer);

    for (let z = 0; z <Battle1[2]; z++){
        let actualbattledropplaceholder = document.createElement("div");
        actualbattledropplaceholder.className = "actualbattledropplaceholder";
        actualbattledropplaceholder.id = "actualbattle-"+i+"-dropplaceholder-" + z;
        actualbattledropscontainer.appendChild(actualbattledropplaceholder);
    }

  }


  function userinfocreate(i,userinfo, userinfocontainer){


    let userinfoactual = document.createElement("div");
    userinfoactual.className = "userinfoactual";
    userinfo.appendChild(userinfoactual);

    let userinfopfpcontainer = document.createElement("div");
    userinfopfpcontainer.className = "userinfopfpcontainer";
    userinfoactual.appendChild(userinfopfpcontainer);
    let userinfopfp = document.createElement("img");
    userinfopfp.setAttribute("alt", "Placeholder");
    userinfopfp.setAttribute("src", "/images/10Grin.png");
    userinfopfp.setAttribute("decoding", "async");
    userinfopfp.setAttribute("loading", "lazy");
    userinfopfp.setAttribute("position", "absolute"); 
    userinfopfp.setAttribute("width", "100");
    userinfopfp.setAttribute("height", "100");
    userinfopfp.setAttribute("inset", "0px");
    userinfopfp.style.color = "transparent";
    userinfopfp.className = "userinfopfp";
    userinfopfpcontainer.appendChild(userinfopfp);

    let userinfonameandlevel = document.createElement("div");
    userinfonameandlevel.className = "userinfonameandlevel";
    userinfoactual.appendChild(userinfonameandlevel);

    let userinfonamecontainer = document.createElement("div");
    userinfonamecontainer.className = "userinfonamecontainer";
    userinfonameandlevel.appendChild(userinfonamecontainer);
    let userinfoname = document.createElement("span");
    userinfoname.className = "userinfoname";
    userinfoname.id = "userinfoname-"+i;
    //if (i === 0){
    userinfoname.innerHTML = "You";    
    //}
    //else {
    //userinfoname.innerHTML = "Bot "+i;
    //}
    userinfonamecontainer.appendChild(userinfoname);

    let userinfolevel = document.createElement("div");
    userinfolevel.className = "userinfolevel"
    userinfolevel.id = "userinfolevel-"+i;
    userinfolevel.innerHTML = "0";
    userinfonameandlevel.appendChild(userinfolevel);



    let userinfobattlebalancediv = document.createElement("div");
    userinfocontainer.appendChild(userinfobattlebalancediv);

    let userinfobattlebalancefield = document.createElement("div");
    userinfobattlebalancefield.className = "userinfobattlebalancefield";
    userinfobattlebalancediv.appendChild(userinfobattlebalancefield);


    let priceWrapper = document.createElement("div");
    priceWrapper.className = "price-wrapper";
    userinfobattlebalancefield.appendChild(priceWrapper);

    let priceImageWrapper = document.createElement("div");
    priceImageWrapper.className = "price-image-wrapper";
    priceWrapper.appendChild(priceImageWrapper);
    let priceImage = document.createElement("img");
    priceImage.src = "/images/gem.svg";
    priceImageWrapper.appendChild(priceImage);

    let priceWrapperAmount = document.createElement("span");
    priceWrapperAmount.className = "priceWrapperAmount";
    priceWrapperAmount.id = "priceWrapperAmount-BattleUser-"+i;
    priceWrapperAmount.innerHTML = "0.00";
    priceWrapper.appendChild(priceWrapperAmount);
  }



  function botuserinfocreate(x){

    userinfo = document.getElementById("userinfo-"+x);

    let userinfoactual = document.createElement("div");
    userinfoactual.className = "userinfoactual";
    userinfo.appendChild(userinfoactual);

    let userinfopfpcontainer = document.createElement("div");
    userinfopfpcontainer.className = "userinfopfpcontainer";
    userinfoactual.appendChild(userinfopfpcontainer);
    let userinfopfp = document.createElement("img");
    
    if (x == 1){
    userinfopfp.setAttribute("alt", "botpinksmall");  
    userinfopfp.setAttribute("src", "/images/botpinksmall.png");  
    }
    else if (x == 2){
    userinfopfp.setAttribute("alt", "botbluesmall");  
    userinfopfp.setAttribute("src", "/images/botlightbluesmall.png");  
    }
    else if (x == 0){
      let botcolor = botcolorgen();
    userinfopfp.setAttribute("alt", "bot"+botcolor+"small");  
    userinfopfp.setAttribute("src", "/images/bot"+botcolor+"small.png"); 
    }
    else {
    userinfopfp.setAttribute("alt", "botredsmall");  
    userinfopfp.setAttribute("src", "/images/botredsmall.png"); 
    }
    userinfopfp.setAttribute("decoding", "async");
    userinfopfp.setAttribute("loading", "lazy");
    userinfopfp.setAttribute("position", "absolute"); 
    userinfopfp.setAttribute("width", "100");
    userinfopfp.setAttribute("height", "100");
    userinfopfp.setAttribute("inset", "0px");
    userinfopfp.style.color = "transparent";
    userinfopfp.className = "userinfopfp";
    userinfopfpcontainer.appendChild(userinfopfp);

    let userinfonameandlevel = document.createElement("div");
    userinfonameandlevel.className = "userinfonameandlevel";
    userinfoactual.appendChild(userinfonameandlevel);

    let userinfonamecontainer = document.createElement("div");
    userinfonamecontainer.className = "userinfonamecontainer";
    userinfonameandlevel.appendChild(userinfonamecontainer);
    let userinfoname = document.createElement("span");
    userinfoname.className = "userinfoname";
    userinfoname.id = "userinfoname-"+x;
    if (x == 1){
    userinfoname.innerHTML = "Groovy";    
    }
    else if (x == 2){
    userinfoname.innerHTML = "Groovy Jr.";
    }
    else if (x == 0){
      let extraname = extranamegen();
      userinfoname.innerHTML = "Groovy "+extraname;
    }
    else {
    userinfoname.innerHTML = "Groovy Sr.";
    }

    userinfonamecontainer.appendChild(userinfoname);

    let botinfo = document.createElement("div");
    botinfo.className = "botinfo";
    botinfo.innerHTML = "BOT";
    userinfonameandlevel.appendChild(botinfo);


    let userinfocontainer = document.getElementById("userinfocontainer-"+x);

    let userinfobattlebalancediv = document.createElement("div");
    userinfocontainer.appendChild(userinfobattlebalancediv);

    let userinfobattlebalancefield = document.createElement("div");
    userinfobattlebalancefield.className = "userinfobattlebalancefield";
    userinfobattlebalancediv.appendChild(userinfobattlebalancefield);


    let priceWrapper = document.createElement("div");
    priceWrapper.className = "price-wrapper";
    userinfobattlebalancefield.appendChild(priceWrapper);

    let priceImageWrapper = document.createElement("div");
    priceImageWrapper.className = "price-image-wrapper";
    priceWrapper.appendChild(priceImageWrapper);
    let priceImage = document.createElement("img");
    priceImage.src = "/images/gem.svg";
    priceImageWrapper.appendChild(priceImage);

    let priceWrapperAmount = document.createElement("span");
    priceWrapperAmount.className = "priceWrapperAmount";
    priceWrapperAmount.id = "priceWrapperAmount-BattleUser-"+x;
    priceWrapperAmount.innerHTML = "0.00";
    priceWrapper.appendChild(priceWrapperAmount);
  }


function botcolorgen(){
  let rander = Math.floor(Math.random() * 8 + 1);
  if (rander == 1){
    return "darkblue";
  }
  else if (rander == 2){
    return "darkpink";
  }
  else if (rander == 3){
    return "green";
  }
  else if (rander == 4){
    return "lightgreen";
  }
  else if (rander == 5){
    return "lightpurple";
  }
  else if (rander == 6){
    return "orange";
  }
  else if (rander == 7){
    return "purple";
  }
  else if (rander == 8){
    return "blue";
  }
}


function extranamegen(){
  let rander = Math.floor(Math.random() * 10 + 1);
  if (rander == 1){
    return "Alpha";
  }
  else if (rander == 2){
    return "Beta";
  }
  else if (rander == 3){
    return "Sigma";
  }
  else if (rander == 4){
    return "Pro";
  }
  else if (rander == 5){
    return "Premium";
  }
  else if (rander == 6){
    return "Supremium";
  }
  else if (rander == 7){
    return "VIP";
  }
  else if (rander == 8){
    return "VIP+";
  }
  else if (rander == 9){
    return "Noob";
  }
  else if (rander == 10){
    return "Tryhard";
  }
  else if (rander == 11){
    return "Rager";
  }
}




function createnouserbutton(i,userinfocontainer){
  let nouserdiv = document.createElement("div");
  nouserdiv.id = "nouserdiv-"+i;
  userinfocontainer.appendChild(nouserdiv);

  let nouserbutton = document.createElement("button");
  nouserbutton.className = "nouserbutton";
  nouserbutton.id = "nouserbutton-"+i;
  nouserbutton.setAttribute("type", "button");
  nouserdiv.appendChild(nouserbutton);

  let nouserbuttoninner = document.createElement("div");
  nouserbuttoninner.className = "nouserbuttoninner";
  if (Battle1[7]){
    nouserbuttoninner.innerHTML = "Call Bot";
  }
  else {
    nouserbuttoninner.innerHTML = "Join";
  }
  nouserbutton.appendChild(nouserbuttoninner);

  nouserbutton.addEventListener("click", function () {
    if (Battle1[7]){
      callbots();
    }
    else {
      joinuser(i);
    }
  })
}

function callbots(){
  for (let x = 1; x < battleusers; x++) {
    addbot(x);
    divMaker(x);
  }
  battlestart();
}

function addbot(x){
  botuserinfocreate(x);
  document.getElementById("nouserdiv-"+x).remove();
  
}

function joinuser(i) {
  if(balance > Battle1[1]){
    balance -= Battle1[1];
    storebalance();
    balanceonload();

    userlocation = i;

    let userinfo = document.getElementById("userinfo-"+i);
    let userinfocontainer = document.getElementById("userinfocontainer-"+i);
    userinfocreate(i,userinfo, userinfocontainer);
    divMaker(i);
    document.getElementById("nouserdiv-"+i).remove();

    addextrabots();
    battlestart();
  }
  else {
    console.log("Not enough balance!!!");

    let joinbtn = document.getElementById("nouserbutton-"+i);
    notenoughbalance(joinbtn);
    let balbtn = document.getElementById("b_balance");
    notenoughbalance(balbtn);
  }
  
}


function addextrabots(){
  for (let y = 1; y < battleusers; y++) {
    if (document.getElementById("nouserdiv-"+y)){
      addbot(y);
      divMaker(y);
    }
  }
  
}


function whatcase(i){
  items = CasesData[i][5];
  currentCaseInfos = CasesData[i];
}




function divMaker(z) {
   
  for (let i = 0; i < 60; i++) {
    let rndItem = Math.floor(Math.random() * items.length);

    let spinnerInner = document.getElementById(`actualbattlespinnerinner-${z}`); 
    spinnerInner.appendChild(divCreate(i, rndItem, z));
  }


  let spinnerItem = document.getElementById("spinner-" + z + "-item-6");
  spinnerItem.querySelector(".item").classList.add("active");
  spinnerItem.querySelector(".itemImageContainer").classList.add("active");

}

function redivMaker(z) {
   
  
  
  for (let i = 0; i < 60; i++) {
    let rndItem = Math.floor(Math.random() * items.length);

    let spinnerInner = document.getElementById(`actualbattlespinnerinner-${z}`);  
    spinnerInner.appendChild(divCreate(i, rndItem, z));
  }


  let spinnerItem = document.getElementById("spinner-" + z + "-item-6");
    spinnerItem.querySelector(".item").classList.add("active");
    spinnerItem.querySelector(".itemImageContainer").classList.add("active");


}

function divCreate(i, rndItem, spinner) {

  let divElement = document.createElement("div");
  divElement.id = "spinner-" + spinner + "-item-" + i;
  divElement.className = "itemcontainer";
  divElement.style.transform = "none";

  let item = document.createElement("div");
  item.className = "item";
  divElement.appendChild(item);

  let itemImageContainer = document.createElement("div");
  itemImageContainer.className = "itemImageContainer";
  item.appendChild(itemImageContainer);

  let itemImage = document.createElement("img");
  itemImage.alt = items[rndItem][0];
  itemImage.src = items[rndItem][3];
  itemImage.loading = "lazy";
  itemImage.className = "itemImage";
  itemImage.style.position = "absolute";
  itemImage.style.height = "100%";
  itemImage.style.width = "100%";
  itemImage.style.inset = "0px";
  itemImage.style.color = "transparent";
  itemImageContainer.appendChild(itemImage);


  let itemBackground = document.createElement("div");
  itemBackground.style.filter = items[rndItem][4][1];
  itemBackground.draggable= "false";
  itemBackground.className = "itemBackground";
  item.appendChild(itemBackground);

  let itemBackgroundImage = document.createElement("img");
  itemBackgroundImage.alt = items[rndItem][0];
  itemBackgroundImage.srcset = items[rndItem][4][0] + " 1x", items[rndItem][4][0] + " 2x";
  itemBackgroundImage.src = items[rndItem][4][0];
  itemBackgroundImage.width = "64";
  itemBackgroundImage.height = "64";
  itemBackgroundImage.className = "itemBackgroundImage";
  itemBackgroundImage.loading = "lazy";
  itemBackgroundImage.style.color = "transparent";
  itemBackground.appendChild(itemBackgroundImage);
return divElement;
}


/*
function battlestart(){
  for (let y = 0; y < Battle1[2]; y++){

      let anNum = rndAnimation();

      for (let i = 0; i < battleusers; i++) {
      openCase(i, anNum);
      }

      setTimeout(function() {

      spanElementsClickable = true;
  
      console.log("!!!!The displayed balance is:" + balance.toFixed(2))
      document.getElementById("balance-amount").innerHTML = balance.toFixed(2) + "€";
      spinsoundwin();
      blinkbalancebutton()
      }, 7750);

  }
}*/















/*
function battlestart() {
  let y = 0;
  const interval = setInterval(function() {
    if (y < Battle1[2]) {
      let anNum = rndAnimation();

      if (Battle1[6][currentCaseType][1] === currentCase) {
        currentCaseType+=1;
        whatcase(Battle1[6][currentCaseType][0]);
        currentCase = 1;
      }
      else {
      currentCase+=1;  
      }
    
      for (let i = 0; i < battleusers; i++) {
          openCase(i, anNum);
        }

      casePreviewFunction();
      y++;

      currentRoundUpdate();
      currentRound += 1;

      currentDrop += 1;
      console.log("CurrentDropMehr: "+currentDrop);

      let steps = 100/Battle1[2];
      console.log("Steps :" + steps);
      previewcasesspinner -= steps;

    } else {
      clearInterval(interval);
      afterBattle();
    }

  }, 9000);
}
*/

function battlestart() {

for (let y = 0; y < Battle1[2]; y++) {
    runBattleLogic(y);  
    }  
  
  
  
  function runBattleLogic(y) {
    
      if (Battle1[6][currentCaseType][1] === currentCase) {
        currentCaseType += 1;
        whatcase(Battle1[6][currentCaseType][0]);
        currentCase = 1;
      } else {
        currentCase += 1;
      }

      for (let i = 0; i < battleusers; i++) {
        openCase(i);
      }

      if (y+1 == Battle1[2]) {
      
        winnermode();
        console.log(battlewinner+" =battleWinner");

        if (battlewinner == userlocation) {
        payuserreal();  
        }
        else if (Battle1[3] == "2v2"){
          if (userlocation == 0 | userlocation == 1 && battlewinner == 0) {
            payuserreal();
          }
          else if (userlocation == 2 | userlocation == 3 && battlewinner == 1){
            payuserreal();
          }
        }
        else if (Battle1[4] == "group" && Battle1[3] !== "2v2"){
          payuserreal();
        }
        

        removebattlefromlocalstorage();

        currentRound += 1;
        currentRound = 1;
        currentCase = 0;
        currentCaseType = 0;
        //battlebalances[0] = 0.00;
        //battlebalances[1] = 0.00;
        //battlebalances[2] = 0.00;
        //battlebalances[3] = 0.00;
        whatcase(Battle1[6][0][0]);

        let x = 0;
        let interval;

        setTimeout(function() {
        runBattleVisual();  
        startInterval();
        }, 1500);

        function runBattleVisual() {
          if (x < Battle1[2]) {
            let anNum = rndAnimation();
    
            if (Battle1[6][currentCaseType][1] === currentCase) {
              currentCaseType += 1;
              whatcase(Battle1[6][currentCaseType][0]);
              currentCase = 1;
            }  else {
              currentCase += 1;
            }
    
            for (let i = 0; i < battleusers; i++) {
              openCaseVisual(i, anNum);
            }
    
            casePreviewFunction();
            x++;
    
            currentRoundUpdate();
            currentRound += 1;
    
            currentDrop += 1;
    
            let steps = 100 / Battle1[2];
            console.log("Steps :" + steps);
            previewcasesspinner -= steps;
          } else {
            clearInterval(interval);
            afterBattle();
          }
        }
        function startInterval() {
          console.log("Interval");
          interval = setInterval(runBattleVisual, 9000);
        }

        function afterBattle(){
          battlefinished();
          balanceonload();
        }

    }
  }
}

function winnermode(){
  if (Battle1[4] == "normal"){
    winnermodenormal();
  }
  else if (Battle1[4] == "group"){
    winnermodegroup();
  }
  else if (Battle1[4] == "terminal"){
    winnermodeterminal();
  }
}

function winnermodenormal(){
  if (Battle1[5] == "most"){
    if (Battle1[3] == "2v2"){
      choosewinnernormal2v2()
    }
    else {
      choosewinnernormal();  
    } 
  }
  else {
    if (Battle1[3] == "2v2"){
      choosewinnernormalcrazy2v2();
    }
    else {
      choosewinnernormalcrazy();  
    }
    
  }
}

function winnermodegroup(){
 if (Battle1[3] == "2v2"){
  choosewinnergroup2v2();
 }
 else {
  choosewinnergroup();
 }
}

function winnermodeterminal(){
  if (Battle1[5] == "most"){
    if (Battle1[3] == "2v2"){
      choosewinnerterminal2v2();
    }
    else {
      choosewinnerterminal();
    }
  }
  else {
    if (Battle1[3] == "2v2"){
      choosewinnerterminalcrazy2v2();
    }
    else {
      choosewinnerterminalcrazy();
    }

  }
}


function casePreviewFunction(){
  activatebattlepreviewcase(); 
  if (currentRound !== Battle1[2]){
       
  previewcasespinnerupdate();  
  }
  updatecurrentcaseinfos();
}

function currentRoundUpdate(){
  document.getElementById("roundcontainercurrentRound").innerHTML = currentRound;
}


function battlefinished(){
  if (Battle1[3] == "2v2"){
    if (battlewinner === 0){
      winscreen(0);
      winscreen(1);
      lossscreen(2);
      lossscreen(3);
    }
    else {
      winscreen(2);
      winscreen(3);
      lossscreen(0);
      lossscreen(1);
    }
  }
  else if (Battle1[4] == "group"){
    for (let c = 0; c < battleusers; c++) {
      winscreen(c);
    }
  }
  else {
    for (let i = 0; i < battleusers; i++) {
      if (i === battlewinner){
        winscreen(i);
      }
      else {
        lossscreen(i);
      }
  
      }
  }
  
    battlewinnersound();

    recreatebattlebutton();
    removecasepreview();
    addreplaybutton();
  }


  function addreplaybutton(){
    let replaycontainer = document.getElementById("roundcontainer");
    replaycontainer.innerHTML = "";

    let replayinner = document.createElement("div");
    replayinner.className = "replayinner";
    replayinner.innerHTML = "Replay";
    replaycontainer.appendChild(replayinner);

    //replayinner.addEventListener("click", function() {

   //});
  }




  function removecasepreview(){
    document.getElementById("runbattlecasesspinner").remove();
  }

  function recreatebattlebutton(){
    let recreatebuttoncontainer = document.getElementById("runbattlecaseinfos");
    recreatebuttoncontainer.innerHTML = "";
    recreatebuttoncontainer.className = "recreatebuttoncontainer";

    let recreatebutton = document.createElement("button");
    recreatebutton.className = "recreatebutton";
    recreatebutton.id = "recreatebutton";
    recreatebutton.setAttribute("type", "button");
    recreatebuttoncontainer.appendChild(recreatebutton);

    let recreatebuttoninnercontainer = document.createElement("div");
    recreatebuttoninnercontainer.className = "recreatebuttoninnercontainer";
    recreatebutton.appendChild(recreatebuttoninnercontainer);

    let recreatebuttoninner = document.createElement("div");
    recreatebuttoninner.className = "recreatebuttoninner";
    recreatebuttoninner.innerHTML = "Recreate";
    recreatebuttoninnercontainer.appendChild(recreatebuttoninner);

    let pricewinnerWrapper = document.createElement("div");
    pricewinnerWrapper.className = "battlecostpricewrapper";
    recreatebuttoninner.appendChild(pricewinnerWrapper);
  
    let priceImageWrapper = document.createElement("div");
    priceImageWrapper.className = "battlecostimagewrapper";
    pricewinnerWrapper.appendChild(priceImageWrapper);
    let priceImage = document.createElement("img");
    priceImage.src = "/images/gem.svg";
    priceImageWrapper.appendChild(priceImage);
  

    let battleCost = 0;
    battleCost = Battle1[1];

    let priceWrapperAmount = document.createElement("span");
    priceWrapperAmount.className = "battlecostpricerecreate";
    priceWrapperAmount.innerHTML = battleCost.toFixed(2);
    pricewinnerWrapper.appendChild(priceWrapperAmount);


    recreatebutton.addEventListener("click", function() {
      if (localStorage.getItem("caseBattle0") == "none") {
        if (balance > Battle1[1]){
          Battle1[7] = true;
          storebattleuser();
          balance-= Battle1[1];
          userwager += Battle[1];
          storewager();
          storebalance();
          window.location.href = "/Battles.html";  
        }
        else {
          notenoughbalance(recreatebutton);

          let balbtn = document.getElementById("b_balance");
          notenoughbalance(balbtn);

          let balinfotext = document.getElementById("balinfo");
          balinfotext.style.display = "block";
          setTimeout(function() {
            balinfotext.style.display = "none";
          }, 2000);
        }
        
      }
      else {
        console.log("You already have a created Battle!!!");
        notenoughbalance(recreatebutton);
      }
      
    });

  }


  function notenoughbalance(button) {
    button.classList.add("blink-shake-button");
  
    setTimeout(function() {
      button.classList.remove("blink-shake-button");
    }, 2000);
  
    buttonDelayReal(button,2000)
  
  }

  function buttonDelayReal(button,time) {
    button.disabled = true;
    setTimeout(function () {
      button.disabled = false;
    }, time);
  }


function winscreen(winnerlocation){
  document.getElementById("actualbattlespinnercontainer-"+winnerlocation).remove();
  let fieldlocation = document.getElementById("actualbattlespinner-"+winnerlocation);

  let fieldbackground = document.createElement("div");
  fieldbackground.className = "fieldbackgroundWin";
  fieldlocation.appendChild(fieldbackground);

  let fieldwinnertext = document.createElement("div");
  fieldwinnertext.className = "fieldwinnertext";
  fieldwinnertext.innerHTML = "winner";
  fieldbackground.appendChild(fieldwinnertext);

  let pricewinnerWrapper = document.createElement("div");
  pricewinnerWrapper.className = "price-winner-wrapper";
  fieldbackground.appendChild(pricewinnerWrapper);

  let priceImageWrapper = document.createElement("div");
  priceImageWrapper.className = "price-image-wrapper";
  pricewinnerWrapper.appendChild(priceImageWrapper);
  let priceImage = document.createElement("img");
  priceImage.src = "/images/gem.svg";
  priceImageWrapper.appendChild(priceImage);

  let priceWrapperAmount = document.createElement("span");
  priceWrapperAmount.className = "priceWrapperAmount";
  priceWrapperAmount.innerHTML = battlebalances[winnerlocation].toFixed(2);
  pricewinnerWrapper.appendChild(priceWrapperAmount);
}


function lossscreen(i){
  document.getElementById("actualbattlespinnercontainer-"+i).remove();
  let fieldlocation = document.getElementById("actualbattlespinner-"+i);

  let fieldbackground = document.createElement("div");
  fieldbackground.className = "fieldbackgroundLoss";
  fieldlocation.appendChild(fieldbackground);

  let fieldlosstext = document.createElement("div");
  fieldlosstext.className = "fieldlosstext";
  fieldlosstext.innerHTML = "loss";
  fieldbackground.appendChild(fieldlosstext);

  let pricelossWrapper = document.createElement("div");
  pricelossWrapper.className = "price-loss-wrapper";
  fieldbackground.appendChild(pricelossWrapper);

  let priceImageWrapper = document.createElement("div");
  priceImageWrapper.className = "price-image-wrapper";
  pricelossWrapper.appendChild(priceImageWrapper);
  let priceImage = document.createElement("img");
  priceImage.src = "/images/gem.svg";
  priceImageWrapper.appendChild(priceImage);

  let priceWrapperAmount = document.createElement("span");
  priceWrapperAmount.className = "priceWrapperAmount";
  priceWrapperAmount.innerHTML = "0.00";
  pricelossWrapper.appendChild(priceWrapperAmount);
}





function payuserreal() {
  balance += battlebalances[userlocation];
  storebalance();
}



function choosewinnernormal() {
  const numParticipants = battlebalances.length;

  if (Battle1[3] === "1v1") {
    if (battlebalances[0] > battlebalances[1]) {
      battlewinner = 0;
    } else if (battlebalances[1] > battlebalances[0]) {
      battlewinner = 1;
    } else {
      battlewinner = raffleWinner([0, 1]);
    }
    battlebalances[battlewinner] = battlebalances[0] + battlebalances[1];


  } else if (Battle1[3] === "1v1v1") {
    const maxBalance = Math.max(...battlebalances);

    if (battlebalances.indexOf(maxBalance) === battlebalances.lastIndexOf(maxBalance)) {
      
      battlewinner = battlebalances.indexOf(maxBalance);
    } else {
      
      const maxBalanceIndexes = battlebalances.reduce((acc, balance, index) => {
        if (balance === maxBalance) {
          acc.push(index);
        }
        return acc;
      }, []);

      battlewinner = raffleWinner(maxBalanceIndexes);
    }

    battlebalances[battlewinner] = battlebalances[0]+battlebalances[1]+battlebalances[2];


  } else if (Battle1[3] === "1v1v1v1") {
    const maxBalance = Math.max(...battlebalances);

    if (battlebalances.indexOf(maxBalance) === battlebalances.lastIndexOf(maxBalance)) {
      
      battlewinner = battlebalances.indexOf(maxBalance);
    } else {
      
      const maxBalanceIndexes = battlebalances.reduce((acc, balance, index) => {
        if (balance === maxBalance) {
          acc.push(index);
        }
        return acc;
      }, []);
  
      battlewinner = raffleWinner(maxBalanceIndexes);
    }

    battlebalances[battlewinner] = battlebalances[0]+battlebalances[1]+battlebalances[2]+battlebalances[3];


  } else {
    console.log("Unbekannte Battle-Konfiguration");
  }
}


function choosewinnernormalcrazy() {
  const numParticipants = battlebalances.length;

  if (Battle1[3] === "1v1") {
    if (battlebalances[0] < battlebalances[1]) {
      battlewinner = 0;
    } else if (battlebalances[1] < battlebalances[0]) {
      battlewinner = 1;
    } else {
      battlewinner = raffleWinner([0, 1]);
    }
    battlebalances[battlewinner] = battlebalances[0] + battlebalances[1];
  } else if (Battle1[3] === "1v1v1") {
    const minBalance = Math.min(...battlebalances);

    if (battlebalances.indexOf(minBalance) === battlebalances.lastIndexOf(minBalance)) {
      battlewinner = battlebalances.indexOf(minBalance);
    } else {
      const minBalanceIndexes = battlebalances.reduce((acc, balance, index) => {
        if (balance === minBalance) {
          acc.push(index);
        }
        return acc;
      }, []);

      battlewinner = raffleWinner(minBalanceIndexes);
    }

    battlebalances[battlewinner] = battlebalances.reduce((sum, balance) => sum + balance, 0);
  } else if (Battle1[3] === "1v1v1v1") {
    const minBalance = Math.min(...battlebalances);

    if (battlebalances.indexOf(minBalance) === battlebalances.lastIndexOf(minBalance)) {
      battlewinner = battlebalances.indexOf(minBalance);
    } else {
      const minBalanceIndexes = battlebalances.reduce((acc, balance, index) => {
        if (balance === minBalance) {
          acc.push(index);
        }
        return acc;
      }, []);

      battlewinner = raffleWinner(minBalanceIndexes);
    }

    battlebalances[battlewinner] = battlebalances.reduce((sum, balance) => sum + balance, 0);
  } else {
    console.log("Unbekannte Battle-Konfiguration");
  }
}



function choosewinnernormal2v2() {
  let totalBalanceTeam0 = battlebalances[0] + battlebalances[1];
  let totalBalanceTeam1 = battlebalances[2] + battlebalances[3];
  let sharedBalance = (totalBalanceTeam0 + totalBalanceTeam1) / 2;

  if (totalBalanceTeam0 > totalBalanceTeam1) {
    battlewinner = 0;
    
    battlebalances[0] = sharedBalance;
    battlebalances[1] = sharedBalance;
  } else if (totalBalanceTeam1 > totalBalanceTeam0) {
    battlewinner = 1;
    battlebalances[2] = sharedBalance;
    battlebalances[3] = sharedBalance;
  } else {
    battlewinner = raffleWinner([0, 1]);
    if (battlewinner === 0) {
      battlebalances[0] = sharedBalance;
      battlebalances[1] = sharedBalance;
    } else {
      battlebalances[2] = sharedBalance;
      battlebalances[3] = sharedBalance;
    }
  }
}


function choosewinnernormalcrazy2v2() {
  let totalBalanceTeam0 = battlebalances[0] + battlebalances[1];
  let totalBalanceTeam1 = battlebalances[2] + battlebalances[3];
  let sharedBalance = (totalBalanceTeam0 + totalBalanceTeam1) / 2;

  if (totalBalanceTeam0 < totalBalanceTeam1) {
    battlewinner = 0;
    
    battlebalances[0] = sharedBalance;
    battlebalances[1] = sharedBalance;
  } else if (totalBalanceTeam1 < totalBalanceTeam0) {
    battlewinner = 1;
    battlebalances[2] = sharedBalance;
    battlebalances[3] = sharedBalance;
  } else {
    battlewinner = raffleWinner([0, 1]);
    if (battlewinner === 0) {
      battlebalances[0] = sharedBalance;
      battlebalances[1] = sharedBalance;
    } else {
      battlebalances[2] = sharedBalance;
      battlebalances[3] = sharedBalance;
    }
  }
}


function choosewinnergroup(){
  let totalbalance = battlebalances[0]+battlebalances[1]+battlebalances[2]+battlebalances[3];
  if (Battle1[3] == "1v1"){
    let sharedbalance = totalbalance/2;
    battlebalances[0] = sharedbalance;
    battlebalances[1] = sharedbalance;
  }
  else if (Battle1[3] == "1v1v1"){
    let sharedbalance = totalbalance/3;
    battlebalances[0] = sharedbalance;
    battlebalances[1] = sharedbalance;
    battlebalances[2] = sharedbalance;
  }
  else {
    let sharedbalance = totalbalance/4;
    battlebalances[0] = sharedbalance;
    battlebalances[1] = sharedbalance;
    battlebalances[2] = sharedbalance;
    battlebalances[3] = sharedbalance;
  }
}

function choosewinnergroup2v2() {
  let totalBalanceTeam0 = battlebalances[0] + battlebalances[1];
  let totalBalanceTeam1 = battlebalances[2] + battlebalances[3];
  let sharedBalance = (totalBalanceTeam0 + totalBalanceTeam1) / 2;

  if (totalBalanceTeam0 > totalBalanceTeam1) {
    battlewinner = 0;
    
    battlebalances[0] = sharedBalance;
    battlebalances[1] = sharedBalance;
  } else if (totalBalanceTeam1 > totalBalanceTeam0) {
    battlewinner = 1;
    battlebalances[2] = sharedBalance;
    battlebalances[3] = sharedBalance;
  } else {
    battlewinner = raffleWinner([0, 1]);
    if (battlewinner === 0) {
      battlebalances[0] = sharedBalance;
      battlebalances[1] = sharedBalance;
    } else {
      battlebalances[2] = sharedBalance;
      battlebalances[3] = sharedBalance;
    }
  }
}



function choosewinnerterminal() {
  if (Battle1[3] === "1v1") {
    if (items[lastdrops[0]][1] > items[lastdrops[1]][1]) {
      battlewinner = 0;
    } else if (items[lastdrops[1]][1] > items[lastdrops[0]][1]) {
      battlewinner = 1;
    } else {
      battlewinner = raffleWinner([0, 1]);
    }
    battlebalances[battlewinner] = battlebalances[0] + battlebalances[1];
  } else if (Battle1[3] === "1v1v1") {
    const maxBalanceValue = Math.max(
      items[lastdrops[0]][1],
      items[lastdrops[1]][1],
      items[lastdrops[2]][1]
    );

    const maxBalanceIndexes = [0, 1, 2].filter(index => items[lastdrops[index]][1] === maxBalanceValue);

    if (maxBalanceIndexes.length === 1) {
      battlewinner = maxBalanceIndexes[0];
    } else {
      battlewinner = raffleWinner(maxBalanceIndexes);
    }

    battlebalances[battlewinner] = battlebalances[0] + battlebalances[1] + battlebalances[2];
  } else if (Battle1[3] === "1v1v1v1") {
    const maxBalanceValue = Math.max(
      items[lastdrops[0]][1],
      items[lastdrops[1]][1],
      items[lastdrops[2]][1],
      items[lastdrops[3]][1]
    );

    const maxBalanceIndexes = [0, 1, 2, 3].filter(index => items[lastdrops[index]][1] === maxBalanceValue);

    if (maxBalanceIndexes.length === 1) {
      battlewinner = maxBalanceIndexes[0];
    } else {
      battlewinner = raffleWinner(maxBalanceIndexes);
    }

    battlebalances[battlewinner] = battlebalances[0] + battlebalances[1] + battlebalances[2] + battlebalances[3];
  } else {
    console.log("Unbekannte Battle-Konfiguration");
  }
}


function choosewinnerterminalcrazy() {
  if (Battle1[3] === "1v1") {
    if (items[lastdrops[0]][1] < items[lastdrops[1]][1]) {
      battlewinner = 0;
    } else if (items[lastdrops[1]][1] < items[lastdrops[0]][1]) {
      battlewinner = 1;
    } else {
      battlewinner = raffleWinner([0, 1]);
    }
    battlebalances[battlewinner] = battlebalances[0] + battlebalances[1];
  } else if (Battle1[3] === "1v1v1") {
    const minBalanceValue = Math.min(
      items[lastdrops[0]][1],
      items[lastdrops[1]][1],
      items[lastdrops[2]][1]
    );

    const minBalanceIndexes = [0, 1, 2].filter(index => items[lastdrops[index]][1] === minBalanceValue);

    if (minBalanceIndexes.length === 1) {
      battlewinner = minBalanceIndexes[0];
    } else {
      battlewinner = raffleWinner(minBalanceIndexes);
    }

    battlebalances[battlewinner] = battlebalances[0] + battlebalances[1] + battlebalances[2];
  } else if (Battle1[3] === "1v1v1v1") {
    const minBalanceValue = Math.min(
      items[lastdrops[0]][1],
      items[lastdrops[1]][1],
      items[lastdrops[2]][1],
      items[lastdrops[3]][1]
    );

    const minBalanceIndexes = [0, 1, 2, 3].filter(index => items[lastdrops[index]][1] === minBalanceValue);

    if (minBalanceIndexes.length === 1) {
      battlewinner = minBalanceIndexes[0];
    } else {
      battlewinner = raffleWinner(minBalanceIndexes);
    }

    battlebalances[battlewinner] = battlebalances[0] + battlebalances[1] + battlebalances[2] + battlebalances[3];
  } else {
    console.log("Unbekannte Battle-Konfiguration");
  }
}



function choosewinnerterminal2v2(){
  console.log("Terminal2v2 triggered");
  let totalbalance = battlebalances[0]+battlebalances[1]+battlebalances[2]+battlebalances[3];
  let sharedbalance = totalbalance/2;

  if(items[lastdrops[0]][1]+items[lastdrops[1]][1] > items[lastdrops[2]][1]+items[lastdrops[3]][1]){
    battlewinner = 0;
    battlebalances[0] = sharedbalance;
    battlebalances[1] = sharedbalance;
  }
  else if (items[lastdrops[2]][1]+items[lastdrops[3]][1] > items[lastdrops[0]][1]+items[lastdrops[1]][1]){
    battlewinner = 1;
    battlebalances[2] = sharedbalance;
    battlebalances[3] = sharedbalance;
  }
  else {
    console.log("lastdrop0 = "+ lastdrops[0]+",lastdrop1 = "+ lastdrops[1]+",lastdrop2 = "+ lastdrops[2]+",lastdrop3 = "+ lastdrops[3]);
    console.log("Team1= " + items[lastdrops[0]][1]+items[lastdrops[1]][1] +", Team 2= "+items[lastdrops[2]][1]+items[lastdrops[3]][1]);
    battlewinner = raffleWinner([0, 1]);
    if (battlewinner === 0){
      battlebalances[0] = sharedbalance;
      battlebalances[1] = sharedbalance;
    }
    else {
      battlebalances[2] = sharedbalance;
      battlebalances[3] = sharedbalance;
    } 

  }

}


function choosewinnerterminalcrazy2v2(){
  console.log("Terminalcrazy2v2 triggered");
  let totalbalance = battlebalances[0]+battlebalances[1]+battlebalances[2]+battlebalances[3];
  let sharedbalance = totalbalance/2;

  if(items[lastdrops[0]][1]+items[lastdrops[1]][1] < items[lastdrops[2]][1]+items[lastdrops[3]][1]){
    battlewinner = 0;
    battlebalances[0] = sharedbalance;
    battlebalances[1] = sharedbalance;
  }
  else if (items[lastdrops[2]][1]+items[lastdrops[3]][1] < items[lastdrops[0]][1]+items[lastdrops[1]][1]){
    battlewinner = 1;
    battlebalances[2] = sharedbalance;
    battlebalances[3] = sharedbalance;
  }
  else {
    battlewinner = raffleWinner([0, 1]);
    if (battlewinner === 0){
      battlebalances[0] = sharedbalance;
      battlebalances[1] = sharedbalance;
      battlebalances[2] = 0.00;
      battlebalances[3] = 0.00;
    }
    else {
      battlebalances[2] = sharedbalance;
      battlebalances[3] = sharedbalance;
      battlebalances[0] = 0.00;
      battlebalances[1] = 0.00;
    } 

  }

}











function raffleWinner(participants) {
  let thelength = participants.length;
  let index = Math.floor(Math.random() * thelength);
  console.log(participants);
  console.log(participants[index]);
  return participants[index];
  
}



function rndAnimation() {
  let rndAnNum = Math.floor(Math.random() * 4);
  console.log("DieRnd Animation: " + rndAnNum);

  return rndAnNum;
}

function openCase(casenumber) {


  let ergebnis = Math.floor(Math.random() * 100 + 1);
  let next = 0;

  for (let i = 0; i < items.length; i++) {
    if (ergebnis <= items[i][2] + next) {
        battlebalances[casenumber] += items[i][1];
        
        console.log("New battlebalance : " + battlebalances[casenumber].toFixed(2));
        console.log("You've got: " + items[i][0]);

        battlewinners[casenumber].push(i);
        lastdrops[casenumber] = battlewinners[casenumber][currentRound-1];

      break;
    } else {
      console.log("Not");
      next += items[i][2];
    }
  }
}

function openCaseVisual(casenumber, anNum) {


  document.getElementById("actualbattlespinnerinner-"+casenumber).style.transform = "translate"+ spinneraxis +"(-10.75%)";
  document.getElementById("actualbattlespinnerinner-"+casenumber).style.transition = "transform 0s ease 0s";

  

  if (notfirstspin) {
      // Clear the "spinnerInner" container
      document.getElementById("actualbattlespinnerinner-"+casenumber).innerHTML = "";
    } else {
      notfirstspin = true;
    }


if (!PointersThere) {
  pointerCreate();
  PointersThere = true;
}

      battlebalancesvisual[casenumber] += items[battlewinners[casenumber][currentRound-1]][1];
        
      
      console.log("New battlebalance : " + battlebalancesvisual[casenumber].toFixed(2));

      winner = battlewinners[casenumber][currentRound-1];

    
      if (Divver) {
        redivMaker(casenumber);
      }
      else {
        Divver=true;
      }
      
      //countDivElements(casenumber);

      caseAnimation(winner,casenumber, anNum);
      //itemActivator(casenumber);
}

function caseAnimation(winner,casenumber, anNum){
    
  winItemCreate(winner,casenumber, anNum);




//let starter = 7;
let starterObject = { value: 7 };



let animationInterval = setInterval(function() {

  if (spinneraxis === "x") {
    itemActivatory(casenumber,starterObject);
  }
  else {
    itemActivatorx(casenumber,starterObject);   
  }
},4);

  

  setTimeout(function() {
      
    //spinnersound();

     // const timeInterval = 7.5 / arrayCountNumber;
      //document.getElementById("spinnerInner").style.transition = "transform 7.5s cubic-bezier(0.1, 0, 0.2, 1) 0s";
    
      document.getElementById("actualbattlespinnerinner-"+casenumber).style.transform = "translate"+spinneraxis+"("+Animations[anNum][1]+")";
      document.getElementById("actualbattlespinnerinner-"+casenumber).style.transition = "transform 7.5s cubic-bezier(0.1, 0, 0.2, 1) 0s";
      //activateGoldItems(arrayCountNumber, spinReach,winner);
      
      
      setTimeout(function() {
        
        document.getElementById("actualbattlespinnerinner-"+casenumber).style.transform = "translate"+spinneraxis+"("+Animations[anNum][2]+")";
        document.getElementById("actualbattlespinnerinner-"+casenumber).style.transition = "transform 0.25s cubic-bezier(0.1, 0, 0.2, 1) 0s";
        
        clearInterval(animationInterval);
      }, 7500);

    }, 250);

    activateWinner(casenumber, winner, anNum);
    

}

function updatebattlebalance(casenumber) {
  document.getElementById("priceWrapperAmount-BattleUser-"+casenumber).innerHTML = battlebalancesvisual[casenumber].toFixed(2);
}





function winItemCreate(winner,casenumber,anNum) {
  // Änderungen am item-Element
  let itemElement = document.getElementById("spinner-" + casenumber + "-item-" + Animations[anNum][0]);
  //itemElement.className = "item win";

  // Änderungen am itemImageContainer-Element
  let itemImageContainer = itemElement.querySelector(".itemImageContainer");
  //itemImageContainer.className = "itemImageContainerWin";

  // Änderungen am itemImage-Element
  let itemImage = itemImageContainer.querySelector(".itemImage");
  itemImage.alt = items[winner][0];
  itemImage.src = items[winner][3];

  // Änderungen am itemBackground-Element
  let itemBackground = itemElement.querySelector(".itemBackground");
  itemBackground.style.filter = items[winner][4][1];

  let itemBackgroundImage = itemElement.querySelector(".itemBackgroundImage");
  itemBackgroundImage.alt = items[winner][0];
  itemBackgroundImage.srcset = items[winner][4][0] + " 1x", items[winner][4][0] + " 2x";
  itemBackgroundImage.src = items[winner][4][0];
}





function activateWinner(casenumber, winner, anNum) {

  setTimeout(function() {

    let itemElement = document.getElementById("spinner-" + casenumber + "-item-" + Animations[anNum][0]);
    let itemContainer = itemElement.querySelector(".item");
    itemContainer.className = "itemWin";
    let itemImageContainer = itemElement.querySelector(".itemImageContainer");
    itemImageContainer.className = "itemImageContainerWin";


    let itemWinInfo = document.createElement("div");
    itemWinInfo.className = "itemWinInfo";
    itemWinInfo.style.opacity = "1";
    itemWinInfo.style.transform = "none";
    itemElement.appendChild(itemWinInfo);


    let itemWinInfoContainer = document.createElement("div");
    itemWinInfoContainer.className = "itemWinInfoContainer";
    itemWinInfo.appendChild(itemWinInfoContainer);


    let itemWinNameContainer = document.createElement("div");
    itemWinNameContainer.className = "itemWinNameContainer";
    itemWinInfoContainer.appendChild(itemWinNameContainer);

    let itemWinName = document.createElement("div");
    itemWinName.className = "itemWinName";
    itemWinNameContainer.appendChild(itemWinName);
    let itemWinNameText = document.createTextNode(items[winner][0]);
    itemWinName.appendChild(itemWinNameText);




    let itemWinprice = document.createElement("span");
    itemWinprice.className = "price";
    itemWinInfoContainer.appendChild(itemWinprice);

    let itemWinpriceWrapper = document.createElement("div");
    itemWinpriceWrapper.className = "price-wrapper";
    itemWinprice.appendChild(itemWinpriceWrapper);   

    let itemWinimageWrapper = document.createElement("div");
    itemWinimageWrapper.className = "price-image-wrapper";
    itemWinpriceWrapper.appendChild(itemWinimageWrapper);

    let itemWinImage = document.createElement("img");
    itemWinImage.src = "images/gem.svg";
    itemWinimageWrapper.appendChild(itemWinImage);
          
    let itemWinpriceText = document.createTextNode(items[winner][1]);
    itemWinpriceWrapper.appendChild(itemWinpriceText);
   

    updatebattlebalance(casenumber);
    adddrop(winner, casenumber);
    //activatebattlepreviewcase(); 
   // if (currentRound !== Battle1[2]){
     
  //  previewcasespinnerupdate();  
  //  }
    //updatecurrentcaseinfos();

    initializePointers();

    if (casenumber <1){
      spinsoundwin();
    }
   //document.getElementById("pointers").innerHTML = "";
  //PointersThere = false;     


  }, 7750);
  
}


function previewcasespinnerupdate(){
  document.getElementById("runbattlecasesspinner").style.transform = "translateX("+previewcasesspinner+"%)";
}




function adddrop(winner, casenumber){
  console.log("DropAbouttoCreate ="+currentDrop);
  let battledropcontainer = document.getElementById("actualbattle-"+casenumber+"-dropplaceholder-"+(currentDrop-1));
  battledropcontainer.className = "drop "+ items[winner][4][2];


  let dropImages = document.createElement("div");
  dropImages.className = "dropImages";
  battledropcontainer.appendChild(dropImages);


  let itemImageContainer = document.createElement("div");
  itemImageContainer.className = "dropImageContainer";
  dropImages.appendChild(itemImageContainer);

  let itemImage = document.createElement("img");
  itemImage.alt = items[winner][0];
  itemImage.src = items[winner][3];
  itemImage.loading = "lazy";
  itemImage.className = "dropImage";
  itemImage.style.position = "absolute";
  itemImage.style.height = "100%";
  itemImage.style.width = "100%";
  itemImage.style.inset = "0px";
  itemImage.style.color = "transparent";
  itemImageContainer.appendChild(itemImage);


  let itemBackground = document.createElement("div");
  itemBackground.style.filter = items[winner][4][1];
  itemBackground.draggable= "false";
  itemBackground.className = "dropBackground";
  dropImages.appendChild(itemBackground);

  let itemBackgroundImage = document.createElement("img");
  itemBackgroundImage.alt = items[winner][0];
  itemBackgroundImage.srcset = items[winner][4][0] + " 1x", items[winner][4][0] + " 2x";
  itemBackgroundImage.src = items[winner][4][0];
  itemBackgroundImage.width = "64";
  itemBackgroundImage.height = "64";
  itemBackgroundImage.className = "dropBackgroundImage";
  itemBackgroundImage.loading = "lazy";
  itemBackgroundImage.style.color = "transparent";
  itemBackground.appendChild(itemBackgroundImage);





  let dropInformations = document.createElement("div");
  dropInformations.className = "dropInformations";
  battledropcontainer.appendChild(dropInformations);

  let dropInformationsNameContainer = document.createElement("div");
  dropInformationsNameContainer.className = "dropInformationsNameContainer";
      dropInformations.appendChild(dropInformationsNameContainer);

      let dropInformationsNameSpace = document.createElement("div");
      dropInformationsNameSpace.className = "dropInformationsNameSpace";
      dropInformationsNameContainer.appendChild(dropInformationsNameSpace);

      let dropInformationsName = document.createElement("div");
      dropInformationsName.className = "dropInformationsName";
      dropInformationsNameContainer.appendChild(dropInformationsName);
      let dropInformationsNameText = document.createTextNode(items[winner][0]);
      dropInformationsName.appendChild(dropInformationsNameText);




      let dropInformationsprice = document.createElement("span");
      dropInformationsprice.className = "price";
      dropInformations.appendChild(dropInformationsprice);

      let dropInformationspricepriceWrapper = document.createElement("div");
      dropInformationspricepriceWrapper.className = "price-wrapper";
      dropInformationsprice.appendChild(dropInformationspricepriceWrapper);   

      let dropInformationsimageWrapper = document.createElement("div");
      dropInformationsimageWrapper.className = "price-image-wrapper";
      dropInformationspricepriceWrapper.appendChild(dropInformationsimageWrapper);

      let dropInformationsImage = document.createElement("img");
      dropInformationsImage.src = "images/gem.svg";
      dropInformationsimageWrapper.appendChild(dropInformationsImage);
            
      let dropInformationspriceText = document.createTextNode(items[winner][1]);
      dropInformationspricepriceWrapper.appendChild(dropInformationspriceText);

}



function showFirstPair() {
  document.getElementById("pointer-1-ypath").style.display = "block";
  document.getElementById("pointer-1-xpath").style.display = "none";

  document.getElementById("pointer-2-ypath").style.display = "block";
  document.getElementById("pointer-2-xpath").style.display = "none";
}

function showSecondPair() {
  document.getElementById("pointer-1-ypath").style.display = "none";
  document.getElementById("pointer-1-xpath").style.display = "block";

  document.getElementById("pointer-2-ypath").style.display = "none";
  document.getElementById("pointer-2-xpath").style.display = "block";
}






function pointerChangex() {
  let pointercng = document.getElementById("pointers");
  pointercng.className = "pointersx";
}


function pointerChangey() {
  let pointercng = document.getElementById("pointers");
  pointercng.className = "pointersy";
}





function pointerCreate() {
  let pointerHand = document.getElementById("pointers");

  // Entferne die unsichtbare Klasse von den SVG-Elementen, um sie sichtbar zu machen
  pointerHand.querySelectorAll("svg").forEach(svg => {
      console.log("Test");
      svg.classList.remove("invisiblePointers");
  });
}




function initializePointers() {
  let pointerHand = document.getElementById("pointers");
  pointerHand.querySelectorAll("svg").forEach(svg => {
      svg.classList.add("invisiblePointers");
  });

  PointersThere = false;
}


function spinnersound() {
  var audio = new Audio("sounds/spinsound.mp3");

  audio.play();
}

function spinsoundwin() {
  var audio = new Audio("sounds/winsound.mp3");

  audio.play();
}

function battlewinnersound() {
  var audio = new Audio("sounds/battlewinnersound.mp3");

  audio.play();
}

function tickSound() {
  var audio = new Audio("sounds/tickSound.mp3");

  audio.play();
}








function createpointer(){
  //let leftBattle = document.getElementById("actualbattlespinner-0");
  let leftBattle = document.getElementById("Wasser-0");

  let wichsactualspinner = battleusers-1;
  //let rightBattle = document.getElementById("actualbattlespinner-"+wichsactualspinner);
  let rightBattle = document.getElementById("Wasser-"+wichsactualspinner);

  const leftsvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  leftsvg.id = "pointerfirst";
  leftsvg.setAttribute("stroke", "currentColor");
  leftsvg.setAttribute("fill", "currentColor");
  leftsvg.setAttribute("stroke-width", "0");
  leftsvg.setAttribute("viewBox", "0 0 24 24");
  leftsvg.setAttribute("height", "1em");
  leftsvg.setAttribute("width", "1em");
  leftsvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  leftBattle.appendChild(leftsvg);

  const leftpath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  leftpath.id = "pointer-1-xpath";
  leftpath.setAttribute("d", "m9 19 8-7-8-7z");
  leftsvg.appendChild(leftpath);


  const rightsvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  rightsvg.id = "pointersecond";
  rightsvg.setAttribute("stroke", "currentColor");
  rightsvg.setAttribute("fill", "currentColor");
  rightsvg.setAttribute("stroke-width", "0");
  rightsvg.setAttribute("viewBox", "0 0 24 24");
  rightsvg.setAttribute("height", "1em");
  rightsvg.setAttribute("width", "1em");
  rightsvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  rightBattle.appendChild(rightsvg);

  const rightpath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  rightpath.id = "pointer-2-xpath";
  rightpath.setAttribute("d", "M15 19V5l-8 7z");
  rightsvg.appendChild(rightpath);



}

function itemActivatory(casenumber,starterObject) {
  let spinnerInner = document.getElementById("actualbattlespinnerinner-" + casenumber);
  let spinnerItems = spinnerInner.getElementsByClassName("itemcontainer");

  // Überprüfen, ob sich aktuell ein neues Element zwischen den Pointern befindet
  let newActiveItemIndex = -1;
  for (let z = 0; z < spinnerItems.length; z++) {
      let spinnerItem = spinnerItems[z];
      let itemRect = spinnerItem.getBoundingClientRect();
      let pointersRect = document.getElementById("pointers").getBoundingClientRect();

      // Überprüfen, ob sich das Element zwischen den Pointern befindet
      if (itemRect.left > pointersRect.left && itemRect.left < pointersRect.right) {
        newActiveItemIndex = z;
        break; // Wir haben das aktive Element gefunden, beenden die Schleife
    }
  }


  // Aktualisieren Sie die "active" Eigenschaft der Elemente
  for (let i = 0; i < spinnerItems.length; i++) {
      let spinnerItem = spinnerItems[i];
      let isActive = i === newActiveItemIndex;
      spinnerItem.active = isActive;

      if (isActive &&starterObject.value !== i) {
        spinnerItem.querySelector(".item").classList.add("active");
        spinnerItem.querySelector(".itemImageContainer").classList.add("active");

        document.getElementById("spinner-"+casenumber+"-item-"+ (i-1)).querySelector(".item").classList.remove("active");
        document.getElementById("spinner-"+casenumber+"-item-"+ (i-1)).querySelector(".itemImageContainer").classList.remove("active");

        if (spinnerInner == document.getElementById("actualbattlespinnerinner-" + 1)) {
          tickSound(); 
        }
        
        starterObject.value = i;
    }  
}
}


function itemActivatorx(casenumber,starterObject) {
  let spinnerInner = document.getElementById("actualbattlespinnerinner-" + casenumber);
  let spinnerItems = spinnerInner.getElementsByClassName("itemcontainer");

  // Überprüfen, ob sich aktuell ein neues Element zwischen den Pointern befindet
  let newActiveItemIndex = -1;
  for (let z = 0; z < spinnerItems.length; z++) {
      let spinnerItem = spinnerItems[z];
      let itemRect = spinnerItem.getBoundingClientRect();
      let pointersRect = document.getElementById("pointers").getBoundingClientRect();

      // Überprüfen, ob sich das Element zwischen den Pointern befindet
      if (itemRect.top < pointersRect.top && itemRect.bottom > pointersRect.bottom) {
        newActiveItemIndex = z;
        break; // Wir haben das aktive Element gefunden, beenden die Schleife
    }
  }


  // Aktualisieren Sie die "active" Eigenschaft der Elemente
  for (let i = 0; i < spinnerItems.length; i++) {
      let spinnerItem = spinnerItems[i];
      let isActive = i === newActiveItemIndex;
      spinnerItem.active = isActive;

      if (isActive &&starterObject.value !== i) {
        spinnerItem.querySelector(".item").classList.add("active");
        spinnerItem.querySelector(".itemImageContainer").classList.add("active");

        document.getElementById("spinner-"+casenumber+"-item-"+ (i-1)).querySelector(".item").classList.remove("active");
        document.getElementById("spinner-"+casenumber+"-item-"+ (i-1)).querySelector(".itemImageContainer").classList.remove("active");

        if (spinnerInner == document.getElementById("actualbattlespinnerinner-" + 1)) {
          tickSound(); 
        }
        
        starterObject.value = i;
    }  
}
}