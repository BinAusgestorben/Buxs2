




let Cases = CasesData;
let caseBattle = [false, 0.00, 0, "1v1", "normal", "most",[]];
let WasIt = false;



document.addEventListener("DOMContentLoaded", function () {
    getbalance();
    balanceonload();
    modeChanger();
    createButtonListener();
  });


document.getElementById("add-Case").addEventListener("click", function(){
    uiPreparation ()
    console.log("Test");
    headlessFocusGuard();
    uiCreate();
    headlessFocusGuard();
    console.log(Cases.length);

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
      document.getElementById("balance-amount").innerHTML = balance + "€";
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



function uiPreparation (){
    let htmlElement = document.documentElement;
    htmlElement.style.overflow = "hidden";
    htmlElement.style.paddingRight = "0px";
}

function headlessUiCreate () {

}

function headlessFocusGuard() {
    let focusGuard = document.createElement("button");
    focusGuard.type = "button";
    focusGuard.setAttribute("aria-hidden", "true");
    focusGuard.style.position = "fixed";
    focusGuard.style.top = "1px";
    focusGuard.style.left = "1px";
    focusGuard.style.width = "1px";
    focusGuard.style.height = "1px";
    focusGuard.style.padding = "0px";
    focusGuard.style.margin = "-1px";
    focusGuard.style.overflow = "hidden";
    focusGuard.setAttribute("clip", "rect(0px, 0px, 0px, 0px)");
    focusGuard.setAttribute("white-space", "nowrap");
    focusGuard.setAttribute("border-width", "0px");
    document.getElementById("headlessui-portal-root").appendChild(focusGuard);

}

function uiCreate() {
    let divElement = document.createElement("div");
    document.getElementById("headlessui-portal-root").appendChild(divElement);

    let headlessuidialog = document.createElement("div");
    headlessuidialog.className = "uiDiv positionerClass";
    headlessuidialog.id = "headlessui-dialog";
    headlessuidialog.setAttribute("role", "dialog");
    headlessuidialog.setAttribute("aria-modal", "true");
    divElement.appendChild(headlessuidialog);

    let headlessuidialogoverlay = document.createElement("div");
    headlessuidialogoverlay.className = "dialogOverlay enter-to entered";
    headlessuidialogoverlay.id = "dialog-Overlay";
    headlessuidialogoverlay.setAttribute("aria-hidden", "true");
    headlessuidialog.appendChild(headlessuidialogoverlay);

    let dialogPanel = document.createElement("div");
    dialogPanel.className = "dialogPanel enter-to entered";
    headlessuidialog.appendChild(dialogPanel);

    let dialogTitle = document.createElement("h2");
    dialogTitle.className = "dialogTitle";
    dialogPanel.appendChild(dialogTitle);

    let dialogTitleInfo = document.createElement("div");
    dialogTitleInfo.className = "dialogTitleInfo";
    dialogTitle.appendChild(dialogTitleInfo);

    let dialogTitleInfoTiles = document.createElement("div");
    dialogTitleInfoTiles.className = "dialogTitleInfoTiles";
    dialogTitleInfo.appendChild(dialogTitleInfoTiles);

    let dialogTitleInfoTilesContainer = document.createElement("div");
    dialogTitleInfoTilesContainer.className = "dialogTitleInfoTilesContainer";
    dialogTitleInfoTiles.appendChild(dialogTitleInfoTilesContainer);

    let dialogTitleInfoTilesRounds = document.createElement("div");
    dialogTitleInfoTilesRounds.className = "dialogTitleInfoTile";
    dialogTitleInfoTilesContainer.appendChild(dialogTitleInfoTilesRounds);

    let dialogTitleInfoTilesRoundsTitel = document.createElement("div");
    dialogTitleInfoTilesRoundsTitel.className = "dialogTitleInfoTilesRoundsTitel";
    dialogTitleInfoTilesRounds.appendChild(dialogTitleInfoTilesRoundsTitel);
    let dialogTitleInfoTilesRoundsTitelText = document.createTextNode("Rounds");
    dialogTitleInfoTilesRoundsTitel.appendChild(dialogTitleInfoTilesRoundsTitelText);

    let dialogTitleInfoTilesAmountTitel = document.createElement("div");
    dialogTitleInfoTilesAmountTitel.className = "dialogTitleInfoTilesAmountTitel";
    dialogTitleInfoTilesAmountTitel.id = "dialog-Title-Info-Tiles-Amount-Titel"
    dialogTitleInfoTilesRounds.appendChild(dialogTitleInfoTilesAmountTitel);
    let dialogTitleInfoTilesAmountTitelText = document.createTextNode("0");
    dialogTitleInfoTilesAmountTitel.appendChild(dialogTitleInfoTilesAmountTitelText);


    let dialogTitleInfoTilesTotal = document.createElement("div");
    dialogTitleInfoTilesTotal.className = "dialogTitleInfoTile";
    dialogTitleInfoTilesContainer.appendChild(dialogTitleInfoTilesTotal);

    let dialogTitleInfoTilesTotalTitel = document.createElement("div");
    dialogTitleInfoTilesTotalTitel.className = "dialogTitleInfoTilesTotalTitel";
    dialogTitleInfoTilesTotal.appendChild(dialogTitleInfoTilesTotalTitel);
    let dialogTitleInfoTilesTotalTitelText = document.createTextNode("Total");
    dialogTitleInfoTilesTotalTitel.appendChild(dialogTitleInfoTilesTotalTitelText);

    let dialogTitleInfoTilesTotalPrice = document.createElement("div");
    dialogTitleInfoTilesTotalPrice.className = "dialogTitleInfoTilesTotalPrice"
    dialogTitleInfoTilesTotal.appendChild(dialogTitleInfoTilesTotalPrice);

    let dialogTitleInfoTilesTotalPriceImageWrapper = document.createElement("div");
    dialogTitleInfoTilesTotalPriceImageWrapper.className = "dialogTitleInfoTilesTotalPriceImageWrapper"
    dialogTitleInfoTilesTotalPrice.appendChild(dialogTitleInfoTilesTotalPriceImageWrapper);
    let dialogTitleInfoTilesTotalPriceImage = document.createElement("img");
    dialogTitleInfoTilesTotalPriceImage.src = "./images/gem.svg";
    dialogTitleInfoTilesTotalPriceImageWrapper.appendChild(dialogTitleInfoTilesTotalPriceImage);

    let dialogTitleInfoTilesTotalPriceContainer = document.createElement("span");
    dialogTitleInfoTilesTotalPriceContainer.className = "dialogTitleInfoTilesTotalPriceContainer";
    dialogTitleInfoTilesTotalPriceContainer.id = "dialogTitleInfoTilesTotalPriceContainer";
    dialogTitleInfoTilesTotalPrice.appendChild(dialogTitleInfoTilesTotalPriceContainer);
    let dialogTitleInfoTilesTotalPriceText = document.createTextNode("0.00");
    dialogTitleInfoTilesTotalPriceContainer.appendChild(dialogTitleInfoTilesTotalPriceText);

    let uiCaseNav = document.createElement("div");
    uiCaseNav.className = "uiCaseNav";
    dialogPanel.appendChild(uiCaseNav);

    let uiCaseNavContent = document.createElement("div");
    uiCaseNavContent.className = "uiCaseNavContent";
    uiCaseNav.appendChild(uiCaseNavContent);

    let uiCaseNavNavigation = document.createElement("div");
    uiCaseNavNavigation.className = "uiCaseNavNavigation";
    uiCaseNavContent.appendChild(uiCaseNavNavigation);

    let uiCaseNavNavigationSearch = document.createElement("input");
    uiCaseNavNavigationSearch.placeholder = "Search for..";
    uiCaseNavNavigationSearch.className = "uiCaseNavNavigationSearch";
    uiCaseNavNavigationSearch.id = "uiCaseNav-Navigation-Search";
    uiCaseNavNavigation.appendChild(uiCaseNavNavigationSearch);


    let uiCaseListContainer = document.createElement("div");
    uiCaseListContainer.className = "uiCaseListContainer";
    uiCaseNavContent.appendChild(uiCaseListContainer);

    let uiCaseList = document.createElement("div");
    uiCaseList.className = "uiCaseList";
    uiCaseList.id = "uiCase-List"
    uiCaseList.setAttribute("style", "grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr)); grid-auto-rows: minmax(18rem, auto);");
    //uiCaseList.setAttribute("grid-template-columns", "repeat(auto-fill, minmax(12rem, 1fr))")
    uiCaseListContainer.appendChild(uiCaseList);





    document.getElementById("dialog-Overlay").addEventListener("click", overlayClickHandler);

    document.getElementById("uiCaseNav-Navigation-Search").addEventListener("input", function(event) {
        const searchTerm = event.target.value.toLowerCase();
        filterCaseItems(searchTerm);
    });


    uiCaseListCreate(uiCaseList);
}

function overlayClickHandler() {
    document.getElementById("headlessui-portal-root").innerHTML = "";
    //document.getElementById("dialog-Overlay").removeEventListener("click", overlayClickHandler);
}






function uiAlreadyCreated(){
    for (let i = 0; i <caseBattle[6].length; i++) {
        console.log("Length: "+caseBattle[6].length);
        console.log("Changed Button");
        let caseId = caseBattle[6][i][0];
        let caseItemIdUi = document.getElementById("case-Item-Add-Ui-"+caseId);
        changeAddButton ("none", caseItemIdUi, caseId, "Ui")

        updateUiAmount(caseId,i)       
}
}

function updateUiAmount(caseId,i) {
    document.getElementById("caseNumberButtonAmount-Ui-"+caseId).innerHTML = caseBattle[6][i][1];
}
















function uiCaseListCreate(uiCaseList) {
    const sortedCases = Cases.slice().sort((a, b) => b[1] - a[1]);

    for (let i = 0; i < sortedCases.length; i++) {
        caseAdder(uiCaseList, Cases.indexOf(sortedCases[i]));
    }


    if (WasIt){
        uiAlreadyCreated();
    }
    WasIt = true;

}

function caseAdder(uiCaseList,i) {
    let caseItem = document.createElement("li");
    caseItem.setAttribute("role", "button");
    caseItem.setAttribute("tabindex", "0");
    caseItem.setAttribute("aria-disabled", "false");
    caseItem.setAttribute("aria-roledescription", "sortable");
    caseItem.className = "caseItem";
    uiCaseList.appendChild(caseItem);

    let caseItemImage = document.createElement("img");
    caseItemImage.setAttribute("alt", Cases[i][0]);
    caseItemImage.src = Cases[i][2];
    caseItemImage.setAttribute("width", "100");
    caseItemImage.setAttribute("height", "100");
    caseItemImage.setAttribute("decoding", "async");
    caseItemImage.className = "caseitemImage";
    caseItemImage.setAttribute("loading", "lazy");
    caseItemImage.style.color = "transparent";
    caseItem.appendChild(caseItemImage);

    let caseItemDetails = document.createElement("div");
    caseItemDetails.className = "caseItemDetails";
    caseItem.appendChild(caseItemDetails);

    let caseItemInfo = document.createElement("div");
    caseItemInfo.className = "caseItemInfo";
    caseItemDetails.appendChild(caseItemInfo);

    let caseItemInfoName = document.createElement("div");
    caseItemInfoName.className = "caseItemInfoName";
    caseItemInfo.appendChild(caseItemInfoName);
    let caseItemInfoNameText = document.createTextNode(Cases[i][0]);
    caseItemInfoName.appendChild(caseItemInfoNameText);

    let priceWrapper = document.createElement("div");
    priceWrapper.className = "price-wrapper";
    caseItemInfo.appendChild(priceWrapper);

    let priceImageWrapper = document.createElement("div");
    priceImageWrapper.className = "price-image-wrapper";
    priceWrapper.appendChild(priceImageWrapper);
    let priceImage = document.createElement("img");
    priceImage.src = "./images/gem.svg";
    priceImageWrapper.appendChild(priceImage);

    let priceWrapperAmount = document.createElement("span");
    priceWrapperAmount.className = "priceWrapperAmount";
    priceWrapperAmount.id = "priceWrapperAmount-Ui-"+Cases[i][4];
    priceWrapper.appendChild(priceWrapperAmount);
    let priceWrapperAmountText = document.createTextNode(Cases[i][1]);
    priceWrapperAmount.appendChild(priceWrapperAmountText);

    let caseItemAdd = document.createElement("div");
    caseItemAdd.className = "caseItemAdd";
    caseItemAdd.id = "case-Item-Add-Ui-"+Cases[i][4];
    caseItemDetails.appendChild(caseItemAdd);

    let caseItemAddButton = document.createElement("button");
    caseItemAddButton.setAttribute("type", "button");
    caseItemAddButton.id = "caseItemAddButton-"+Cases[i][4];
    caseItemAddButton.className = "caseItemAddButton";
    caseItemAdd.appendChild(caseItemAddButton);
    let caseItemAddButtonText = document.createTextNode("Add Case");
    caseItemAddButton.appendChild(caseItemAddButtonText);


    caseItemButtonListener(caseItemAddButton, caseItemAdd, Cases[i][4]);
}


function filterCaseItems(searchTerm) {
    const uiCaseList = document.getElementById("uiCase-List");
    uiCaseList.innerHTML = "";

    // Filtere und sortiere die caseItems nach dem Preis
    const filteredAndSortedItems = Cases
        .filter(item => item[0].toLowerCase().includes(searchTerm))
        .sort((a, b) => b[1] - a[1]); // Sortiere absteigend nach Preis

    for (let i = 0; i < filteredAndSortedItems.length; i++) {
        caseAdder(uiCaseList, Cases.indexOf(filteredAndSortedItems[i]));
    }
}








let crazySwitch = document.getElementById("crazy-Switch");
let privateSwitch = document.getElementById("private-Switch");

let crazyActive = false;
let privateActive = false;

crazySwitchStatus = "on";

crazySwitch.addEventListener("click", function() {
    
    if (crazySwitchStatus !== "off"){
        if (!crazyActive) {
            crazyActivate();
            caseBattle[5] = "crazy";
            console.log(caseBattle);
        } else {
            crazyDeactivate();
            caseBattle[5] = "most";
            console.log(caseBattle);
        }
    crazyActive = !crazyActive;

    }
    
    
});

privateSwitch.addEventListener("click", function() {
    if (!privateActive) {
        privateActivate();
    } else {
        privateDeactivate();
    }
    privateActive = !privateActive;
});

function crazyActivate() {
    document.getElementById("create-Settings-Crazy-Button").className = "createSettingsToggleButton active";
    document.getElementById("create-Settings-Crazy-Button").setAttribute("aria-checked", "true");
    document.getElementById("create-Settings-Crazy-Span").className = "createSettingsToggleCircle active";
    document.getElementById("create-Settings-Crazy-Info").className = "createSettingsToggleInfo active";
    console.log("Crazy activated!");
}

function crazyDeactivate() {
    document.getElementById("create-Settings-Crazy-Button").className = "createSettingsToggleButton";
    document.getElementById("create-Settings-Crazy-Button").setAttribute("aria-checked", "false");
    document.getElementById("create-Settings-Crazy-Span").className = "createSettingsToggleCircle";
    document.getElementById("create-Settings-Crazy-Info").className = "createSettingsToggleInfo";
    console.log("Crazy deactivated!");
}

function privateActivate() {
    document.getElementById("create-Settings-Private-Button").className = "createSettingsToggleButton active";
    document.getElementById("create-Settings-Private-Button").setAttribute("aria-checked", "true");
    document.getElementById("create-Settings-Private-Span").className = "createSettingsToggleCircle active";
    document.getElementById("create-Settings-Private-Info").className = "createSettingsToggleInfo active";
    console.log("Private activated!");
}

function privateDeactivate() {
    document.getElementById("create-Settings-Private-Button").className = "createSettingsToggleButton";
    document.getElementById("create-Settings-Private-Button").setAttribute("aria-checked", "false");
    document.getElementById("create-Settings-Private-Span").className = "createSettingsToggleCircle";
    document.getElementById("create-Settings-Private-Info").className = "createSettingsToggleInfo";
    console.log("Private deactivated!");
}





let modeNormal = document.getElementById("modeNormalButton");
let modeGroup = document.getElementById("modeGroupButton");
let modeTerminal = document.getElementById("modeTerminalButton");

modeNormal.addEventListener("click", function() {
    modeNormal.className = "createModeButton active";
    modeGroup.className = "createModeButton";
    modeTerminal.className = "createModeButton";
});
modeGroup.addEventListener("click", function() {
    modeNormal.className = "createModeButton";
    modeGroup.className = "createModeButton active";
    modeTerminal.className = "createModeButton";
});
modeTerminal.addEventListener("click", function() {
    modeNormal.className = "createModeButton";
    modeGroup.className = "createModeButton";
    modeTerminal.className = "createModeButton active";
});









let currentCaseBattleValue = caseBattle[1];


setInterval(() => {
    if (caseBattle[1] !== currentCaseBattleValue) {
        currentCaseBattleValue = caseBattle[1];
        handleCaseBattleChange();
    }
console.log("Checked Cost");
}, 250);


function handleCaseBattleChange() {

    const roundedValue = parseFloat(caseBattle[1]).toFixed(2);

    document.getElementById("create-Button-Price").innerHTML = roundedValue;

    if (document.getElementById("headlessui-portal-root").innerHTML !== ""){
        document.getElementById("dialogTitleInfoTilesTotalPriceContainer").innerHTML = roundedValue;
    }
}



















function caseItemButtonListener(caseItemButton, caseItemAdd, caseId) {

    caseItemButton.addEventListener("click", function() {
        if (caseBattle[2] < 25){
            console.log("Done");
        readyChecker();
        firstCaseAdd(caseItemButton, caseItemAdd, caseId);
        createdCasesAdd(caseId);
        battleCaseArrayAdd(caseId);
        }
      });
}


function battleCaseArrayAdd(caseId){
    let newArray = [caseId, 1];
    caseBattle[6].push(newArray);
    console.log(caseBattle);
}






function createdCasesAdd(caseId) {
    let createdCasesContainer = document.getElementById("createdCases-Container");

    let createdCasesLi = document.createElement("li");
    createdCasesLi.setAttribute("role", "button");
    createdCasesLi.setAttribute("tabindex", "0");
    createdCasesLi.setAttribute("aria-disabled", "false");
    createdCasesLi.setAttribute("aria-roledescription", "sortable");
    createdCasesLi.id = "case-item-li-" + caseId;
    createdCasesLi.className = "createdCases";
    createdCasesContainer.appendChild(createdCasesLi);

    let createdCasesRemove = document.createElement("div");
    createdCasesRemove.className = "createdCasesRemove";
    createdCasesLi.appendChild(createdCasesRemove);
    let createdCasesRemoveButton = document.createElement("button");
    createdCasesRemoveButton.className = "createdCasesRemoveButton";
    createdCasesRemoveButton.id = "createdCasesRemoveButton-"+caseId;
    createdCasesRemoveButton.setAttribute("type", "button");
    createdCasesRemoveButton.innerHTML = "x";
    createdCasesRemove.appendChild(createdCasesRemoveButton);

    let createdCasesImage = document.createElement("img");
    createdCasesImage.setAttribute("alt", Cases[caseId][0]);
    createdCasesImage.src = Cases[caseId][2];
    createdCasesImage.setAttribute("width", "100");
    createdCasesImage.setAttribute("height", "100");
    createdCasesImage.setAttribute("decoding", "async");
    createdCasesImage.className = "caseitemImage";
    createdCasesImage.setAttribute("loading", "lazy");
    createdCasesImage.style.color = "transparent";
    createdCasesLi.appendChild(createdCasesImage);

    let createdCasesDetails = document.createElement("div");
    createdCasesDetails.className = "caseItemDetails";
    createdCasesLi.appendChild(createdCasesDetails);

    let createdCasesInfo = document.createElement("div");
    createdCasesInfo.className = "caseItemInfo";
    createdCasesDetails.appendChild(createdCasesInfo);

    let createdCasesInfoName = document.createElement("div");
    createdCasesInfoName.className = "caseItemInfoName";
    createdCasesInfo.appendChild(createdCasesInfoName);
    let createdCasesInfoNameText = document.createTextNode(Cases[caseId][0]);
    createdCasesInfoName.appendChild(createdCasesInfoNameText);

    let priceWrapper = document.createElement("div");
    priceWrapper.className = "price-wrapper";
    createdCasesInfo.appendChild(priceWrapper);

    let priceImageWrapper = document.createElement("div");
    priceImageWrapper.className = "price-image-wrapper";
    priceWrapper.appendChild(priceImageWrapper);
    let priceImage = document.createElement("img");
    priceImage.src = "./images/gem.svg";
    priceImageWrapper.appendChild(priceImage);

    let priceWrapperAmount = document.createElement("span");
    priceWrapperAmount.className = "priceWrapperAmount";
    priceWrapperAmount.id = "priceWrapperAmount-Created-"+caseId;
    priceWrapperAmount.innerHTML = Cases[caseId][1];
    priceWrapper.appendChild(priceWrapperAmount);
    

    let createdCasesItemAdd = document.createElement("div");
    createdCasesItemAdd.className = "caseItemAdd";
    createdCasesDetails.appendChild(createdCasesItemAdd);

    
    changeAddButton ("none", createdCasesItemAdd, caseId, "created");
    removeCaseBtn(caseId);
}

function removeCaseBtn(caseId) {
    document.getElementById("createdCasesRemoveButton-"+caseId).addEventListener("click", function() {
    removeThisCase(caseId);
    });
}


function removeThisCase(caseId) {
    document.getElementById("case-item-li-"+caseId).remove();

    for (let i = 0; i < caseBattle[6].length; i++) {
        if (Array.isArray(caseBattle[6][i]) && caseBattle[6][i][0] === caseId) {
            caseBattle[1] -= Cases[caseId][1] * caseBattle[6][i][1];
            caseBattle[2] -= caseBattle[6][i][1];
            readyChecker();
            caseBattle[6].splice(i, 1);
            console.log("after Splice"+caseBattle);
            break;
        }
    }
}



function firstCaseAdd (caseItemButton, caseItemAdd, caseId) {
    
changeAddButton (caseItemButton, caseItemAdd, caseId, "Ui");    
caseBattle[2] += 1;
caseBattle[1] += Cases[caseId][1];
console.log(caseBattle[2]+"Im Battle");
readyChecker();    
    
}









function changeAddButton (caseItemButton, caseItemAdd, caseId, location) {
    caseItemAdd.innerHTML= "";

    let caseNumberController = document.createElement("div");
    caseNumberController.className = "caseNumberController";
    caseItemAdd.appendChild(caseNumberController);

    let caseNumberButtonMinus = document.createElement("button");
    caseNumberButtonMinus.className = "caseNumberButton";
    caseNumberButtonMinus.id = "caseNumberButtonMinus-"+ caseId;
    caseNumberButtonMinus.setAttribute("type", "button");
    caseNumberController.appendChild(caseNumberButtonMinus);
    let caseNumberButtonMinusSpan = document.createElement("span");
    caseNumberButtonMinusSpan.className = "caseNumberButtonMinusSpan";
    caseNumberButtonMinus.appendChild(caseNumberButtonMinusSpan);
    let caseNumberButtonMinusSpanText = document.createTextNode("-");
    caseNumberButtonMinusSpan.appendChild(caseNumberButtonMinusSpanText);

    let caseNumberButtonAmount = document.createElement("span");
    caseNumberButtonAmount.className = "caseNumberButtonAmount";
    caseNumberButtonAmount.id = "caseNumberButtonAmount-"+location+"-"+ caseId;
    caseNumberButtonAmount.innerHTML = "1";
    caseNumberController.appendChild(caseNumberButtonAmount);

    let caseNumberButtonPlus = document.createElement("button");
    caseNumberButtonPlus.className = "caseNumberButton";
    caseNumberButtonPlus.id = "caseNumberButtonPlus-"+ caseId;
    caseNumberButtonPlus.setAttribute("type", "button");
    caseNumberController.appendChild(caseNumberButtonPlus);
    let caseNumberButtonPlusSpan = document.createElement("span");
    caseNumberButtonPlusSpan.className = "caseNumberButtonPlusSpan";
    caseNumberButtonPlus.appendChild(caseNumberButtonPlusSpan);
    let caseNumberButtonPlusSpanText = document.createTextNode("+");
    caseNumberButtonPlusSpan.appendChild(caseNumberButtonPlusSpanText);

    caseNumberButtonMinusListener(caseNumberButtonMinus,caseNumberButtonAmount,caseItemAdd,caseId,location);
    caseNumberButtonPlusListener(caseNumberButtonPlus,caseNumberButtonAmount,caseId);
}










function caseNumberButtonMinusListener(caseNumberButtonMinus,caseNumberButtonAmount,caseItemAdd,caseId,Where){
    caseNumberButtonMinus.addEventListener("click", function() {
        caseBattle[1] -= Cases[caseId][1];
        caseBattle[2] -= 1;
        readyChecker();
        console.log(caseBattle);

        if (Where == "Ui"){
        minusButtonZero(caseNumberButtonAmount,caseItemAdd,caseId);
        console.log("Normal Minus");    
        }
        else {
        minusButtonZeroCreated(caseNumberButtonAmount,caseId);
        console.log("created minus");
        }
      });
}


function minusButtonZeroCreated(caseNumberButtonAmount,caseId){
    if (caseNumberButtonAmount.innerHTML == "1"){
        document.getElementById("case-item-li-" + caseId).remove();

        for (let i = 0; i < caseBattle[6].length; i++) {
            if (Array.isArray(caseBattle[6][i]) && caseBattle[6][i][0] === caseId) {
                caseBattle[6].splice(i, 1);
                console.log("after Splice"+caseBattle);
                break;
            }
    }

}
    else {
        for (let i = 0; i < caseBattle[6].length; i++) {
            if (Array.isArray(caseBattle[6][i]) && caseBattle[6][i][0] === caseId) {
               caseBattle[6][i][1] -= 1;
               console.log("Specific Case Amount"+caseBattle);
               caseNumberButtonAmount.innerHTML = caseBattle[6][i][1];

               for (let i = 0; i < caseBattle[6].length; i++) {
                if (Array.isArray(caseBattle[6][i]) && caseBattle[6][i][0] === caseId) {
    
                if (caseBattle[6][i][1]>0){
                    let howMany = caseBattle[6][i][1];
                    let howMuch = Cases[caseId][1];
                    console.log(howMany+"*"+howMuch);
                    let newPriceAmount = parseFloat(howMany * howMuch).toFixed(2);
                    document.getElementById("priceWrapperAmount-Created-"+caseId).innerHTML = newPriceAmount;
                        
                        if (document.getElementById("headlessui-portal-root").innerHTML !== ""){
                            document.getElementById("priceWrapperAmount-Ui-"+caseId).innerHTML = newPriceAmount;
                        } 
                }  
    
                break;
            }
        }


                break;
            }
        }
    }
}



function minusButtonZero(caseNumberButtonAmount,caseItemAdd,caseId){
    if (caseNumberButtonAmount.innerHTML == "1"){
        caseAddButton(caseItemAdd,caseId);

        document.getElementById("case-item-li-" + caseId).remove();

        for (let i = 0; i < caseBattle[6].length; i++) {
            if (Array.isArray(caseBattle[6][i]) && caseBattle[6][i][0] === caseId) {
                caseBattle[6].splice(i, 1);
                console.log("after Splice"+caseBattle);
                break;
            }
    }
    }
    else {
        for (let i = 0; i < caseBattle[6].length; i++) {
            if (Array.isArray(caseBattle[6][i]) && caseBattle[6][i][0] === caseId) {
               caseBattle[6][i][1] -= 1;
               console.log("Specific Case Amount"+caseBattle);
               caseNumberButtonAmount.innerHTML = caseBattle[6][i][1];
               document.getElementById("caseNumberButtonAmount-created-"+caseId).innerHTML = caseBattle[6][i][1];




               for (let i = 0; i < caseBattle[6].length; i++) {
                if (Array.isArray(caseBattle[6][i]) && caseBattle[6][i][0] === caseId) {
    
                if (caseBattle[6][i][1]>0){
                    let howMany = caseBattle[6][i][1];
                    let howMuch = Cases[caseId][1];
                    console.log(howMany+"*"+howMuch);
                    let newPriceAmount = parseFloat(howMany * howMuch).toFixed(2);
                    document.getElementById("priceWrapperAmount-Created-"+caseId).innerHTML = newPriceAmount;
                        
                        if (document.getElementById("headlessui-portal-root").innerHTML !== ""){
                            document.getElementById("priceWrapperAmount-Ui-"+caseId).innerHTML = newPriceAmount;
                        }
                }  
    
                break;
            }
        }




                break;
            }
        }
    }
}

function caseAddButton (caseItemAdd,caseId){
    caseItemAdd.innerHTML = "";

    let caseItemAddButton = document.createElement("button");
    caseItemAddButton.setAttribute("type", "button");
    caseItemAddButton.id = "caseItemAddButton-"+caseId;
    caseItemAddButton.className = "caseItemAddButton";
    caseItemAdd.appendChild(caseItemAddButton);
    let caseItemAddButtonText = document.createTextNode("Add Case");
    caseItemAddButton.appendChild(caseItemAddButtonText);

    caseItemButtonListener(caseItemAddButton, caseItemAdd, caseId);
}







function caseNumberButtonPlusListener(caseNumberButtonPlus,caseNumberButtonAmount,caseId){
    caseNumberButtonPlus.addEventListener("click", function() {
        if (caseBattle[2] < 25){
        caseBattle[1] += Cases[caseId][1];
        caseAmountAdder(caseNumberButtonAmount, caseId);    
        };
        
      });
}

function caseAmountAdder(caseNumberButtonAmount, caseId){
        caseBattle[2] += 1;
        console.log("Es sind jetzt "+caseBattle[2]+" Cases im Battle");
        readyChecker()

        for (let i = 0; i < caseBattle[6].length; i++) {
            if (Array.isArray(caseBattle[6][i]) && caseBattle[6][i][0] === caseId) {
               caseBattle[6][i][1] += 1;
               console.log("Specific Case Amount"+caseBattle);
               //caseNumberButtonAmount.innerHTML = caseBattle[6][i][1];
               document.getElementById("caseNumberButtonAmount-created-" + caseId).innerHTML = caseBattle[6][i][1];
               if (document.getElementById("headlessui-portal-root").innerHTML !== ""){
                document.getElementById("caseNumberButtonAmount-Ui-" + caseId).innerHTML = caseBattle[6][i][1];
               }
               
               



               for (let i = 0; i < caseBattle[6].length; i++) {
                if (Array.isArray(caseBattle[6][i]) && caseBattle[6][i][0] === caseId) {
    
                    if (caseBattle[6][i][1]>0){
                        let howMany = caseBattle[6][i][1];
                        let howMuch = Cases[caseId][1];
                        console.log(howMany+"*"+howMuch);
                        let newPriceAmount = parseFloat(howMany * howMuch).toFixed(2);
                        document.getElementById("priceWrapperAmount-Created-"+caseId).innerHTML = newPriceAmount;
                        
                        if (document.getElementById("headlessui-portal-root").innerHTML !== ""){
                            document.getElementById("priceWrapperAmount-Ui-"+caseId).innerHTML = newPriceAmount;
                        }
                    }  
    
                break;
                }
            }






            break;
            }
    }
}








function modeChanger(){
    document.getElementById("modeNormalButton").addEventListener("click", function(){
        caseBattle[4] = "normal";
        console.log("Mode Changed to Normal: "+caseBattle[4])
        crazyModeEnable();
    });
    document.getElementById("modeGroupButton").addEventListener("click", function(){
        caseBattle[4] = "group";
        console.log("Mode Changed to Group: "+caseBattle[4])
        crazyModeDisable();
    });
    document.getElementById("modeTerminalButton").addEventListener("click", function(){
        caseBattle[4] = "terminal";
        console.log("Mode Changed to Terminal: "+caseBattle[4])
        crazyModeEnable();
    });   
}



var selectElement = document.querySelector('.createPlayersSelection');

selectElement.addEventListener('change', function() {
    handleSelectionChange();
});

function handleSelectionChange() {
    var selectedValue = selectElement.value;
    if (selectedValue === '1v1') {
        caseBattle[3] = "1v1";
    } else if (selectedValue === '1v1v1') {
        caseBattle[3] = "1v1v1";
    } else if (selectedValue === '1v1v1v1') {
        caseBattle[3] = "1v1v1v1";
    } else if (selectedValue === '2v2') {
        caseBattle[3] = "2v2";;
    }
}

function crazyModeDisable(){
    crazySwitch.className = "createSettingsAdvancedToggler off";
    crazySwitchStatus = "off";
}

function crazyModeEnable(){
    crazySwitch.className = "createSettingsAdvancedToggler";
    crazySwitchStatus = "on";
}


function readyChecker(){
    if (caseBattle[2]>0){
        document.getElementById("battleCreateComplete").className = "createButtonactive";
        caseBattle[0] = true;
        console.log("Ready "+caseBattle);
    }
    else {
        document.getElementById("battleCreateComplete").className = "createButton";
        caseBattle[0] = false;
        console.log("not Ready "+caseBattle);
    }
}




function createButtonListener(){
    let createButton = document.getElementById("battleCreateComplete");
    createButton.addEventListener('click', function() {

        let createAmount = caseBattle[1];
        let balance = parseFloat(localStorage.getItem("balance"));
        
        if (createAmount < balance && caseBattle[0]){
            changeBalanceAndSave(balance, createAmount);
            window.location.href = "/Battles.html";    
        }
        else {
            notenoughbalance(createButton);
            /*let balbtn = document.getElementById("b_balance");
            notenoughbalance(balbtn);*/
        }
        
    });
}

function changeBalanceAndSave(balance, createAmount) {
    balance -= createAmount;
    userwager += createAmount;
    storewager();
    storebalanceCreate(balance);
    storebattle();
    document.getElementById("balanceamount").innerHTML = balance.toFixed(2);
}

function storebattle(){
    caseBattle[7] = true;
    caseBattle[8] = 0;
    let caseBattleString = JSON.stringify(caseBattle);
    localStorage.setItem("caseBattle0", caseBattleString);
    console.log("battle Stored");
}

function  storebalanceCreate(balance){
    localStorage.setItem("balance", balance);
    console.log("balance Stored");
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