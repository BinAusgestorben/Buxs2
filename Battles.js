

/*
let Battle1 = "none";
let Battle2 = "none";
let Battle3 = "none";
let Battle4 = "none";
let Battle5 = "none";
let Battle6 = "none";
let Battle7 = "none";
let Battle8 = "none";*/

let Battles = [
  "none",
  "none",
  "none",
  "none",
  "none",
  "none",
  "none",
  "none"
];


let Cases = CasesData;




document.addEventListener("DOMContentLoaded", function () {
    getbalance();
    balanceonload();
    getBattles();
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
      document.getElementById("balance-amount").innerHTML = balance + "€";
      storebalance();
      document.getElementById("balance-input-container").innerHTML = "";
      }
      else {
        console.log("Balance must be between 0 and 100000");
      }

      
    } 
  
  }
  
  

  function balanceonload() {
    document.getElementById("balanceamount").innerHTML = balance.toFixed(2);
  }























  function getBattles() {
    for (let i = 0; i < 8; i++) {
      console.log("aha");
      getBattle(i);
    }

  }
  
  function getBattle(i) {
    BattleRetrieved = localStorage.getItem("caseBattle" + i);
  
    if (BattleRetrieved !== null && BattleRetrieved !== "none") {
      console.log("BattleRetrieved:", BattleRetrieved);
  
      try {
        Battles[i] = JSON.parse(BattleRetrieved);
      } catch (error) {
        console.error("Fehler beim Parsen des JSON-Strings:", error);
        return;
      }
  
      console.log("Battle" + (i + 1) + ":", Battles[i]);
  
      Battles[i] = recreateArray(Battles[i]);
  
      console.log("Battle" + (i + 1) + " wiederhergestellt:", Battles[i]);
  
      createBattle(i);
    } else {
      console.log("There is no battle in Storage");
    }
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




function createBattle(i){

  if (Battles[i] !== "none"){
    displayBattle(i);
  }

}



function battlelinklistener(battlelink, i){
  battlelink.addEventListener("click", function () {
    localStorage.setItem("battlenumber", i);
    window.location.href = "/userBattle.html";
  });
}

function displayBattle(i){

  let battlescontainer = document.getElementById("battles-Container-List");

  let battlelink = document.createElement("a");
  battlelink.className = "battlelink";

  battlelinklistener(battlelink, i);
  //battlelink.setAttribute("href","userBattle.html");
  battlescontainer.appendChild(battlelink);

  let battlecontainer = document.createElement("div");
  if (Battles[i][5] == "crazy" && Battles[i][4] !== "normal"){
    battlecontainer.className = "battlecontainer"+Battles[i][4];  
  }
  else if (Battles[i][5] == "crazy" && Battles[i][4] == "normal"){
    battlecontainer.className = "battlecontainer"+Battles[i][5];
  }
  else {
    battlecontainer.className = "battlecontainer"+Battles[i][4];  
  }
  battlelink.appendChild(battlecontainer);

  let battlecontainerinner = document.createElement("div");
  if (Battles[i][5] == "crazy" && Battles[i][4] !== "normal"){
    battlecontainerinner.className = "battlecontainerinner"+Battles[i][4];  
  }
  else if (Battles[i][5] == "crazy" && Battles[i][4] == "normal"){
    battlecontainerinner.className = "battlecontainerinner"+Battles[i][5];
  }
  else {
    battlecontainerinner.className = "battlecontainerinner"+Battles[i][4];  
  }
  battlecontainer.appendChild(battlecontainerinner);

  let battleroundsconatiner = document.createElement("div");
  battleroundsconatiner.className= "battleroundsconatiner";
  battlecontainerinner.appendChild(battleroundsconatiner);

  let battleroundsnumber = document.createElement("div");
  battleroundsnumber.className = "battleroundsnumber";
  battleroundsnumber.innerHTML = Battles[i][2];
  battleroundsconatiner.appendChild(battleroundsnumber);

  let battlestatustext = document.createElement("div");
  battlestatustext.className = "battlestatustext";
  battlestatustext.innerHTML = "Rounds";
  battleroundsconatiner.appendChild(battlestatustext);

  let battlepreviewcontainer = document.createElement("div");
  battlepreviewcontainer.className = "battlepreviewcontainer";
  battlecontainerinner.appendChild(battlepreviewcontainer);

  let howManyCaseTypes = Battles[i][6].length;

  for (let g = 0; g < howManyCaseTypes; g++) {
    for (let z = 0; z < Battles[i][6][g][1]; z++) {
       battlepreviewcase(battlepreviewcontainer,g,i);
    }
  }


  let battlepriceWrapper = document.createElement("div");
  battlepriceWrapper.className = "battle-price-wrapper";
  battlecontainerinner.appendChild(battlepriceWrapper);

  let battlepriceextraWrapper = document.createElement("div");
  battlepriceextraWrapper.className = "battlepriceextraWrapper";
  battlepriceWrapper.appendChild(battlepriceextraWrapper);

    let priceImageWrapper = document.createElement("div");
    priceImageWrapper.className = "price-image-wrapper";
    battlepriceextraWrapper.appendChild(priceImageWrapper);
    let priceImage = document.createElement("img");
    priceImage.src = "/images/gem.svg";
    priceImageWrapper.appendChild(priceImage);

    let priceWrapperAmount = document.createElement("span");
    priceWrapperAmount.className = "priceWrapperAmount";
    battlepriceextraWrapper.appendChild(priceWrapperAmount);
    let priceWrapperAmountText = document.createTextNode(parseFloat(Battles[i][1]).toFixed(2));
    priceWrapperAmount.appendChild(priceWrapperAmountText);



  let insidebattle = document.createElement("div");
  insidebattle.className = "insidebattle";
  battlecontainerinner.appendChild(insidebattle);

  let insidebattlepfpcontainer = document.createElement("div");
  insidebattlepfpcontainer.className = "insidebattlepfpcontainer";
  insidebattle.appendChild(insidebattlepfpcontainer);

  let viewbattlecontainer = document.createElement("div");
  viewbattlecontainer.className = "viewbattlecontainer";
  battlecontainerinner.appendChild(viewbattlecontainer);

  let viewbattlediv = document.createElement("div");
  viewbattlediv.className = "viewbattlediv";
  viewbattlecontainer.appendChild(viewbattlediv);

  let battleviewpriceWrapper = document.createElement("div");
  battleviewpriceWrapper.className = "price-wrapper-viewbtn";
  viewbattlediv.appendChild(battleviewpriceWrapper);

    let priceImageWrapperview = document.createElement("div");
    priceImageWrapperview.className = "price-image-wrapper";
    battleviewpriceWrapper.appendChild(priceImageWrapperview);
    let priceImageview = document.createElement("img");
    priceImageview.src = "/images/gem.svg";
    priceImageWrapperview.appendChild(priceImageview);

    let priceWrapperAmountview = document.createElement("span");
    priceWrapperAmountview.className = "priceWrapperAmountview";
    battleviewpriceWrapper.appendChild(priceWrapperAmountview);
    let priceWrapperAmountTextview = document.createTextNode(parseFloat(Battles[i][1]).toFixed(2));
    priceWrapperAmountview.appendChild(priceWrapperAmountTextview);

  let viewbattlebutton = document.createElement("button");
  viewbattlebutton.className = "viewbattlebutton"+ Battles[i][4];
  viewbattlebutton.setAttribute("type","button");
  viewbattlebutton.innerHTML = "View";
  viewbattlediv.appendChild(viewbattlebutton);

  let viewbattlemode = document.createElement("div");
  if (Battles[i][5] == "crazy" && Battles[i][4] !== "normal"){
    viewbattlemode.innerHTML = Battles[i][5] +" "+Battles[i][4];
    viewbattlemode.className = "viewbattlemode"+Battles[i][4];  
  }
  else if (Battles[i][5] == "crazy" && Battles[i][4] == "normal"){
    viewbattlemode.innerHTML = Battles[i][5];
    viewbattlemode.className = "viewbattlemode"+Battles[i][5];
  }
  else {
    
    if (Battles[i][4] !== "normal"){
    viewbattlemode.innerHTML = Battles[i][4];  
    viewbattlemode.className = "viewbattlemode"+Battles[i][4];    
    }
    
  }
  viewbattlediv.appendChild(viewbattlemode); 
  
}


function battlepreviewcase(battlepreviewcontainer,g,i) {
  let previewimagecontainer = document.createElement("div");
  previewimagecontainer.className = "previewimagecontainer";
  battlepreviewcontainer.appendChild(previewimagecontainer);

  let previewimage = document.createElement("img");
  previewimage.setAttribute("alt", Cases[Battles[i][6][g][0]][0]);
  previewimage.setAttribute("src", Cases[Battles[i][6][g][0]][2]);
  previewimage.setAttribute("decoding", "async");
  previewimage.setAttribute("loading", "lazy");
  previewimage.setAttribute("position", "absolute"); 
  previewimage.setAttribute("width", "100");
  previewimage.setAttribute("height", "100");
  previewimage.setAttribute("inset", "0px");
  previewimage.style.color = "transparent";
  previewimage.className = "previewimage";
  previewimagecontainer.appendChild(previewimage);
}



